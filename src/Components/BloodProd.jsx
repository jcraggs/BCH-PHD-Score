import React from "react";
import "../App.css";

class BloodProd extends React.Component {
  state = {
    BloodProd: "unfilled",
    op0: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
  };

  render() {
    return (
      <div className="BloodProdWrap">
        <p className={this.state.BloodProd}> _</p>
        <h3 className="BloodProdTitle">Blood Product Usage (past 7 days)</h3>

        <div className="BloodProdContainer">
          <div className="BloodProd0">
            <input
              type="radio"
              value="0"
              onChange={() => {
                this.setState({ op0: true });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ BloodProd: "filled" });
                this.props.stateUpdater("BloodProd", 0);
                this.props.ref_objUpdater("BloodProd_Txt", "None");
              }}
              checked={this.state.op0}
            />
            <p>None</p>
          </div>

          <div className="BloodProd1">
            <input
              type="radio"
              checked={this.state.op1}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: true });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ BloodProd: "filled" });
                this.props.stateUpdater("BloodProd", 1);
                this.props.ref_objUpdater("BloodProd_Txt", "1");
              }}
            />
            <p>1</p>
          </div>
          <div className="BloodProd2">
            <input
              type="radio"
              checked={this.state.op2}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: true });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ BloodProd: "filled" });
                this.props.stateUpdater("BloodProd", 2);
                this.props.ref_objUpdater("BloodProd_Txt", "2");
              }}
            />
            <p>2</p>
          </div>

          <div className="BloodProd3">
            <input
              type="radio"
              checked={this.state.op3}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: true });
                this.setState({ op4: false });
                this.setState({ BloodProd: "filled" });
                this.props.stateUpdater("BloodProd", 3);
                this.props.ref_objUpdater("BloodProd_Txt", "3");
              }}
            />
            <p>3</p>
          </div>

          <div className="BloodProd4">
            <input
              type="radio"
              checked={this.state.op4}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: true });
                this.setState({ BloodProd: "filled" });
                this.props.stateUpdater("BloodProd", 4);
                this.props.ref_objUpdater("BloodProd_Txt", "4");
              }}
            />
            <p>4+</p>
          </div>
        </div>
      </div>
    );
  }
}
export default BloodProd;
