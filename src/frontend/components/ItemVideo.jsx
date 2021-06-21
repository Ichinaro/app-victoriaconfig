import React from "react";
import "./style/ItemVideo.css"
import Pordefecto from "../images/perfilBanner.png";

const ItemVideo = (props) => {
  const {data, video, articulo}= props
  return (
    <div className="Precont">
      <div className="Preheader">
        <img src={data.img || Pordefecto} alt="" />
      </div>
      <div className="Prebody">
        <h3>{data.titulo || "Titulo"}</h3>
        <h4>{data.subTitulo || "Sub-titulo"}</h4>
        {video ? <p>{data.url || "link del video"}</p> : <><p>{data.fecha || "Fecha"}</p><p>{data.descripcion || "Descripcion"}</p></>}
        {articulo ? <p>{data.autor || "Autor"} </p> : null}
      </div>
    </div>
  );
};

export default ItemVideo;
