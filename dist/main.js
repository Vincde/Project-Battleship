/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard/gameBoard.js":
/*!************************************!*\
  !*** ./src/gameBoard/gameBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js");

function gameBoard() {
  const board = [];
  const missedAttacks = [];
  function placeShip(row, column, length, direction) {
    const newShip = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    for (let i = 0; i < length; i += 1) {
      if (direction === "v") {
        board.push({
          row: row + i,
          column,
          ship: newShip,
          direction
        });
      } else {
        board.push({
          row,
          column: column + i,
          ship: newShip,
          direction
        });
      }
    }
  }
  function getBoardElement(row, column) {
    return board.find(el => el.row === row && el.column === column);
  }
  function getMissedElement(row, column) {
    return missedAttacks.find(el => el.row === row && el.column === column);
  }
  function receiveAttack(row, column) {
    const element = board.indexOf(board.find(el => el.row === row && el.column === column));
    if (element !== -1) {
      board[element].ship.hit();
      return true;
    }
    missedAttacks.push({
      row,
      column
    });
    return false;
  }
  function isGameFinished() {
    if (board.length > 0) {
      for (let i = 0; i < board.length; i += 1) {
        if (!board[i].ship.getSunk()) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  return {
    placeShip,
    getBoardElement,
    receiveAttack,
    getMissedElement,
    isGameFinished
  };
}

/***/ }),

/***/ "./src/player/computer.js":
/*!********************************!*\
  !*** ./src/player/computer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameBoard/gameBoard */ "./src/gameBoard/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player/player.js");


function computer() {
  const playerGameBoard = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const playerName = null;
  const attacks = [];
  function randomizeAttack() {
    let random;
    do {
      random = Math.floor(Math.random() * 100);
    } while (attacks.includes(random));
    attacks.push(random);
    return random;
  }
  return {
    playerGameBoard,
    playerName,
    randomizeAttack
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computer);

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameBoard/gameBoard */ "./src/gameBoard/gameBoard.js");

function player(name) {
  // careful: if i insert computer as my username it could be problematic
  const playerName = name;
  const playerGameBoard = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return {
    playerGameBoard,
    playerName
  };
}

/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ship(shipLength) {
  let nTimesHit = 0;
  let length = shipLength;
  function hit() {
    nTimesHit += 1;
  }
  function getSunk() {
    if (nTimesHit >= length) {
      return true;
    }
    return false;
  }
  function getLength() {
    return length;
  }
  return {
    hit,
    getSunk,
    getLength
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

/***/ }),

/***/ "./src/userInterface/UI.js":
/*!*********************************!*\
  !*** ./src/userInterface/UI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ui)
/* harmony export */ });
function ui() {
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
    return new Promise(resolve => {
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
    while (direction === "v" && row + length > 9 || direction === "h" && column + length > 9) {
      if (direction === "v") row = Math.floor(Math.random() * 10);else column = Math.floor(Math.random() * 10);
    }
    return [row, column, length, direction];
  }
  function verifyValues(_ref, player) {
    let [row, column, length, direction] = _ref;
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
  function placeTemporaryShipOntoBoard(_ref2, num) {
    let [row, column, length, direction] = _ref2;
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
    const player1Ships = document.querySelectorAll(".player-1-board__ships > div");
    const player2Ships = document.querySelectorAll(".player-2-board__ships > div");
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
    return new Promise(resolve => {
      const startGame = document.querySelector(".start-game");
      let valori1 = [];
      let valori2 = [];
      const randomizeBttn1 = document.querySelector(".player-1-randomize__ship");
      const randomizeBttn2 = document.querySelector(".player-2-randomize__ship");
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
        player1.playerGameBoard.placeShip(valori1[0], valori1[1], valori1[2], valori1[3]);
        showShips(player1.playerGameBoard, player2.playerGameBoard);
      });
      placeButton2.addEventListener("click", () => {
        player2.playerGameBoard.placeShip(valori2[0], valori2[1], valori2[2], valori2[3]);
        showShips(player1.playerGameBoard, player2.playerGameBoard);
      });
      startGame.addEventListener("click", () => {
        placeButton1.parentElement.removeChild(placeButton1);
        placeButton2.parentElement.removeChild(placeButton2);
        startGame.parentElement.removeChild(startGame);
        resolve();
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
        if (playerGameBoard.getBoardElement(i, j) !== undefined && playerGameBoard.getBoardElement(i, j).ship === element.ship) {
          playerShips[count].style.backgroundColor = "#3e0703";
          playerShots[count].style.backgroundColor = "#3e0703";
        }
        count += 1;
      }
    }
  }
  function updateUiAfterAttack(res, e, ships, index, playerOpponent, row, column, name) {
    const playerShips = ships;
    if (res === true) {
      e.currentTarget.style.backgroundColor = "red";
      playerShips[index].style.backgroundColor = "red";
      if (playerOpponent.playerGameBoard.getBoardElement(row, column).ship.getSunk()) {
        searchForSunkElement(playerOpponent.playerGameBoard, playerOpponent.playerGameBoard.getBoardElement(row, column), name === 1 ? 1 : 2);
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
  function handleAttackShip(e, row, column, index, player, playerOpponent, opponentShips, opponentShots, tempDisablePlayer, tempDisableOpponent, name) {
    const playerShips = opponentShips;
    const playerShots = opponentShots;
    const disablePlayer = tempDisablePlayer;
    const disableOpponent = tempDisableOpponent;
    if (e.currentTarget.style.backgroundColor !== "white") {
      return null;
    }
    const res = playerOpponent.playerGameBoard.receiveAttack(row, column);
    updateUiAfterAttack(res, e, playerShips, index, playerOpponent, row, column, name);
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
    const player1Shots = document.querySelectorAll(".player-1-board__shots > div");
    const player2Shots = document.querySelectorAll(".player-2-board__shots > div");
    const player1Ships = document.querySelectorAll(".player-1-board__ships > div");
    const player2Ships = document.querySelectorAll(".player-2-board__ships > div");
    let count = 0;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const index = count;
        const row = i;
        const column = j;
        player1Shots[index].addEventListener("click", e => {
          handleAttackShip(e, row, column, index, player1, player2, player2Ships, player2Shots, disablePlayer1, disablePlayer2, 1);
        });
        player2Shots[index].addEventListener("click", e => {
          handleAttackShip(e, row, column, index, player2, player1, player1Ships, player1Shots, disablePlayer2, disablePlayer1, 2);
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
    placeShipsOnBoard
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/gameboard.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/gameboard.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main{
    display: flex;
    justify-content: center;
    gap: 100px;
}

.boards{
    display: flex;
    justify-content: center;
}

.player-1-board,
.player-2-board{
    width: 280px;
    aspect-ratio: 1/1;
}

.player-1-board__ships,
.player-1-board__shots,
.player-2-board__ships,
.player-2-board__shots{
    aspect-ratio: 1/1;
    display:grid;
    grid-template-columns: repeat(10, 1fr);
}
`, "",{"version":3,"sources":["webpack://./src/css/gameboard.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;;;IAII,iBAAiB;IACjB,YAAY;IACZ,sCAAsC;AAC1C","sourcesContent":["main{\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n}\n\n.boards{\n    display: flex;\n    justify-content: center;\n}\n\n.player-1-board,\n.player-2-board{\n    width: 280px;\n    aspect-ratio: 1/1;\n}\n\n.player-1-board__ships,\n.player-1-board__shots,\n.player-2-board__ships,\n.player-2-board__shots{\n    aspect-ratio: 1/1;\n    display:grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/logo.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/logo.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.logo{
    display: flex;
    align-items: center;
    text-decoration: none;
    color:black;
}

.logo img{
    max-width: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/css/logo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".logo{\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color:black;\n}\n\n.logo img{\n    max-width: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/score.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/score.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.score{
    align-self: center;

}`, "",{"version":3,"sources":["webpack://./src/css/score.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;;AAEtB","sourcesContent":[".score{\n    align-self: center;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/temporaryShip.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/temporaryShip.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.temporaryShip{
    border:1px solid green;
}
`, "",{"version":3,"sources":["webpack://./src/css/temporaryShip.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B","sourcesContent":[".temporaryShip{\n    border:1px solid green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    border:2px solid red;
    margin:4px;
    box-sizing: border-box;
}










`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,UAAU;IACV,sBAAsB;AAC1B","sourcesContent":["*{\n    border:2px solid red;\n    margin:4px;\n    box-sizing: border-box;\n}\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/gameboard.css":
/*!*******************************!*\
  !*** ./src/css/gameboard.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/logo.css":
/*!**************************!*\
  !*** ./src/css/logo.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_logo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./logo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/logo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_logo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_logo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_logo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_logo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/score.css":
/*!***************************!*\
  !*** ./src/css/score.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./score.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/score.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/temporaryShip.css":
/*!***********************************!*\
  !*** ./src/css/temporaryShip.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_temporaryShip_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./temporaryShip.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/temporaryShip.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_temporaryShip_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_temporaryShip_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_temporaryShip_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_temporaryShip_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _css_score_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/score.css */ "./src/css/score.css");
/* harmony import */ var _css_logo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/logo.css */ "./src/css/logo.css");
/* harmony import */ var _css_gameboard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/gameboard.css */ "./src/css/gameboard.css");
/* harmony import */ var _css_temporaryShip_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/temporaryShip.css */ "./src/css/temporaryShip.css");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _userInterface_UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userInterface/UI */ "./src/userInterface/UI.js");
/* harmony import */ var _player_computer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/computer */ "./src/player/computer.js");








const UI = (0,_userInterface_UI__WEBPACK_IMPORTED_MODULE_6__["default"])();
UI.chooseNumberOfPlayers().then(numPlayers => {
  UI.createGrids();
  UI.showBoardEvent();
  let player1;
  let player2;
  if (numPlayers === 1) {
    player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_5__["default"])("User");
    player2 = (0,_player_computer__WEBPACK_IMPORTED_MODULE_7__["default"])();
  } else {
    player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_5__["default"])("User");
    player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_5__["default"])("User2");
  }
  UI.placeShipsOnBoard(player1, player2).then(() => {
    UI.showShips(player1.playerGameBoard, player2.playerGameBoard);
    UI.attackEvent(player1, player2);
    console.log("done");
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUduRSw0REFBUSxDQUFDLENBQUM7RUFDdEIsQ0FBQyxNQUFNO0lBQ0xrRSxPQUFPLEdBQUduRSwwREFBTSxDQUFDLE1BQU0sQ0FBQztJQUN4Qm9FLE9BQU8sR0FBR3BFLDBEQUFNLENBQUMsT0FBTyxDQUFDO0VBQzNCO0VBRUFzRyxFQUFFLENBQUNwQyxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLENBQUMsQ0FBQ21DLElBQUksQ0FBQyxNQUFNO0lBQ2hERCxFQUFFLENBQUM1QyxTQUFTLENBQUNTLE9BQU8sQ0FBQ2pFLGVBQWUsRUFBRWtFLE9BQU8sQ0FBQ2xFLGVBQWUsQ0FBQztJQUM5RG9HLEVBQUUsQ0FBQ0gsV0FBVyxDQUFDaEMsT0FBTyxFQUFFQyxPQUFPLENBQUM7SUFDaENxQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvZ2FtZUJvYXJkL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvcGxheWVyL2NvbXB1dGVyLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3VzZXJJbnRlcmZhY2UvVUkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3MvbG9nby5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9zY29yZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy90ZW1wb3JhcnlTaGlwLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9nYW1lYm9hcmQuY3NzPzYyMDQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9sb2dvLmNzcz84NzdhIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3Mvc2NvcmUuY3NzPzk2MzIiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy90ZW1wb3JhcnlTaGlwLmNzcz84MjhkIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcCBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgICAgYm9hcmQucHVzaCh7XG4gICAgICAgICAgcm93OiByb3cgKyBpLFxuICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICBzaGlwOiBuZXdTaGlwLFxuICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZC5wdXNoKHtcbiAgICAgICAgICByb3csXG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4gKyBpLFxuICAgICAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb2FyZEVsZW1lbnQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQuZmluZCgoZWwpID0+IGVsLnJvdyA9PT0gcm93ICYmIGVsLmNvbHVtbiA9PT0gY29sdW1uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pc3NlZEVsZW1lbnQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gbWlzc2VkQXR0YWNrcy5maW5kKChlbCkgPT4gZWwucm93ID09PSByb3cgJiYgZWwuY29sdW1uID09PSBjb2x1bW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBib2FyZC5pbmRleE9mKFxuICAgICAgYm9hcmQuZmluZCgoZWwpID0+IGVsLnJvdyA9PT0gcm93ICYmIGVsLmNvbHVtbiA9PT0gY29sdW1uKVxuICAgICk7XG4gICAgaWYgKGVsZW1lbnQgIT09IC0xKSB7XG4gICAgICBib2FyZFtlbGVtZW50XS5zaGlwLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG1pc3NlZEF0dGFja3MucHVzaCh7IHJvdywgY29sdW1uIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzR2FtZUZpbmlzaGVkKCkge1xuICAgIGlmIChib2FyZC5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICghYm9hcmRbaV0uc2hpcC5nZXRTdW5rKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBnZXRCb2FyZEVsZW1lbnQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRNaXNzZWRFbGVtZW50LFxuICAgIGlzR2FtZUZpbmlzaGVkLFxuICB9O1xufVxuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi4vZ2FtZUJvYXJkL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZnVuY3Rpb24gY29tcHV0ZXIoKSB7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gbnVsbDtcbiAgY29uc3QgYXR0YWNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbWl6ZUF0dGFjaygpIHtcbiAgICBsZXQgcmFuZG9tO1xuXG4gICAgZG8ge1xuICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9IHdoaWxlIChhdHRhY2tzLmluY2x1ZGVzKHJhbmRvbSkpO1xuXG4gICAgYXR0YWNrcy5wdXNoKHJhbmRvbSk7XG4gICAgcmV0dXJuIHJhbmRvbTtcbiAgfVxuXG4gIHJldHVybiB7IHBsYXllckdhbWVCb2FyZCwgcGxheWVyTmFtZSwgcmFuZG9taXplQXR0YWNrIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVyO1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi4vZ2FtZUJvYXJkL2dhbWVCb2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXIobmFtZSkge1xuICAvLyBjYXJlZnVsOiBpZiBpIGluc2VydCBjb21wdXRlciBhcyBteSB1c2VybmFtZSBpdCBjb3VsZCBiZSBwcm9ibGVtYXRpY1xuICBjb25zdCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJOYW1lIH07XG59XG4iLCJmdW5jdGlvbiBzaGlwKHNoaXBMZW5ndGgpIHtcbiAgbGV0IG5UaW1lc0hpdCA9IDA7XG4gIGxldCBsZW5ndGggPSBzaGlwTGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBuVGltZXNIaXQgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN1bmsoKSB7XG4gICAgaWYgKG5UaW1lc0hpdCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgZ2V0U3VuaywgZ2V0TGVuZ3RoIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aSgpIHtcbiAgZnVuY3Rpb24gY3JlYXRlR3JpZHMoKSB7XG4gICAgY29uc3QgcGxheWVyMVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZF9fc2hpcHNcIik7XG4gICAgY29uc3QgcGxheWVyMVNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZF9fc2hvdHNcIik7XG4gICAgY29uc3QgcGxheWVyMlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZF9fc2hpcHNcIik7XG4gICAgY29uc3QgcGxheWVyMlNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZF9fc2hvdHNcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2MS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICBkaXYyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIGRpdjMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgZGl2NC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG5cbiAgICAgIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICAgIHBsYXllcjFTaG90cy5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICAgIHBsYXllcjJTaG90cy5hcHBlbmRDaGlsZChkaXY0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Qm9hcmRFdmVudCgpIHtcbiAgICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaGlwc1wiKTtcblxuICAgIHBsYXllcjFTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBwbGF5ZXIyU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgICBjb25zdCBidHRuUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRfX2J0dG5cIik7XG4gICAgY29uc3QgYnR0blBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19idHRuXCIpO1xuXG4gICAgYnR0blBsYXllcjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIxU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgICBwbGF5ZXIxU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyMVNoaXBzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnR0blBsYXllcjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIyU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgICBwbGF5ZXIyU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyMlNoaXBzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgbWFpbi5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNXB4KVwiO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDaG9vc2UgdGhlIG51bWJlciBvZiBodW1hbiBwbGF5ZXJzOlwiO1xuICAgICAgY29uc3QgYnR0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnR0bjEudGV4dENvbnRlbnQgPSBcIjEgUGxheWVyIChhbmQgb25lIGNvbXB1dGVyIHBsYXllcilcIjtcbiAgICAgIGNvbnN0IGJ0dG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ0dG4yLnRleHRDb250ZW50ID0gXCIyIFBsYXllcnMgKGFuZCB6ZXJvIGNvbXB1dGVyIHBsYXllcilcIjtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4yKTtcblxuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLnN0eWxlID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDo1MCU7IGxlZnQ6MzAlO1wiO1xuXG4gICAgICBidHRuMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID0gXCJibHVyKDApXCI7XG4gICAgICAgIHJlc29sdmUoMSk7XG4gICAgICB9KTtcblxuICAgICAgYnR0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBtYWluLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwKVwiO1xuICAgICAgICByZXNvbHZlKDIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBWYWx1ZXMoKSB7XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAyKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAxID8gXCJ2XCIgOiBcImhcIjtcblxuICAgIHdoaWxlIChcbiAgICAgIChkaXJlY3Rpb24gPT09IFwidlwiICYmIHJvdyArIGxlbmd0aCA+IDkpIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSBcImhcIiAmJiBjb2x1bW4gKyBsZW5ndGggPiA5KVxuICAgICkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2XCIpIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGVsc2UgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIHJldHVybiBbcm93LCBjb2x1bW4sIGxlbmd0aCwgZGlyZWN0aW9uXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZlcmlmeVZhbHVlcyhbcm93LCBjb2x1bW4sIGxlbmd0aCwgZGlyZWN0aW9uXSwgcGxheWVyKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocGxheWVyLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgY29sdW1uKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IGNvbHVtbiArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChyb3csIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVRlbXBvcmFyeVNoaXBPbnRvQm9hcmQoW3JvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbl0sIG51bSkge1xuICAgIGxldCBib2FyZFNoaXBzO1xuXG4gICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgYm9hcmRTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzID4gZGl2XCIpO1xuICAgIH0gZWxzZSBpZiAobnVtID09PSAyKSB7XG4gICAgICBib2FyZFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMgPiBkaXZcIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgYm9hcmRTaGlwc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcG9yYXJ5U2hpcFwiKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkU2hpcHNbaSAqIDEwICsgY29sdW1uXS5jbGFzc0xpc3QuYWRkKFwidGVtcG9yYXJ5U2hpcFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPCBjb2x1bW4gKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFNoaXBzW3JvdyAqIDEwICsgaV0uY2xhc3NMaXN0LmFkZChcInRlbXBvcmFyeVNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1NoaXBzKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSB7XG4gICAgY29uc3QgcGxheWVyMVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0xLWJvYXJkX19zaGlwcyA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTItYm9hcmRfX3NoaXBzID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHBsYXllcjFCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaik7XG4gICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBsYXllcjFTaGlwc1tjb3VudF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzMiA9IHBsYXllcjJCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaik7XG4gICAgICAgIGlmIChyZXMyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIyU2hpcHNbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwc09uQm9hcmQocGxheWVyMSwgcGxheWVyMikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpO1xuICAgICAgbGV0IHZhbG9yaTEgPSBbXTtcbiAgICAgIGxldCB2YWxvcmkyID0gW107XG4gICAgICBjb25zdCByYW5kb21pemVCdHRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnBsYXllci0xLXJhbmRvbWl6ZV9fc2hpcFwiXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9taXplQnR0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5wbGF5ZXItMi1yYW5kb21pemVfX3NoaXBcIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHBsYWNlQnV0dG9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtcmFuZG9taXplX19wbGFjZVwiKTtcbiAgICAgIGNvbnN0IHBsYWNlQnV0dG9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItcmFuZG9taXplX19wbGFjZVwiKTtcblxuICAgICAgcmFuZG9taXplQnR0bjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdmFsb3JpMSA9IGdlbmVyYXRlU2hpcFZhbHVlcygpO1xuICAgICAgICB3aGlsZSAoIXZlcmlmeVZhbHVlcyh2YWxvcmkxLCBwbGF5ZXIxKSkge1xuICAgICAgICAgIHZhbG9yaTEgPSBnZW5lcmF0ZVNoaXBWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBwbGFjZVRlbXBvcmFyeVNoaXBPbnRvQm9hcmQodmFsb3JpMSwgMSk7XG4gICAgICB9KTtcbiAgICAgIHJhbmRvbWl6ZUJ0dG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHZhbG9yaTIgPSBnZW5lcmF0ZVNoaXBWYWx1ZXMoKTtcbiAgICAgICAgd2hpbGUgKCF2ZXJpZnlWYWx1ZXModmFsb3JpMiwgcGxheWVyMikpIHtcbiAgICAgICAgICB2YWxvcmkyID0gZ2VuZXJhdGVTaGlwVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcGxhY2VUZW1wb3JhcnlTaGlwT250b0JvYXJkKHZhbG9yaTIsIDIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBsYWNlQnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgdmFsb3JpMVswXSxcbiAgICAgICAgICB2YWxvcmkxWzFdLFxuICAgICAgICAgIHZhbG9yaTFbMl0sXG4gICAgICAgICAgdmFsb3JpMVszXVxuICAgICAgICApO1xuICAgICAgICBzaG93U2hpcHMocGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQsIHBsYXllcjIucGxheWVyR2FtZUJvYXJkKTtcbiAgICAgIH0pO1xuXG4gICAgICBwbGFjZUJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIHZhbG9yaTJbMF0sXG4gICAgICAgICAgdmFsb3JpMlsxXSxcbiAgICAgICAgICB2YWxvcmkyWzJdLFxuICAgICAgICAgIHZhbG9yaTJbM11cbiAgICAgICAgKTtcbiAgICAgICAgc2hvd1NoaXBzKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLCBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZCk7XG4gICAgICB9KTtcblxuICAgICAgc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBsYWNlQnV0dG9uMS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBsYWNlQnV0dG9uMSk7XG4gICAgICAgIHBsYWNlQnV0dG9uMi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBsYWNlQnV0dG9uMik7XG4gICAgICAgIHN0YXJ0R2FtZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHN0YXJ0R2FtZSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VhcmNoRm9yU3Vua0VsZW1lbnQocGxheWVyR2FtZUJvYXJkLCBlbGVtZW50LCBwbGF5ZXIpIHtcbiAgICBsZXQgcGxheWVyU2hpcHM7XG4gICAgbGV0IHBsYXllclNob3RzO1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIHBsYXllclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMgPiBkaXZcIik7XG4gICAgICBwbGF5ZXJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLTEtYm9hcmRfX3Nob3RzID4gZGl2XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzID4gZGl2XCIpO1xuICAgICAgcGxheWVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci0yLWJvYXJkX19zaG90cyA+IGRpdlwiKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikuc2hpcCA9PT0gZWxlbWVudC5zaGlwXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllclNoaXBzW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzZTA3MDNcIjtcbiAgICAgICAgICBwbGF5ZXJTaG90c1tjb3VudF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjM2UwNzAzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVVpQWZ0ZXJBdHRhY2soXG4gICAgcmVzLFxuICAgIGUsXG4gICAgc2hpcHMsXG4gICAgaW5kZXgsXG4gICAgcGxheWVyT3Bwb25lbnQsXG4gICAgcm93LFxuICAgIGNvbHVtbixcbiAgICBuYW1lXG4gICkge1xuICAgIGNvbnN0IHBsYXllclNoaXBzID0gc2hpcHM7XG4gICAgaWYgKHJlcyA9PT0gdHJ1ZSkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICBwbGF5ZXJTaGlwc1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVyT3Bwb25lbnQucGxheWVyR2FtZUJvYXJkXG4gICAgICAgICAgLmdldEJvYXJkRWxlbWVudChyb3csIGNvbHVtbilcbiAgICAgICAgICAuc2hpcC5nZXRTdW5rKClcbiAgICAgICkge1xuICAgICAgICBzZWFyY2hGb3JTdW5rRWxlbWVudChcbiAgICAgICAgICBwbGF5ZXJPcHBvbmVudC5wbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgICAgcGxheWVyT3Bwb25lbnQucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChyb3csIGNvbHVtbiksXG4gICAgICAgICAgbmFtZSA9PT0gMSA/IDEgOiAyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXMgPT09IGZhbHNlKSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgICBwbGF5ZXJTaGlwc1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0dhbWVPdmVyKHdpbm5lck5hbWUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5yZW1vdmUoKTtcbiAgICBjb25zdCBmaW5hbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGZpbmFsVGl0bGUudGV4dENvbnRlbnQgPSBgR2FtZSBGaW5pc2hlZCEgJHt3aW5uZXJOYW1lfSB3b24hYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5hcHBlbmRDaGlsZChmaW5hbFRpdGxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUF0dGFja1NoaXAoXG4gICAgZSxcbiAgICByb3csXG4gICAgY29sdW1uLFxuICAgIGluZGV4LFxuICAgIHBsYXllcixcbiAgICBwbGF5ZXJPcHBvbmVudCxcbiAgICBvcHBvbmVudFNoaXBzLFxuICAgIG9wcG9uZW50U2hvdHMsXG4gICAgdGVtcERpc2FibGVQbGF5ZXIsXG4gICAgdGVtcERpc2FibGVPcHBvbmVudCxcbiAgICBuYW1lXG4gICkge1xuICAgIGNvbnN0IHBsYXllclNoaXBzID0gb3Bwb25lbnRTaGlwcztcbiAgICBjb25zdCBwbGF5ZXJTaG90cyA9IG9wcG9uZW50U2hvdHM7XG4gICAgY29uc3QgZGlzYWJsZVBsYXllciA9IHRlbXBEaXNhYmxlUGxheWVyO1xuICAgIGNvbnN0IGRpc2FibGVPcHBvbmVudCA9IHRlbXBEaXNhYmxlT3Bwb25lbnQ7XG5cbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gcGxheWVyT3Bwb25lbnQucGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuICAgIHVwZGF0ZVVpQWZ0ZXJBdHRhY2soXG4gICAgICByZXMsXG4gICAgICBlLFxuICAgICAgcGxheWVyU2hpcHMsXG4gICAgICBpbmRleCxcbiAgICAgIHBsYXllck9wcG9uZW50LFxuICAgICAgcm93LFxuICAgICAgY29sdW1uLFxuICAgICAgbmFtZVxuICAgICk7XG5cbiAgICBpZiAocGxheWVyT3Bwb25lbnQucGxheWVyR2FtZUJvYXJkLmlzR2FtZUZpbmlzaGVkKCkpIHtcbiAgICAgIHNob3dHYW1lT3ZlcihwbGF5ZXIucGxheWVyTmFtZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZVBsYXllci5pbmVydCA9IHRydWU7XG4gICAgZGlzYWJsZU9wcG9uZW50LmluZXJ0ID0gZmFsc2U7XG5cbiAgICBpZiAocGxheWVyT3Bwb25lbnQucGxheWVyTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmFuZG9tID0gcGxheWVyT3Bwb25lbnQucmFuZG9taXplQXR0YWNrKCk7XG4gICAgICBwbGF5ZXJTaG90c1tyYW5kb21dLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tFdmVudChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgY29uc3QgZGlzYWJsZVBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaG90c1wiKTtcbiAgICBjb25zdCBkaXNhYmxlUGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX3Nob3RzXCIpO1xuXG4gICAgY29uc3QgcGxheWVyMVNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0xLWJvYXJkX19zaG90cyA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTItYm9hcmRfX3Nob3RzID4gZGl2XCJcbiAgICApO1xuICAgIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0yLWJvYXJkX19zaGlwcyA+IGRpdlwiXG4gICAgKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGNvdW50O1xuICAgICAgICBjb25zdCByb3cgPSBpO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBqO1xuXG4gICAgICAgIHBsYXllcjFTaG90c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaGFuZGxlQXR0YWNrU2hpcChcbiAgICAgICAgICAgIGUsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIHBsYXllcjEsXG4gICAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgICAgcGxheWVyMlNoaXBzLFxuICAgICAgICAgICAgcGxheWVyMlNob3RzLFxuICAgICAgICAgICAgZGlzYWJsZVBsYXllcjEsXG4gICAgICAgICAgICBkaXNhYmxlUGxheWVyMixcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBwbGF5ZXIyU2hvdHNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUF0dGFja1NoaXAoXG4gICAgICAgICAgICBlLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICAgIHBsYXllcjFTaGlwcyxcbiAgICAgICAgICAgIHBsYXllcjFTaG90cyxcbiAgICAgICAgICAgIGRpc2FibGVQbGF5ZXIyLFxuICAgICAgICAgICAgZGlzYWJsZVBsYXllcjEsXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUdyaWRzLFxuICAgIGNob29zZU51bWJlck9mUGxheWVycyxcbiAgICBzaG93U2hpcHMsXG4gICAgYXR0YWNrRXZlbnQsXG4gICAgc2hvd0JvYXJkRXZlbnQsXG4gICAgcGxhY2VTaGlwc09uQm9hcmQsXG4gIH07XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTAwcHg7XG59XG5cbi5ib2FyZHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBsYXllci0xLWJvYXJkLFxuLnBsYXllci0yLWJvYXJke1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cblxuLnBsYXllci0xLWJvYXJkX19zaGlwcyxcbi5wbGF5ZXItMS1ib2FyZF9fc2hvdHMsXG4ucGxheWVyLTItYm9hcmRfX3NoaXBzLFxuLnBsYXllci0yLWJvYXJkX19zaG90c3tcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0lBSUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLTEtYm9hcmQsXFxuLnBsYXllci0yLWJvYXJke1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4ucGxheWVyLTEtYm9hcmRfX3NoaXBzLFxcbi5wbGF5ZXItMS1ib2FyZF9fc2hvdHMsXFxuLnBsYXllci0yLWJvYXJkX19zaGlwcyxcXG4ucGxheWVyLTItYm9hcmRfX3Nob3Rze1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG4ubG9nbyBpbWd7XG4gICAgbWF4LXdpZHRoOiAzMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xvZ28uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjpibGFjaztcXG59XFxuXFxuLmxvZ28gaW1ne1xcbiAgICBtYXgtd2lkdGg6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNjb3Jle1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zY29yZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY29yZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50ZW1wb3JhcnlTaGlwe1xuICAgIGJvcmRlcjoxcHggc29saWQgZ3JlZW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGVtcG9yYXJ5U2hpcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRlbXBvcmFyeVNoaXB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbiAgICBtYXJnaW46NHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcbiAgICBtYXJnaW46NHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ28uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZW1wb3JhcnlTaGlwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlbXBvcmFyeVNoaXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3Njb3JlLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbG9nby5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2dhbWVib2FyZC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3RlbXBvcmFyeVNoaXAuY3NzXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllci9wbGF5ZXJcIjtcbmltcG9ydCB1aSBmcm9tIFwiLi91c2VySW50ZXJmYWNlL1VJXCI7XG5pbXBvcnQgY29tcHV0ZXIgZnJvbSBcIi4vcGxheWVyL2NvbXB1dGVyXCI7XG5cbmNvbnN0IFVJID0gdWkoKTtcblVJLmNob29zZU51bWJlck9mUGxheWVycygpLnRoZW4oKG51bVBsYXllcnMpID0+IHtcbiAgVUkuY3JlYXRlR3JpZHMoKTtcbiAgVUkuc2hvd0JvYXJkRXZlbnQoKTtcbiAgbGV0IHBsYXllcjE7XG4gIGxldCBwbGF5ZXIyO1xuICBpZiAobnVtUGxheWVycyA9PT0gMSkge1xuICAgIHBsYXllcjEgPSBwbGF5ZXIoXCJVc2VyXCIpO1xuICAgIHBsYXllcjIgPSBjb21wdXRlcigpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllcjEgPSBwbGF5ZXIoXCJVc2VyXCIpO1xuICAgIHBsYXllcjIgPSBwbGF5ZXIoXCJVc2VyMlwiKTtcbiAgfVxuXG4gIFVJLnBsYWNlU2hpcHNPbkJvYXJkKHBsYXllcjEsIHBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgIFVJLnNob3dTaGlwcyhwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCwgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQpO1xuICAgIFVJLmF0dGFja0V2ZW50KHBsYXllcjEsIHBsYXllcjIpO1xuICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJzaGlwIiwiZ2FtZUJvYXJkIiwiYm9hcmQiLCJtaXNzZWRBdHRhY2tzIiwicGxhY2VTaGlwIiwicm93IiwiY29sdW1uIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwibmV3U2hpcCIsImkiLCJwdXNoIiwiZ2V0Qm9hcmRFbGVtZW50IiwiZmluZCIsImVsIiwiZ2V0TWlzc2VkRWxlbWVudCIsInJlY2VpdmVBdHRhY2siLCJlbGVtZW50IiwiaW5kZXhPZiIsImhpdCIsImlzR2FtZUZpbmlzaGVkIiwiZ2V0U3VuayIsInBsYXllciIsImNvbXB1dGVyIiwicGxheWVyR2FtZUJvYXJkIiwicGxheWVyTmFtZSIsImF0dGFja3MiLCJyYW5kb21pemVBdHRhY2siLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJpbmNsdWRlcyIsIm5hbWUiLCJzaGlwTGVuZ3RoIiwiblRpbWVzSGl0IiwiZ2V0TGVuZ3RoIiwidWkiLCJjcmVhdGVHcmlkcyIsInBsYXllcjFTaGlwcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXllcjFTaG90cyIsInBsYXllcjJTaGlwcyIsInBsYXllcjJTaG90cyIsImRpdjEiLCJjcmVhdGVFbGVtZW50IiwiZGl2MiIsImRpdjMiLCJkaXY0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsInNob3dCb2FyZEV2ZW50IiwidmlzaWJpbGl0eSIsImJ0dG5QbGF5ZXIxIiwiYnR0blBsYXllcjIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJtYWluIiwiZmlsdGVyIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImJ0dG4xIiwiYnR0bjIiLCJjb250YWluZXIiLCJib2R5IiwicmVtb3ZlIiwiZ2VuZXJhdGVTaGlwVmFsdWVzIiwicm91bmQiLCJ2ZXJpZnlWYWx1ZXMiLCJfcmVmIiwicGxhY2VUZW1wb3JhcnlTaGlwT250b0JvYXJkIiwiX3JlZjIiLCJudW0iLCJib2FyZFNoaXBzIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsInNob3dTaGlwcyIsInBsYXllcjFCb2FyZCIsInBsYXllcjJCb2FyZCIsImNvdW50IiwiaiIsInJlcyIsInVuZGVmaW5lZCIsInJlczIiLCJwbGFjZVNoaXBzT25Cb2FyZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwic3RhcnRHYW1lIiwidmFsb3JpMSIsInZhbG9yaTIiLCJyYW5kb21pemVCdHRuMSIsInJhbmRvbWl6ZUJ0dG4yIiwicGxhY2VCdXR0b24xIiwicGxhY2VCdXR0b24yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwic2VhcmNoRm9yU3Vua0VsZW1lbnQiLCJwbGF5ZXJTaGlwcyIsInBsYXllclNob3RzIiwidXBkYXRlVWlBZnRlckF0dGFjayIsImUiLCJzaGlwcyIsImluZGV4IiwicGxheWVyT3Bwb25lbnQiLCJjdXJyZW50VGFyZ2V0Iiwic2hvd0dhbWVPdmVyIiwid2lubmVyTmFtZSIsImZpbmFsVGl0bGUiLCJoYW5kbGVBdHRhY2tTaGlwIiwib3Bwb25lbnRTaGlwcyIsIm9wcG9uZW50U2hvdHMiLCJ0ZW1wRGlzYWJsZVBsYXllciIsInRlbXBEaXNhYmxlT3Bwb25lbnQiLCJkaXNhYmxlUGxheWVyIiwiZGlzYWJsZU9wcG9uZW50IiwiaW5lcnQiLCJjbGljayIsImF0dGFja0V2ZW50IiwiZGlzYWJsZVBsYXllcjEiLCJkaXNhYmxlUGxheWVyMiIsIlVJIiwidGhlbiIsIm51bVBsYXllcnMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==