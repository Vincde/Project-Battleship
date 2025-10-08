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
          board[row + i - 1][column - 1] = {
            ship: newShip,
            hit: false
          };
        }
      } else if (direction === "h") {
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
        if (board[row - 1][column - 1].ship.isSunk()) {
          return "Ship has been sunk!";
        }
      } else if (typeof board[row - 1][column - 1] === "undefined") {
        board[row][column] = "miss";
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
        hit: status,
        sunk: false
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
      return true;
    }
    return false;
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
      player1Shots[counter].style.backgroundColor = "red";
    }
    if (typeof player1.playerGameBoard.getMissedAttack(i, j) === "object" && player1.playerGameBoard.getMissedAttack(i, j).hit === true && player1.playerGameBoard.getMissedAttack(i, j).sunk === true) {
      player1Shots[counter].style.backgroundColor = "#3e0703";
    }
    if (typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" && player2.playerGameBoard.getMissedAttack(i, j).hit === true) {
      player2Shots[counter].style.backgroundColor = "green";
    } else if (typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" && player2.playerGameBoard.getMissedAttack(i, j).hit === false) {
      player2Shots[counter].style.backgroundColor = "red";
    }
    if (typeof player2.playerGameBoard.getMissedAttack(i, j) === "object" && player2.playerGameBoard.getMissedAttack(i, j).hit === true && player2.playerGameBoard.getMissedAttack(i, j).sunk === true) {
      player2Shots[counter].style.backgroundColor = "#3e0703";
    }
  }
  return {
    createGrids,
    chooseNumberOfPlayers,
    reload
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
  player1.playerGameBoard.receiveAttack(3, 4);
  player1.playerGameBoard.receiveAttack(3, 5);
  player1.playerGameBoard.receiveAttack(8, 2);
  player2.playerGameBoard.setMissedAttack(3, 4, true);
  player2.playerGameBoard.setMissedAttack(3, 5, true);
  player2.playerGameBoard.setMissedAttack(8, 2, false);
  UI.reload(player1, player2);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEJvQyxPQUFPLEdBQUdwQywwREFBTSxDQUFDLE9BQU8sQ0FBQztFQUMzQjtFQUVBbUMsT0FBTyxDQUFDaEMsZUFBZSxDQUFDckIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUMvQ3FELE9BQU8sQ0FBQ2hDLGVBQWUsQ0FBQ2IsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDM0M2QyxPQUFPLENBQUNoQyxlQUFlLENBQUNiLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzNDNkMsT0FBTyxDQUFDaEMsZUFBZSxDQUFDYixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUUzQzhDLE9BQU8sQ0FBQ2pDLGVBQWUsQ0FBQ1YsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ25EMkMsT0FBTyxDQUFDakMsZUFBZSxDQUFDVixlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDbkQyQyxPQUFPLENBQUNqQyxlQUFlLENBQUNWLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUVwRGlELEVBQUUsQ0FBQ1IsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQztBQUM3QixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3VzZXJJbnRlcmZhY2UvVUkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3MvbG9nby5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2Nzcy9zY29yZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3MvZ2FtZWJvYXJkLmNzcz82MjA0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9jc3MvbG9nby5jc3M/ODc3YSIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvY3NzL3Njb3JlLmNzcz85NjMyIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcCBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgbGV0IGJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT5cbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiB1bmRlZmluZWQpXG4gICk7XG4gIGxldCBtaXNzZWRBdHRhY2tzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT5cbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiB1bmRlZmluZWQpXG4gICk7XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG5cbiAgICBpZiAodmVyaWZ5RGltZW5zaW9uKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbikpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFtyb3cgKyBpIC0gMV1bY29sdW1uIC0gMV0gPSB7IHNoaXA6IG5ld1NoaXAsIGhpdDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBib2FyZFtyb3cgLSAxXVtjb2x1bW4gKyBpIC0gMV0gPSB7IHNoaXA6IG5ld1NoaXAsIGhpdDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgaWYgKHZlcmlmeURpbWVuc2lvbihyb3csIGNvbHVtbikpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGJvYXJkW3JvdyAtIDFdW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgIGJvYXJkW3JvdyAtIDFdW2NvbHVtbiAtIDFdLmhpdCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBib2FyZFtyb3cgLSAxXVtjb2x1bW4gLSAxXS5zaGlwLmhpdCgpO1xuICAgICAgICBib2FyZFtyb3cgLSAxXVtjb2x1bW4gLSAxXS5oaXQgPSB0cnVlO1xuICAgICAgICBpZiAoYm9hcmRbcm93IC0gMV1bY29sdW1uIC0gMV0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgIHJldHVybiBcIlNoaXAgaGFzIGJlZW4gc3VuayFcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRbcm93IC0gMV1bY29sdW1uIC0gMV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gXCJtaXNzXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5RGltZW5zaW9uKHJvdywgY29sdW1uLCBsZW5ndGggPSAwLCBkaXJlY3Rpb24gPSAwKSB7XG4gICAgaWYgKHJvdyA+IDEwIHx8IHJvdyA8PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoY29sdW1uID4gMTAgfHwgY29sdW1uIDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICBpZiAocm93ICsgbGVuZ3RoID4gMTAgfHwgcm93ICsgbGVuZ3RoIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGlmIChjb2x1bW4gKyBsZW5ndGggPiAxMCB8fCBjb2x1bW4gKyBsZW5ndGggPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TWlzc2VkQXR0YWNrKHJvdywgY29sdW1uLCBzdGF0dXMpIHtcbiAgICBpZiAodmVyaWZ5RGltZW5zaW9uKHJvdywgY29sdW1uKSkge1xuICAgICAgbWlzc2VkQXR0YWNrc1tyb3cgLSAxXVtjb2x1bW4gLSAxXSA9IHsgaGl0OiBzdGF0dXMsIHN1bms6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWlzc2VkQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIG1pc3NlZEF0dGFja3Nbcm93XVtjb2x1bW5dO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmRFbGVtZW50KHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIGJvYXJkW3Jvd11bY29sdW1uXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZlcmlmeUVuZEdhbWUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2ldW2pdLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNldE1pc3NlZEF0dGFjayxcbiAgICBnZXRNaXNzZWRBdHRhY2ssXG4gICAgZ2V0Qm9hcmRFbGVtZW50LFxuICAgIHZlcmlmeUVuZEdhbWUsXG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllcihuYW1lID0gXCJjb21wdXRlclwiKSB7XG4gIC8vIGNhcmVmdWw6IGlmIGkgaW5zZXJ0IGNvbXB1dGVyIGFzIG15IHVzZXJuYW1lIGl0IGNvdWxkIGJlIHByb2JsZW1hdGljXG4gIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgaWYgKHBsYXllck5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICB9XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJOYW1lIH07XG59XG4iLCJmdW5jdGlvbiBzaGlwKHNoaXBMZW5ndGgpIHtcbiAgbGV0IG5UaW1lc0hpdCA9IDA7XG4gIGxldCBsZW5ndGggPSBzaGlwTGVuZ3RoO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBuVGltZXNIaXQgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoblRpbWVzSGl0ID49IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpKCkge1xuICBmdW5jdGlvbiBjcmVhdGVHcmlkcygpIHtcbiAgICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIxU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0xLWJvYXJkX19zaG90c1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaGlwc1wiKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLWJvYXJkX19zaG90c1wiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBwbGF5ZXIxU2hpcHMuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgICBwbGF5ZXIxU2hvdHMuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgICBwbGF5ZXIyU2hpcHMuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgICBwbGF5ZXIyU2hvdHMuYXBwZW5kQ2hpbGQoZGl2NCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgbWFpbi5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNXB4KVwiO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDaG9vc2UgdGhlIG51bWJlciBvZiBodW1hbiBwbGF5ZXJzOlwiO1xuICAgICAgY29uc3QgYnR0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnR0bjEudGV4dENvbnRlbnQgPSBcIjEgUGxheWVyIChhbmQgb25lIGNvbXB1dGVyIHBsYXllcilcIjtcbiAgICAgIGNvbnN0IGJ0dG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ0dG4yLnRleHRDb250ZW50ID0gXCIyIFBsYXllcnMgKGFuZCB6ZXJvIGNvbXB1dGVyIHBsYXllcilcIjtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4yKTtcblxuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLnN0eWxlID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDo1MCU7IGxlZnQ6MzAlO1wiO1xuXG4gICAgICBidHRuMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID0gXCJibHVyKDApXCI7XG4gICAgICAgIHJlc29sdmUoMSk7XG4gICAgICB9KTtcblxuICAgICAgYnR0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBtYWluLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwKVwiO1xuICAgICAgICByZXNvbHZlKDIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxvYWQocGxheWVyMSwgcGxheWVyMikge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBwb3B1bGF0ZVNoaXBzKHBsYXllcjEsIHBsYXllcjIsIGNvdW50ZXIsIGksIGopO1xuICAgICAgICBwb3B1bGF0ZVNob3RzKHBsYXllcjEsIHBsYXllcjIsIGNvdW50ZXIsIGksIGopO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVTaGlwcyhwbGF5ZXIxLCBwbGF5ZXIyLCBjb3VudGVyLCBpLCBqKSB7XG4gICAgY29uc3QgcGxheWVyMVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0xLWJvYXJkX19zaGlwcyA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucGxheWVyLTItYm9hcmRfX3NoaXBzID4gZGl2XCJcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLmhpdCA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHBsYXllcjFTaGlwc1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5oaXQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHBsYXllcjFTaGlwc1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopID09PSBcIm1pc3NcIikge1xuICAgICAgcGxheWVyMVNoaXBzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5oaXQgPT09IHRydWUgJiZcbiAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5zaGlwLmlzU3VuaygpXG4gICAgKSB7XG4gICAgICBwbGF5ZXIxU2hpcHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjM2UwNzAzXCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopLmhpdCA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHBsYXllcjJTaGlwc1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5oaXQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHBsYXllcjJTaGlwc1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0Qm9hcmRFbGVtZW50KGksIGopID09PSBcIm1pc3NcIikge1xuICAgICAgcGxheWVyMlNoaXBzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRCb2FyZEVsZW1lbnQoaSwgaikgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5oaXQgPT09IHRydWUgJiZcbiAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldEJvYXJkRWxlbWVudChpLCBqKS5zaGlwLmlzU3VuaygpXG4gICAgKSB7XG4gICAgICBwbGF5ZXIyU2hpcHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjM2UwNzAzXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVTaG90cyhwbGF5ZXIxLCBwbGF5ZXIyLCBjb3VudGVyLCBpLCBqKSB7XG4gICAgY29uc3QgcGxheWVyMVNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLnBsYXllci0xLWJvYXJkX19zaG90cyA+IGRpdlwiXG4gICAgKTtcblxuICAgIGNvbnN0IHBsYXllcjJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5wbGF5ZXItMi1ib2FyZF9fc2hvdHMgPiBkaXZcIlxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikuaGl0ID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBwbGF5ZXIxU2hvdHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikuaGl0ID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcGxheWVyMVNob3RzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLmdldE1pc3NlZEF0dGFjayhpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopLmhpdCA9PT0gdHJ1ZSAmJlxuICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopLnN1bmsgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHBsYXllcjFTaG90c1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzZTA3MDNcIjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikuaGl0ID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBwbGF5ZXIyU2hvdHNbY291bnRlcl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopID09PSBcIm9iamVjdFwiICYmXG4gICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5nZXRNaXNzZWRBdHRhY2soaSwgaikuaGl0ID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcGxheWVyMlNob3RzW2NvdW50ZXJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLmdldE1pc3NlZEF0dGFjayhpLCBqKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopLmhpdCA9PT0gdHJ1ZSAmJlxuICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuZ2V0TWlzc2VkQXR0YWNrKGksIGopLnN1bmsgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHBsYXllcjJTaG90c1tjb3VudGVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzZTA3MDNcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBjcmVhdGVHcmlkcywgY2hvb3NlTnVtYmVyT2ZQbGF5ZXJzLCByZWxvYWQgfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWlue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMDBweDtcbn1cblxuLmJvYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGxheWVyLTEtYm9hcmQsXG4ucGxheWVyLTItYm9hcmR7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4ucGxheWVyLTEtYm9hcmRfX3NoaXBzLFxuLnBsYXllci0xLWJvYXJkX19zaG90cyxcbi5wbGF5ZXItMi1ib2FyZF9fc2hpcHMsXG4ucGxheWVyLTItYm9hcmRfX3Nob3Rze1xuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7Ozs7SUFJSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNDQUFzQztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItMS1ib2FyZCxcXG4ucGxheWVyLTItYm9hcmR7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5wbGF5ZXItMS1ib2FyZF9fc2hpcHMsXFxuLnBsYXllci0xLWJvYXJkX19zaG90cyxcXG4ucGxheWVyLTItYm9hcmRfX3NoaXBzLFxcbi5wbGF5ZXItMi1ib2FyZF9fc2hvdHN7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2dve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbi5sb2dvIGltZ3tcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbG9nby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2dve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG4ubG9nbyBpbWd7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2NvcmV7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Njb3JlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjs7QUFFdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjb3Jle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbiAgICBtYXJnaW46NHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcbiAgICBtYXJnaW46NHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ28uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9zY29yZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2xvZ28uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9nYW1lYm9hcmQuY3NzXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllci9wbGF5ZXJcIjtcbmltcG9ydCB1aSBmcm9tIFwiLi91c2VySW50ZXJmYWNlL1VJXCI7XG5cbmNvbnN0IFVJID0gdWkoKTtcblVJLmNob29zZU51bWJlck9mUGxheWVycygpLnRoZW4oKG51bVBsYXllcnMpID0+IHtcbiAgVUkuY3JlYXRlR3JpZHMoKTtcbiAgbGV0IHBsYXllcjE7XG4gIGxldCBwbGF5ZXIyO1xuICBpZiAobnVtUGxheWVycyA9PT0gMSkge1xuICAgIHBsYXllcjEgPSBwbGF5ZXIoXCJVc2VyXCIpO1xuICAgIHBsYXllcjIgPSBwbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIxID0gcGxheWVyKFwiVXNlclwiKTtcbiAgICBwbGF5ZXIyID0gcGxheWVyKFwiVXNlcjJcIik7XG4gIH1cblxuICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMywgNCwgMywgXCJoXCIpO1xuICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDMsIDQpO1xuICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDMsIDUpO1xuICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDgsIDIpO1xuXG4gIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLnNldE1pc3NlZEF0dGFjaygzLCA0LCB0cnVlKTtcbiAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQuc2V0TWlzc2VkQXR0YWNrKDMsIDUsIHRydWUpO1xuICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZC5zZXRNaXNzZWRBdHRhY2soOCwgMiwgZmFsc2UpO1xuXG4gIFVJLnJlbG9hZChwbGF5ZXIxLCBwbGF5ZXIyKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNoaXAiLCJnYW1lQm9hcmQiLCJib2FyZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1pc3NlZEF0dGFja3MiLCJwbGFjZVNoaXAiLCJyb3ciLCJjb2x1bW4iLCJkaXJlY3Rpb24iLCJuZXdTaGlwIiwidmVyaWZ5RGltZW5zaW9uIiwiaSIsImhpdCIsInJlY2VpdmVBdHRhY2siLCJpc1N1bmsiLCJhcmd1bWVudHMiLCJzZXRNaXNzZWRBdHRhY2siLCJzdGF0dXMiLCJzdW5rIiwiZ2V0TWlzc2VkQXR0YWNrIiwiZ2V0Qm9hcmRFbGVtZW50IiwidmVyaWZ5RW5kR2FtZSIsImoiLCJwbGF5ZXIiLCJuYW1lIiwicGxheWVyTmFtZSIsInBsYXllckdhbWVCb2FyZCIsInNoaXBMZW5ndGgiLCJuVGltZXNIaXQiLCJ1aSIsImNyZWF0ZUdyaWRzIiwicGxheWVyMVNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNob3RzIiwicGxheWVyMlNoaXBzIiwicGxheWVyMlNob3RzIiwiZGl2MSIsImNyZWF0ZUVsZW1lbnQiLCJkaXYyIiwiZGl2MyIsImRpdjQiLCJhcHBlbmRDaGlsZCIsImNob29zZU51bWJlck9mUGxheWVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFpbiIsInN0eWxlIiwiZmlsdGVyIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImJ0dG4xIiwiYnR0bjIiLCJjb250YWluZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbG9hZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY291bnRlciIsInBvcHVsYXRlU2hpcHMiLCJwb3B1bGF0ZVNob3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImJhY2tncm91bmRDb2xvciIsIlVJIiwidGhlbiIsIm51bVBsYXllcnMiXSwic291cmNlUm9vdCI6IiJ9