import React from "react";
import "./style/TareaId.css"
const TareaId = (props) => {
  const {data} = props
  return (
    <React.Fragment>
      <div className="tarea">
        <div className="tarea-header">
          <h3>{data.subTitulo}</h3>
        </div>
        <div className="tarea-body">
          <p>{data.descripcion}</p>
          <p>Fecha de entrega: {data.fecha}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TareaId;