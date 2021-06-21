import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {deleteVideo, deleteTarea, deleteArticulo} from "../actions/index";
import { Link } from "react-router-dom";
import "./style/ButtomEdit.css"

const ButtomEdit = (props) => {
  const {dir, id} = props
  console.log("este es", dir)
  const handleSubmit = (event) => {
    if (dir === "video"){
      event.preventDefault();
      props.deleteVideo(id, "/");
    } else if (dir === "articulo"){
      event.preventDefault();
      props.deleteArticulo(id, "/");
    }else {
      event.preventDefault();
      props.deleteTarea(id, "/");
    }
  };

  return (
    <div className="btn">
      <button className="edit">
        <Link to={`/${dir}/${id}/edit`}>Editar</Link>
      </button>
      <button className="delete" onClick={handleSubmit}>
        Eliminar
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteVideo,
  deleteTarea,
  deleteArticulo,
};

ButtomEdit.propTypes = {
  deleteVideo: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ButtomEdit);;