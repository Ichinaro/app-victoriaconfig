import React from "react";
import { Link } from "react-router-dom";
import "./style/ConfNav.css";

const ConfNav = () => {
  return (
    <nav className="nav-conf">
      <div className="logo">
        <h1>Medical</h1>
      </div>
      <ul>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/articulos">Blog</Link>
        </li>
        <li>
          <Link to="/tareas">Tareas</Link>
        </li>
        <li>
          <Link to="to">Descargas</Link>
        </li>
        <li>
          <Link to="to">Config</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ConfNav;
