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
              } else {
                this.props.stateUpdater(
                  "Nutrition_Support",
                  Number(event.target.value)
                );
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
