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
    let app = this.props.activePlayerPosition;
    console.log(app);
    console.log("jello");
    var board = [];
    for(let i = 0; i < 10; i++) {
      const row = [];
      for(let j = 0; j < 10; j++) {
        let x = (10*i)+j;
        if(x == this.state.activePlayerPosition) {
<<<<<<< HEAD
=======
          console.log("gddgh");
>>>>>>> b4fe85e1507a20b1432a1aa478a3351e9ac9bd39
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
