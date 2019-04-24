import React from 'react';
import Cell from '../GameCell/index.js';
import setupBoard from './setupBoard';
//TODO: not sure if this is right

export default class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true
    }
  }

  showBoard = () => {
    this.setState({
      visible: true
    })
  }
  hideBoard = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    //setupBoard
    return (
      <div>
        {board}
      </div>
    );
  }
}
