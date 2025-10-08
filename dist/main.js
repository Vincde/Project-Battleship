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
  let board = Array.from({
    length: 10
  }, () => Array.from({
    length: 10
  }, () => undefined));
  let missedAttacks = Array.from({
    length: 10
  }, () => Array.from({
    length: 10
  }, () => undefined));
  function placeShip(row, column, length, direction) {
    const newShip = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    if (verifyDimension(row, column, length, direction)) {
      if (direction === "v") {
        for (let i = 0; i < length; i++) {
          if (typeof board[row + i - 1][column - 1] === "object") return false;
        }
        for (let i = 0; i < length; i++) {
          board[row + i - 1][column - 1] = {
            ship: newShip,
            hit: false
          };
        }
      } else if (direction === "h") {
        for (let i = 0; i < length; i++) {
          if (typeof board[row - 1][column + i - 1] === "object") return false;
        }
        for (let i = 0; i < length; i++) {
          board[row - 1][column + i - 1] = {
            ship: newShip,
            hit: false
          };
        }
      }
      return true;
    } else {
      return false;
    }
  }
  function receiveAttack(row, column) {
    if (verifyDimension(row, column)) {
      if (typeof board[row - 1][column - 1] === "object" && board[row - 1][column - 1].hit === false) {
        board[row - 1][column - 1].ship.hit();
        board[row - 1][column - 1].hit = true;
        return true;
      } else if (typeof board[row - 1][column - 1] === "undefined") {
        board[row - 1][column - 1] = "miss";
        return false;
      }
    }
  }
  function verifyDimension(row, column) {
    let length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (row > 10 || row <= 0) return false;
    if (column > 10 || column <= 0) return false;
    if (direction === "v") {
      if (row + length > 10 || row + length <= 0) return false;
    } else if (direction === "h") {
      if (column + length > 10 || column + length <= 0) return false;
    }
    return true;
  }
  function setMissedAttack(row, column, status) {
    if (verifyDimension(row, column)) {
      missedAttacks[row - 1][column - 1] = {
        hit: status
      };
    }
  }
  function getMissedAttack(row, column) {
    return missedAttacks[row][column];
  }
  function getBoardElement(row, column) {
    return board[row][column];
  }
  function verifyEndGame() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (typeof board[i][j] === "object" && board[i][j].hit === false) {
          return false;
        }
      }
    }
    return true;
  }
  return {
    placeShip,
    receiveAttack,
    setMissedAttack,
    getMissedAttack,
    getBoardElement,
    verifyEndGame
  };
}

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

function player() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "computer";
  // careful: if i insert computer as my username it could be problematic
  let playerName = name;
  const playerGameBoard = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (playerName === "computer") {}
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
  let sunk = false;
  function hit() {
    nTimesHit += 1;
  }
  function isSunk() {
    if (nTimesHit >= length) {
      sunk = true;
    }
  }
  return {
    hit,
    isSunk
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
    const player1Ships = document.querySelectorAll(".player-1-board__ships > div");
    const player2Ships = document.querySelectorAll(".player-2-board__ships > div");
    if (typeof player1.playerGameBoard.getBoardElement(i, j) === "object" && player1.playerGameBoard.getBoardElement(i, j).hit === false) {
      player1Ships[counter].style.backgroundColor = "green";
    } else if (typeof player1.playerGameBoard.getBoardElement(i, j) === "object" && player1.playerGameBoard.getBoardElement(i, j).hit === true) {
      player1Ships[counter].style.backgroundColor = "red";
    } else if (player1.playerGameBoard.getBoardElement(i, j) === "miss") {
      player1Ships[counter].style.backgroundColor = "gray";
    }
    if (typeof player1.playerGameBoard.getBoardElement(i, j) === "object" && player1.playerGameBoard.getBoardElement(i, j).hit === true && player1.playerGameBoard.getBoardElement(i, j).ship.isSunk()) {
      player1Ships[counter].style.backgroundColor = "#3e0703";
    }
    if (typeof player2.playerGameBoard.getBoardElement(i, j) === "object" && player2.playerGameBoard.getBoardElement(i, j).hit === false) {
      player2Ships[counter].style.backgroundColor = "green";
    } else if (typeof player2.playerGameBoard.getBoardElement(i, j) === "object" && player2.playerGameBoard.getBoardElement(i, j).hit === true) {
      player2Ships[counter].style.backgroundColor = "red";
    } else if (player2.playerGameBoard.getBoardElement(i, j) === "miss") {
      player2Ships[counter].style.backgroundColor = "gray";
    }
    if (typeof player2.playerGameBoard.getBoardElement(i, j) === "object" && player2.playerGameBoard.getBoardElement(i, j).hit === true && player2.playerGameBoard.getBoardElement(i, j).ship.isSunk()) {
      player2Ships[counter].style.backgroundColor = "#3e0703";
    }
  }
  function populateShots(player1, player2, counter, i, j) {
    const player1Shots = document.querySelectorAll(".player-1-board__shots > div");
    const player2Shots = document.querySelectorAll(".player-2-board__shots > div");
    if (typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" && player1.playerGameBoard.getMissedAttack(i, j).hit === true) {
      player1Shots[counter].style.backgroundColor = "green";
    } else if (typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" && player1.playerGameBoard.getMissedAttack(i, j).hit === false) {
      player1Shots[counter].style.backgroundColor = "gray";
    }
    if (typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" && player1.playerGameBoard.getMissedAttack(i, j).hit === true && player2.playerGameBoard.getBoardElement(i, j).ship.isSunk()) {
      player1Shots[counter].style.backgroundColor = "#253900";
    }
    if (typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" && player2.playerGameBoard.getMissedAttack(i, j).hit === true) {
      player2Shots[counter].style.backgroundColor = "green";
    } else if (typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" && player2.playerGameBoard.getMissedAttack(i, j).hit === false) {
      player2Shots[counter].style.backgroundColor = "gray";
    }
    if (typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" && player2.playerGameBoard.getMissedAttack(i, j).hit === true && player1.playerGameBoard.getBoardElement(i, j).ship.isSunk()) {
      player2Shots[counter].style.backgroundColor = "#253900";
    }
  }
  function attackShipsEvent(player1, player2) {
    const player1Shots = document.querySelectorAll(".player-1-board__shots > div");
    const player2Shots = document.querySelectorAll(".player-2-board__shots > div");
    let count = 0;
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        player1Shots[count].addEventListener("click", () => {
          let res = player2.playerGameBoard.receiveAttack(i, j);
          if (res === true) {
            player1.playerGameBoard.setMissedAttack(i, j, true);
          } else if (res === false) {
            player1.playerGameBoard.setMissedAttack(i, j, false);
          }
          reload(player1, player2);
          if (player2.playerGameBoard.verifyEndGame()) {
            renderEndGame(1);
          }
        }, {
          once: true
        });
        player2Shots[count].addEventListener("click", () => {
          let res = player1.playerGameBoard.receiveAttack(i, j);
          if (res === true) {
            player2.playerGameBoard.setMissedAttack(i, j, true);
          } else if (res === false) {
            player2.playerGameBoard.setMissedAttack(i, j, false);
          }
          reload(player1, player2);
          if (player1.playerGameBoard.verifyEndGame()) {
            renderEndGame(2);
          }
        }, {
          once: true
        });
        count++;
      }
    }
  }
  function renderEndGame(winnerPlayer) {
    const boards = document.querySelector(".boards");
    boards.remove();
    const winner = document.createElement("h1");
    winner.textContent = `Player ${winnerPlayer} won!`;
    const body = document.querySelector(".score");
    body.appendChild(winner);
  }
  return {
    createGrids,
    chooseNumberOfPlayers,
    reload,
    attackShipsEvent
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






const UI = (0,_userInterface_UI__WEBPACK_IMPORTED_MODULE_5__["default"])();
UI.chooseNumberOfPlayers().then(numPlayers => {
  UI.createGrids();
  let player1;
  let player2;
  if (numPlayers === 1) {
    player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_4__["default"])("User");
    player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_4__["default"])("computer");
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
  UI.reload(player1, player2);
  UI.attackShipsEvent(player1, player2);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLENBQUNuQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBRS9Db0UsRUFBRSxDQUFDaEIsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQztFQUMzQmMsRUFBRSxDQUFDUixnQkFBZ0IsQ0FBQ1AsT0FBTyxFQUFFQyxPQUFPLENBQUM7QUFDdkMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvZ2FtZUJvYXJkL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy91c2VySW50ZXJmYWNlL1VJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3MvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2xvZ28uY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3Mvc2NvcmUuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2dhbWVib2FyZC5jc3M/NjIwNCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL2xvZ28uY3NzPzg3N2EiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9zY29yZS5jc3M/OTYzMiIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNoaXAgZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gIGxldCBib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+XG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT4gdW5kZWZpbmVkKVxuICApO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+XG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT4gdW5kZWZpbmVkKVxuICApO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuXG4gICAgaWYgKHZlcmlmeURpbWVuc2lvbihyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb24pKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtyb3cgKyBpIC0gMV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbcm93ICsgaSAtIDFdW2NvbHVtbiAtIDFdID0geyBzaGlwOiBuZXdTaGlwLCBoaXQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtyb3cgLSAxXVtjb2x1bW4gKyBpIC0gMV0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbcm93IC0gMV1bY29sdW1uICsgaSAtIDFdID0geyBzaGlwOiBuZXdTaGlwLCBoaXQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGlmICh2ZXJpZnlEaW1lbnNpb24ocm93LCBjb2x1bW4pKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZFtyb3cgLSAxXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICBib2FyZFtyb3cgLSAxXVtjb2x1bW4gLSAxXS5oaXQgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgYm9hcmRbcm93IC0gMV1bY29sdW1uIC0gMV0uc2hpcC5oaXQoKTtcbiAgICAgICAgYm9hcmRbcm93IC0gMV1bY29sdW1uIC0gMV0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtyb3cgLSAxXVtjb2x1bW4gLSAxXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBib2FyZFtyb3cgLSAxXVtjb2x1bW4gLSAxXSA9IFwibWlzc1wiO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5RGltZW5zaW9uKHJvdywgY29sdW1uLCBsZW5ndGggPSAwLCBkaXJlY3Rpb24gPSAwKSB7XG4gICAgaWYgKHJvdyA+IDEwIHx8IHJvdyA8PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoY29sdW1uID4gMTAgfHwgY29sdW1uIDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICBpZiAocm93ICsgbGVuZ3RoID4gMTAgfHwgcm93ICsgbGVuZ3RoIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGlmIChjb2x1bW4gKyBsZW5ndGggPiAxMCB8fCBjb2x1bW4gKyBsZW5ndGggPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TWlzc2VkQXR0YWNrKHJvdywgY29sdW1uLCBzdGF0dXMpIHtcbiAgICBpZiAodmVyaWZ5RGltZW5zaW9uKHJvdywgY29sdW1uKSkge1xuICAgICAgbWlzc2VkQXR0YWNrc1tyb3cgLSAxXVtjb2x1bW4gLSAxXSA9IHsgaGl0OiBzdGF0dXMgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaXNzZWRBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gbWlzc2VkQXR0YWNrc1tyb3ddW2NvbHVtbl07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb2FyZEVsZW1lbnQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmRbcm93XVtjb2x1bW5dO1xuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5RW5kR2FtZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRbaV1bal0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2V0TWlzc2VkQXR0YWNrLFxuICAgIGdldE1pc3NlZEF0dGFjayxcbiAgICBnZXRCb2FyZEVsZW1lbnQsXG4gICAgdmVyaWZ5RW5kR2FtZSxcbiAgfTtcbn1cbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4uL2dhbWVCb2FyZC9nYW1lQm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyKG5hbWUgPSBcImNvbXB1dGVyXCIpIHtcbiAgLy8gY2FyZWZ1bDogaWYgaSBpbnNlcnQgY29tcHV0ZXIgYXMgbXkgdXNlcm5hbWUgaXQgY291bGQgYmUgcHJvYmxlbWF0aWNcbiAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICBpZiAocGxheWVyTmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gIH1cblxuICByZXR1cm4geyBwbGF5ZXJHYW1lQm9hcmQsIHBsYXllck5hbWUgfTtcbn1cbiIsImZ1bmN0aW9uIHNoaXAoc2hpcExlbmd0aCkge1xuICBsZXQgblRpbWVzSGl0ID0gMDtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIG5UaW1lc0hpdCArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChuVGltZXNIaXQgPj0gbGVuZ3RoKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWkoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWRzKCkge1xuICAgIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzXCIpO1xuICAgIGNvbnN0IHBsYXllcjFTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtYm9hcmRfX3Nob3RzXCIpO1xuICAgIGNvbnN0IHBsYXllcjJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX3NoaXBzXCIpO1xuICAgIGNvbnN0IHBsYXllcjJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItYm9hcmRfX3Nob3RzXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICAgIHBsYXllcjFTaG90cy5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICAgIHBsYXllcjJTaG90cy5hcHBlbmRDaGlsZChkaXY0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaG9vc2VOdW1iZXJPZlBsYXllcnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICBtYWluLnN0eWxlLmZpbHRlciA9IFwiYmx1cig1cHgpXCI7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNob29zZSB0aGUgbnVtYmVyIG9mIGh1bWFuIHBsYXllcnM6XCI7XG4gICAgICBjb25zdCBidHRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidHRuMS50ZXh0Q29udGVudCA9IFwiMSBQbGF5ZXIgKGFuZCBvbmUgY29tcHV0ZXIgcGxheWVyKVwiO1xuICAgICAgY29uc3QgYnR0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnR0bjIudGV4dENvbnRlbnQgPSBcIjIgUGxheWVycyAoYW5kIHplcm8gY29tcHV0ZXIgcGxheWVyKVwiO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidHRuMSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIuc3R5bGUgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjUwJTsgbGVmdDozMCU7XCI7XG5cbiAgICAgIGJ0dG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMClcIjtcbiAgICAgICAgcmVzb2x2ZSgxKTtcbiAgICAgIH0pO1xuXG4gICAgICBidHRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID0gXCJibHVyKDApXCI7XG4gICAgICAgIHJlc29sdmUoMik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHBvcHVsYXRlU2hpcHMocGxheWVyMSwgcGxheWVyMiwgY291bnRlciwgaSwgaik7XG4gICAgICAgIHBvcHVsYXRlU2hvdHMocGxheWVyMSwgcGxheWVyMiwgY291bnRlciwgaSwgaik7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZVNoaXBzKHBsYXllcjEsIHBsYXllcjIsIGNvdW50ZXIsIGksIGopIHtcbiAgICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTEtYm9hcmRfX3NoaXBzID4gZGl2XCJcbiAgICApO1xuICAgIGNvbnN0IHBsYXllcjJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMgPiBkaXZcIlxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikuaGl0ID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcGxheWVyMVNoaXBzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLmhpdCA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgcGxheWVyMVNoaXBzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgPT09IFwibWlzc1wiKSB7XG4gICAgICBwbGF5ZXIxU2hpcHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLmhpdCA9PT0gdHJ1ZSAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLnNoaXAuaXNTdW5rKClcbiAgICApIHtcbiAgICAgIHBsYXllcjFTaGlwc1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzZTA3MDNcIjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikuaGl0ID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcGxheWVyMlNoaXBzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLmhpdCA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgcGxheWVyMlNoaXBzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgPT09IFwibWlzc1wiKSB7XG4gICAgICBwbGF5ZXIyU2hpcHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLmhpdCA9PT0gdHJ1ZSAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLnNoaXAuaXNTdW5rKClcbiAgICApIHtcbiAgICAgIHBsYXllcjJTaGlwc1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzZTA3MDNcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZVNob3RzKHBsYXllcjEsIHBsYXllcjIsIGNvdW50ZXIsIGksIGopIHtcbiAgICBjb25zdCBwbGF5ZXIxU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTEtYm9hcmRfX3Nob3RzID4gZGl2XCJcbiAgICApO1xuXG4gICAgY29uc3QgcGxheWVyMlNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0yLWJvYXJkX19zaG90cyA+IGRpdlwiXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldE1pc3NlZEF0dGFjayhpLCBqKS5oaXQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHBsYXllcjFTaG90c1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldE1pc3NlZEF0dGFjayhpLCBqKS5oaXQgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBwbGF5ZXIxU2hvdHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldE1pc3NlZEF0dGFjayhpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopLmhpdCA9PT0gdHJ1ZSAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLnNoaXAuaXNTdW5rKClcbiAgICApIHtcbiAgICAgIHBsYXllcjFTaG90c1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyNTM5MDBcIjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikuaGl0ID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBwbGF5ZXIyU2hvdHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikuaGl0ID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcGxheWVyMlNob3RzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldE1pc3NlZEF0dGFjayhpLCBqKS5oaXQgPT09IHRydWUgJiZcbiAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5zaGlwLmlzU3VuaygpXG4gICAgKSB7XG4gICAgICBwbGF5ZXIyU2hvdHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMjUzOTAwXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrU2hpcHNFdmVudChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgY29uc3QgcGxheWVyMVNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0xLWJvYXJkX19zaG90cyA+IGRpdlwiXG4gICAgKTtcblxuICAgIGNvbnN0IHBsYXllcjJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMi1ib2FyZF9fc2hvdHMgPiBkaXZcIlxuICAgICk7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgcGxheWVyMVNob3RzW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhpLCBqKTtcbiAgICAgICAgICAgIGlmIChyZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuc2V0TWlzc2VkQXR0YWNrKGksIGosIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLnNldE1pc3NlZEF0dGFjayhpLCBqLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxvYWQocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgICAgICBpZiAocGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQudmVyaWZ5RW5kR2FtZSgpKSB7XG4gICAgICAgICAgICAgIHJlbmRlckVuZEdhbWUoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICApO1xuXG4gICAgICAgIHBsYXllcjJTaG90c1tjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcyA9IHBsYXllcjEucGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaSwgaik7XG4gICAgICAgICAgICBpZiAocmVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLnNldE1pc3NlZEF0dGFjayhpLCBqLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5zZXRNaXNzZWRBdHRhY2soaSwgaiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsb2FkKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgICAgICAgaWYgKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLnZlcmlmeUVuZEdhbWUoKSkge1xuICAgICAgICAgICAgICByZW5kZXJFbmRHYW1lKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJFbmRHYW1lKHdpbm5lclBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzXCIpO1xuICAgIGJvYXJkcy5yZW1vdmUoKTtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gYFBsYXllciAke3dpbm5lclBsYXllcn0gd29uIWA7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh3aW5uZXIpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlR3JpZHMsIGNob29zZU51bWJlck9mUGxheWVycywgcmVsb2FkLCBhdHRhY2tTaGlwc0V2ZW50IH07XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTAwcHg7XG59XG5cbi5ib2FyZHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBsYXllci0xLWJvYXJkLFxuLnBsYXllci0yLWJvYXJke1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cblxuLnBsYXllci0xLWJvYXJkX19zaGlwcyxcbi5wbGF5ZXItMS1ib2FyZF9fc2hvdHMsXG4ucGxheWVyLTItYm9hcmRfX3NoaXBzLFxuLnBsYXllci0yLWJvYXJkX19zaG90c3tcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0lBSUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLTEtYm9hcmQsXFxuLnBsYXllci0yLWJvYXJke1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4ucGxheWVyLTEtYm9hcmRfX3NoaXBzLFxcbi5wbGF5ZXItMS1ib2FyZF9fc2hvdHMsXFxuLnBsYXllci0yLWJvYXJkX19zaGlwcyxcXG4ucGxheWVyLTItYm9hcmRfX3Nob3Rze1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG4ubG9nbyBpbWd7XG4gICAgbWF4LXdpZHRoOiAzMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xvZ28uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjpibGFjaztcXG59XFxuXFxuLmxvZ28gaW1ne1xcbiAgICBtYXgtd2lkdGg6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNjb3Jle1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zY29yZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY29yZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XG4gICAgbWFyZ2luOjRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXG4gICAgbWFyZ2luOjRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9nby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY29yZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY29yZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc2NvcmUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9sb2dvLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZ2FtZWJvYXJkLmNzc1wiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgdWkgZnJvbSBcIi4vdXNlckludGVyZmFjZS9VSVwiO1xuXG5jb25zdCBVSSA9IHVpKCk7XG5VSS5jaG9vc2VOdW1iZXJPZlBsYXllcnMoKS50aGVuKChudW1QbGF5ZXJzKSA9PiB7XG4gIFVJLmNyZWF0ZUdyaWRzKCk7XG4gIGxldCBwbGF5ZXIxO1xuICBsZXQgcGxheWVyMjtcbiAgaWYgKG51bVBsYXllcnMgPT09IDEpIHtcbiAgICBwbGF5ZXIxID0gcGxheWVyKFwiVXNlclwiKTtcbiAgICBwbGF5ZXIyID0gcGxheWVyKFwiY29tcHV0ZXJcIik7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyMSA9IHBsYXllcihcIlVzZXJcIik7XG4gICAgcGxheWVyMiA9IHBsYXllcihcIlVzZXIyXCIpO1xuICB9XG5cbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDMsIDQsIDMsIFwiaFwiKTtcbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDYsIDMsIDMsIFwidlwiKTtcbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDEsIDgsIDIsIFwidlwiKTtcbiAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDcsIDUsIDQsIFwiaFwiKTtcblxuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoNywgMSwgNSwgXCJoXCIpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMywgMywgNSwgXCJ2XCIpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMSwgNSwgMiwgXCJoXCIpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoNywgNSwgNCwgXCJoXCIpO1xuXG4gIFVJLnJlbG9hZChwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgVUkuYXR0YWNrU2hpcHNFdmVudChwbGF5ZXIxLCBwbGF5ZXIyKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNoaXAiLCJnYW1lQm9hcmQiLCJib2FyZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1pc3NlZEF0dGFja3MiLCJwbGFjZVNoaXAiLCJyb3ciLCJjb2x1bW4iLCJkaXJlY3Rpb24iLCJuZXdTaGlwIiwidmVyaWZ5RGltZW5zaW9uIiwiaSIsImhpdCIsInJlY2VpdmVBdHRhY2siLCJhcmd1bWVudHMiLCJzZXRNaXNzZWRBdHRhY2siLCJzdGF0dXMiLCJnZXRNaXNzZWRBdHRhY2siLCJnZXRCb2FyZEVsZW1lbnQiLCJ2ZXJpZnlFbmRHYW1lIiwiaiIsInBsYXllciIsIm5hbWUiLCJwbGF5ZXJOYW1lIiwicGxheWVyR2FtZUJvYXJkIiwic2hpcExlbmd0aCIsIm5UaW1lc0hpdCIsInN1bmsiLCJpc1N1bmsiLCJ1aSIsImNyZWF0ZUdyaWRzIiwicGxheWVyMVNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNob3RzIiwicGxheWVyMlNoaXBzIiwicGxheWVyMlNob3RzIiwiZGl2MSIsImNyZWF0ZUVsZW1lbnQiLCJkaXYyIiwiZGl2MyIsImRpdjQiLCJhcHBlbmRDaGlsZCIsImNob29zZU51bWJlck9mUGxheWVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFpbiIsInN0eWxlIiwiZmlsdGVyIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImJ0dG4xIiwiYnR0bjIiLCJjb250YWluZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbG9hZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY291bnRlciIsInBvcHVsYXRlU2hpcHMiLCJwb3B1bGF0ZVNob3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImJhY2tncm91bmRDb2xvciIsImF0dGFja1NoaXBzRXZlbnQiLCJjb3VudCIsInJlcyIsInJlbmRlckVuZEdhbWUiLCJvbmNlIiwid2lubmVyUGxheWVyIiwiYm9hcmRzIiwid2lubmVyIiwiVUkiLCJ0aGVuIiwibnVtUGxheWVycyJdLCJzb3VyY2VSb290IjoiIn0=