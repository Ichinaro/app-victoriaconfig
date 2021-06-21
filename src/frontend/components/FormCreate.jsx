import React from "react";
import "./style/Form.css";

const FormCreate = (props) => {
  const {data} = props
  return (
    <form className="formulario" onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="titulo">Titulo</label>
        <input
          className="form-control"
          type="text"
          name="titulo"
          id="titulo"
          value={data.titulo}
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="subTitulo">Sub-Titulo</label>
        <input
          className="form-control"
          type="text"
          name="subTitulo"
          id="subTitulo"
          value={data.subTitulo}
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">Link</label>
        <input
          className="form-control"
          type="url"
          name="url"
          id="url"
          value={data.url}
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Imagen-url</label>
        <input
          className="form-control"
          type="img"
          name="img"
          id="img"
          value={data.img}
          onChange={props.onChange}
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default FormCreate;
