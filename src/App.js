import React from "react";
import "./App.css";
import LiverDysfunction from "./Components/LiverDysfunction";
import DiseaseSeverity from "./Components/DiseaseSeverity";
import NursingDependency from "./Components/NursingDependency";
import InputNotes from "./Components/InputNotes";

class App extends React.Component {
  state = {
    AST: undefined,
    Bilirubin: undefined,
    PTSecs: undefined,
    Ascites: undefined,
    Albumin: undefined,
    Sepsis: undefined,
    Invasive_Access: undefined,
    Nutrition_Support: undefined,
    BloodProd: undefined,
    Comorbidity: 0,
    ComorAdditonal: 0,
    ComorClicked: false,
    OuterComorClicked: false
  };

  stateUpdater = (category, score) => {
    this.setState({ [category]: score });
  };

  submitReady = () => {
    if (
      (this.state.ComorClicked && this.scoreCalculator() >= 0) ||
      (this.state.OuterComorClicked && this.scoreCalculator() >= 0)
    )
      return true;
    else return false;
  };

  scoreCalculator = () => {
    let obj = Object.values(this.state);
    let total = 0;
    obj.forEach(item => {
      total += item;
    });
    return total;
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Paediatric Hepatology Dependency Score</h1>
        <div className="TableContainer">
          <LiverDysfunction stateUpdater={this.stateUpdater} />
          <DiseaseSeverity stateUpdater={this.stateUpdater} />
          <NursingDependency stateUpdater={this.stateUpdater} />
          {this.submitReady() === true && (
            <p className="FinalScore">PHD Score: {this.scoreCalculator()}</p>
          )}
          {this.submitReady() === true && <InputNotes />}

          <button
            className="ResetButton"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
