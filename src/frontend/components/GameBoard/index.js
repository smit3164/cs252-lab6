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
    let app = this.state.activePlayerPosition;
    console.log(app);
    console.log("jello");
    var board = [];
    for(let i = 0; i < 10; i++) {
      const row = [];
      for(let j = 0; j < 10; j++) {
        let x = (10*i)+j;
        if(x == this.state.activePlayerPosition) {
          console.log("gddgh");
          console.log(p);
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

  move = () => {
    console.log("hello");
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
