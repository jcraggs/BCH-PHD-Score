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
        <Albumin
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <Sepsis
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <InvasiveAccess
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
      </div>
    );
  }
}
export default DiseaseSeverity;
