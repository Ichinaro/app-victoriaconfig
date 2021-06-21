import React from "react";
import { connect } from "react-redux";
import Banner from "../components/Banner"
import TareaId from "../components/TareaId"
import "./style/Tarea.css"

const Tarea = (props) => {
  const { id } = props.match.params;
  const {tareas} = props

  function play() {
    const video = tareas.find((item) => item._id == id);
    return video;
  }

  return (
    <React.Fragment>
        <Banner title={play().titulo}/>
        <div className="tarea-container">
          <TareaId data={play()}/>
        </div>
    </React.Fragment>
    
  );
};

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas,
  };
};

export default connect(mapStateToProps, null)(Tarea);