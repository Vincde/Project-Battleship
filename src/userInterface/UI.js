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
          if (e.currentTarget.style.backgroundColor !== "white") {
            return null;
          }
          const res = player2.playerGameBoard.receiveAttack(row, column);
          if (res === true) {
            e.currentTarget.style.backgroundColor = "red";
            player2Ships[index].style.backgroundColor = "red";
            if (
              player2.playerGameBoard
                .getBoardElement(row, column)
                .ship.getSunk()
            ) {
              searchForSunkElement(
                player2.playerGameBoard,
                player2.playerGameBoard.getBoardElement(row, column),
                1
              );
            }
            if (player2.playerGameBoard.isGameFinished()) {
              document.querySelector("body").remove();
              const finalTitle = document.createElement("h1");
              finalTitle.textContent = `Game Finished! ${player1.playerName} won!`;
              document.querySelector("html").appendChild(finalTitle);
              // change this to make a better final screen
            }
          } else if (res === false) {
            e.currentTarget.style.backgroundColor = "gray";
            player2Ships[index].style.backgroundColor = "gray";
          }

          disablePlayer1.inert = true;
          disablePlayer2.inert = false;

          if (player2.playerName === null) {
            const random = player2.randomizeAttack();
            player2Shots[random].click();
          }

          return null;
        });

        player2Shots[index].addEventListener("click", (e) => {
          if (e.currentTarget.style.backgroundColor !== "white") {
            return null;
          }
          const res = player1.playerGameBoard.receiveAttack(row, column);
          if (res === true) {
            e.currentTarget.style.backgroundColor = "red";
            player1Ships[index].style.backgroundColor = "red";
            if (
              player1.playerGameBoard
                .getBoardElement(row, column)
                .ship.getSunk()
            ) {
              searchForSunkElement(
                player1.playerGameBoard,
                player1.playerGameBoard.getBoardElement(row, column),
                2
              );
            }
            if (player1.playerGameBoard.isGameFinished()) {
              document.querySelector("body").remove();
              const finalTitle = document.createElement("h1");
              finalTitle.textContent = `Game Finished! ${player1.playerName} won!`;
              document.querySelector("html").appendChild(finalTitle);
              // change this to make a better final screen
            }
          } else if (res === false) {
            e.currentTarget.style.backgroundColor = "gray";
            player1Ships[index].style.backgroundColor = "gray";
          }

          disablePlayer2.inert = true;
          disablePlayer1.inert = false;
          return null;
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
  };
}
