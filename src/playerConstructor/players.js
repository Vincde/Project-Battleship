// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameBoard from "../mainConstructor/gameBoardConstructor";

class Player {
  constructor(name) {
    if (name === undefined) {
      this.name = "computer";
    } else {
      this.name = name;
    }

    this.gameBoard = new GameBoard();
  }
}

export default Player;
