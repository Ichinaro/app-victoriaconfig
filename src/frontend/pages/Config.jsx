import React from "react";
import { connect } from "react-redux";
import "./style/Config.css";
import ConfNav from "../components/ConfNav";
import PerfilBadge from "../components/PerfilBadge";
import ConfOpcion from "../components/ConfOpcion";

const Config = (props) => {
  const {user} = props
  return (
    <div className="padre">
      <ConfNav />
      <aside className="content">
        <div className="pi">
          <PerfilBadge user={user}/>
        </div>
        <ConfOpcion />
      </aside>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Config);
