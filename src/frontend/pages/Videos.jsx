import React from "react";
import { connect } from "react-redux";
import Banner from "../components/Banner"
import ArtItemList from "../components/ArtItemList"
import "./style/Videos.css"

const Videos = (props) => {
  const data = props.videos;
  return (
    <div className="pag-videos">
        <Banner title={"VIDEOS"}/>
        <ArtItemList data={data} to={"video"}/>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps, null)(Videos);