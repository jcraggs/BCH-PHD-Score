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
        <NutritionSupport
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <BloodProd
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
        />
        <Comorbidity
          stateUpdater={this.props.stateUpdater}
          ref_objUpdater={this.props.ref_objUpdater}
          comor_ref_objUpdater={this.props.comor_ref_objUpdater}
        />
      </div>
    );
  }
}

export default NursingDependency;
