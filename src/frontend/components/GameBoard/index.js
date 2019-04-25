import React from 'react';
import Cell from '../GameCell/index.js';
//import setupBoard from './setupBoard';
//TODO: not sure if this is right

export default class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true
    }
  }

  setupBoard() {
    var board = [];
    for(let i = 0; i < 10; i++) {
      const row = [];
      for(let j = 0; j < 10; j++) {
        var x = i+j;
        row.push(<Cell cellNum={x} />)
      }
      board.push(<div className="row">{row}</div>)
    }
    return (
      <div>
      {board}
      </div>
    )
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
      {this.setupBoard()}
      </div>
    );
  }
}
