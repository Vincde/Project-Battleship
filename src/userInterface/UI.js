export default function ui() {
  function createGrids() {
    const player1Ships = document.querySelector(".player-1-board__ships");
    const player1Shots = document.querySelector(".player-1-board__shots");
    const player2Ships = document.querySelector(".player-2-board__ships");
    const player2Shots = document.querySelector(".player-2-board__shots");

    for (let i = 0; i < 100; i++) {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");

      player1Ships.appendChild(div1);
      player1Shots.appendChild(div2);
      player2Ships.appendChild(div3);
      player2Shots.appendChild(div4);
    }
  }

  function chooseNumberOfPlayers() {
    return new Promise(function (resolve) {
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

  function reload(player1, player2) {
    let counter = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        populateShips(player1, player2, counter, i, j);
        populateShots(player1, player2, counter, i, j);
        counter++;
      }
    }
  }

  function populateShips(player1, player2, counter, i, j) {
    const player1Ships = document.querySelectorAll(
      ".player-1-board__ships > div"
    );
    const player2Ships = document.querySelectorAll(
      ".player-2-board__ships > div"
    );

    if (
      typeof player1.playerGameBoard.getBoardElement(i, j) === "object" &&
      player1.playerGameBoard.getBoardElement(i, j).hit === false
    ) {
      player1Ships[counter].style.backgroundColor = "green";
    } else if (
      typeof player1.playerGameBoard.getBoardElement(i, j) === "object" &&
      player1.playerGameBoard.getBoardElement(i, j).hit === true
    ) {
      player1Ships[counter].style.backgroundColor = "red";
    } else if (player1.playerGameBoard.getBoardElement(i, j) === "miss") {
      player1Ships[counter].style.backgroundColor = "gray";
    }

    if (
      typeof player1.playerGameBoard.getBoardElement(i, j) === "object" &&
      player1.playerGameBoard.getBoardElement(i, j).hit === true &&
      player1.playerGameBoard.getBoardElement(i, j).ship.isSunk()
    ) {
      player1Ships[counter].style.backgroundColor = "#3e0703";
    }

    if (
      typeof player2.playerGameBoard.getBoardElement(i, j) === "object" &&
      player2.playerGameBoard.getBoardElement(i, j).hit === false
    ) {
      player2Ships[counter].style.backgroundColor = "green";
    } else if (
      typeof player2.playerGameBoard.getBoardElement(i, j) === "object" &&
      player2.playerGameBoard.getBoardElement(i, j).hit === true
    ) {
      player2Ships[counter].style.backgroundColor = "red";
    } else if (player2.playerGameBoard.getBoardElement(i, j) === "miss") {
      player2Ships[counter].style.backgroundColor = "gray";
    }

    if (
      typeof player2.playerGameBoard.getBoardElement(i, j) === "object" &&
      player2.playerGameBoard.getBoardElement(i, j).hit === true &&
      player2.playerGameBoard.getBoardElement(i, j).ship.isSunk()
    ) {
      player2Ships[counter].style.backgroundColor = "#3e0703";
    }
  }

  function populateShots(player1, player2, counter, i, j) {
    const player1Shots = document.querySelectorAll(
      ".player-1-board__shots > div"
    );

    const player2Shots = document.querySelectorAll(
      ".player-2-board__shots > div"
    );

    if (
      typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" &&
      player1.playerGameBoard.getMissedAttack(i, j).hit === true
    ) {
      player1Shots[counter].style.backgroundColor = "green";
    } else if (
      typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" &&
      player1.playerGameBoard.getMissedAttack(i, j).hit === false
    ) {
      player1Shots[counter].style.backgroundColor = "red";
    }

    if (
      typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" &&
      player1.playerGameBoard.getMissedAttack(i, j).hit === true &&
      player1.playerGameBoard.getMissedAttack(i, j).sunk === true
    ) {
      player1Shots[counter].style.backgroundColor = "#3e0703";
    }

    if (
      typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" &&
      player2.playerGameBoard.getMissedAttack(i, j).hit === true
    ) {
      player2Shots[counter].style.backgroundColor = "green";
    } else if (
      typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" &&
      player2.playerGameBoard.getMissedAttack(i, j).hit === false
    ) {
      player2Shots[counter].style.backgroundColor = "red";
    }

    if (
      typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" &&
      player2.playerGameBoard.getMissedAttack(i, j).hit === true &&
      player2.playerGameBoard.getMissedAttack(i, j).sunk === true
    ) {
      player2Shots[counter].style.backgroundColor = "#3e0703";
    }
  }

  return { createGrids, chooseNumberOfPlayers, reload };
}
