import React from "react";
import "../App.css";

class InputNotes extends React.Component {
  state = { comment: "", email: "" };

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.stateUpdater("emailAddress", this.state.email);
    await this.props.stateUpdater("comment", this.state.comment);
    if (this.state.email !== "") {
      this.props.submitEmail();
      this.setState({ email: "" });
    }
  };

  render() {
    return (
      <form className="RefContainer" onSubmit={this.handleSubmit}>
        <label>Enter notes/ email reference (optional):</label>
        <textarea
          aria-label="Comment box"
          value={this.state.comment}
          placeholder="Enter any notes"
          className="inputRefBox"
          onChange={event => {
            this.setState({ comment: event.target.value });
          }}
        ></textarea>
        <br></br>

        <label>Enter email to be sent the score data:</label>
        <input
          className="emailbox"
          type="email"
          placeholder="Enter email"
          required
          value={this.state.email}
          onChange={event => {
            this.setState({ email: event.target.value });
          }}
        ></input>

        <button
          className="commentSubmitButton"
          type="submit"
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          Email Score
        </button>
      </form>
    );
  }
}

export default InputNotes;
