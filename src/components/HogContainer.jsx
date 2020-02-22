import React, { Component } from 'react';
import HogTile from './HogTile'

class HogContainer extends Component {

  render() {
    // console.log(this.props.hogsArr)
    let arrayOfHogs = this.props.hogsArr.map((hog) => <HogTile  key={hog.name} hog={hog}/>)
    return (
      <div>
        {/* < HogTile hog={this.props.hogsArr}/> */}
        {arrayOfHogs}
      </div>
    );
  }
}

export default HogContainer;