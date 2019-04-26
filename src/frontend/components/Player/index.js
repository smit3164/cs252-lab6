export default class Player {
  constructor(player){
    this.player = player;
  }

  /*isMovePossible(src, dest){
    return ((src - 1 === dest) ||
      (src + 1 === dest) ||
      (src - 8 === dest) ||
      (src + 8 === dest);
  }*/
  //Already in GamePage as 'movePossible'

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest){
    return [];
  }
}
