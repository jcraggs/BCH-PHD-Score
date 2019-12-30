import React from "react";
import "../App.css";
import AST from "./AST";
import Bilirubin from "./Bilirubin";
import PTSecs from "./PTSecs";
import Ascites from "./Ascites";

class LiverDysfunction extends React.Component {
  render() {
    return (
      <div className="LDContainer">
        <h2 className="LDTableTitle">Liver dysfunction</h2>

        <AST
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <Bilirubin
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <PTSecs
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <Ascites
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
      </div>
    );
  }
}

export default LiverDysfunction;
