import React from "react";
import "../App.css";

class Bilirubin extends React.Component {
  state = {
    Bilirubin: "unfilled",
    op0: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
  };

  render() {
    return (
      <div className="BilirubinWrap">
        <p className={this.state.Bilirubin}> _</p>
        <h3 className="BilirubinTitle">Bilirubin μmol/L</h3>

        <div className="BilirubinContainer">
          <div className="Bilirubin0">
            <input
              type="radio"
              value="0"
              onChange={() => {
                this.setState({ op0: true });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ Bilirubin: "filled" });
                this.props.stateUpdater("Bilirubin", 0);
              }}
              checked={this.state.op0}
            />
            <p>0-20</p>
          </div>

          <div className="Bilirubin1">
            <input
              type="radio"
              checked={this.state.op1}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: true });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ Bilirubin: "filled" });
                this.props.stateUpdater("Bilirubin", 1);
              }}
            />
            <p>21-70</p>
          </div>
          <div className="Bilirubin2">
            <input
              type="radio"
              checked={this.state.op2}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: true });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ Bilirubin: "filled" });
                this.props.stateUpdater("Bilirubin", 2);
              }}
            />
            <p>71-150</p>
          </div>

          <div className="Bilirubin3">
            <input
              type="radio"
              checked={this.state.op3}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: true });
                this.setState({ op4: false });
                this.setState({ Bilirubin: "filled" });
                this.props.stateUpdater("Bilirubin", 3);
              }}
            />
            <p>151-300</p>
          </div>

          <div className="Bilirubin4">
            <input
              type="radio"
              checked={this.state.op4}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: true });
                this.setState({ Bilirubin: "filled" });
                this.props.stateUpdater("Bilirubin", 4);
              }}
            />
            <p>> 300</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Bilirubin;
