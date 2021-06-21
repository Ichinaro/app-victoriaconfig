import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createVideo} from "../actions/index";
import Banner from "../components/Banner";
import ItemVideo from "../components/ItemVideo"
import FormEdit from "../components/FormEdit"
import "./style/VideoCreate.css"

const VideoCreate = (props) => {

  const [form, setValues] = useState({
    titulo:"",
    subTitulo:"",
    url:"",
    img:""
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createVideo(form, "/");
  };

  return (
    <div className="pag-videos">
      <Banner title={"CREAR VIDEO"}/>
      <ItemVideo video={true} data={form}/>
      <FormEdit video={true} data={form} onSubmit={handleSubmit} onChange={handleInput}/>
    </div>
  );
};

const mapDispatchToProps = {
  createVideo,
};

VideoCreate.propTypes = {
  createVideo: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(VideoCreate);