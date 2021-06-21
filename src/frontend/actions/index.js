import axios from "axios";

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload, //El payload recive la Props [event.target.name]: event.target.value de los input
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload, //El payload recive la Props con un objeto vacio para reiniciar el estado
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload, //El payload recive la Props email: ,name: ,password: de form
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("/auth/sign-up", payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: "/auth/sign-in/",
      method: "post",
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        //elementos a guardar en la cookie de nuestro navegador
        document.cookie = `email=${data.user.email}`;
        document.cookie = `nombre=${data.user.nombre}`;
        document.cookie = `apellidos=${data.user.apellidos}`;
        document.cookie = `curso=${data.user.curso}`;
        document.cookie = `id=${data.user.id}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const updatedVideo = (payload) => ({
  type: "UPDATE_NOTICIA",
  payload,
});

export const updateVideo = (videoId, form, redirectUrl) => {
  return (dispatch) => {
    axios
      .put(`/videos/${videoId}`, form)
      .then(({ data }) => dispatch(updatedVideo(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("terminamos de crear"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const updatedArticulo = (payload) => ({
  type: "UPDATE_NOTICIA",
  payload,
});

export const updateArticulo = (articuloId, form, redirectUrl) => {
  return (dispatch) => {
    axios
      .put(`/lectura/${articuloId}`, form)
      .then(({ data }) => dispatch(updatedArticulo(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("terminamos de crear"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const updatedTarea = (payload) => ({
  type: "UPDATE_NOTICIA",
  payload,
});

export const updateTarea = (tareaId, form, redirectUrl) => {
  return (dispatch) => {
    axios
      .put(`/tareas/${tareaId}`, form)
      .then(({ data }) => dispatch(updatedTarea(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("tarea actualizada"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const deleteVideo = (videoId, redirectUrl) => {
  return (dispatch) => {
    axios
      .delete(`/videos/${videoId}`)
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("Video Eliminado"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const deleteTarea = (videoId, redirectUrl) => {
  return (dispatch) => {
    axios
      .delete(`/tareas/${videoId}`)
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("Tarea Eliminada"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const deleteArticulo = (videoId, redirectUrl) => {
  return (dispatch) => {
    axios
      .delete(`/lectura/${videoId}`)
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("lectura Eliminada"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const createdVideo = (payload) => ({
  type: "CREATE_NOTICIA",
  payload,
});

export const createVideo = (form, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("/videos", form)
      .then(({ data }) => dispatch(createdVideo(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("terminamos de crear"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const createdTarea = (payload) => ({
  type: "CREATE_NOTICIA",
  payload,
});

export const createTarea = (form, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("/tareas", form)
      .then(({ data }) => dispatch(createdTarea(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("tarea creada"))
      .catch((error) => dispatch(setError(error)));
  };
};

export const createdArticulo = (payload) => ({
  type: "CREATE_NOTICIA",
  payload,
});

export const createArticulo = (form, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("/lectura", form)
      .then(({ data }) => dispatch(createdArticulo(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .then(console.log("lectura creada"))
      .catch((error) => dispatch(setError(error)));
  };
};