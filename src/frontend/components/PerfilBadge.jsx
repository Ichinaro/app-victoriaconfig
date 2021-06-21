import React from "react";
import Gravatar from "./Gravatar";
import perfilBanner from "../images/perfilBanner.png"
import "./style/PerfilBadge.css"

const PerfilBadge = (props) => {
  const{user} = props
    return(
      <div className="Perfil-Badge-container">
        <div className="Perfil-Badge-banner">
          <img src={perfilBanner} alt="Logo del perfil" />
        </div>
        <div className="Perfil-Badge-header">
          <Gravatar className="Perfil-Badge-img" email={user.email} />
          <h1>
            {user.nombre} <br /> {user.apellidos}
          </h1>
        </div>

        <div className="Perfil-Badge-body">
          <p>{user.email}</p>
          <h3>Unidad Educativa</h3>
        </div>

        <div className="Perfil-Badge-footer">Docente</div>
      </div>
    )
}

export default PerfilBadge;