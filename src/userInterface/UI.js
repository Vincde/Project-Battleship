export default function ui() {
  function createGrids() {
    const player1Ships = document.querySelector(".player-1-board__ships");
    const player1Shots = document.querySelector(".player-1-board__shots");
    const player2Ships = document.querySelector("player-2-board__ships");
    const player2Shots = document.querySelector("player-2-board__shots");

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

  return { createGrids };
}
