import React from "react";
import "./style/Form.css";

const FormEdit = (props) => {
  const {data, video, tarea, articulo} = props
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
      {articulo?
      <div className="form-group">
        <label htmlFor="autor">Autor</label>
        <input
          className="form-control"
          type="text"
          name="autor"
          id="autor"
          value={data.autor}
          onChange={props.onChange}
        />
      </div>:null}
      {video ?
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
      </div> :
      <>
        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <input
            className="form-control"
            type="date"
            name="fecha"
            id="fecha"
            value={data.fecha}
            onChange={props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripcion</label>
          <textarea
            className="form-control"
            name="descripcion"
            id="descripcion"
            value={data.descripcion}
            onChange={props.onChange}
          />
        </div>
      </>}
      
      {tarea ? null :
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
      </div>}
      
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default FormEdit;
