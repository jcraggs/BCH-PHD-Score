import React from "react";
import "../App.css";

class PTSecs extends React.Component {
  state = {
    PTSecs: "unfilled",
    op0: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
  };

  render() {
    return (
      <div className="PTSecsWrap">
        <p className={this.state.PTSecs}> _</p>
        <h3 className="PTSecsTitle">PT secs</h3>

        <div className="PTSecsContainer">
          <div className="PTSecs0">
            <input
              type="radio"
              value="0"
              onChange={() => {
                this.setState({ op0: true });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ PTSecs: "filled" });
                this.props.stateUpdater("PTSecs", 0);
                this.props.ref_objUpdater("PTSecs_Txt", "< 13");
              }}
              checked={this.state.op0}
            />
            <p>&lt; 13</p>
          </div>

          <div className="PTSecs1">
            <input
              type="radio"
              checked={this.state.op1}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: true });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ PTSecs: "filled" });
                this.props.stateUpdater("PTSecs", 1);
                this.props.ref_objUpdater("PTSecs_Txt", "14 - 19");
              }}
            />
            <p>14-19</p>
          </div>
          <div className="PTSecs2">
            <input
              type="radio"
              checked={this.state.op2}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: true });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ PTSecs: "filled" });
                this.props.stateUpdater("PTSecs", 2);
                this.props.ref_objUpdater("PTSecs_Txt", "20 - 25");
              }}
            />
            <p>20-25</p>
          </div>

          <div className="PTSecs3">
            <input
              type="radio"
              checked={this.state.op3}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: true });
                this.setState({ op4: false });
                this.setState({ PTSecs: "filled" });
                this.props.stateUpdater("PTSecs", 3);
                this.props.ref_objUpdater("PTSecs_Txt", "26 - 30");
              }}
            />
            <p>26-30</p>
          </div>

          <div className="PTSecs4">
            <input
              type="radio"
              checked={this.state.op4}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: true });
                this.setState({ PTSecs: "filled" });
                this.props.stateUpdater("PTSecs", 4);
                this.props.ref_objUpdater("PTSecs_Txt", "> 30");
              }}
            />
            <p>> 30</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PTSecs;
