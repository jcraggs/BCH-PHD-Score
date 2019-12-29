import React from "react";
import "../App.css";
import ComorCheckboxes from "./CoMorCheckboxes";

class Comorbidity extends React.Component {
  state = {
    Comorbidity: "unfilled",
    op0: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
  };

  updateFillState = state => {
    let obj = Object.values(this.state);
    const checker = obj.filter(item => item === true);
    if (checker.length === 1) {
      this.setState({ Comorbidity: state });
    }
  };

  render() {
    return (
      <div className="ComorbidityWrap">
        <p className={this.state.Comorbidity}> _</p>
        <h3 className="ComorbidityTitle">Co-morbidity/ organ dysfunction</h3>

        <div className="ComorbidityContainer">
          <div className="Comor0">
            <input
              type="radio"
              onChange={() => {
                this.setState({ op0: true });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ Comorbidity: "filled" });
                this.props.stateUpdater("Comorbidity", 0);
                this.props.stateUpdater("OuterComorClicked", true);
              }}
              checked={this.state.op0}
            />
            <label>None</label>
          </div>

          <div className="Comor1">
            <input
              type="radio"
              onClick={() => {
                if (this.state.op1 === true) {
                  this.setState({ op1: false });
                  this.props.stateUpdater("ComorAdditonal", 0);
                }
                if (this.state.op1 === false) {
                  this.setState({ op1: true });
                }
              }}
              checked={this.state.op1}
            />
            <label>Co-morbidity options (click to show):</label>
            {this.state.op1 === true && (
              <ComorCheckboxes
                stateUpdater={this.props.stateUpdater}
                updateFillState={this.updateFillState}
              />
            )}
          </div>

          <div className="Comor2">
            <input
              type="radio"
              checked={this.state.op2}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op2: true });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ Comorbidity: "filled" });
                this.props.stateUpdater("Comorbidity", 2);
                this.props.stateUpdater("OuterComorClicked", true);
              }}
            />
            <label>Referral to pain team or CAMHS</label>
          </div>

          <div className="Comor3">
            <input
              type="radio"
              checked={this.state.op3}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op2: false });
                this.setState({ op3: true });
                this.setState({ op4: false });
                this.setState({ Comorbidity: "filled" });
                this.props.stateUpdater("Comorbidity", 3);
                this.props.stateUpdater("OuterComorClicked", true);
              }}
            />
            <label>Inotropes Required</label>
          </div>

          <div className="Comor4">
            <input
              type="radio"
              checked={this.state.op4}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: true });
                this.setState({ Comorbidity: "filled" });
                this.props.stateUpdater("Comorbidity", 4);
                this.props.stateUpdater("OuterComorClicked", true);
              }}
            />
            <label>Optiflow; tracheostomy</label>
          </div>
        </div>
      </div>
    );
  }
}
export default Comorbidity;
