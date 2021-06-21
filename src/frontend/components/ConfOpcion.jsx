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
      </div>
    </>
  );
};

export default ConfOpcion;
