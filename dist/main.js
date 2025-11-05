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
      player.playerGameBoard.getBoardElement();
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
      for (let i = 0; i < length; i += 1) {
        boardShips[row * 10 + column + i * 10].classList.add("temporaryShip");
        console.log(row, column, length, direction);
      }
    } else if (direction === "h") {
      for (let i = 0; i < length; i += 1) {
        boardShips[row * 10 + column + i].classList.add("temporaryShip");
        console.log(row, column, length, direction);
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
      let valori1 = [];
      let valori2 = [];
      const randomizeBttn1 = document.querySelector(".player-1-randomize__ship");
      const randomizeBttn2 = document.querySelector(".player-2-randomize__ship");
      const placeButton1 = document.querySelector(".player-1-randomize__place");
      const placeButton2 = document.querySelector(".player-2-randomize__place");
      randomizeBttn1.addEventListener("click", () => {
        valori1 = generateShipValues();
        if (verifyValues(valori1, player1)) {
          placeTemporaryShipOntoBoard(valori1, 1);
        }
      });
      randomizeBttn2.addEventListener("click", () => {
        valori2 = generateShipValues();
        if (verifyValues(valori2, player2)) {
          placeTemporaryShipOntoBoard(valori2, 2);
        }
      });
      placeButton1.addEventListener("click", () => {
        player1.playerGameBoard.placeShip(valori1[0], valori1[1], valori1[2], valori1[3]);
        showShips(player1.playerGameBoard, player2.playerGameBoard);
      });
      placeButton2.addEventListener("click", () => {
        player2.playerGameBoard.placeShip(valori2[0], valori2[1], valori2[2], valori2[3]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2dDLElBQUksQ0FBQyxNQUFNO0lBQ2hERCxFQUFFLENBQUN6QyxTQUFTLENBQUNTLE9BQU8sQ0FBQ25FLGVBQWUsRUFBRW9FLE9BQU8sQ0FBQ3BFLGVBQWUsQ0FBQztJQUM5RG1HLEVBQUUsQ0FBQ0gsV0FBVyxDQUFDN0IsT0FBTyxFQUFFQyxPQUFPLENBQUM7SUFDaENaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNyQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvdXNlckludGVyZmFjZS9VSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9sb2dvLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL3Njb3JlLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL3RlbXBvcmFyeVNoaXAuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2dhbWVib2FyZC5jc3M/NjIwNCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2xvZ28uY3NzPzg3N2EiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9zY29yZS5jc3M/OTYzMiIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL3RlbXBvcmFyeVNoaXAuY3NzPzgyOGQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGlwIGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgICBib2FyZC5wdXNoKHtcbiAgICAgICAgICByb3c6IHJvdyArIGksXG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkLnB1c2goe1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjb2x1bW46IGNvbHVtbiArIGksXG4gICAgICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvYXJkRWxlbWVudChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5maW5kKChlbCkgPT4gZWwucm93ID09PSByb3cgJiYgZWwuY29sdW1uID09PSBjb2x1bW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWlzc2VkRWxlbWVudChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBtaXNzZWRBdHRhY2tzLmZpbmQoKGVsKSA9PiBlbC5yb3cgPT09IHJvdyAmJiBlbC5jb2x1bW4gPT09IGNvbHVtbik7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGJvYXJkLmluZGV4T2YoXG4gICAgICBib2FyZC5maW5kKChlbCkgPT4gZWwucm93ID09PSByb3cgJiYgZWwuY29sdW1uID09PSBjb2x1bW4pXG4gICAgKTtcbiAgICBpZiAoZWxlbWVudCAhPT0gLTEpIHtcbiAgICAgIGJvYXJkW2VsZW1lbnRdLnNoaXAuaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKHsgcm93LCBjb2x1bW4gfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNHYW1lRmluaXNoZWQoKSB7XG4gICAgaWYgKGJvYXJkLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCFib2FyZFtpXS5zaGlwLmdldFN1bmsoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGdldEJvYXJkRWxlbWVudCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldE1pc3NlZEVsZW1lbnQsXG4gICAgaXNHYW1lRmluaXNoZWQsXG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBjb21wdXRlcigpIHtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBudWxsO1xuICBjb25zdCBhdHRhY2tzID0gW107XG5cbiAgZnVuY3Rpb24gcmFuZG9taXplQXR0YWNrKCkge1xuICAgIGxldCByYW5kb207XG5cbiAgICBkbyB7XG4gICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH0gd2hpbGUgKGF0dGFja3MuaW5jbHVkZXMocmFuZG9tKSk7XG5cbiAgICBhdHRhY2tzLnB1c2gocmFuZG9tKTtcbiAgICByZXR1cm4gcmFuZG9tO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJOYW1lLCByYW5kb21pemVBdHRhY2sgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXI7XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllcihuYW1lKSB7XG4gIC8vIGNhcmVmdWw6IGlmIGkgaW5zZXJ0IGNvbXB1dGVyIGFzIG15IHVzZXJuYW1lIGl0IGNvdWxkIGJlIHByb2JsZW1hdGljXG4gIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICByZXR1cm4geyBwbGF5ZXJHYW1lQm9hcmQsIHBsYXllck5hbWUgfTtcbn1cbiIsImZ1bmN0aW9uIHNoaXAoc2hpcExlbmd0aCkge1xuICBsZXQgblRpbWVzSGl0ID0gMDtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIG5UaW1lc0hpdCArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3VuaygpIHtcbiAgICBpZiAoblRpbWVzSGl0ID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBnZXRTdW5rLCBnZXRMZW5ndGggfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpKCkge1xuICBmdW5jdGlvbiBjcmVhdGVHcmlkcygpIHtcbiAgICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIxU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaG90c1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaG90c1wiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIGRpdjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgZGl2My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICBkaXY0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuICAgICAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgICAgcGxheWVyMVNob3RzLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgICAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgICAgcGxheWVyMlNob3RzLmFwcGVuZENoaWxkKGRpdjQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dCb2FyZEV2ZW50KCkge1xuICAgIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzXCIpO1xuICAgIGNvbnN0IHBsYXllcjJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX3NoaXBzXCIpO1xuXG4gICAgcGxheWVyMVNoaXBzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHBsYXllcjJTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICAgIGNvbnN0IGJ0dG5QbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZF9fYnR0blwiKTtcbiAgICBjb25zdCBidHRuUGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX2J0dG5cIik7XG5cbiAgICBidHRuUGxheWVyMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjFTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICAgIHBsYXllcjFTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIxU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidHRuUGxheWVyMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjJTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICAgIHBsYXllcjJTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIyU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaG9vc2VOdW1iZXJPZlBsYXllcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICBtYWluLnN0eWxlLmZpbHRlciA9IFwiYmx1cig1cHgpXCI7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNob29zZSB0aGUgbnVtYmVyIG9mIGh1bWFuIHBsYXllcnM6XCI7XG4gICAgICBjb25zdCBidHRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidHRuMS50ZXh0Q29udGVudCA9IFwiMSBQbGF5ZXIgKGFuZCBvbmUgY29tcHV0ZXIgcGxheWVyKVwiO1xuICAgICAgY29uc3QgYnR0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnR0bjIudGV4dENvbnRlbnQgPSBcIjIgUGxheWVycyAoYW5kIHplcm8gY29tcHV0ZXIgcGxheWVyKVwiO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidHRuMSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIuc3R5bGUgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjUwJTsgbGVmdDozMCU7XCI7XG5cbiAgICAgIGJ0dG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMClcIjtcbiAgICAgICAgcmVzb2x2ZSgxKTtcbiAgICAgIH0pO1xuXG4gICAgICBidHRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID0gXCJibHVyKDApXCI7XG4gICAgICAgIHJlc29sdmUoMik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2hpcFZhbHVlcygpIHtcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPT09IDEgPyBcInZcIiA6IFwiaFwiO1xuXG4gICAgd2hpbGUgKFxuICAgICAgKGRpcmVjdGlvbiA9PT0gXCJ2XCIgJiYgcm93ICsgbGVuZ3RoID4gOSkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09IFwiaFwiICYmIGNvbHVtbiArIGxlbmd0aCA+IDkpXG4gICAgKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZWxzZSBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb25dO1xuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5VmFsdWVzKFtyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb25dLCBwbGF5ZXIpIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBjb2x1bW4pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudCgpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IGNvbHVtbiArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChyb3csIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVRlbXBvcmFyeVNoaXBPbnRvQm9hcmQoW3JvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbl0sIG51bSkge1xuICAgIGxldCBib2FyZFNoaXBzO1xuXG4gICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgYm9hcmRTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzID4gZGl2XCIpO1xuICAgIH0gZWxzZSBpZiAobnVtID09PSAyKSB7XG4gICAgICBib2FyZFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMgPiBkaXZcIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgYm9hcmRTaGlwc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcG9yYXJ5U2hpcFwiKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFNoaXBzW3JvdyAqIDEwICsgY29sdW1uICsgaSAqIDEwXS5jbGFzc0xpc3QuYWRkKFwidGVtcG9yYXJ5U2hpcFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocm93LCBjb2x1bW4sIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRTaGlwc1tyb3cgKiAxMCArIGNvbHVtbiArIGldLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wb3JhcnlTaGlwXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dTaGlwcyhwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCkge1xuICAgIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0yLWJvYXJkX19zaGlwcyA+IGRpdlwiXG4gICAgKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCByZXMgPSBwbGF5ZXIxQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopO1xuICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIxU2hpcHNbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlczIgPSBwbGF5ZXIyQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopO1xuICAgICAgICBpZiAocmVzMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGxheWVyMlNoaXBzW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNPbkJvYXJkKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCB2YWxvcmkxID0gW107XG4gICAgICBsZXQgdmFsb3JpMiA9IFtdO1xuICAgICAgY29uc3QgcmFuZG9taXplQnR0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5wbGF5ZXItMS1yYW5kb21pemVfX3NoaXBcIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhbmRvbWl6ZUJ0dG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIucGxheWVyLTItcmFuZG9taXplX19zaGlwXCJcbiAgICAgICk7XG4gICAgICBjb25zdCBwbGFjZUJ1dHRvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLXJhbmRvbWl6ZV9fcGxhY2VcIik7XG4gICAgICBjb25zdCBwbGFjZUJ1dHRvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLXJhbmRvbWl6ZV9fcGxhY2VcIik7XG5cbiAgICAgIHJhbmRvbWl6ZUJ0dG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHZhbG9yaTEgPSBnZW5lcmF0ZVNoaXBWYWx1ZXMoKTtcbiAgICAgICAgaWYgKHZlcmlmeVZhbHVlcyh2YWxvcmkxLCBwbGF5ZXIxKSkge1xuICAgICAgICAgIHBsYWNlVGVtcG9yYXJ5U2hpcE9udG9Cb2FyZCh2YWxvcmkxLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByYW5kb21pemVCdHRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB2YWxvcmkyID0gZ2VuZXJhdGVTaGlwVmFsdWVzKCk7XG4gICAgICAgIGlmICh2ZXJpZnlWYWx1ZXModmFsb3JpMiwgcGxheWVyMikpIHtcbiAgICAgICAgICBwbGFjZVRlbXBvcmFyeVNoaXBPbnRvQm9hcmQodmFsb3JpMiwgMik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwbGFjZUJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIHZhbG9yaTFbMF0sXG4gICAgICAgICAgdmFsb3JpMVsxXSxcbiAgICAgICAgICB2YWxvcmkxWzJdLFxuICAgICAgICAgIHZhbG9yaTFbM11cbiAgICAgICAgKTtcbiAgICAgICAgc2hvd1NoaXBzKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLCBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZCk7XG4gICAgICB9KTtcblxuICAgICAgcGxhY2VCdXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICB2YWxvcmkyWzBdLFxuICAgICAgICAgIHZhbG9yaTJbMV0sXG4gICAgICAgICAgdmFsb3JpMlsyXSxcbiAgICAgICAgICB2YWxvcmkyWzNdXG4gICAgICAgICk7XG4gICAgICAgIHNob3dTaGlwcyhwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCwgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWFyY2hGb3JTdW5rRWxlbWVudChwbGF5ZXJHYW1lQm9hcmQsIGVsZW1lbnQsIHBsYXllcikge1xuICAgIGxldCBwbGF5ZXJTaGlwcztcbiAgICBsZXQgcGxheWVyU2hvdHM7XG4gICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci0yLWJvYXJkX19zaGlwcyA+IGRpdlwiKTtcbiAgICAgIHBsYXllclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMS1ib2FyZF9fc2hvdHMgPiBkaXZcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMgPiBkaXZcIik7XG4gICAgICBwbGF5ZXJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLTItYm9hcmRfX3Nob3RzID4gZGl2XCIpO1xuICAgIH1cblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5zaGlwID09PSBlbGVtZW50LnNoaXBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyU2hpcHNbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzNlMDcwM1wiO1xuICAgICAgICAgIHBsYXllclNob3RzW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzZTA3MDNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVWlBZnRlckF0dGFjayhcbiAgICByZXMsXG4gICAgZSxcbiAgICBzaGlwcyxcbiAgICBpbmRleCxcbiAgICBwbGF5ZXJPcHBvbmVudCxcbiAgICByb3csXG4gICAgY29sdW1uLFxuICAgIG5hbWVcbiAgKSB7XG4gICAgY29uc3QgcGxheWVyU2hpcHMgPSBzaGlwcztcbiAgICBpZiAocmVzID09PSB0cnVlKSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIHBsYXllclNoaXBzW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgaWYgKFxuICAgICAgICBwbGF5ZXJPcHBvbmVudC5wbGF5ZXJHYW1lQm9hcmRcbiAgICAgICAgICAuZ2V0Qm9hcmRFbGVtZW50KHJvdywgY29sdW1uKVxuICAgICAgICAgIC5zaGlwLmdldFN1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIHNlYXJjaEZvclN1bmtFbGVtZW50KFxuICAgICAgICAgIHBsYXllck9wcG9uZW50LnBsYXllckdhbWVCb2FyZCxcbiAgICAgICAgICBwbGF5ZXJPcHBvbmVudC5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KHJvdywgY29sdW1uKSxcbiAgICAgICAgICBuYW1lID09PSAxID8gMSA6IDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlcyA9PT0gZmFsc2UpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcbiAgICAgIHBsYXllclNoaXBzW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93R2FtZU92ZXIod2lubmVyTmFtZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnJlbW92ZSgpO1xuICAgIGNvbnN0IGZpbmFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgZmluYWxUaXRsZS50ZXh0Q29udGVudCA9IGBHYW1lIEZpbmlzaGVkISAke3dpbm5lck5hbWV9IHdvbiFgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmFwcGVuZENoaWxkKGZpbmFsVGl0bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXR0YWNrU2hpcChcbiAgICBlLFxuICAgIHJvdyxcbiAgICBjb2x1bW4sXG4gICAgaW5kZXgsXG4gICAgcGxheWVyLFxuICAgIHBsYXllck9wcG9uZW50LFxuICAgIG9wcG9uZW50U2hpcHMsXG4gICAgb3Bwb25lbnRTaG90cyxcbiAgICB0ZW1wRGlzYWJsZVBsYXllcixcbiAgICB0ZW1wRGlzYWJsZU9wcG9uZW50LFxuICAgIG5hbWVcbiAgKSB7XG4gICAgY29uc3QgcGxheWVyU2hpcHMgPSBvcHBvbmVudFNoaXBzO1xuICAgIGNvbnN0IHBsYXllclNob3RzID0gb3Bwb25lbnRTaG90cztcbiAgICBjb25zdCBkaXNhYmxlUGxheWVyID0gdGVtcERpc2FibGVQbGF5ZXI7XG4gICAgY29uc3QgZGlzYWJsZU9wcG9uZW50ID0gdGVtcERpc2FibGVPcHBvbmVudDtcblxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBcIndoaXRlXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBwbGF5ZXJPcHBvbmVudC5wbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgdXBkYXRlVWlBZnRlckF0dGFjayhcbiAgICAgIHJlcyxcbiAgICAgIGUsXG4gICAgICBwbGF5ZXJTaGlwcyxcbiAgICAgIGluZGV4LFxuICAgICAgcGxheWVyT3Bwb25lbnQsXG4gICAgICByb3csXG4gICAgICBjb2x1bW4sXG4gICAgICBuYW1lXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXJPcHBvbmVudC5wbGF5ZXJHYW1lQm9hcmQuaXNHYW1lRmluaXNoZWQoKSkge1xuICAgICAgc2hvd0dhbWVPdmVyKHBsYXllci5wbGF5ZXJOYW1lKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlUGxheWVyLmluZXJ0ID0gdHJ1ZTtcbiAgICBkaXNhYmxlT3Bwb25lbnQuaW5lcnQgPSBmYWxzZTtcblxuICAgIGlmIChwbGF5ZXJPcHBvbmVudC5wbGF5ZXJOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCByYW5kb20gPSBwbGF5ZXJPcHBvbmVudC5yYW5kb21pemVBdHRhY2soKTtcbiAgICAgIHBsYXllclNob3RzW3JhbmRvbV0uY2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja0V2ZW50KHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICBjb25zdCBkaXNhYmxlUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRfX3Nob3RzXCIpO1xuICAgIGNvbnN0IGRpc2FibGVQbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMi1ib2FyZF9fc2hvdHNcIik7XG5cbiAgICBjb25zdCBwbGF5ZXIxU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTEtYm9hcmRfX3Nob3RzID4gZGl2XCJcbiAgICApO1xuICAgIGNvbnN0IHBsYXllcjJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMi1ib2FyZF9fc2hvdHMgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0xLWJvYXJkX19zaGlwcyA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTItYm9hcmRfX3NoaXBzID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY291bnQ7XG4gICAgICAgIGNvbnN0IHJvdyA9IGk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGo7XG5cbiAgICAgICAgcGxheWVyMVNob3RzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBoYW5kbGVBdHRhY2tTaGlwKFxuICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICAgIHBsYXllcjIsXG4gICAgICAgICAgICBwbGF5ZXIyU2hpcHMsXG4gICAgICAgICAgICBwbGF5ZXIyU2hvdHMsXG4gICAgICAgICAgICBkaXNhYmxlUGxheWVyMSxcbiAgICAgICAgICAgIGRpc2FibGVQbGF5ZXIyLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYXllcjJTaG90c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaGFuZGxlQXR0YWNrU2hpcChcbiAgICAgICAgICAgIGUsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIHBsYXllcjIsXG4gICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgcGxheWVyMVNoaXBzLFxuICAgICAgICAgICAgcGxheWVyMVNob3RzLFxuICAgICAgICAgICAgZGlzYWJsZVBsYXllcjIsXG4gICAgICAgICAgICBkaXNhYmxlUGxheWVyMSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlR3JpZHMsXG4gICAgY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzLFxuICAgIHNob3dTaGlwcyxcbiAgICBhdHRhY2tFdmVudCxcbiAgICBzaG93Qm9hcmRFdmVudCxcbiAgICBwbGFjZVNoaXBzT25Cb2FyZCxcbiAgfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWlue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMDBweDtcbn1cblxuLmJvYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGxheWVyLTEtYm9hcmQsXG4ucGxheWVyLTItYm9hcmR7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4ucGxheWVyLTEtYm9hcmRfX3NoaXBzLFxuLnBsYXllci0xLWJvYXJkX19zaG90cyxcbi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMsXG4ucGxheWVyLTItYm9hcmRfX3Nob3Rze1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7Ozs7SUFJSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNDQUFzQztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItMS1ib2FyZCxcXG4ucGxheWVyLTItYm9hcmR7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMsXFxuLnBsYXllci0xLWJvYXJkX19zaG90cyxcXG4ucGxheWVyLTItYm9hcmRfX3NoaXBzLFxcbi5wbGF5ZXItMi1ib2FyZF9fc2hvdHN7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2dve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbi5sb2dvIGltZ3tcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbG9nby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2dve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG4ubG9nbyBpbWd7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2NvcmV7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Njb3JlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjs7QUFFdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjb3Jle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRlbXBvcmFyeVNoaXB7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmVlbjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90ZW1wb3JhcnlTaGlwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGVtcG9yYXJ5U2hpcHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xuICAgIG1hcmdpbjo0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxuICAgIG1hcmdpbjo0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ28uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9nby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlbXBvcmFyeVNoaXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVtcG9yYXJ5U2hpcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc2NvcmUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9sb2dvLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZ2FtZWJvYXJkLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdGVtcG9yYXJ5U2hpcC5jc3NcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IHVpIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UvVUlcIjtcbmltcG9ydCBjb21wdXRlciBmcm9tIFwiLi9wbGF5ZXIvY29tcHV0ZXJcIjtcblxuY29uc3QgVUkgPSB1aSgpO1xuVUkuY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzKCkudGhlbigobnVtUGxheWVycykgPT4ge1xuICBVSS5jcmVhdGVHcmlkcygpO1xuICBVSS5zaG93Qm9hcmRFdmVudCgpO1xuICBsZXQgcGxheWVyMTtcbiAgbGV0IHBsYXllcjI7XG4gIGlmIChudW1QbGF5ZXJzID09PSAxKSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihcIlVzZXJcIik7XG4gICAgcGxheWVyMiA9IGNvbXB1dGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihcIlVzZXJcIik7XG4gICAgcGxheWVyMiA9IHBsYXllcihcIlVzZXIyXCIpO1xuICB9XG5cbiAgVUkucGxhY2VTaGlwc09uQm9hcmQocGxheWVyMSwgcGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgVUkuc2hvd1NoaXBzKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLCBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZCk7XG4gICAgVUkuYXR0YWNrRXZlbnQocGxheWVyMSwgcGxheWVyMik7XG4gICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbInNoaXAiLCJnYW1lQm9hcmQiLCJib2FyZCIsIm1pc3NlZEF0dGFja3MiLCJwbGFjZVNoaXAiLCJyb3ciLCJjb2x1bW4iLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJuZXdTaGlwIiwiaSIsInB1c2giLCJnZXRCb2FyZEVsZW1lbnQiLCJmaW5kIiwiZWwiLCJnZXRNaXNzZWRFbGVtZW50IiwicmVjZWl2ZUF0dGFjayIsImVsZW1lbnQiLCJpbmRleE9mIiwiaGl0IiwiaXNHYW1lRmluaXNoZWQiLCJnZXRTdW5rIiwicGxheWVyIiwiY29tcHV0ZXIiLCJwbGF5ZXJHYW1lQm9hcmQiLCJwbGF5ZXJOYW1lIiwiYXR0YWNrcyIsInJhbmRvbWl6ZUF0dGFjayIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImluY2x1ZGVzIiwibmFtZSIsInNoaXBMZW5ndGgiLCJuVGltZXNIaXQiLCJnZXRMZW5ndGgiLCJ1aSIsImNyZWF0ZUdyaWRzIiwicGxheWVyMVNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNob3RzIiwicGxheWVyMlNoaXBzIiwicGxheWVyMlNob3RzIiwiZGl2MSIsImNyZWF0ZUVsZW1lbnQiLCJkaXYyIiwiZGl2MyIsImRpdjQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwic2hvd0JvYXJkRXZlbnQiLCJ2aXNpYmlsaXR5IiwiYnR0blBsYXllcjEiLCJidHRuUGxheWVyMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaG9vc2VOdW1iZXJPZlBsYXllcnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1haW4iLCJmaWx0ZXIiLCJ0aXRsZSIsInRleHRDb250ZW50IiwiYnR0bjEiLCJidHRuMiIsImNvbnRhaW5lciIsImJvZHkiLCJyZW1vdmUiLCJnZW5lcmF0ZVNoaXBWYWx1ZXMiLCJyb3VuZCIsInZlcmlmeVZhbHVlcyIsIl9yZWYiLCJwbGFjZVRlbXBvcmFyeVNoaXBPbnRvQm9hcmQiLCJfcmVmMiIsIm51bSIsImJvYXJkU2hpcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInNob3dTaGlwcyIsInBsYXllcjFCb2FyZCIsInBsYXllcjJCb2FyZCIsImNvdW50IiwiaiIsInJlcyIsInVuZGVmaW5lZCIsInJlczIiLCJwbGFjZVNoaXBzT25Cb2FyZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwidmFsb3JpMSIsInZhbG9yaTIiLCJyYW5kb21pemVCdHRuMSIsInJhbmRvbWl6ZUJ0dG4yIiwicGxhY2VCdXR0b24xIiwicGxhY2VCdXR0b24yIiwic2VhcmNoRm9yU3Vua0VsZW1lbnQiLCJwbGF5ZXJTaGlwcyIsInBsYXllclNob3RzIiwidXBkYXRlVWlBZnRlckF0dGFjayIsImUiLCJzaGlwcyIsImluZGV4IiwicGxheWVyT3Bwb25lbnQiLCJjdXJyZW50VGFyZ2V0Iiwic2hvd0dhbWVPdmVyIiwid2lubmVyTmFtZSIsImZpbmFsVGl0bGUiLCJoYW5kbGVBdHRhY2tTaGlwIiwib3Bwb25lbnRTaGlwcyIsIm9wcG9uZW50U2hvdHMiLCJ0ZW1wRGlzYWJsZVBsYXllciIsInRlbXBEaXNhYmxlT3Bwb25lbnQiLCJkaXNhYmxlUGxheWVyIiwiZGlzYWJsZU9wcG9uZW50IiwiaW5lcnQiLCJjbGljayIsImF0dGFja0V2ZW50IiwiZGlzYWJsZVBsYXllcjEiLCJkaXNhYmxlUGxheWVyMiIsIlVJIiwidGhlbiIsIm51bVBsYXllcnMiXSwic291cmNlUm9vdCI6IiJ9