import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

/*export default function Cell(props) {
    return (
      <button className={"player "+props.isChar}
      onClick={props.onClick}
      style={props.style}>
      </button>
    );

}*/

const occType {
  NONE: 1,
  ITEM: 2,
  MONSTER: 3,
  PLAYER: 4
};

export default class Cell extends React.Component {

  constructor() {
    super();
    this.state = {
      occupiedBy: occType.NONE,
      cellNum: this.props.cellNum
    }
  }

  newOccupant = (occupant) => {
    this.setState({
      occupiedBy: occupant
    })
  }

  render() {
    return (
      <Button className={"cell"}
      onClick={props.onClick}
      style={props.style}>
      </Button>
    );
  }
}
