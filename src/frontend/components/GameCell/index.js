import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

export default class Cell extends React.Component {

  constructor() {
    super();
    this.state = {
      occupiedBy: 0,
      cellNum: this.props.cellNum
    }
  }

  newOccupant = (occupant) => {
    this.setState({
      occupiedBy: occupant
    })
  }

  printhi(){
    console.log("hi");
  }

  render() {
    return (
      <Button className="cell"
      onClick={e => {this.printhi();}}
      style={props.style}>
      </Button>
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
