import React from "react";
import ReactPlayer from "react-player/youtube";
import "./style/Player.css"

const Player = (props) => {
  const {url, titulo, subtitulo} = props;

  return (
    <React.Fragment>
      <ReactPlayer width="90%" height="350px" url={url} />
      <div className="info-player">
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
      </div>
    </React.Fragment>
  );
};

export default Player;
