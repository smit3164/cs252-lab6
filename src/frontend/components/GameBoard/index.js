import React from 'react';
import Cell from '../GameCell/index.js';
export default class GameBoard extends React.Component {
  renderSquare(i) {
    return <Cell
    piece = {this.props.squares[i]}
    style = {this.props.squares[i]? this.props.squares[i].style : null}
    isChar = 0;
    onClick={() => this.props.onClick(i)}
    />
  }

  render() {
    const board = [];
    for(let i = 0; i < 10; i++){
      const squareRows = [];
      for(let j = 0; j < 10; j++){
        squareRows.push(this.renderSquare((i*10) + j));
      }
      board.push(<div className="board">{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}
