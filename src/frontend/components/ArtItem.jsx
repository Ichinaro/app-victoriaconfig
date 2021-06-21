import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ButtomEdit from "./ButtomEdit"
import "./style/ArtItem.css"
const ArtItem = (props) => {
  const {dir, articulo, user} = props;
  const hasUser = Object.keys(user).includes("email");
  return (
    <>
      <Link to={`/${dir}/${articulo._id}`}>
        <img src={articulo.img} alt="" />
      </Link>
      <div className="text-articulo">
        <h2>{articulo.titulo}</h2>
        {hasUser ? <ButtomEdit dir={dir} id={articulo._id}/> : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ArtItem);
