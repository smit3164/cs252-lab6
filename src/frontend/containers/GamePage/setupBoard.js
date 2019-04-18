import Player from '../pieces/player.js';

export default function initialiseChessBoard(){
  const cells = Array(100).fill(null);
  cells[45] = new Player(1);
  return squares;
}
