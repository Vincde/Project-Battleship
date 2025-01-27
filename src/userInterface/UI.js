function UI() {
  const computerStack = [];
  function paintBoards() {
    const player1 = document.querySelector(".gameBoard__player1");
    const player2 = document.querySelector(".gameBoard__player2");
    const player1Choice = document.querySelector(".gameBoard__player1__choice");
    const player2Choice = document.querySelector(".gameBoard__player2__choice");

    for (let i = 0; i < 100; i += 1) {
      const newContainer = document.createElement("div");
      const newContainer2 = document.createElement("div");
      const newContainerChoice = document.createElement("div");
      const newContainer2Choice = document.createElement("div");

      newContainer.classList.add("gameBoard__squares");
      newContainer2.classList.add("gameBoard__squares");
      newContainerChoice.classList.add("gameBoard__squares");
      newContainer2Choice.classList.add("gameBoard__squares");

      player1.appendChild(newContainer);
      player2.appendChild(newContainer2);
      player1Choice.appendChild(newContainerChoice);
      player2Choice.appendChild(newContainer2Choice);
    }
  }

  function reloadBoard(GB1, GB2) {
    const player1 = document.querySelectorAll(".gameBoard__player1 div");
    const player2 = document.querySelectorAll(".gameBoard__player2 div");
    const player1Choice = document.querySelectorAll(
      ".gameBoard__player1__choice > div"
    );
    const player2Choice = document.querySelectorAll(
      ".gameBoard__player2__choice > div"
    );

    let count = 0;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof GB1.getShip(i, j) === "object") {
          // object to be inserted
          player1[count].textContent = "SHIP";
          player1[count].style.backgroundImage = 'url("../src/img/cruise.png")';
          player1[count].style.backgroundSize = "contain";
        } else if (GB1.getShip(i, j) === "miss") {
          player1[count].textContent = "miss";
          player2Choice[count].style.background = "#d2665a";
        } else if (GB1.getShip(i, j) === "hit") {
          player1[count].textContent = "hit";
          player2Choice[count].style.background = "#5b913b";
        } else if (GB1.getShip(i, j) === undefined) {
          player1[count].textContent = "";
        }

        if (typeof GB2.getShip(i, j) === "object") {
          // object to be inserted
          player2[count].textContent = "SHIP";
          player2[count].style.backgroundImage = 'url("../src/img/cruise.png")';
          player2[count].style.backgroundSize = "contain";
        } else if (GB2.getShip(i, j) === "miss") {
          player2[count].textContent = "miss";
          player1Choice[count].style.background = "#d2665a";
        } else if (GB2.getShip(i, j) === "hit") {
          player2[count].textContent = "hit";
          player1Choice[count].style.background = "#5b913b";
        } else if (GB2.getShip(i, j) === undefined) {
          player2[count].textContent = "";
        }

        count += 1;
      }
    }
  }

  function obscureBoard() {
    const player1 = document.querySelector(".gameBoard__player1");
    const player2 = document.querySelector(".gameBoard__player2");
    const player1Choice = document.querySelector(".gameBoard__player1__choice");
    const player2Choice = document.querySelector(".gameBoard__player2__choice");

    if (player1.style.visibility === "hidden") {
      player1.style.visibility = "visible";
      player1Choice.style.visibility = "visible";
    } else if (player1.style.visibility === "visible") {
      player1.style.visibility = "hidden";
      player1Choice.style.visibility = "hidden";
    }

    if (player2.style.visibility === "hidden") {
      player2.style.visibility = "visible";
      player2Choice.style.visibility = "visible";
    } else if (player2.style.visibility === "visible") {
      player2.style.visibility = "hidden";
      player2Choice.style.visibility = "hidden";
    }
  }

  function makeComputerChoice() {
    const player1 = document.querySelectorAll(".gameBoard__player1 > div");
    const player2 = document.querySelectorAll(
      ".gameBoard__player2__choice > div"
    );

    let count = Math.floor(Math.random() * 100);

    while (
      player1[count].textContent === "hit" ||
      player1[count].textContent === "miss"
    ) {
      count = Math.floor(Math.random() * 100);
    }

    if (computerStack.length <= 0) {
      if (player1[count].textContent === "SHIP") {
        player2[count].click();
        computerStack.push(count + 1);
        computerStack.push(count + 2);
        computerStack.push(count + 3);
        computerStack.push(count + 4);
        computerStack.push(count - 1);
        computerStack.push(count - 2);
        computerStack.push(count - 3);
        computerStack.push(count - 4);
        computerStack.push(count + 10);
        computerStack.push(count + 20);
        computerStack.push(count + 30);
        computerStack.push(count + 40);
        computerStack.push(count - 10);
        computerStack.push(count - 20);
        computerStack.push(count - 30);
        computerStack.push(count - 40);
      } else {
        player2[count].click();
      }
    } else {
      if (computerStack[0] > 99 || computerStack[0] < 0) {
        computerStack.shift();
        return;
      }
      player2[computerStack.shift()].click();
    }
  }

  function createShipButtonActive(player1Board, player2Board) {
    const createShipButton = document.querySelector(".create-ship-button");
    const rowInput = document.querySelector("#row");
    const columnInput = document.querySelector("#column");
    const lengthInput = document.querySelector("#length");
    const directionInput = document.querySelector("#direction");
    const playerInput = document.querySelector("#player");

    createShipButton.addEventListener("click", () => {
      const row = parseInt(rowInput.value, 10);
      const column = parseInt(columnInput.value, 10);
      const length = parseInt(lengthInput.value, 10);

      if (
        row &&
        column &&
        length &&
        directionInput.value &&
        playerInput.value
      ) {
        if (playerInput.value === "player1") {
          player1Board.placeShip(row, column, length, directionInput.value);
        } else if (playerInput.value === "player2") {
          player2Board.placeShip(row, column, length, directionInput.value);
        }
        reloadBoard(player1Board, player2Board);
      }
    });
  }

  function initiateBox(GBPlayer1, GBPlayer2, player2Name) {
    const score = document.querySelector(".score");
    const player1 = document.querySelectorAll(
      ".gameBoard__player1__choice > div"
    );
    const player2 = document.querySelectorAll(
      ".gameBoard__player2__choice > div"
    );

    let count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        player1[count].addEventListener("click", () => {
          GBPlayer2.recieveAttack(i, j);
          if (GBPlayer2.allShipsHaveBeenSunk() === true) {
            GBPlayer1.clearAll();
            GBPlayer2.clearAll();
            score.textContent = "PLAYER 1 WINS";
          }
          reloadBoard(GBPlayer1, GBPlayer2);
          setTimeout(obscureBoard, 1000);
          /* obscureBoard(); */
          if (player2Name === "computer") {
            makeComputerChoice();
          }
        });

        player2[count].addEventListener("click", () => {
          GBPlayer1.recieveAttack(i, j);
          if (GBPlayer1.allShipsHaveBeenSunk() === true) {
            GBPlayer1.clearAll();
            GBPlayer2.clearAll();
            score.textContent = "PLAYER 2 WINS";
          }
          reloadBoard(GBPlayer1, GBPlayer2);
          setTimeout(obscureBoard, 1000);
          /* obscureBoard(); */
        });

        count += 1;
      }
    }
  }

  function startDrag(player1Board, player2Board) {
    const dragElement = document.querySelector(".box-dimension");
    const dragDirection = document.querySelector("#drag-n-drop__direction");
    const dragDimension = document.querySelector("#drag-n-drop__dimension");

    dragElement.addEventListener("dragstart", (ev) => {
      ev.dataTransfer.setData("text", dragDirection.value);
      ev.dataTransfer.setData("text1", dragDimension.value);
    });

    const gameBoard1 = document.querySelectorAll(".gameBoard__player1 div");
    const gameBoard2 = document.querySelectorAll(".gameBoard__player2 div");

    let count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoard1[count].addEventListener("dragover", (ev) => {
          ev.preventDefault();
        });
        gameBoard2[count].addEventListener("dragover", (ev) => {
          ev.preventDefault();
        });
        count += 1;
      }
    }

    count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoard1[count].addEventListener("drop", (ev) => {
          player1Board.placeShip(
            i,
            j,
            parseInt(ev.dataTransfer.getData("text1"), 10),
            ev.dataTransfer.getData("text")
          );
          reloadBoard(player1Board, player2Board);
          ev.preventDefault();
        });
        gameBoard2[count].addEventListener("drop", (ev) => {
          player2Board.placeShip(
            i,
            j,
            parseInt(ev.dataTransfer.getData("text1"), 10),
            ev.dataTransfer.getData("text")
          );
          reloadBoard(player1Board, player2Board);
          ev.preventDefault();
        });
        count += 1;
      }
    }
  }

  return {
    paintBoards,
    initiateBox,
    reloadBoard,
    obscureBoard,
    createShipButtonActive,
    startDrag,
  };
}

export default UI;
