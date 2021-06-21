import React from "react";
import { connect } from "react-redux";
import Banner from "../components/Banner"
import TareaItemList from "../components/TareaItemList";
import "./style/Tareas.css"

const Tareas = (props) => {
  const data = props.tareas;
  return (
    <div className="pag-tareas">
      <Banner title={"TAREAS"}/>
      <TareaItemList data={data} to={"tarea"}/>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas
  };
};

export default connect(mapStateToProps, null)(Tareas);