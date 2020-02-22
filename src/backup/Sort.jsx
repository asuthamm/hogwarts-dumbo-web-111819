import React, { Component } from 'react';

class Sort extends Component {

  handleChange = (e) => {
    this.props.handleSort(e.target.value)
    // console.log(e.target.value)
  }

  render() {
    // console.log("@Sort:", this.props)
    return (
      <div>
        <select onChange={this.handleChange}>
          {/* <option value="All">All</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option> */}
          <option>All</option>
          <option>Name</option>
          <option>Weight</option>
        </select>
      </div>
    );
  }
}

export default Sort;
// onChange={this.handleChange}
