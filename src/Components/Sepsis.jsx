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
              } else {
                this.props.stateUpdater("Sepsis", Number(event.target.value));
                this.setState({ sepsis: "filled" });
              }
            }}
          >
            <option>-- Select Value --</option>
            <option value="0">None</option>
            <option value="1">Pyrexial</option>
            <option value="2">Anti-biotics</option>
            <option value="3">+ve micro</option>
            <option value="4">*DIC</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Sepsis;
