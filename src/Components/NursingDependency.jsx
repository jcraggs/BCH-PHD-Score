import React from "react";
import "../App.css";
import NutritionSupport from "./NutritionSupport";
import BloodProd from "./BloodProd";
import Comorbidity from "./Comorbidity";

class NursingDependency extends React.Component {
  render() {
    return (
      <div className="NDContainer">
        <h2 className="NDTableTitle">Nursing Dependency</h2>
        <NutritionSupport stateUpdater={this.props.stateUpdater} />
        <BloodProd stateUpdater={this.props.stateUpdater} />
        <Comorbidity stateUpdater={this.props.stateUpdater} />
      </div>
    );
  }
}

export default NursingDependency;
