import React, { Component } from 'react';

class HogTile extends Component {

  state = {
    display: 'display-none'
  }

  handleDisplayInfo = (e) => {
    // const {display} = this.state
    if (this.state.display === 'display-none') {
      // console.log('hit')
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
    // console.log(this.props.hog)
    const {name: pigName, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
    const slug = pigName.toLowerCase().split(' ').join('_')
    return (
      <div onClick={this.handleDisplayInfo}>
        <h4>{pigName}</h4>
        <img src={require(`../hog-imgs/${slug}.jpg`)} alt={pigName}/>
        <p className={this.state.display}>specialty: {specialty}</p>
        <p className={this.state.display}>greased: {greased ? 'yes' : 'no'}</p>
        <p className={this.state.display}>weight: {weight}</p>
        <p className={this.state.display}>medal: {medal}</p>
      </div>
    );
  }
}

export default HogTile;