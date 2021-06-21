import React from "react";

const ArticuloId = (props) =>{
    const {data} = props;
    return(
        <>
          <div className="head">
            <h3>{data.titulo}</h3>
            <h4>{data.subTitulo}</h4>
            <p>POR<small> {data.autor}</small></p>
          </div>
          <div className="imagen">
            <img src={data.img} alt="" />
          </div>
          <div className="body">
            <div className="texto-art">
                <p>
                 {data.descripcion}
                </p>
            </div>
            <div className="aside-art">
            </div>
          </div>
        </>
    )
}

export default ArticuloId