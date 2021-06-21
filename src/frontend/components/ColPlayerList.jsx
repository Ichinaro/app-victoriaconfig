import React from "react";
import ColPlayer from "./ColPlayer"
import { connect } from "react-redux";
import "./style/ColPlayerList.css"

const ColPlayerList = (props) => {
  const { videos } = props;
  console.log("hell:", videos)
    return (
      <ul className="cont-list-player">
        {videos.map((item) => {
          return (
            <li className="item-list-player" key={item._id}>
              <ColPlayer video={item} />
            </li>
          );
        })}
      </ul>
    );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps, null)(ColPlayerList);
