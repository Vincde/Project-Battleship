function UI() {
  function paintBoards() {
    const player1 = document.querySelector(".gameBoard__player1");
    const player2 = document.querySelector(".gameBoard__player2");

    for (let i = 0; i < 100; i += 1) {
      const newContainer = document.createElement("div");
      const newContainer2 = document.createElement("div");
      newContainer.classList.add("gameBoard__squares");
      newContainer2.classList.add("gameBoard__squares");
      player1.appendChild(newContainer);
      player2.appendChild(newContainer2);
    }
  }

  function reloadBoard(GB1, GB2) {
    const player1 = document.querySelectorAll(".gameBoard__player1 div");
    const player2 = document.querySelectorAll(".gameBoard__player2 div");

    let count = 0;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof GB1.getShip[i][j] === "object") {
          // object to be inserted
          player1[count].textContent = "SHIP";
        } else if (GB1.getShip[i][j] === "miss") {
          player1[count].textContent = "miss";
        } else if (GB1.getShip[i][j] === "hit") {
          player1[count].textContent = "hit";
        }

        if (typeof GB2.getShip[i][j] === "object") {
          // object to be inserted
          player2[count].textContent = "SHIP";
        } else if (GB2.getShip[i][j] === "miss") {
          player2[count].textContent = "miss";
        } else if (GB2.getShip[i][j] === "hit") {
          player2[count].textContent = "hit";
        }

        count += 1;
      }
    }
  }

  function initiateBox(GBPlayer1, GBPlayer2) {
    const player1 = document.querySelectorAll(".gameBoard__player1 > div");
    const player2 = document.querySelectorAll(".gameBoard__player2 > div");

    let count = 0;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        player1[count].addEventListener("click", () => {
          GBPlayer1.recieveAttack(i, j);
          reloadBoard(GBPlayer1, GBPlayer2);
        });

        player2[count].addEventListener("click", () => {
          GBPlayer2.recieveAttack(i, j);
          reloadBoard(GBPlayer1, GBPlayer2);
        });

        count += 1;
      }
    }
  }

  return { paintBoards, initiateBox };
}

export default UI;
