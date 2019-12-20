import React from "react";
import "../App.css";

class InputNotes extends React.Component {
  state = { comment: "", email: "" };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.email !== "") {
      //this.submitEmail();
      this.setState({ comment: "", email: "" });
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
