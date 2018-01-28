import React, { Component } from "react";

class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        "Tracy",
        "Travis",
        "Shelly",
        "Rebecca",
        "Kyle",
        "Bryce",
        "Rachel",
        "Justin",
        "Kaden"
      ],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    var names = this.state.unFilteredArray;
    var filteredArray = [];

    for ( var i = 0; i < names.length; i++ ) {
      if ( names[i].includes(userInput) ) {
        filteredArray.push(names[i]);
      }
    }

    this.setState({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
      </div>
    );
  }
}

export default FilterString;
