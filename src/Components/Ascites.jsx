import React from "react";
import "../App.css";

class Ascites extends React.Component {
  state = {
    Ascites: "unfilled"
  };

  render() {
    return (
      <div className="AscitesWrap">
        <p className={this.state.Ascites}> _</p>
        <h3 className="AscitesTitle">Ascites</h3>

        <div className="AscitesContainer">
          <select
            className="AscitesSelect"
            onChange={event => {
              if (event.target.value === "-- Select Value --") {
                this.setState({ Ascites: "unfilled" });
                this.props.stateUpdater("Ascites", undefined);
                this.props.ref_objUpdater("Ascites_Txt", "");
              } else {
                this.props.stateUpdater("Ascites", Number(event.target.value));
                if (Number(event.target.value) === 0) {
                  this.props.ref_objUpdater("Ascites_Txt", "None");
                }
                if (Number(event.target.value) === 1) {
                  this.props.ref_objUpdater("Ascites_Txt", "On diuretics");
                }
                if (Number(event.target.value) === 2) {
                  this.props.ref_objUpdater("Ascites_Txt", "Mild");
                }
                if (Number(event.target.value) === 3) {
                  this.props.ref_objUpdater("Ascites_Txt", "Gross");
                }
                if (Number(event.target.value) === 4) {
                  this.props.ref_objUpdater(
                    "Ascites_Txt",
                    "Gross with drainage"
                  );
                }
                this.setState({ Ascites: "filled" });
              }
            }}
          >
            <option>-- Select Value --</option>
            <option value="0">None</option>
            <option value="1">On diuretics</option>
            <option value="2">Mild</option>
            <option value="3">Gross</option>
            <option value="4">Gross with drainage</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Ascites;
