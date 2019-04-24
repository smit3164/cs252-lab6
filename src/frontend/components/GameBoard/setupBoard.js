import React from 'react';
import GameCell from '../GameCell/index.js';

export default function setupBoard(props) {
  for(let i = 0; i < 10; i++){
    const row = [];
    for(let j = 0; j < 10; j++){
      row.push(<Cell cellNum={i+j} /*onClick=this.onClick
        style=?? */ />);
    }
    this.props.board.push(<div className="row">{row}</div>)
  }
}
