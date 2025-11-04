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
    showBoardEvent
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
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _userInterface_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInterface/UI */ "./src/userInterface/UI.js");
/* harmony import */ var _player_computer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/computer */ "./src/player/computer.js");







const UI = (0,_userInterface_UI__WEBPACK_IMPORTED_MODULE_5__["default"])();
UI.chooseNumberOfPlayers().then(numPlayers => {
  UI.createGrids();
  UI.showBoardEvent();
  let player1;
  let player2;
  if (numPlayers === 1) {
    player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_4__["default"])("User");
    player2 = (0,_player_computer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  } else {
    player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_4__["default"])("User");
    player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_4__["default"])("User2");
  }
  player1.playerGameBoard.placeShip(3, 4, 3, "h");
  player1.playerGameBoard.placeShip(6, 3, 3, "v");
  player1.playerGameBoard.placeShip(1, 8, 2, "v");
  player1.playerGameBoard.placeShip(7, 5, 4, "h");
  player2.playerGameBoard.placeShip(7, 1, 5, "h");
  player2.playerGameBoard.placeShip(3, 3, 5, "v");
  player2.playerGameBoard.placeShip(1, 5, 2, "h");
  player2.playerGameBoard.placeShip(7, 5, 4, "h");
  UI.showShips(player1.playerGameBoard, player2.playerGameBoard);
  UI.attackEvent(player1, player2);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvdXNlckludGVyZmFjZS9VSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9sb2dvLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL3Njb3JlLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9nYW1lYm9hcmQuY3NzPzYyMDQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9sb2dvLmNzcz84NzdhIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3Mvc2NvcmUuY3NzPzk2MzIiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGlwIGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgICBib2FyZC5wdXNoKHtcbiAgICAgICAgICByb3c6IHJvdyArIGksXG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkLnB1c2goe1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjb2x1bW46IGNvbHVtbiArIGksXG4gICAgICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvYXJkRWxlbWVudChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5maW5kKChlbCkgPT4gZWwucm93ID09PSByb3cgJiYgZWwuY29sdW1uID09PSBjb2x1bW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWlzc2VkRWxlbWVudChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBtaXNzZWRBdHRhY2tzLmZpbmQoKGVsKSA9PiBlbC5yb3cgPT09IHJvdyAmJiBlbC5jb2x1bW4gPT09IGNvbHVtbik7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGJvYXJkLmluZGV4T2YoXG4gICAgICBib2FyZC5maW5kKChlbCkgPT4gZWwucm93ID09PSByb3cgJiYgZWwuY29sdW1uID09PSBjb2x1bW4pXG4gICAgKTtcbiAgICBpZiAoZWxlbWVudCAhPT0gLTEpIHtcbiAgICAgIGJvYXJkW2VsZW1lbnRdLnNoaXAuaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKHsgcm93LCBjb2x1bW4gfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNHYW1lRmluaXNoZWQoKSB7XG4gICAgaWYgKGJvYXJkLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCFib2FyZFtpXS5zaGlwLmdldFN1bmsoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGdldEJvYXJkRWxlbWVudCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldE1pc3NlZEVsZW1lbnQsXG4gICAgaXNHYW1lRmluaXNoZWQsXG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBjb21wdXRlcigpIHtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBudWxsO1xuICBjb25zdCBhdHRhY2tzID0gW107XG5cbiAgZnVuY3Rpb24gcmFuZG9taXplQXR0YWNrKCkge1xuICAgIGxldCByYW5kb207XG5cbiAgICBkbyB7XG4gICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH0gd2hpbGUgKGF0dGFja3MuaW5jbHVkZXMocmFuZG9tKSk7XG5cbiAgICBhdHRhY2tzLnB1c2gocmFuZG9tKTtcbiAgICByZXR1cm4gcmFuZG9tO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJOYW1lLCByYW5kb21pemVBdHRhY2sgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXI7XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllcihuYW1lKSB7XG4gIC8vIGNhcmVmdWw6IGlmIGkgaW5zZXJ0IGNvbXB1dGVyIGFzIG15IHVzZXJuYW1lIGl0IGNvdWxkIGJlIHByb2JsZW1hdGljXG4gIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICByZXR1cm4geyBwbGF5ZXJHYW1lQm9hcmQsIHBsYXllck5hbWUgfTtcbn1cbiIsImZ1bmN0aW9uIHNoaXAoc2hpcExlbmd0aCkge1xuICBsZXQgblRpbWVzSGl0ID0gMDtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIG5UaW1lc0hpdCArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3VuaygpIHtcbiAgICBpZiAoblRpbWVzSGl0ID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBnZXRTdW5rLCBnZXRMZW5ndGggfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpKCkge1xuICBmdW5jdGlvbiBjcmVhdGVHcmlkcygpIHtcbiAgICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIxU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaG90c1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaG90c1wiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIGRpdjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgZGl2My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICBkaXY0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuICAgICAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgICAgcGxheWVyMVNob3RzLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgICAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgICAgcGxheWVyMlNob3RzLmFwcGVuZENoaWxkKGRpdjQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dCb2FyZEV2ZW50KCkge1xuICAgIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzXCIpO1xuICAgIGNvbnN0IHBsYXllcjJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX3NoaXBzXCIpO1xuXG4gICAgcGxheWVyMVNoaXBzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHBsYXllcjJTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICAgIGNvbnN0IGJ0dG5QbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZF9fYnR0blwiKTtcbiAgICBjb25zdCBidHRuUGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX2J0dG5cIik7XG5cbiAgICBidHRuUGxheWVyMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjFTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICAgIHBsYXllcjFTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIxU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidHRuUGxheWVyMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjJTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICAgIHBsYXllcjJTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIyU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaG9vc2VOdW1iZXJPZlBsYXllcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICBtYWluLnN0eWxlLmZpbHRlciA9IFwiYmx1cig1cHgpXCI7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNob29zZSB0aGUgbnVtYmVyIG9mIGh1bWFuIHBsYXllcnM6XCI7XG4gICAgICBjb25zdCBidHRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidHRuMS50ZXh0Q29udGVudCA9IFwiMSBQbGF5ZXIgKGFuZCBvbmUgY29tcHV0ZXIgcGxheWVyKVwiO1xuICAgICAgY29uc3QgYnR0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnR0bjIudGV4dENvbnRlbnQgPSBcIjIgUGxheWVycyAoYW5kIHplcm8gY29tcHV0ZXIgcGxheWVyKVwiO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidHRuMSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIuc3R5bGUgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjUwJTsgbGVmdDozMCU7XCI7XG5cbiAgICAgIGJ0dG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMClcIjtcbiAgICAgICAgcmVzb2x2ZSgxKTtcbiAgICAgIH0pO1xuXG4gICAgICBidHRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID0gXCJibHVyKDApXCI7XG4gICAgICAgIHJlc29sdmUoMik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dTaGlwcyhwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCkge1xuICAgIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0yLWJvYXJkX19zaGlwcyA+IGRpdlwiXG4gICAgKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCByZXMgPSBwbGF5ZXIxQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopO1xuICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIxU2hpcHNbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlczIgPSBwbGF5ZXIyQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopO1xuICAgICAgICBpZiAocmVzMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGxheWVyMlNoaXBzW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlYXJjaEZvclN1bmtFbGVtZW50KHBsYXllckdhbWVCb2FyZCwgZWxlbWVudCwgcGxheWVyKSB7XG4gICAgbGV0IHBsYXllclNoaXBzO1xuICAgIGxldCBwbGF5ZXJTaG90cztcbiAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICBwbGF5ZXJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLTItYm9hcmRfX3NoaXBzID4gZGl2XCIpO1xuICAgICAgcGxheWVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci0xLWJvYXJkX19zaG90cyA+IGRpdlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci0xLWJvYXJkX19zaGlwcyA+IGRpdlwiKTtcbiAgICAgIHBsYXllclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMi1ib2FyZF9fc2hvdHMgPiBkaXZcIik7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLnNoaXAgPT09IGVsZW1lbnQuc2hpcFxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXJTaGlwc1tjb3VudF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjM2UwNzAzXCI7XG4gICAgICAgICAgcGxheWVyU2hvdHNbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzNlMDcwM1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVVaUFmdGVyQXR0YWNrKFxuICAgIHJlcyxcbiAgICBlLFxuICAgIHNoaXBzLFxuICAgIGluZGV4LFxuICAgIHBsYXllck9wcG9uZW50LFxuICAgIHJvdyxcbiAgICBjb2x1bW4sXG4gICAgbmFtZVxuICApIHtcbiAgICBjb25zdCBwbGF5ZXJTaGlwcyA9IHNoaXBzO1xuICAgIGlmIChyZXMgPT09IHRydWUpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgcGxheWVyU2hpcHNbaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9wcG9uZW50LnBsYXllckdhbWVCb2FyZFxuICAgICAgICAgIC5nZXRCb2FyZEVsZW1lbnQocm93LCBjb2x1bW4pXG4gICAgICAgICAgLnNoaXAuZ2V0U3VuaygpXG4gICAgICApIHtcbiAgICAgICAgc2VhcmNoRm9yU3Vua0VsZW1lbnQoXG4gICAgICAgICAgcGxheWVyT3Bwb25lbnQucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICAgIHBsYXllck9wcG9uZW50LnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQocm93LCBjb2x1bW4pLFxuICAgICAgICAgIG5hbWUgPT09IDEgPyAxIDogMlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzID09PSBmYWxzZSkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgICAgcGxheWVyU2hpcHNbaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dHYW1lT3Zlcih3aW5uZXJOYW1lKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikucmVtb3ZlKCk7XG4gICAgY29uc3QgZmluYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBmaW5hbFRpdGxlLnRleHRDb250ZW50ID0gYEdhbWUgRmluaXNoZWQhICR7d2lubmVyTmFtZX0gd29uIWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuYXBwZW5kQ2hpbGQoZmluYWxUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBdHRhY2tTaGlwKFxuICAgIGUsXG4gICAgcm93LFxuICAgIGNvbHVtbixcbiAgICBpbmRleCxcbiAgICBwbGF5ZXIsXG4gICAgcGxheWVyT3Bwb25lbnQsXG4gICAgb3Bwb25lbnRTaGlwcyxcbiAgICBvcHBvbmVudFNob3RzLFxuICAgIHRlbXBEaXNhYmxlUGxheWVyLFxuICAgIHRlbXBEaXNhYmxlT3Bwb25lbnQsXG4gICAgbmFtZVxuICApIHtcbiAgICBjb25zdCBwbGF5ZXJTaGlwcyA9IG9wcG9uZW50U2hpcHM7XG4gICAgY29uc3QgcGxheWVyU2hvdHMgPSBvcHBvbmVudFNob3RzO1xuICAgIGNvbnN0IGRpc2FibGVQbGF5ZXIgPSB0ZW1wRGlzYWJsZVBsYXllcjtcbiAgICBjb25zdCBkaXNhYmxlT3Bwb25lbnQgPSB0ZW1wRGlzYWJsZU9wcG9uZW50O1xuXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT09IFwid2hpdGVcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IHBsYXllck9wcG9uZW50LnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICB1cGRhdGVVaUFmdGVyQXR0YWNrKFxuICAgICAgcmVzLFxuICAgICAgZSxcbiAgICAgIHBsYXllclNoaXBzLFxuICAgICAgaW5kZXgsXG4gICAgICBwbGF5ZXJPcHBvbmVudCxcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbixcbiAgICAgIG5hbWVcbiAgICApO1xuXG4gICAgaWYgKHBsYXllck9wcG9uZW50LnBsYXllckdhbWVCb2FyZC5pc0dhbWVGaW5pc2hlZCgpKSB7XG4gICAgICBzaG93R2FtZU92ZXIocGxheWVyLnBsYXllck5hbWUpO1xuICAgIH1cblxuICAgIGRpc2FibGVQbGF5ZXIuaW5lcnQgPSB0cnVlO1xuICAgIGRpc2FibGVPcHBvbmVudC5pbmVydCA9IGZhbHNlO1xuXG4gICAgaWYgKHBsYXllck9wcG9uZW50LnBsYXllck5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IHBsYXllck9wcG9uZW50LnJhbmRvbWl6ZUF0dGFjaygpO1xuICAgICAgcGxheWVyU2hvdHNbcmFuZG9tXS5jbGljaygpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrRXZlbnQocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IGRpc2FibGVQbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1ib2FyZF9fc2hvdHNcIik7XG4gICAgY29uc3QgZGlzYWJsZVBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaG90c1wiKTtcblxuICAgIGNvbnN0IHBsYXllcjFTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMS1ib2FyZF9fc2hvdHMgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMlNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0yLWJvYXJkX19zaG90cyA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzID4gZGl2XCJcbiAgICApO1xuICAgIGNvbnN0IHBsYXllcjJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMgPiBkaXZcIlxuICAgICk7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb3VudDtcbiAgICAgICAgY29uc3Qgcm93ID0gaTtcbiAgICAgICAgY29uc3QgY29sdW1uID0gajtcblxuICAgICAgICBwbGF5ZXIxU2hvdHNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUF0dGFja1NoaXAoXG4gICAgICAgICAgICBlLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICAgIHBsYXllcjJTaGlwcyxcbiAgICAgICAgICAgIHBsYXllcjJTaG90cyxcbiAgICAgICAgICAgIGRpc2FibGVQbGF5ZXIxLFxuICAgICAgICAgICAgZGlzYWJsZVBsYXllcjIsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGxheWVyMlNob3RzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBoYW5kbGVBdHRhY2tTaGlwKFxuICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICAgIHBsYXllcjEsXG4gICAgICAgICAgICBwbGF5ZXIxU2hpcHMsXG4gICAgICAgICAgICBwbGF5ZXIxU2hvdHMsXG4gICAgICAgICAgICBkaXNhYmxlUGxheWVyMixcbiAgICAgICAgICAgIGRpc2FibGVQbGF5ZXIxLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVHcmlkcyxcbiAgICBjaG9vc2VOdW1iZXJPZlBsYXllcnMsXG4gICAgc2hvd1NoaXBzLFxuICAgIGF0dGFja0V2ZW50LFxuICAgIHNob3dCb2FyZEV2ZW50LFxuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwMHB4O1xufVxuXG4uYm9hcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItMS1ib2FyZCxcbi5wbGF5ZXItMi1ib2FyZHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XG59XG5cbi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMsXG4ucGxheWVyLTEtYm9hcmRfX3Nob3RzLFxuLnBsYXllci0yLWJvYXJkX19zaGlwcyxcbi5wbGF5ZXItMi1ib2FyZF9fc2hvdHN7XG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7OztJQUlJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm9hcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci0xLWJvYXJkLFxcbi5wbGF5ZXItMi1ib2FyZHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLnBsYXllci0xLWJvYXJkX19zaGlwcyxcXG4ucGxheWVyLTEtYm9hcmRfX3Nob3RzLFxcbi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMsXFxuLnBsYXllci0yLWJvYXJkX19zaG90c3tcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuLmxvZ28gaW1ne1xuICAgIG1heC13aWR0aDogMzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sb2dvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ297XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5sb2dvIGltZ3tcXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY29yZXtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2NvcmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCOztBQUV0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NvcmV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xuICAgIG1hcmdpbjo0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxuICAgIG1hcmdpbjo0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ28uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9nby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3Njb3JlLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbG9nby5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2dhbWVib2FyZC5jc3NcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IHVpIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UvVUlcIjtcbmltcG9ydCBjb21wdXRlciBmcm9tIFwiLi9wbGF5ZXIvY29tcHV0ZXJcIjtcblxuY29uc3QgVUkgPSB1aSgpO1xuVUkuY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzKCkudGhlbigobnVtUGxheWVycykgPT4ge1xuICBVSS5jcmVhdGVHcmlkcygpO1xuICBVSS5zaG93Qm9hcmRFdmVudCgpO1xuICBsZXQgcGxheWVyMTtcbiAgbGV0IHBsYXllcjI7XG4gIGlmIChudW1QbGF5ZXJzID09PSAxKSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihcIlVzZXJcIik7XG4gICAgcGxheWVyMiA9IGNvbXB1dGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihcIlVzZXJcIik7XG4gICAgcGxheWVyMiA9IHBsYXllcihcIlVzZXIyXCIpO1xuICB9XG5cbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDMsIDQsIDMsIFwiaFwiKTtcbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDYsIDMsIDMsIFwidlwiKTtcbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDEsIDgsIDIsIFwidlwiKTtcbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDcsIDUsIDQsIFwiaFwiKTtcblxuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoNywgMSwgNSwgXCJoXCIpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMywgMywgNSwgXCJ2XCIpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMSwgNSwgMiwgXCJoXCIpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoNywgNSwgNCwgXCJoXCIpO1xuXG4gIFVJLnNob3dTaGlwcyhwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCwgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQpO1xuICBVSS5hdHRhY2tFdmVudChwbGF5ZXIxLCBwbGF5ZXIyKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNoaXAiLCJnYW1lQm9hcmQiLCJib2FyZCIsIm1pc3NlZEF0dGFja3MiLCJwbGFjZVNoaXAiLCJyb3ciLCJjb2x1bW4iLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJuZXdTaGlwIiwiaSIsInB1c2giLCJnZXRCb2FyZEVsZW1lbnQiLCJmaW5kIiwiZWwiLCJnZXRNaXNzZWRFbGVtZW50IiwicmVjZWl2ZUF0dGFjayIsImVsZW1lbnQiLCJpbmRleE9mIiwiaGl0IiwiaXNHYW1lRmluaXNoZWQiLCJnZXRTdW5rIiwicGxheWVyIiwiY29tcHV0ZXIiLCJwbGF5ZXJHYW1lQm9hcmQiLCJwbGF5ZXJOYW1lIiwiYXR0YWNrcyIsInJhbmRvbWl6ZUF0dGFjayIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImluY2x1ZGVzIiwibmFtZSIsInNoaXBMZW5ndGgiLCJuVGltZXNIaXQiLCJnZXRMZW5ndGgiLCJ1aSIsImNyZWF0ZUdyaWRzIiwicGxheWVyMVNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNob3RzIiwicGxheWVyMlNoaXBzIiwicGxheWVyMlNob3RzIiwiZGl2MSIsImNyZWF0ZUVsZW1lbnQiLCJkaXYyIiwiZGl2MyIsImRpdjQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwic2hvd0JvYXJkRXZlbnQiLCJ2aXNpYmlsaXR5IiwiYnR0blBsYXllcjEiLCJidHRuUGxheWVyMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaG9vc2VOdW1iZXJPZlBsYXllcnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1haW4iLCJmaWx0ZXIiLCJ0aXRsZSIsInRleHRDb250ZW50IiwiYnR0bjEiLCJidHRuMiIsImNvbnRhaW5lciIsImJvZHkiLCJyZW1vdmUiLCJzaG93U2hpcHMiLCJwbGF5ZXIxQm9hcmQiLCJwbGF5ZXIyQm9hcmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJqIiwicmVzIiwidW5kZWZpbmVkIiwicmVzMiIsInNlYXJjaEZvclN1bmtFbGVtZW50IiwicGxheWVyU2hpcHMiLCJwbGF5ZXJTaG90cyIsInVwZGF0ZVVpQWZ0ZXJBdHRhY2siLCJlIiwic2hpcHMiLCJpbmRleCIsInBsYXllck9wcG9uZW50IiwiY3VycmVudFRhcmdldCIsInNob3dHYW1lT3ZlciIsIndpbm5lck5hbWUiLCJmaW5hbFRpdGxlIiwiaGFuZGxlQXR0YWNrU2hpcCIsIm9wcG9uZW50U2hpcHMiLCJvcHBvbmVudFNob3RzIiwidGVtcERpc2FibGVQbGF5ZXIiLCJ0ZW1wRGlzYWJsZU9wcG9uZW50IiwiZGlzYWJsZVBsYXllciIsImRpc2FibGVPcHBvbmVudCIsImluZXJ0IiwiY2xpY2siLCJhdHRhY2tFdmVudCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiZGlzYWJsZVBsYXllcjEiLCJkaXNhYmxlUGxheWVyMiIsIlVJIiwidGhlbiIsIm51bVBsYXllcnMiXSwic291cmNlUm9vdCI6IiJ9