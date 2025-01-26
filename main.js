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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js");

function gameBoard() {
  const gameBoardTable = [[], [], [], [], [], [], [], [], [], []];
  function verifyData(x, y, length, direction) {
    // i need to verify if all the data are correct
    // and don't go into a not acceptable state

    if (x > 9 || x < 0 || y > 9 || y < 0 || length <= 0 || length > 5) {
      // i need a method to verify if the inserted data are incorrect
      return false;
    }
    if (direction !== "horizontal" && direction !== "vertical") {
      // verify if direction is correct
      // (theorically this shouldn't be added as most probably there will be only 2 options)
      return false;
    }
    if (direction === "horizontal") {
      if (length + y - 1 > 9) return false;
      for (let i = y; i < y + length - 1; i += 1) {
        if (typeof gameBoardTable[x][i] === "object") return false;
      }
    } else if (direction === "vertical") {
      if (length + x - 1 > 9) return false;
      for (let i = x; i < x + length - 1; i += 1) {
        if (typeof gameBoardTable[i][y] === "object") return false;
      }
    }
    return true;
  }
  function placeShip(x, y, length, direction) {
    if (verifyData(x, y, length, direction) === true) {
      const newShip = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])();
      gameBoardTable[x][y] = newShip;
      if (direction === "vertical") {
        for (let i = x + 1; i < length + x; i += 1) {
          gameBoardTable[i][y] = newShip;
        }
      } else if (direction === "horizontal") {
        for (let j = y + 1; j < length + y; j += 1) {
          gameBoardTable[x][j] = newShip;
        }
      }
    } else {
      return false;
    }
    return true;
  }
  function getShip(x, y) {
    return gameBoardTable[x][y];
  }
  function allShipsHaveBeenSunk() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof gameBoardTable[i][j] === "object") return false;
      }
    }
    return true;
  }
  function clearAll() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoardTable[i][j] = undefined;
      }
    }
  }
  function recieveAttack(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9) return false;
    if (typeof gameBoardTable[x][y] === "object") {
      gameBoardTable[x][y].hit();
      gameBoardTable[x][y] = "hit";
      return true;
    }
    if (typeof gameBoardTable[x][y] === "string") return false;
    gameBoardTable[x][y] = "miss";
    return false;
  }
  return {
    placeShip,
    getShip,
    recieveAttack,
    allShipsHaveBeenSunk,
    clearAll
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameBoard/gameBoard */ "./src/gameBoard/gameBoard.js");

function Player() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "computer";
  const playerGameBoard = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return {
    name,
    playerGameBoard
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

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
function Ship(length) {
  let nTimesHit = 0;
  function hit() {
    nTimesHit += 1;
  }
  function isSunk() {
    if (nTimesHit >= length) {
      return true;
    }
    return false;
  }
  return {
    hit,
    isSunk
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/userInterface/UI.js":
/*!*********************************!*\
  !*** ./src/userInterface/UI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    const player1Choice = document.querySelectorAll(".gameBoard__player1__choice > div");
    const player2Choice = document.querySelectorAll(".gameBoard__player2__choice > div");
    let count = 0;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof GB1.getShip(i, j) === "object") {
          // object to be inserted
          player1[count].textContent = "SHIP";
        } else if (GB1.getShip(i, j) === "miss") {
          player1[count].textContent = "miss";
          player2Choice[count].style.backgroundColor = "red";
        } else if (GB1.getShip(i, j) === "hit") {
          player1[count].textContent = "hit";
          player2Choice[count].style.backgroundColor = "green";
        } else if (GB1.getShip(i, j) === undefined) {
          player1[count].textContent = "";
        }
        if (typeof GB2.getShip(i, j) === "object") {
          // object to be inserted
          player2[count].textContent = "SHIP";
        } else if (GB2.getShip(i, j) === "miss") {
          player2[count].textContent = "miss";
          player1Choice[count].style.backgroundColor = "red";
        } else if (GB2.getShip(i, j) === "hit") {
          player2[count].textContent = "hit";
          player1Choice[count].style.backgroundColor = "green";
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
    const player2 = document.querySelectorAll(".gameBoard__player2__choice > div");
    let count = Math.floor(Math.random() * 100);
    while (player1[count].textContent === "hit" || player1[count].textContent === "miss") {
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
      if (row && column && length && directionInput.value && playerInput.value) {
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
    const player1 = document.querySelectorAll(".gameBoard__player1__choice > div");
    const player2 = document.querySelectorAll(".gameBoard__player2__choice > div");
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
    dragElement.addEventListener("dragstart", ev => {
      ev.dataTransfer.setData("text", dragDirection.value);
      ev.dataTransfer.setData("text1", dragDimension.value);
    });
    const gameBoard1 = document.querySelectorAll(".gameBoard__player1 div");
    const gameBoard2 = document.querySelectorAll(".gameBoard__player2 div");
    let count = 0;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoard1[count].addEventListener("dragover", ev => {
          ev.preventDefault();
        });
        gameBoard2[count].addEventListener("dragover", ev => {
          ev.preventDefault();
        });
        count += 1;
      }
    }
    count = 0;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoard1[count].addEventListener("drop", ev => {
          player1Board.placeShip(i, j, parseInt(ev.dataTransfer.getData("text1"), 10), ev.dataTransfer.getData("text"));
          reloadBoard(player1Board, player2Board);
          ev.preventDefault();
        });
        gameBoard2[count].addEventListener("drop", ev => {
          player2Board.placeShip(i, j, parseInt(ev.dataTransfer.getData("text1"), 10), ev.dataTransfer.getData("text"));
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
    startDrag
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

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
    box-sizing:border-box;
}

html,body{
    height: 100%;
    background-color: #23486A;
    font-size: 1.2rem;
    font-style: italic;
    color:whitesmoke;
}

input,option,select,.box-dimension{
    background-color: #efb036;
}

button{
    background: none;
    border:none;
    background-color: #efb036;
    border-radius: 100px;
    font-style: italic;
    color: #a94a4a;
}

.gameBoard,
.gameBoardChoice{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    gap:10%;
}

.gameBoard__player1,
.gameBoard__player2,
.gameBoard__player1__choice,
.gameBoard__player2__choice{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
}

.gameBoard__squares{
    width: 10%;
    height: 30px;
    border: 2px solid #818c78;
    background: linear-gradient(to right ,#4c7b8b,#23486a,#3b6790);
}

.startGame-button{
    margin-top: 3rem;
}


.box-dimension{
    border:2px solid #4c7b8b;
    width: 2rem;
    height: 2rem;
}


.drag-n-drop{
    margin-top:2rem;
    display: flex;
    gap:30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,OAAO;AACX;;AAEA;;;;IAII,UAAU;IACV,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,8DAA8D;AAClE;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,QAAQ;AACZ","sourcesContent":["*{\n    box-sizing:border-box;\n}\n\nhtml,body{\n    height: 100%;\n    background-color: #23486A;\n    font-size: 1.2rem;\n    font-style: italic;\n    color:whitesmoke;\n}\n\ninput,option,select,.box-dimension{\n    background-color: #efb036;\n}\n\nbutton{\n    background: none;\n    border:none;\n    background-color: #efb036;\n    border-radius: 100px;\n    font-style: italic;\n    color: #a94a4a;\n}\n\n.gameBoard,\n.gameBoardChoice{\n    display: flex;\n    justify-content: center;\n    margin-top: 3rem;\n    gap:10%;\n}\n\n.gameBoard__player1,\n.gameBoard__player2,\n.gameBoard__player1__choice,\n.gameBoard__player2__choice{\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.gameBoard__squares{\n    width: 10%;\n    height: 30px;\n    border: 2px solid #818c78;\n    background: linear-gradient(to right ,#4c7b8b,#23486a,#3b6790);\n}\n\n.startGame-button{\n    margin-top: 3rem;\n}\n\n\n.box-dimension{\n    border:2px solid #4c7b8b;\n    width: 2rem;\n    height: 2rem;\n}\n\n\n.drag-n-drop{\n    margin-top:2rem;\n    display: flex;\n    gap:30px;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _userInterface_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterface/UI */ "./src/userInterface/UI.js");



function main() {
  const userInterface = (0,_userInterface_UI__WEBPACK_IMPORTED_MODULE_2__["default"])();
  userInterface.paintBoards();
  const player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])("Antonio");
  const player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const startButton = document.querySelector(".startGame-button");
  userInterface.createShipButtonActive(player1.playerGameBoard, player2.playerGameBoard);
  userInterface.startDrag(player1.playerGameBoard, player2.playerGameBoard);
  startButton.addEventListener("click", () => {
    userInterface.initiateBox(player1.playerGameBoard, player2.playerGameBoard, player2.name);
    userInterface.reloadBoard(player1.playerGameBoard, player2.playerGameBoard);

    // Here finishes the positioning phase.
    // now turns have to take over.

    const shipCreationContainer = document.querySelector(".ship-creation-container");
    const uiPlayer1 = document.querySelector(".gameBoard__player1");
    const uiPlayer2 = document.querySelector(".gameBoard__player2");
    const uiPlayer1Choice = document.querySelector(".gameBoard__player1__choice");
    const uiPlayer2Choice = document.querySelector(".gameBoard__player2__choice");
    uiPlayer1.style.visibility = "visible";
    uiPlayer1Choice.style.visibility = "visible";
    uiPlayer2.style.visibility = "hidden";
    uiPlayer2Choice.style.visibility = "hidden";
    shipCreationContainer.style.visibility = "hidden";
  }, {
    once: true
  });
}
main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNHLFVBQVUsR0FBRyxRQUFRO0lBQzNDMEMscUJBQXFCLENBQUM3QyxLQUFLLENBQUNHLFVBQVUsR0FBRyxRQUFRO0VBQ25ELENBQUMsRUFDRDtJQUFFK0MsSUFBSSxFQUFFO0VBQUssQ0FDZixDQUFDO0FBQ0g7QUFFQVIsSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9nYW1lQm9hcmQvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3VzZXJJbnRlcmZhY2UvVUkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgY29uc3QgZ2FtZUJvYXJkVGFibGUgPSBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dO1xuXG4gIGZ1bmN0aW9uIHZlcmlmeURhdGEoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBpIG5lZWQgdG8gdmVyaWZ5IGlmIGFsbCB0aGUgZGF0YSBhcmUgY29ycmVjdFxuICAgIC8vIGFuZCBkb24ndCBnbyBpbnRvIGEgbm90IGFjY2VwdGFibGUgc3RhdGVcblxuICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCB8fCBsZW5ndGggPD0gMCB8fCBsZW5ndGggPiA1KSB7XG4gICAgICAvLyBpIG5lZWQgYSBtZXRob2QgdG8gdmVyaWZ5IGlmIHRoZSBpbnNlcnRlZCBkYXRhIGFyZSBpbmNvcnJlY3RcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSBcImhvcml6b250YWxcIiAmJiBkaXJlY3Rpb24gIT09IFwidmVydGljYWxcIikge1xuICAgICAgLy8gdmVyaWZ5IGlmIGRpcmVjdGlvbiBpcyBjb3JyZWN0XG4gICAgICAvLyAodGhlb3JpY2FsbHkgdGhpcyBzaG91bGRuJ3QgYmUgYWRkZWQgYXMgbW9zdCBwcm9iYWJseSB0aGVyZSB3aWxsIGJlIG9ubHkgMiBvcHRpb25zKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAobGVuZ3RoICsgeSAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGdhbWVCb2FyZFRhYmxlW3hdW2ldID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKGxlbmd0aCArIHggLSAxID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVtpXVt5XSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKHZlcmlmeURhdGEoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gU2hpcCgpO1xuICAgICAgZ2FtZUJvYXJkVGFibGVbeF1beV0gPSBuZXdTaGlwO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHggKyAxOyBpIDwgbGVuZ3RoICsgeDsgaSArPSAxKSB7XG4gICAgICAgICAgZ2FtZUJvYXJkVGFibGVbaV1beV0gPSBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IHkgKyAxOyBqIDwgbGVuZ3RoICsgeTsgaiArPSAxKSB7XG4gICAgICAgICAgZ2FtZUJvYXJkVGFibGVbeF1bal0gPSBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXAoeCwgeSkge1xuICAgIHJldHVybiBnYW1lQm9hcmRUYWJsZVt4XVt5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFNoaXBzSGF2ZUJlZW5TdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2FtZUJvYXJkVGFibGVbaV1bal0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckFsbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBnYW1lQm9hcmRUYWJsZVtpXVtqXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNpZXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgZ2FtZUJvYXJkVGFibGVbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGdhbWVCb2FyZFRhYmxlW3hdW3ldLmhpdCgpO1xuICAgICAgZ2FtZUJvYXJkVGFibGVbeF1beV0gPSBcImhpdFwiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2FtZUJvYXJkVGFibGVbeF1beV0gPT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgICBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9IFwibWlzc1wiO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxhY2VTaGlwLCBnZXRTaGlwLCByZWNpZXZlQXR0YWNrLCBhbGxTaGlwc0hhdmVCZWVuU3VuaywgY2xlYXJBbGwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi4vZ2FtZUJvYXJkL2dhbWVCb2FyZFwiO1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSA9IFwiY29tcHV0ZXJcIikge1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICByZXR1cm4geyBuYW1lLCBwbGF5ZXJHYW1lQm9hcmQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgbGV0IG5UaW1lc0hpdCA9IDA7XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIG5UaW1lc0hpdCArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChuVGltZXNIaXQgPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImZ1bmN0aW9uIFVJKCkge1xuICBjb25zdCBjb21wdXRlclN0YWNrID0gW107XG4gIGZ1bmN0aW9uIHBhaW50Qm9hcmRzKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJcIik7XG4gICAgY29uc3QgcGxheWVyMUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2VcIik7XG4gICAgY29uc3QgcGxheWVyMkNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2VcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbmV3Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXJDaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbmV3Q29udGFpbmVyMkNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIG5ld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkX19zcXVhcmVzXCIpO1xuICAgICAgbmV3Q29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkX19zcXVhcmVzXCIpO1xuICAgICAgbmV3Q29udGFpbmVyQ2hvaWNlLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXIyQ2hvaWNlLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG5cbiAgICAgIHBsYXllcjEuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbiAgICAgIHBsYXllcjIuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyMik7XG4gICAgICBwbGF5ZXIxQ2hvaWNlLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lckNob2ljZSk7XG4gICAgICBwbGF5ZXIyQ2hvaWNlLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcjJDaG9pY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZEJvYXJkKEdCMSwgR0IyKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxIGRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjIgZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllcjFDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2UgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMkNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBHQjEuZ2V0U2hpcChpLCBqKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIC8vIG9iamVjdCB0byBiZSBpbnNlcnRlZFxuICAgICAgICAgIHBsYXllcjFbY291bnRdLnRleHRDb250ZW50ID0gXCJTSElQXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IxLmdldFNoaXAoaSwgaikgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgICBwbGF5ZXIyQ2hvaWNlW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMS5nZXRTaGlwKGksIGopID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcImhpdFwiO1xuICAgICAgICAgIHBsYXllcjJDaG9pY2VbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjEuZ2V0U2hpcChpLCBqKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBHQjIuZ2V0U2hpcChpLCBqKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIC8vIG9iamVjdCB0byBiZSBpbnNlcnRlZFxuICAgICAgICAgIHBsYXllcjJbY291bnRdLnRleHRDb250ZW50ID0gXCJTSElQXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IyLmdldFNoaXAoaSwgaikgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0udGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgICBwbGF5ZXIxQ2hvaWNlW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMi5nZXRTaGlwKGksIGopID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0udGV4dENvbnRlbnQgPSBcImhpdFwiO1xuICAgICAgICAgIHBsYXllcjFDaG9pY2VbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjIuZ2V0U2hpcChpLCBqKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvYnNjdXJlQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMlwiKTtcbiAgICBjb25zdCBwbGF5ZXIxQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZVwiKTtcblxuICAgIGlmIChwbGF5ZXIxLnN0eWxlLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcbiAgICAgIHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgcGxheWVyMUNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxLnN0eWxlLnZpc2liaWxpdHkgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICBwbGF5ZXIxLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgcGxheWVyMUNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyMi5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICBwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHBsYXllcjJDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMi5zdHlsZS52aXNpYmlsaXR5ID09PSBcInZpc2libGVcIikge1xuICAgICAgcGxheWVyMi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIHBsYXllcjJDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUNvbXB1dGVyQ2hvaWNlKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMSA+IGRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgIHdoaWxlIChcbiAgICAgIHBsYXllcjFbY291bnRdLnRleHRDb250ZW50ID09PSBcImhpdFwiIHx8XG4gICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9PT0gXCJtaXNzXCJcbiAgICApIHtcbiAgICAgIGNvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcHV0ZXJTdGFjay5sZW5ndGggPD0gMCkge1xuICAgICAgaWYgKHBsYXllcjFbY291bnRdLnRleHRDb250ZW50ID09PSBcIlNISVBcIikge1xuICAgICAgICBwbGF5ZXIyW2NvdW50XS5jbGljaygpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyAxKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgMik7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDMpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyA0KTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gMSk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDIpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSAzKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gNCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDEwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgMjApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyAzMCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDQwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gMTApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSAyMCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDMwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gNDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyMltjb3VudF0uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbXB1dGVyU3RhY2tbMF0gPiA5OSB8fCBjb21wdXRlclN0YWNrWzBdIDwgMCkge1xuICAgICAgICBjb21wdXRlclN0YWNrLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBsYXllcjJbY29tcHV0ZXJTdGFjay5zaGlmdCgpXS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXBCdXR0b25BY3RpdmUocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpIHtcbiAgICBjb25zdCBjcmVhdGVTaGlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtc2hpcC1idXR0b25cIik7XG4gICAgY29uc3Qgcm93SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvd1wiKTtcbiAgICBjb25zdCBjb2x1bW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29sdW1uXCIpO1xuICAgIGNvbnN0IGxlbmd0aElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZW5ndGhcIik7XG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpcmVjdGlvblwiKTtcbiAgICBjb25zdCBwbGF5ZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xuXG4gICAgY3JlYXRlU2hpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQocm93SW5wdXQudmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGNvbHVtbklucHV0LnZhbHVlLCAxMCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBwYXJzZUludChsZW5ndGhJbnB1dC52YWx1ZSwgMTApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHJvdyAmJlxuICAgICAgICBjb2x1bW4gJiZcbiAgICAgICAgbGVuZ3RoICYmXG4gICAgICAgIGRpcmVjdGlvbklucHV0LnZhbHVlICYmXG4gICAgICAgIHBsYXllcklucHV0LnZhbHVlXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYXllcklucHV0LnZhbHVlID09PSBcInBsYXllcjFcIikge1xuICAgICAgICAgIHBsYXllcjFCb2FyZC5wbGFjZVNoaXAocm93LCBjb2x1bW4sIGxlbmd0aCwgZGlyZWN0aW9uSW5wdXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcklucHV0LnZhbHVlID09PSBcInBsYXllcjJcIikge1xuICAgICAgICAgIHBsYXllcjJCb2FyZC5wbGFjZVNoaXAocm93LCBjb2x1bW4sIGxlbmd0aCwgZGlyZWN0aW9uSW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbG9hZEJvYXJkKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYXRlQm94KEdCUGxheWVyMSwgR0JQbGF5ZXIyLCBwbGF5ZXIyTmFtZSkge1xuICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2UgPiBkaXZcIlxuICAgICk7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgcGxheWVyMVtjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBHQlBsYXllcjIucmVjaWV2ZUF0dGFjayhpLCBqKTtcbiAgICAgICAgICBpZiAoR0JQbGF5ZXIyLmFsbFNoaXBzSGF2ZUJlZW5TdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIEdCUGxheWVyMS5jbGVhckFsbCgpO1xuICAgICAgICAgICAgR0JQbGF5ZXIyLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICBzY29yZS50ZXh0Q29udGVudCA9IFwiUExBWUVSIDEgV0lOU1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWxvYWRCb2FyZChHQlBsYXllcjEsIEdCUGxheWVyMik7XG4gICAgICAgICAgc2V0VGltZW91dChvYnNjdXJlQm9hcmQsIDEwMDApO1xuICAgICAgICAgIC8qIG9ic2N1cmVCb2FyZCgpOyAqL1xuICAgICAgICAgIGlmIChwbGF5ZXIyTmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBtYWtlQ29tcHV0ZXJDaG9pY2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYXllcjJbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgR0JQbGF5ZXIxLnJlY2lldmVBdHRhY2soaSwgaik7XG4gICAgICAgICAgaWYgKEdCUGxheWVyMS5hbGxTaGlwc0hhdmVCZWVuU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBHQlBsYXllcjEuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIEdCUGxheWVyMi5jbGVhckFsbCgpO1xuICAgICAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIlBMQVlFUiAyIFdJTlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsb2FkQm9hcmQoR0JQbGF5ZXIxLCBHQlBsYXllcjIpO1xuICAgICAgICAgIHNldFRpbWVvdXQob2JzY3VyZUJvYXJkLCAxMDAwKTtcbiAgICAgICAgICAvKiBvYnNjdXJlQm9hcmQoKTsgKi9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydERyYWcocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpIHtcbiAgICBjb25zdCBkcmFnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94LWRpbWVuc2lvblwiKTtcbiAgICBjb25zdCBkcmFnRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcmFnLW4tZHJvcF9fZGlyZWN0aW9uXCIpO1xuICAgIGNvbnN0IGRyYWdEaW1lbnNpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RyYWctbi1kcm9wX19kaW1lbnNpb25cIik7XG5cbiAgICBkcmFnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldikgPT4ge1xuICAgICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGRyYWdEaXJlY3Rpb24udmFsdWUpO1xuICAgICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0MVwiLCBkcmFnRGltZW5zaW9uLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdhbWVCb2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMSBkaXZcIik7XG4gICAgY29uc3QgZ2FtZUJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZUJvYXJkX19wbGF5ZXIyIGRpdlwiKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBnYW1lQm9hcmQxW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWVCb2FyZDJbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXYpID0+IHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBnYW1lQm9hcmQxW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXYpID0+IHtcbiAgICAgICAgICBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBwYXJzZUludChldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQxXCIpLCAxMCksXG4gICAgICAgICAgICBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIilcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlbG9hZEJvYXJkKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKTtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZUJvYXJkMltjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgcGxheWVyMkJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgcGFyc2VJbnQoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0MVwiKSwgMTApLFxuICAgICAgICAgICAgZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZWxvYWRCb2FyZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYWludEJvYXJkcyxcbiAgICBpbml0aWF0ZUJveCxcbiAgICByZWxvYWRCb2FyZCxcbiAgICBvYnNjdXJlQm9hcmQsXG4gICAgY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZSxcbiAgICBzdGFydERyYWcsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG5odG1sLGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzQ4NkE7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOndoaXRlc21va2U7XG59XG5cbmlucHV0LG9wdGlvbixzZWxlY3QsLmJveC1kaW1lbnNpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYjAzNjtcbn1cblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYjAzNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICNhOTRhNGE7XG59XG5cbi5nYW1lQm9hcmQsXG4uZ2FtZUJvYXJkQ2hvaWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBnYXA6MTAlO1xufVxuXG4uZ2FtZUJvYXJkX19wbGF5ZXIxLFxuLmdhbWVCb2FyZF9fcGxheWVyMixcbi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSxcbi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ2FtZUJvYXJkX19zcXVhcmVze1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MThjNzg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0ICwjNGM3YjhiLCMyMzQ4NmEsIzNiNjc5MCk7XG59XG5cbi5zdGFydEdhbWUtYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG5cblxuLmJveC1kaW1lbnNpb257XG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNGM3YjhiO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbn1cblxuXG4uZHJhZy1uLWRyb3B7XG4gICAgbWFyZ2luLXRvcDoycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLE9BQU87QUFDWDs7QUFFQTs7OztJQUlJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDhEQUE4RDtBQUNsRTs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNDg2QTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG59XFxuXFxuaW5wdXQsb3B0aW9uLHNlbGVjdCwuYm94LWRpbWVuc2lvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYjAzNjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYjAzNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6ICNhOTRhNGE7XFxufVxcblxcbi5nYW1lQm9hcmQsXFxuLmdhbWVCb2FyZENob2ljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGdhcDoxMCU7XFxufVxcblxcbi5nYW1lQm9hcmRfX3BsYXllcjEsXFxuLmdhbWVCb2FyZF9fcGxheWVyMixcXG4uZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2UsXFxuLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNle1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5nYW1lQm9hcmRfX3NxdWFyZXN7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzgxOGM3ODtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0ICwjNGM3YjhiLCMyMzQ4NmEsIzNiNjc5MCk7XFxufVxcblxcbi5zdGFydEdhbWUtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5cXG4uYm94LWRpbWVuc2lvbntcXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNGM3YjhiO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5cXG4uZHJhZy1uLWRyb3B7XFxuICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IFVJIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UvVUlcIjtcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgdXNlckludGVyZmFjZSA9IFVJKCk7XG4gIHVzZXJJbnRlcmZhY2UucGFpbnRCb2FyZHMoKTtcblxuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKFwiQW50b25pb1wiKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcigpO1xuXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEdhbWUtYnV0dG9uXCIpO1xuXG4gIHVzZXJJbnRlcmZhY2UuY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZShcbiAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCxcbiAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZFxuICApO1xuXG4gIHVzZXJJbnRlcmZhY2Uuc3RhcnREcmFnKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLCBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZCk7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKCkgPT4ge1xuICAgICAgdXNlckludGVyZmFjZS5pbml0aWF0ZUJveChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICBwbGF5ZXIyLm5hbWVcbiAgICAgICk7XG5cbiAgICAgIHVzZXJJbnRlcmZhY2UucmVsb2FkQm9hcmQoXG4gICAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZFxuICAgICAgKTtcblxuICAgICAgLy8gSGVyZSBmaW5pc2hlcyB0aGUgcG9zaXRpb25pbmcgcGhhc2UuXG4gICAgICAvLyBub3cgdHVybnMgaGF2ZSB0byB0YWtlIG92ZXIuXG5cbiAgICAgIGNvbnN0IHNoaXBDcmVhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnNoaXAtY3JlYXRpb24tY29udGFpbmVyXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHVpUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgICAgY29uc3QgdWlQbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJcIik7XG4gICAgICBjb25zdCB1aVBsYXllcjFDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgdWlQbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2VcIlxuICAgICAgKTtcbiAgICAgIHVpUGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB1aVBsYXllcjFDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgdWlQbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgdWlQbGF5ZXIyQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgc2hpcENyZWF0aW9uQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKTtcbn1cblxubWFpbigpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJnYW1lQm9hcmQiLCJnYW1lQm9hcmRUYWJsZSIsInZlcmlmeURhdGEiLCJ4IiwieSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImkiLCJwbGFjZVNoaXAiLCJuZXdTaGlwIiwiaiIsImdldFNoaXAiLCJhbGxTaGlwc0hhdmVCZWVuU3VuayIsImNsZWFyQWxsIiwidW5kZWZpbmVkIiwicmVjaWV2ZUF0dGFjayIsImhpdCIsIlBsYXllciIsIm5hbWUiLCJhcmd1bWVudHMiLCJwbGF5ZXJHYW1lQm9hcmQiLCJuVGltZXNIaXQiLCJpc1N1bmsiLCJVSSIsImNvbXB1dGVyU3RhY2siLCJwYWludEJvYXJkcyIsInBsYXllcjEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXIyIiwicGxheWVyMUNob2ljZSIsInBsYXllcjJDaG9pY2UiLCJuZXdDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwibmV3Q29udGFpbmVyMiIsIm5ld0NvbnRhaW5lckNob2ljZSIsIm5ld0NvbnRhaW5lcjJDaG9pY2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInJlbG9hZEJvYXJkIiwiR0IxIiwiR0IyIiwicXVlcnlTZWxlY3RvckFsbCIsImNvdW50IiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm9ic2N1cmVCb2FyZCIsInZpc2liaWxpdHkiLCJtYWtlQ29tcHV0ZXJDaG9pY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjbGljayIsInB1c2giLCJzaGlmdCIsImNyZWF0ZVNoaXBCdXR0b25BY3RpdmUiLCJwbGF5ZXIxQm9hcmQiLCJwbGF5ZXIyQm9hcmQiLCJjcmVhdGVTaGlwQnV0dG9uIiwicm93SW5wdXQiLCJjb2x1bW5JbnB1dCIsImxlbmd0aElucHV0IiwiZGlyZWN0aW9uSW5wdXQiLCJwbGF5ZXJJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3ciLCJwYXJzZUludCIsInZhbHVlIiwiY29sdW1uIiwiaW5pdGlhdGVCb3giLCJHQlBsYXllcjEiLCJHQlBsYXllcjIiLCJwbGF5ZXIyTmFtZSIsInNjb3JlIiwic2V0VGltZW91dCIsInN0YXJ0RHJhZyIsImRyYWdFbGVtZW50IiwiZHJhZ0RpcmVjdGlvbiIsImRyYWdEaW1lbnNpb24iLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJnYW1lQm9hcmQxIiwiZ2FtZUJvYXJkMiIsInByZXZlbnREZWZhdWx0IiwiZ2V0RGF0YSIsIm1haW4iLCJ1c2VySW50ZXJmYWNlIiwic3RhcnRCdXR0b24iLCJzaGlwQ3JlYXRpb25Db250YWluZXIiLCJ1aVBsYXllcjEiLCJ1aVBsYXllcjIiLCJ1aVBsYXllcjFDaG9pY2UiLCJ1aVBsYXllcjJDaG9pY2UiLCJvbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==