import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { fetchWeather } from '../actions/index'; 
// does this import alone make the func available on props? 
// or does it require mapDispatchToProps? 

class SearchBar extends Component {
  constructor(props) {
    super(props); 

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this); 
    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }

  onInputChange(e) {
    console.log(e.target.value); 
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault(); 

    this.props.fetchWeather(this.state.term); 
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group"> 
        <input 
          placeholder="Get a five day forecast"
          className="form-control"
          value={this.state.term} // makes controlled comp.
          onChange={this.onInputChange} // makes controlled comp.
        /> 
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button> 
        </span>
      </form> 
    );
  }
}

// make action flow to middleware and reducers  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// no mapStateToProps func - so null (no state needed for this comp)
export default connect(null, mapDispatchToProps)(SearchBar); 