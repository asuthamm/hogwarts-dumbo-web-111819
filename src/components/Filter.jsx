import React, { Component } from 'react';

class Filter extends Component {

  handleChange = () => {
    // console.log('checked..box')
    this.props.handleFilter()
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <label>
        <input onChange={this.handleChange}
          type='checkbox' value='greased'/>
          <span>Greased</span>
        </label>
      </div>
    );
  }
}

export default Filter;