import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
// import '../styles.css';

export default class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      occupiedBy: 0,
      cellNum: this.props.cellNum,
      activePlayer: this.props.activePlayer,
      move: this.props.move
    }
  }

  newOccupant = (occupant) => {
    this.setState({
      occupiedBy: occupant
    })
  }

  printhi(){
    console.log("hi");
    let cellN = this.state.cellNum;
    console.log(cellN);
    console.log(this.state.activePlayer);
  }

  createCell(){
    if(this.state.activePlayer) {
      console.log("playaa");
      return <Button size ="small" className="celly" onClick={this.props.move} color='blue'>You</Button>;
    }else{
      return <Button size ="small" className="cell" onClick={e => {this.printhi();}} color='grey'> </Button>;
    }
  }

  render() {
    return (
      this.createCell()
    );
  }
}

/*const occType {
  NONE: 1,
  ITEM: 2,
  MONSTER: 3,
  PLAYER: 4
};*/

/*************occupiedBy****************/
// I don't know how enums work in JS so I think it would
// be better to use an int
//  0 = NOT OCCUPIED
//  1 = ITEM
//  2 = MONSTER
//  3 = PLAYER
//  4 = other or error? Haven't decided yet.
