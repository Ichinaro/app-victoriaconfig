import React from "react";
import "./style/Banner.css";

const Banner = (props) => {
  return (
    <div className="banner">
        <div className="cont-banner">
            <p>{props.title}</p>
        </div>
    </div>
  );
};

export default Banner;