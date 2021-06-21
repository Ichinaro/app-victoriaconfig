import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  //puedo aplicar el hasUser para ocultar este layout a los que no se han logeado
  const { user } = props;
  const hasUser = Object.keys(user).includes("email");

  return (
    <React.Fragment>
      {hasUser ?
      <>
      <Navbar />
      {props.children}
      <Footer />
      </>
      :<>{props.children}</>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Layout);
