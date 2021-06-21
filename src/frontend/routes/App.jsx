import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Config from "../pages/Config";
import Videos from "../pages/Videos";
import Video from "../pages/Video";
import VideoEdit from "../pages/VideoEdit";
import VideoCreate from "../pages/VideoCreate";
import Articulos from "../pages/Articulos";
import Articulo from "../pages/Articulo";
import ArticuloEdit from "../pages/ArticuloEdit";
import ArticuloCreate from "../pages/ArticuloCreate";
import Tareas from "../pages/Tareas";
import Tarea from "../pages/Tarea";
import TareaCreate from "../pages/TareaCreate";
import TareaEdit from "../pages/TareaEdit";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={isLogged ? Config : Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/videos" component={isLogged ? Videos : Login} />
        <Route exact path="/video/:id" component={isLogged ? Video : Login} />
        <Route exact path="/video/:id/edit" component={isLogged ? VideoEdit : Login} />
        <Route exact path="/create/video" component={isLogged ? VideoCreate : Login} />
        <Route exact path="/articulos" component={isLogged ? Articulos : Login} />
        <Route exact path="/articulo/:id" component={isLogged ? Articulo : Login} />
        <Route exact path="/articulo/:id/edit" component={isLogged ? ArticuloEdit : Login} />
        <Route exact path="/create/blog" component={isLogged ? ArticuloCreate : Login} />
        <Route exact path="/tareas" component={isLogged ? Tareas : Login} />
        <Route exact path="/tarea/:id" component={isLogged ? Tarea : Login} />
        <Route exact path="/tarea/:id/edit" component={isLogged ? TareaEdit : Login} />
        <Route exact path="/create/tarea" component={isLogged ? TareaCreate : Login} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
