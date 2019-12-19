import React from "react";
import "../App.css";

class Albumin extends React.Component {
  state = {
    albumin: "unfilled",
    op0: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
  };

  render() {
    return (
      <div className="AlbuminWrap">
        <p className={this.state.albumin}> _</p>
        <h3 className="AlbuminTitle">Albumin g/L</h3>

        <div className="AlbuminContainer">
          <div className="Alb0">
            <input
              type="radio"
              value="0"
              onChange={() => {
                this.setState({ op0: true });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ albumin: "filled" });
                this.props.stateUpdater("Albumin", 0);
              }}
              checked={this.state.op0}
            />
            <p>>35</p>
          </div>

          <div className="Alb1">
            <input
              type="radio"
              checked={this.state.op1}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: true });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ albumin: "filled" });
                this.props.stateUpdater("Albumin", 1);
              }}
            />
            <p>30-34</p>
          </div>
          <div className="Alb2">
            <input
              type="radio"
              checked={this.state.op2}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: true });
                this.setState({ op3: false });
                this.setState({ op4: false });
                this.setState({ albumin: "filled" });
                this.props.stateUpdater("Albumin", 2);
              }}
            />
            <p>25-29</p>
          </div>

          <div className="Alb3">
            <input
              type="radio"
              checked={this.state.op3}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: true });
                this.setState({ op4: false });
                this.setState({ albumin: "filled" });
                this.props.stateUpdater("Albumin", 3);
              }}
            />
            <p>20-24</p>
          </div>

          <div className="Alb4">
            <input
              type="radio"
              checked={this.state.op4}
              onChange={() => {
                this.setState({ op0: false });
                this.setState({ op1: false });
                this.setState({ op2: false });
                this.setState({ op3: false });
                this.setState({ op4: true });
                this.setState({ albumin: "filled" });
                this.props.stateUpdater("Albumin", 4);
              }}
            />
            <p>&lt;20</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Albumin;
