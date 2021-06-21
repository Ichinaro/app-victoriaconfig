import React from "react";
import Notfound from "../images/not-found.png";
import "./style/NotFound.css"

const NotFound = () => {
    return(
      <div className="container">
          <img src={Notfound} alt="" />
      </div>
    )
}

export default NotFound;