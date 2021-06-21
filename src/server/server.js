import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import serverRoutes from "../frontend/routes/serverRoutes";
import reducer from "../frontend/reducers/index";
//import initialState from "../frontend/initialState";
import Layout from "../frontend/components/Layout";
import getManifest from "./getManifest";

import cookieParser from "cookie-parser";
import boom from "@hapi/boom";
import passport from "passport";
import axios from "axios";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./utils/auth/strategies/basic");

if (ENV === "development") {
  console.log("Development config");
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies()); //bloquea que se permitan los croos domain policies
  app.disable("x-powered-by");
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest["main.css"] : "assets/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/app.js";
  const vendorBuild = manifest ? manifest["vendors.js"] : "assets/vendor.js";
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="${mainStyles}" type="text/css"/>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          src="https://kit.fontawesome.com/4cd443e3ac.js"
          crossorigin="anonymous"
        ></script>
        <title>Victoria</title>
      </head>
    
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        <script src="${mainBuild}" type="text/javascript"></script>
        <script src="${vendorBuild}" type="text/javascript"></script>
      </body>
    </html>
  `;
};

const renderApp = async (req, res) => {
  let initialState;
  const { token, email, nombre, apellidos, curso, id } = req.cookies;
  
  try {
    let videos = await axios({
      url: `${process.env.API_URL}/api/videos`,
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
    });
    videos = videos.data.data;

    let lectura = await axios({
      url: `${process.env.API_URL}/api/lectura`,
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
    });
    lectura = lectura.data.data;

    let tareas = await axios({
      url: `${process.env.API_URL}/api/tareas`,
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
    });
    tareas = tareas.data.data;

    if (id) {
      initialState = {
        user: {
          email,
          nombre,
          apellidos,
          curso,
          id,
        },
        videos: videos.reverse(),
        articulos: lectura.reverse(),
        tareas: tareas.reverse(),
      };
    } else {
      initialState = {
        user: {},
        videos: [],
        articulos: [],
        tareas: [],
      };
    }
  } catch (err) {
    initialState = {
      user: {},
      videos: [],
    };
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = initialState.user.id;
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes(isLogged))}</Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post("/auth/sign-in", async function (req, res, next) {
  const { rememberMe } = req.body;
  //api-server
  console.log("llamado basic");
  passport.authenticate("basic", function (error, data) {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      }

      req.login(data, { session: false }, async function (err) {
        if (err) {
          next(err);
        }

        const { token, ...user } = data;

        //guardo el token encriptado en la cookie
        if (!ENV === "development") {
          res.cookie("token", token, {
            httpOnly: !(ENV === "development"),
            secure: !(ENV === "development"), //https
            maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
          });
        } else {
          res.cookie("token", token);
        }
        res.status(200).json(user); //user {id, name, email}
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

app.post("/auth/sign-up", async function (req, res, next) {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: "post",
      data: {
        email: user.email,
        nombre: user.nombre,
        apellidos: user.apellidos,
        password: user.password,
        curso: user.curso,
      },
    });

    res.status(201).json({
      nombre: req.body.nombre,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch (error) {
    next(error);
  }
});

app.put("/videos/:videoId", async function (req, res, next) {
  try {
    const { videoId } = req.params;
    const { body: movie } = req;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/videos/${videoId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "put",
      data: movie,
    });
    if (status !== 200) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.put("/lectura/:articuloId", async function (req, res, next) {
  try {
    const { articuloId } = req.params;
    const { body: movie } = req;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/lectura/${articuloId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "put",
      data: movie,
    });
    if (status !== 200) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.put ("/tareas/:tareaId", async function (req, res, next) {
  try {
    const { tareaId } = req.params;
    const { body: movie } = req;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/tareas/${tareaId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "put",
      data: movie,
    });
    if (status !== 200) {
      console.log("fallo")
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
    console.log("no fallo")
  } catch (error) {
    console.log("hay error")
    next(error);
  }
});

app.delete("/videos/:videoId", async function (req, res, next) {
  try {
    const { videoId } = req.params;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/videos/${videoId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "delete",
    });
    if (status !== 200) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.delete("/tareas/:videoId", async function (req, res, next) {
  try {
    const { videoId } = req.params;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/tareas/${videoId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "delete",
    });
    if (status !== 200) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.delete("/lectura/:videoId", async function (req, res, next) {
  try {
    const { videoId } = req.params;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/lectura/${videoId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "delete",
    });
    if (status !== 200) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.post("/videos", async function (req, res, next) {
  try {
    const { body: movie } = req;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/videos`,
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      data: movie,
    });
    if (status !== 201) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.post("/tareas", async function (req, res, next) {
  try {
    const { body: movie } = req;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/tareas`,
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      data: movie,
    });
    if (status !== 201) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.post("/lectura", async function (req, res, next) {
  try {
    const { body: movie } = req;
    const { token } = req.cookies;
    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/lectura`,
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      data: movie,
    });
    if (status !== 201) {
      return next(boom.badImplementation());
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get("*", renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
