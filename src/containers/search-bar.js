import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};

    // this creates a global var that binds to the class level 'this'
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }



  onFormSubmit(event){
    event.preventDefault();
  }

// Alternative call
// onChange={(event) => this.onInputChange(event)}

  render(){

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get five day forecast for your city"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
        />
        <span className="input-group-btn">
            <button  type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}
