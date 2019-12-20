import React from "react";
import "../App.css";

class InvasiveAccess extends React.Component {
  state = {
    IA: "unfilled"
  };

  render() {
    return (
      <div className="IAWrap">
        <p className={this.state.IA}> _</p>
        <h3 className="IATitle">Invasive Access</h3>

        <div className="IAContainer">
          <select
            className="IASelect"
            onChange={event => {
              if (event.target.value === "-- Select Value --") {
                this.setState({ IA: "unfilled" });
                this.props.stateUpdater("Invasive_Access", undefined);
              } else {
                this.props.stateUpdater(
                  "Invasive_Access",
                  Number(event.target.value)
                );
                this.setState({ IA: "filled" });
              }
            }}
          >
            <option>-- Select Value --</option>
            <option value="0">None</option>
            <option value="1">IV access</option>
            <option value="2">IV glucose at 10%</option>
            <option value="3">Central access</option>
            <option value="4">CVP monitor; epidural</option>
          </select>
        </div>
      </div>
    );
  }
}
export default InvasiveAccess;
