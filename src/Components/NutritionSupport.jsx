import React from "react";
import "../App.css";

class Nutrition extends React.Component {
  state = {
    Nutrition: "unfilled"
  };

  render() {
    return (
      <div className="NutritionWrap">
        <p className={this.state.Nutrition}> _</p>
        <h3 className="NutritionTitle">Nutrition Support</h3>

        <div className="NutritionContainer">
          <select
            className="NutritionSelect"
            onChange={event => {
              if (event.target.value === "-- Select Value --") {
                this.setState({ Nutrition: "unfilled" });
                this.props.stateUpdater("Nutrition_Support", undefined);
                this.props.ref_objUpdater("Nutrition_Support_Txt", "");
              } else {
                this.props.stateUpdater(
                  "Nutrition_Support",
                  Number(event.target.value)
                );
                if (Number(event.target.value) === 0) {
                  this.props.ref_objUpdater("Nutrition_Support_Txt", "None");
                }
                if (Number(event.target.value) === 1) {
                  this.props.ref_objUpdater("Nutrition_Support_Txt", "NG Tube");
                }
                if (Number(event.target.value) === 2) {
                  this.props.ref_objUpdater(
                    "Nutrition_Support_Txt",
                    "Specialised feed/ calorie support"
                  );
                }
                if (Number(event.target.value) === 3) {
                  this.props.ref_objUpdater(
                    "Nutrition_Support_Txt",
                    "IV fluids to hydrate"
                  );
                }
                if (Number(event.target.value) === 4) {
                  this.props.ref_objUpdater("Nutrition_Support_Txt", "TPN");
                }
                this.setState({ Nutrition: "filled" });
              }
            }}
          >
            <option>-- Select Value --</option>
            <option value="0">None</option>
            <option value="1">NG tube</option>
            <option value="2">Specialised feed/ calorie support</option>
            <option value="3">IV fluids to hydrate</option>
            <option value="4">TPN</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Nutrition;
