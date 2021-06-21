import React from "react";
import TareaItem from "./TareaItem"
import ButtomEdit from "./ButtomEdit"
import Filtro from "./Filtro"
import NotResult from "../images/not-result.png"
import "./style/TareaItem.css"

const TareaItemList = (props) => {
  const {data, to} = props 
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
      <ul className="container-tareas-items">
        {filteredData.map((articulo) => {
          return (
            <li className="container-tareas-item" key={articulo._id}>
                <TareaItem data={articulo}/>
                <div className="tarea-btn">
                  <ButtomEdit className="tarea-btn" dir={to} id={articulo._id}/>
                </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TareaItemList;