import React, { Component } from 'react';

class PigTile extends Component {

  state = {
    display: 'display-none'
  }

  handleDisplayInfo = (e) => {
    const {display} = this.state
    // console.log(this.state.display, display)
    if (display === 'display-none') {
      this.setState({
        display: 'display-details'
      }) 
    } else {
        this.setState({
          display: 'display-none'
      })
    }
  }

  render() {
    // console.log('PigTile:', this.props.hog)
    let {name: pigName, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
    // console.log(pigName, specialty, greased, weight, medal)
    // let slug = pigName.toLowerCase().split(" ").join("_")
    let slug = pigName.toLowerCase().replace(/\s/g, "_")

    return (
      <div onClick={this.handleDisplayInfo}>
        <h1>{pigName}</h1>
        <img src={require(`../hog-imgs/${slug}.jpg`)} alt="pic"/>
        <p className={this.state.display}>specialty: {specialty}</p>
        <p className={this.state.display}>greased: {greased ? 'yes' : 'no'}</p>
        <p className={this.state.display}>weight: {weight}</p>
        <p className={this.state.display}>medal: {medal}</p>
      </div>
    );
  }
}

export default PigTile;