import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Banner from "../components/Banner";
import ArticuloId from "../components/ArticuloId";
import "./style/Articulo.css"

const Articulo = (props) => {
  const { id } = props.match.params;
  const {articulos} = props

  function play() {
    const video = articulos.find((item) => item._id == id);
    return video;
  }
  
  return (
    <React.Fragment>
        <Banner title={"ARTICULO"}/>
        <ArticuloId data={play()}/>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    articulos: state.articulos,
  };
};

export default connect(mapStateToProps, null)(Articulo);