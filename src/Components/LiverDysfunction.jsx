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

        <AST stateUpdater={this.props.stateUpdater} />
        <Bilirubin stateUpdater={this.props.stateUpdater} />
        <PTSecs stateUpdater={this.props.stateUpdater} />
        <Ascites stateUpdater={this.props.stateUpdater} />
      </div>
    );
  }
}

export default LiverDysfunction;
