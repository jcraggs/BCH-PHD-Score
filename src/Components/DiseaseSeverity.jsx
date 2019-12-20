import React from "react";
import "../App.css";
import Albumin from "./Albumin";
import Sepsis from "./Sepsis";
import InvasiveAccess from "./InvasiveAccess";

class DiseaseSeverity extends React.Component {
  render() {
    return (
      <div className="DSContainer">
        <h2 className="DSTableTitle">Disease Severity</h2>
        <Albumin stateUpdater={this.props.stateUpdater} />
        <Sepsis stateUpdater={this.props.stateUpdater} />
        <InvasiveAccess stateUpdater={this.props.stateUpdater} />
      </div>
    );
  }
}
export default DiseaseSeverity;
