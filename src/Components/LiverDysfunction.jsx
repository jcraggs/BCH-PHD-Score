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

        {/* 

        <h3 className="Ascites">Ascites</h3>
        <select className="AscitesSelect">
          <option>-- Select Value --</option>
          <option value="0">None</option>
          <option value="1">On diuretics</option>
          <option value="2">Mild</option>
          <option value="3">Gross</option>
          <option value="4">Gross with drainage</option>
        </select> */}
      </div>
    );
  }
}

export default LiverDysfunction;
