import React from "react";
import { connect } from "react-redux";
import Banner from "../components/Banner"
import ArtItemList from "../components/ArtItemList"
import "./style/Videos.css"

const Articulos = (props) => {
  const data = props.articulos;
  return (
    <div className="pag-videos">
      <Banner title={"ARTÍCULOS"}/>
      <ArtItemList data={data} to={"articulo"}/>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    articulos: state.articulos
  };
};

export default connect(mapStateToProps, null)(Articulos);