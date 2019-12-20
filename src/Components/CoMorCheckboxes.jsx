import React from "react";
import "../App.css";

class ComorCheckboxes extends React.Component {
  state = {
    cb0: false,
    cb1: false,
    cb2: false,
    cb3: false,
    cb4: false
  };

  checkForFill = () => {
    let obj = Object.values(this.state);
    const checker = obj.filter(item => item === true);

    if (checker.length >= 1) {
      this.props.updateFillState("filled");
      this.props.stateUpdater("ComorClicked", true);
    } else {
      this.props.updateFillState("unfilled");
      this.props.stateUpdater("ComorClicked", false);
    }

    this.props.stateUpdater("ComorAdditonal", checker.length);
  };

  render() {
    return (
      <div className="CoMorCheckboxContainer">
        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.cb0}
          onChange={() => {
            if (this.state.cb0 === true) {
              this.setState({ cb0: false }, () => this.checkForFill());
            } else {
              this.setState({ cb0: true }, () => this.checkForFill());
            }
          }}
        />
        <label>Diarrhoea (x8/day) or stoma bag</label>
        <br></br>

        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.cb1}
          onChange={() => {
            if (this.state.cb1 === true) {
              this.setState({ cb1: false }, () => this.checkForFill());
            } else {
              this.setState({ cb1: true }, () => this.checkForFill());
            }
            this.checkForFill();
          }}
        />
        <label>Renal impairment</label>
        <br></br>

        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.cb2}
          onChange={() => {
            if (this.state.cb2 === true) {
              this.setState({ cb2: false }, () => this.checkForFill());
            } else {
              this.setState({ cb2: true }, () => this.checkForFill());
            }
            this.checkForFill();
          }}
        />
        <label>Encephalopathy</label>
        <br></br>

        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.cb3}
          onChange={() => {
            if (this.state.cb3 === true) {
              this.setState({ cb3: false }, () => this.checkForFill());
            } else {
              this.setState({ cb3: true }, () => this.checkForFill());
            }
            this.checkForFill();
          }}
        />
        <label>BMI >35 and/or diabetes</label>
        <br></br>

        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.cb4}
          onChange={() => {
            if (this.state.cb4 === true) {
              this.setState({ cb4: false }, () => this.checkForFill());
            } else {
              this.setState({ cb4: true }, () => this.checkForFill());
            }
            this.checkForFill();
          }}
        />
        <label>Oxygen requirement or lung disease</label>
        <br></br>
      </div>
    );
  }
}
export default ComorCheckboxes;
