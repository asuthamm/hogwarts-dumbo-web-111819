import React, { Component } from 'react';
import Filter from './Filter'
import Sort from './Sort'

class FilterContainer extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        < Filter handleFilter={this.props.handleFilter}/>
        < Sort handleSort={this.props.handleSort}/>
      </div>
    );
  }
}

export default FilterContainer;