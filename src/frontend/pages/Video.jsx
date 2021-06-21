import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Banner from "../components/Banner"
import ColPlayerList from "../components/ColPlayerList"
import Player from "../components/Player"
import "./style/Video.css"

const Video = (props) => {
  const { id } = props.match.params;
  const {videos} = props

  function play() {
    const video = videos.find((item) => item._id == id);
    return video;
  }

  return (
    <React.Fragment>
        <Banner title={play().titulo}/>
        <div className="videos">
          <div className="video">
            <Player url={play().url} titulo={play().titulo} subtitulo={play().subTitulo} />
          </div>
          <ColPlayerList/>
        </div>
    </React.Fragment>
    
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToProps, null)(Video);