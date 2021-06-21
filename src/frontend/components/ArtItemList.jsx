import React from "react";
import ArtItem from "./ArtItem"
import Filtro from "./Filtro"
import NotResult from "../images/not-result.png"
import "./style/ArtItemList.css"

const ArtItemList = (props) => {
  const {data, to} = props;
  const { query, setQuery, filteredData } = Filtro(data);
  if (filteredData.length === 0) {
    return (
      <React.Fragment>
        <div className="buscar">
          <label>Buscar</label>
          <input
            type="text"
            className="buscar-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div className="buscar-notfound">
          <img src={NotResult} alt="" />
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="buscar">
        <label>Buscar</label>
        <input
          type="text"
          className="buscar-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="contenedor-articulos">
        {filteredData.map((articulo) => {
          return (
            <li className="articulo" key={articulo._id}>
              <div className="artItem">
                <ArtItem articulo={articulo} dir={to}/>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ArtItemList;
