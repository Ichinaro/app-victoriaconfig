import React from "react";
import { Link } from "react-router-dom";
import "./style/ConfOpcion.css";

const ConfOpcion = () => {
  return (
    <>
      <div className="opciones">
        <Link to="/create/video" className="opcion">
          <div className="opcion-txt">
            <h3>VIDEOS</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fab fa-youtube" />
          </div>
        </Link>
        <Link to="/create/blog" className="opcion">
          <div className="opcion-txt">
            <h3>LECTURA</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-book-open" />
          </div>
        </Link>
        <Link to="/create/tarea" className="opcion">
          <div className="opcion-txt">
            <h3>TAREAS</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-edit" />
          </div>
        </Link>
        <div className="opcion">
          <div className="opcion-txt">
            <h3>ASISTENCIA</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-user-check" />
          </div>
        </div>
        <div className="opcion">
          <div className="opcion-txt">
            <h3>PUNTAJES</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-user-plus" />
          </div>
        </div>
        <div className="opcion">
          <div className="opcion-txt">
            <h3>TEST</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico far fa-file-alt" />
          </div>
        </div>
        <div className="opcion">
          <div className="opcion-txt">
            <h3>MATERIAL</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-download" />
          </div>
        </div>
        <div className="opcion">
          <div className="opcion-txt">
            <h3>ESTADÍSTICA</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-poll" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfOpcion;
