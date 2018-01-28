import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.assignEvenAndOdds = this.assignEvenAndOdds.bind(this);
  }

  handleChange(value) {
    this.setState({
      userInput: value
    });
  }
  assignEvenAndOdds(userInput) {
    var arr = userInput.split("");
    var evens = [];
    var odds = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
          evens.push(arr[i])}
          else {odds.push(arr[i])}
        }
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {this.state.evenArray.toString()}
        </span>
        <span className="resultsBox">
          Odds: {this.state.oddArray.toString()}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
