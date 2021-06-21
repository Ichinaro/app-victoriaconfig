import React from "react";
import { Link } from "react-router-dom";
import perfilBanner from "../images/perfilBanner.png"

const TareaItem = (props) => {
  const {data} = props
  return (
    <Link to={`/tarea/${data._id}`}>
        <div className="img-tarea">
            <img src={perfilBanner} alt="" />
        </div>
        <div className="info-tarea">
            <div className="info-tarea-header">
                <h3>TAREA {data.titulo}</h3>
                <p>{data.fecha}</p>
            </div>
            <p>{data.subTitulo}</p>
        </div>
    </Link>
  );
};

export default TareaItem