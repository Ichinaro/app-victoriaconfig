import React from "react";
import { Link } from "react-router-dom";
import "./style/ColPlayer.css"

const ColPlayer = (props) => {
  const {video} = props;
  return (
    <React.Fragment>
      <Link to={`/video/${props.video._id}`} className="imagen-list-player">
        <img src={video.img}/>
      </Link>
      <div className="info-list-player">
        <h3 className="card-title">{video.titulo}</h3>
        <p className="card-text">{video.subTitulo}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </React.Fragment>
  );
};

export default ColPlayer;