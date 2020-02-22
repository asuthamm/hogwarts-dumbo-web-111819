import React, { Component } from 'react';

class Sort extends Component {

  handleChange = (e) => {
    // console.log(e.target.value)
    this.props.handleSort(e.target.value)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <select onChange={this.handleChange}>
          <option>All</option>
          <option>Name</option>
          <option>Weight</option>
        </select>
      </div>
    );
  }
}

export default Sort;