export default class Player {
  constructor(player){
    this.player = player;
  }

  isMovePossible(src, dest){
    return (src - 11 === dest ||
      src - 10 === dest || 
      src - 9 === dest ||
      src + 1 === dest ||
      src + 11 === dest ||
      src + 10 === dest ||
      src + 9 === dest ||
      src - 1 === dest);
  }

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest){
    return [];
  }
}
