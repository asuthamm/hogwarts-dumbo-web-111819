import React, { Component } from 'react';
import PigTile from './PigTile'

class HogContainer extends Component {
  render() {
    // console.log(this.props.hogsArr)
    let arrOfHogs = this.props.hogsArr.map((hog) => <PigTile key={`${hog.name}`} hog={hog}/>)

    return (
      <div>
        {arrOfHogs}
      </div>
    );
  }
}

export default HogContainer;