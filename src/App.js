import React from "react";
import "./App.css";
// import LiverDysfunction from "./Components/LiverDysfunction";
import DiseaseSeverity from "./Components/DiseaseSeverity";

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
    Blood_Prod_Usage: undefined,
    Comorbidity: undefined
  };

  stateUpdater = (category, score) => {
    console.log(category);
    this.setState({ [category]: score });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Paediatric Hepatology Dependency Score</h1>
        <div className="TableContainer">
          {/* <LiverDysfunction /> */}
          <DiseaseSeverity stateUpdater={this.stateUpdater} />
        </div>
      </div>
    );
  }
}

export default App;
