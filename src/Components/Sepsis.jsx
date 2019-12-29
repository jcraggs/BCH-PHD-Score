import React from "react";
import "../App.css";

class Sepsis extends React.Component {
  state = {
    sepsis: "unfilled"
  };

  render() {
    return (
      <div className="SepsisWrap">
        <p className={this.state.sepsis}> _</p>
        <h3 className="SepsisTitle">Sepsis</h3>

        <div className="SepsisContainer">
          <select
            className="SepsisSelect"
            onChange={event => {
              if (event.target.value === "-- Select Value --") {
                this.setState({ sepsis: "unfilled" });
                this.props.stateUpdater("Sepsis", undefined);
                this.props.ref_objUpdater("Sepsis_Txt", "");
              } else {
                this.props.stateUpdater("Sepsis", Number(event.target.value));
                if (Number(event.target.value) === 0) {
                  this.props.ref_objUpdater("Sepsis_Txt", "None");
                }
                if (Number(event.target.value) === 1) {
                  this.props.ref_objUpdater("Sepsis_Txt", "Pyrexial");
                }
                if (Number(event.target.value) === 2) {
                  this.props.ref_objUpdater("Sepsis_Txt", "Antibiotics");
                }
                if (Number(event.target.value) === 3) {
                  this.props.ref_objUpdater("Sepsis_Txt", "+ve micro");
                }
                if (Number(event.target.value) === 4) {
                  this.props.ref_objUpdater("Sepsis_Txt", "DIC");
                }
                this.setState({ sepsis: "filled" });
              }
            }}
          >
            <option>-- Select Value --</option>
            <option value="0">None</option>
            <option value="1">Pyrexial</option>
            <option value="2">Antibiotics</option>
            <option value="3">+ve micro</option>
            <option value="4">DIC</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Sepsis;
