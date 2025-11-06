export default function ui() {
  function createGrids() {
    const player1Ships = document.querySelector(".player-1-board__ships");
    const player1Shots = document.querySelector(".player-1-board__shots");
    const player2Ships = document.querySelector(".player-2-board__ships");
    const player2Shots = document.querySelector(".player-2-board__shots");

    for (let i = 0; i < 100; i += 1) {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");

      div1.style.backgroundColor = "white";
      div2.style.backgroundColor = "white";
      div3.style.backgroundColor = "white";
      div4.style.backgroundColor = "white";

      player1Ships.appendChild(div1);
      player1Shots.appendChild(div2);
      player2Ships.appendChild(div3);
      player2Shots.appendChild(div4);
    }
  }

  function showBoardEvent() {
    const player1Ships = document.querySelector(".player-1-board__ships");
    const player2Ships = document.querySelector(".player-2-board__ships");

    player1Ships.style.visibility = "hidden";
    player2Ships.style.visibility = "hidden";

    const bttnPlayer1 = document.querySelector(".player-1-board__bttn");
    const bttnPlayer2 = document.querySelector(".player-2-board__bttn");

    bttnPlayer1.addEventListener("click", () => {
      if (player1Ships.style.visibility === "hidden") {
        player1Ships.style.visibility = "visible";
      } else {
        player1Ships.style.visibility = "hidden";
      }
    });

    bttnPlayer2.addEventListener("click", () => {
      if (player2Ships.style.visibility === "hidden") {
        player2Ships.style.visibility = "visible";
      } else {
        player2Ships.style.visibility = "hidden";
      }
    });
  }

  function chooseNumberOfPlayers() {
    return new Promise((resolve) => {
      const main = document.querySelector("main");
      main.style.filter = "blur(5px)";

      const title = document.createElement("h1");
      title.textContent = "Choose the number of human players:";
      const bttn1 = document.createElement("button");
      bttn1.textContent = "1 Player (and one computer player)";
      const bttn2 = document.createElement("button");
      bttn2.textContent = "2 Players (and zero computer player)";

      const container = document.createElement("div");
      container.appendChild(title);
      container.appendChild(bttn1);
      container.appendChild(bttn2);

      const body = document.querySelector("body");
      body.appendChild(container);
      container.style = "position: absolute; top:50%; left:30%;";

      bttn1.addEventListener("click", () => {
        container.remove();
        main.style.filter = "blur(0)";
        resolve(1);
      });

      bttn2.addEventListener("click", () => {
        container.remove();
        main.style.filter = "blur(0)";
        resolve(2);
      });
    });
  }

  function generateShipValues() {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    const length = Math.floor(Math.random() * 4 + 2);
    const direction = Math.round(Math.random()) === 1 ? "v" : "h";

    while (
      (direction === "v" && row + length > 9) ||
      (direction === "h" && column + length > 9)
    ) {
      if (direction === "v") row = Math.floor(Math.random() * 10);
      else column = Math.floor(Math.random() * 10);
    }

    return [row, column, length, direction];
  }

  function verifyValues([row, column, length, direction], player) {
    if (direction === "v") {
      for (let i = row; i < row + length; i += 1) {
        if (player.playerGameBoard.getBoardElement(i, column)) return false;
      }
    } else if (direction === "h") {
      for (let i = column; i < column + length; i += 1) {
        if (player.playerGameBoard.getBoardElement(row, i)) return false;
      }
    }

    return true;
  }

  function placeTemporaryShipOntoBoard([row, column, length, direction], num) {
    let boardShips;

    if (num === 1) {
      boardShips = document.querySelectorAll(".player-1-board__ships > div");
    } else if (num === 2) {
      boardShips = document.querySelectorAll(".player-2-board__ships > div");
    }

    for (let i = 0; i < 100; i += 1) {
      boardShips[i].classList.remove("temporaryShip");
    }

    if (direction === "v") {
      for (let i = row; i < row + length; i += 1) {
        boardShips[i * 10 + column].classList.add("temporaryShip");
      }
    } else if (direction === "h") {
      for (let i = column; i < column + length; i += 1) {
        boardShips[row * 10 + i].classList.add("temporaryShip");
      }
    }
  }

  function showShips(player1Board, player2Board) {
    const player1Ships = document.querySelectorAll(
      ".player-1-board__ships > div"
    );
    const player2Ships = document.querySelectorAll(
      ".player-2-board__ships > div"
    );

    let count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const res = player1Board.getBoardElement(i, j);
        if (res !== undefined) {
          player1Ships[count].style.backgroundColor = "green";
        }

        const res2 = player2Board.getBoardElement(i, j);
        if (res2 !== undefined) {
          player2Ships[count].style.backgroundColor = "green";
        }

        count += 1;
      }
    }
  }

  function placeShipsOnBoard(player1, player2) {
    return new Promise((resolve) => {
      let valori1 = [];
      let valori2 = [];
      const randomizeBttn1 = document.querySelector(
        ".player-1-randomize__ship"
      );
      const randomizeBttn2 = document.querySelector(
        ".player-2-randomize__ship"
      );
      const placeButton1 = document.querySelector(".player-1-randomize__place");
      const placeButton2 = document.querySelector(".player-2-randomize__place");

      randomizeBttn1.addEventListener("click", () => {
        valori1 = generateShipValues();
        while (!verifyValues(valori1, player1)) {
          valori1 = generateShipValues();
        }
        placeTemporaryShipOntoBoard(valori1, 1);
      });
      randomizeBttn2.addEventListener("click", () => {
        valori2 = generateShipValues();
        while (!verifyValues(valori2, player2)) {
          valori2 = generateShipValues();
        }
        placeTemporaryShipOntoBoard(valori2, 2);
      });

      placeButton1.addEventListener("click", () => {
        player1.playerGameBoard.placeShip(
          valori1[0],
          valori1[1],
          valori1[2],
          valori1[3]
        );
        showShips(player1.playerGameBoard, player2.playerGameBoard);
      });

      placeButton2.addEventListener("click", () => {
        player2.playerGameBoard.placeShip(
          valori2[0],
          valori2[1],
          valori2[2],
          valori2[3]
        );
        showShips(player1.playerGameBoard, player2.playerGameBoard);
      });
    });
  }

  function searchForSunkElement(playerGameBoard, element, player) {
    let playerShips;
    let playerShots;
    if (player === 1) {
      playerShips = document.querySelectorAll(".player-2-board__ships > div");
      playerShots = document.querySelectorAll(".player-1-board__shots > div");
    } else {
      playerShips = document.querySelectorAll(".player-1-board__ships > div");
      playerShots = document.querySelectorAll(".player-2-board__shots > div");
    }

    let count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (
          playerGameBoard.getBoardElement(i, j) !== undefined &&
          playerGameBoard.getBoardElement(i, j).ship === element.ship
        ) {
          playerShips[count].style.backgroundColor = "#3e0703";
          playerShots[count].style.backgroundColor = "#3e0703";
        }

        count += 1;
      }
    }
  }

  function updateUiAfterAttack(
    res,
    e,
    ships,
    index,
    playerOpponent,
    row,
    column,
    name
  ) {
    const playerShips = ships;
    if (res === true) {
      e.currentTarget.style.backgroundColor = "red";
      playerShips[index].style.backgroundColor = "red";
      if (
        playerOpponent.playerGameBoard
          .getBoardElement(row, column)
          .ship.getSunk()
      ) {
        searchForSunkElement(
          playerOpponent.playerGameBoard,
          playerOpponent.playerGameBoard.getBoardElement(row, column),
          name === 1 ? 1 : 2
        );
      }
    } else if (res === false) {
      e.currentTarget.style.backgroundColor = "gray";
      playerShips[index].style.backgroundColor = "gray";
    }
  }

  function showGameOver(winnerName) {
    document.querySelector("body").remove();
    const finalTitle = document.createElement("h1");
    finalTitle.textContent = `Game Finished! ${winnerName} won!`;
    document.querySelector("html").appendChild(finalTitle);
  }

  function handleAttackShip(
    e,
    row,
    column,
    index,
    player,
    playerOpponent,
    opponentShips,
    opponentShots,
    tempDisablePlayer,
    tempDisableOpponent,
    name
  ) {
    const playerShips = opponentShips;
    const playerShots = opponentShots;
    const disablePlayer = tempDisablePlayer;
    const disableOpponent = tempDisableOpponent;

    if (e.currentTarget.style.backgroundColor !== "white") {
      return null;
    }
    const res = playerOpponent.playerGameBoard.receiveAttack(row, column);
    updateUiAfterAttack(
      res,
      e,
      playerShips,
      index,
      playerOpponent,
      row,
      column,
      name
    );

    if (playerOpponent.playerGameBoard.isGameFinished()) {
      showGameOver(player.playerName);
    }

    disablePlayer.inert = true;
    disableOpponent.inert = false;

    if (playerOpponent.playerName === null) {
      const random = playerOpponent.randomizeAttack();
      playerShots[random].click();
    }

    return null;
  }

  function attackEvent(player1, player2) {
    const disablePlayer1 = document.querySelector(".player-1-board__shots");
    const disablePlayer2 = document.querySelector(".player-2-board__shots");

    const player1Shots = document.querySelectorAll(
      ".player-1-board__shots > div"
    );
    const player2Shots = document.querySelectorAll(
      ".player-2-board__shots > div"
    );
    const player1Ships = document.querySelectorAll(
      ".player-1-board__ships > div"
    );
    const player2Ships = document.querySelectorAll(
      ".player-2-board__ships > div"
    );

    let count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const index = count;
        const row = i;
        const column = j;

        player1Shots[index].addEventListener("click", (e) => {
          handleAttackShip(
            e,
            row,
            column,
            index,
            player1,
            player2,
            player2Ships,
            player2Shots,
            disablePlayer1,
            disablePlayer2,
            1
          );
        });

        player2Shots[index].addEventListener("click", (e) => {
          handleAttackShip(
            e,
            row,
            column,
            index,
            player2,
            player1,
            player1Ships,
            player1Shots,
            disablePlayer2,
            disablePlayer1,
            2
          );
        });

        count += 1;
      }
    }
  }

  return {
    createGrids,
    chooseNumberOfPlayers,
    showShips,
    attackEvent,
    showBoardEvent,
    placeShipsOnBoard,
  };
}
