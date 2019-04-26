export default class Player {
  constructor(player){
    this.player = player;
  }

  isMovePossible(srci, srcj, desti, destj){
    return ((srci - 1 === desti && srcj === destj) ||
      (srci + 1 === desti && srcj === destj) ||
      (srcj - 1 === destj && srci === desti) ||
      (srcj + 1 === destj && srci === desti));
  }

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest){
    return [];
  }
}
