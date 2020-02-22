import React, { Component } from 'react';

class Filter extends Component {

  handleChange = () => {
    // console.log('checkbox selected')
    this.props.handleFilter()
  }

  render() {
    return (
      <div>
        <label>
        <input type='checkbox' value='greased' onChange={this.handleChange}/>
        <span>Greased</span>
        </label>
      </div>
    );
  }
}

export default Filter;