import React from 'react';
import Cell from '../GameCell/index.js';
//import setupBoard from './setupBoard';
//TODO: not sure if this is right

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      activePlayerPosition: 0
    }
  }

  move = () => {
    console.log("move")
    this.setState({
      activePlayerPosition: 10
    });
    //this.render();
    console.log("finish move");
  }

  setupBoard() {
    console.log(this.state.activePlayerPosition);
    console.log("jello");
    var board = [];
    for(let i = 0; i < 10; i++) {
      const row = [];
      for(let j = 0; j < 10; j++) {
        let x = (10*i)+j;
        if(x == this.state.activePlayerPosition) {
          console.log("gddgh");
          let p = true;
          row.push(<Cell cellNum={x} activePlayer={p} move={this.move}/>)
        } else {
          let p = false;
          row.push(<Cell cellNum={x} activePlayer={p} move={this.move}/>)
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
