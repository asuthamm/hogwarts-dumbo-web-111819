import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterContainer from './FilterContainer'
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    sortValue: '',
    filterValue: ''
  }

  handleSort = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
    console.log('@app - handleSort:', newSortValue)

  }

  handleFilter = () => {
    this.setState(prevState => {
      return {
        filterValue: !prevState.filterValue
      }
    })
    console.log('@app - handleFilter:', this.state)
  }

  applySort = () => {
    let {sortValue} = this.state
    if (sortValue === "Name") {
      return [...hogs].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    } else if (sortValue === "Weight") {
        return [...hogs].sort((a,b) => {
          return a.weight-b.weight
        })
    } else {
      return [...hogs]
    }
  }

  applyFilter = (finalHogs) => {
    let {filterValue} = this.state
    if (filterValue) {
      return [...finalHogs].filter(hog => hog.greased)
    } else {
        return [...finalHogs]
      }
  }
  
  
  render() {
    return (
      <div className="App">
          < Nav />
          < FilterContainer handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          {/* < HogContainer hogsArr={hogs}/> */}
          < HogContainer hogsArr={this.applyFilter(this.applySort())}/>
      </div>
    )
  }
}

export default App;