import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      userInputOne: 0,
      userInputTwo: 0,
      sum: null
    };
  }
  handleChangeOne(val) {
    this.setState({ userInputOne: parseInt(val, 10) });
  }

  handleChangeTwo(val) {
    this.setState({ userInputTwo: parseInt(val, 10) });
  }
  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input
          className="inputLine"
          type="number"
          onChange={e => this.handleChangeOne(e.target.value)}
        />
        <input
          className="inputLine"
          type="number"
          onChange={e => this.handleChangeTwo(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.userInputOne, this.state.userInputTwo)}
        >
          {" "}
          Add{" "}
        </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    );
  }
}

export default Sum;
