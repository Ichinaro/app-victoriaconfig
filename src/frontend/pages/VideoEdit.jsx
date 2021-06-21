import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {updateVideo} from "../actions/index";
import Banner from "../components/Banner";
import ItemVideo from "../components/ItemVideo"
import FormEdit from "../components/FormEdit"

const Edit = (props) => {

  const videos = props.videos;
  const { id } = props.match.params;
  function item() {
    const data = videos.filter((video) =>
    video._id.includes(id)
    );
    return data[0];
  }

  const [form, setValues] = useState({
    titulo:item().titulo,
    subTitulo:item().subTitulo,
    url:item().url,
    img:item().img
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateVideo(item()._id, form, "/");
  };

  console.log("datos:",form.titulo);

  return (
    <div className="pag-videos">
      <Banner title={"ARTÍCULOS"}/>
      <ItemVideo video={true} data={form}/>
      <FormEdit video={true} data={form} onSubmit={handleSubmit} onChange={handleInput}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const mapDispatchToProps = {
  updateVideo,
};

Edit.propTypes = {
  updateVideo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);