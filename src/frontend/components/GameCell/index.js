import React from 'react';

export default function Cell(props) {
    return (
      <button className={"player "+props.isChar}
      onClick={props.onClick}
      style={props.style}>
      </button>
    );

}
