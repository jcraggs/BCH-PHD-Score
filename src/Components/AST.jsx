import React from "react";
import "../App.css";

class AST extends React.Component {
  state = {
    AST: "unfilled",
    op0: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
  };

  render() {
    return (
      <div className="ASTWrap">
        <p className={this.state.AST}> _</p>
        <h3 className="ASTTitle">AST IU/L</h3>

        <div className="ASTContainer">
          <div className="AST0">
            <input
              type="radio"
              value="0"
              onChange={() => {
                this.setState({ op0: true });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ AST: "filled" });
                this.props.stateUpdater("AST", 0);
                this.props.ref_objUpdater("AST_Txt", "0 - 50");
              }}
              checked={this.state.op0}
            />
            <p>0-50</p>
          </div>

          <div className="AST1">
            <input
              type="radio"
              checked={this.state.op1}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: true });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ AST: "filled" });
                this.props.stateUpdater("AST", 1);
                this.props.ref_objUpdater("AST_Txt", "51 - 150");
              }}
            />
            <p>51-150</p>
          </div>
          <div className="AST2">
            <input
              type="radio"
              checked={this.state.op2}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: true });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ AST: "filled" });
                this.props.stateUpdater("AST", 2);
                this.props.ref_objUpdater("AST_Txt", "151 - 300");
              }}
            />
            <p>151-300</p>
          </div>

          <div className="AST3">
            <input
              type="radio"
              checked={this.state.op3}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: true });
                this.setState({ op4: false });
                this.setState({ AST: "filled" });
                this.props.stateUpdater("AST", 3);
                this.props.ref_objUpdater("AST_Txt", "301 - 500");
              }}
            />
            <p>301-500</p>
          </div>

          <div className="AST4">
            <input
              type="radio"
              checked={this.state.op4}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: true });
                this.setState({ AST: "filled" });
                this.props.stateUpdater("AST", 4);
                this.props.ref_objUpdater("AST_Txt", "> 500");
              }}
            />
            <p>> 500</p>
          </div>
        </div>
      </div>
    );
  }
}
export default AST;
