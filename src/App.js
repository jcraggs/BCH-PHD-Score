import React from "react";
import "./App.css";
import LiverDysfunction from "./Components/LiverDysfunction";
import DiseaseSeverity from "./Components/DiseaseSeverity";
import NursingDependency from "./Components/NursingDependency";
import InputNotes from "./Components/InputNotes";
import SuccessMessage from "./Components/SuccessMessage";
import FailureMessage from "./Components/FailureMessage";
import axios from "axios";

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
    OuterComorClicked: false,
    display_success: false,
    display_failure: false,
    ref_obj: {
      AST_Txt: "",
      Bilirubin_Txt: "",
      PTSecs_Txt: "",
      Ascites_Txt: "",
      Albumin_Txt: "",
      Sepsis_Txt: "",
      Invasive_Access_Txt: "",
      Nutrition_Support_Txt: "",
      BloodProd_Txt: "",
      Comorbidity_Txt: ""
    },
    comor_ref_obj: {
      Dia_Txt: "",
      Renal_Txt: "",
      Ence_Txt: "",
      BMI_Txt: "",
      Oxy_Txt: ""
    },
    emailAddress: "",
    comment: ""
  };

  stateUpdater = (category, score) => {
    this.setState({ [category]: score });
  };

  ref_objUpdater = (category, txt) => {
    this.setState(prevState => ({
      ref_obj: {
        ...prevState.ref_obj,
        [category]: txt
      }
    }));
  };

  comor_ref_objUpdater = (category, txt) => {
    this.setState(prevState => ({
      comor_ref_obj: {
        ...prevState.comor_ref_obj,
        [category]: txt
      }
    }));
  };

  comor_ref_text_generate = () => {
    let arr = Object.values(this.state.comor_ref_obj);
    const filteredArr = arr.filter(function(item) {
      return item !== "";
    });
    let strArr = filteredArr.join(", ");
    return strArr;
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
    const newObj = obj.splice(0, obj.length - 4);

    let total = 0;
    newObj.forEach(item => {
      total += item;
      if (item === true) {
        total -= 1;
      }
    });
    return total;
  };

  submitEmail = event => {
    axios
      .post("https://be-phd-score.herokuapp.com/send", {
        data: {
          subject: `PHD Score Results- ${new Date().toLocaleString()}`,
          email: `${this.state.emailAddress}`,
          message: `Total PHD Score: ${this.scoreCalculator()} \n \nScore Breakdown:
          - Liver Dysfunction: ${this.state.AST +
            this.state.Bilirubin +
            this.state.PTSecs +
            this.state.Ascites} 
          - Disease Severity: ${this.state.Albumin +
            this.state.Sepsis +
            this.state.Invasive_Access}
          - Nursing Dependency: ${this.state.Nutrition_Support +
            this.state.BloodProd +
            this.state.Comorbidity +
            this.state.ComorAdditonal}
          \n \nData Input:
          - AST IU/L: ${this.state.ref_obj.AST_Txt}
          - Bilirubin μmol/L: ${this.state.ref_obj.Bilirubin_Txt}
          - PT Secs: ${this.state.ref_obj.PTSecs_Txt}
          - Ascites: ${this.state.ref_obj.Ascites_Txt}
          - Albumin: ${this.state.ref_obj.Albumin_Txt}
          - Sepsis: ${this.state.ref_obj.Sepsis_Txt}
          - Invasive Access: ${this.state.ref_obj.Invasive_Access_Txt}
          - Nutrition Support: ${this.state.ref_obj.Nutrition_Support_Txt}
          - Blood Product Usage: ${this.state.ref_obj.BloodProd_Txt}
          - Comorbidity/ organ dysfunction: ${
            this.state.ref_obj.Comorbidity_Txt
          }
          - Additional comorbidity factors: ${
            this.comor_ref_text_generate() === ""
              ? "N/A"
              : this.comor_ref_text_generate()
          } 
          
          \n \nNotes: ${this.state.comment}
          \n \nScore Report generated on: \n${new Date()}`
        }
      })
      .then(response => {
        if (response.data.msg === "success") {
          this.setState({ display_success: true }, () => {
            setTimeout(() => {
              this.setState({ display_success: false });
            }, 2000);
          });
        } else if (response.data.msg === "fail") {
          this.setState({ display_failure: true }, () => {
            setTimeout(() => {
              this.setState({ display_failure: false });
            }, 2000);
          });
        }
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Paediatric Hepatology Dependency Score</h1>
        <div className="TableContainer">
          <LiverDysfunction
            stateUpdater={this.stateUpdater}
            ref_objUpdater={this.ref_objUpdater}
          />
          <DiseaseSeverity
            stateUpdater={this.stateUpdater}
            ref_objUpdater={this.ref_objUpdater}
          />
          <NursingDependency
            stateUpdater={this.stateUpdater}
            ref_objUpdater={this.ref_objUpdater}
            comor_ref_objUpdater={this.comor_ref_objUpdater}
          />
          {this.submitReady() === true && (
            <div>
              <p className="FinalScore">PHD Score: {this.scoreCalculator()}</p>
              <div className="ScoreBreakDownContainer">
                <p className="ScoreBreakdown">Score Meaning</p>
                <ul className="ScoringList">
                  <li>0 = Healthy patient</li>
                  <li>1 - 9 = Unwell </li>
                  <li>10 - 14 = Sick</li>
                  <li>15 - 29 = Seriously ill</li>
                  <li>30+ = High risk of immediate mortality</li>
                </ul>
              </div>
            </div>
          )}
          {this.state.display_success === true && <SuccessMessage />}
          {this.state.display_failure === true && <FailureMessage />}
          {this.submitReady() === true && (
            <InputNotes
              submitEmail={this.submitEmail}
              stateUpdater={this.stateUpdater}
            />
          )}

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
