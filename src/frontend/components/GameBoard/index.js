import React from 'react';
import Cell from '../GameCell/index.js';
//import setupBoard from './setupBoard';
//TODO: not sure if this is right

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      activePlayerPosition: this.props.activePlayerPosition
    }
  }

  setupBoard() {
    var board = [];
    for(let i = 0; i < 10; i++) {
      const row = [];
      for(let j = 0; j < 10; j++) {
        let x = (10*i)+j;
        if(x == this.state.activePlayerPosition) {
          let p = true;
          row.push(<Cell cellNum={x} activePlayer={p} move={move}/>)
        } else {
          let p = false;
          row.push(<Cell cellNum={x} activePlayer={p} move={move}/>)
        }
      }
      board.push(<div className="row">{row}</div>)
    }
    return (
      <div>
      {board}
      </div>
    )
  }

  move = () => {
    this.setState({
      activePlayerPosition: 5
    })
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
    return (
      <div>
      {this.setupBoard()}
      </div>
    );
  }
}
