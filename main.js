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
    color:rgba(0, 0, 0, 0);  /* all the phrases and text are hidden */
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;;AAEpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,OAAO;AACX;;AAEA;;;;IAII,UAAU;IACV,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,8DAA8D;IAC9D,sBAAsB,GAAG,wCAAwC;AACrE;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,QAAQ;AACZ","sourcesContent":["*{\n    box-sizing:border-box;\n}\n\nhtml,body{\n    height: 100%;\n    background-color: #23486A;\n    font-size: 1.2rem;\n    font-style: italic;\n    color:whitesmoke;\n    \n}\n\ninput,option,select,.box-dimension{\n    background-color: #efb036;\n}\n\nbutton{\n    background: none;\n    border:none;\n    background-color: #efb036;\n    border-radius: 100px;\n    font-style: italic;\n    color: #a94a4a;\n}\n\n.gameBoard,\n.gameBoardChoice{\n    display: flex;\n    justify-content: center;\n    margin-top: 3rem;\n    gap:10%;\n}\n\n.gameBoard__player1,\n.gameBoard__player2,\n.gameBoard__player1__choice,\n.gameBoard__player2__choice{\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.gameBoard__squares{\n    width: 10%;\n    height: 30px;\n    border: 2px solid #818c78;\n    background: linear-gradient(to right ,#4c7b8b,#23486a,#3b6790);\n    color:rgba(0, 0, 0, 0);  /* all the phrases and text are hidden */\n}\n\n.startGame-button{\n    margin-top: 3rem;\n}\n\n\n.box-dimension{\n    border:2px solid #4c7b8b;\n    width: 2rem;\n    height: 2rem;\n}\n\n\n.drag-n-drop{\n    margin-top:2rem;\n    display: flex;\n    gap:30px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDLENBQUNZLEtBQUssQ0FBQyxDQUFDO1FBQ3RCaEMsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlCcEIsYUFBYSxDQUFDaUMsSUFBSSxDQUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO01BQ2hDLENBQUMsTUFBTTtRQUNMZixPQUFPLENBQUNlLEtBQUssQ0FBQyxDQUFDWSxLQUFLLENBQUMsQ0FBQztNQUN4QjtJQUNGLENBQUMsTUFBTTtNQUNMLElBQUloQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJQSxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pEQSxhQUFhLENBQUNrQyxLQUFLLENBQUMsQ0FBQztRQUNyQjtNQUNGO01BQ0E3QixPQUFPLENBQUNMLGFBQWEsQ0FBQ2tDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7SUFDeEM7RUFDRjtFQUVBLFNBQVNHLHNCQUFzQkEsQ0FBQ0MsWUFBWSxFQUFFQyxZQUFZLEVBQUU7SUFDMUQsTUFBTUMsZ0JBQWdCLEdBQUduQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUN0RSxNQUFNbUMsUUFBUSxHQUFHcEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQy9DLE1BQU1vQyxXQUFXLEdBQUdyQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDckQsTUFBTXFDLFdBQVcsR0FBR3RDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNyRCxNQUFNc0MsY0FBYyxHQUFHdkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzNELE1BQU11QyxXQUFXLEdBQUd4QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFFckRrQyxnQkFBZ0IsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDL0MsTUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxFQUFFLEVBQUUsQ0FBQztNQUN4QyxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ04sV0FBVyxDQUFDTyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQzlDLE1BQU1sRSxNQUFNLEdBQUdpRSxRQUFRLENBQUNMLFdBQVcsQ0FBQ00sS0FBSyxFQUFFLEVBQUUsQ0FBQztNQUU5QyxJQUNFRixHQUFHLElBQ0hHLE1BQU0sSUFDTm5FLE1BQU0sSUFDTjZELGNBQWMsQ0FBQ0ssS0FBSyxJQUNwQkosV0FBVyxDQUFDSSxLQUFLLEVBQ2pCO1FBQ0EsSUFBSUosV0FBVyxDQUFDSSxLQUFLLEtBQUssU0FBUyxFQUFFO1VBQ25DWCxZQUFZLENBQUNwRCxTQUFTLENBQUM2RCxHQUFHLEVBQUVHLE1BQU0sRUFBRW5FLE1BQU0sRUFBRTZELGNBQWMsQ0FBQ0ssS0FBSyxDQUFDO1FBQ25FLENBQUMsTUFBTSxJQUFJSixXQUFXLENBQUNJLEtBQUssS0FBSyxTQUFTLEVBQUU7VUFDMUNWLFlBQVksQ0FBQ3JELFNBQVMsQ0FBQzZELEdBQUcsRUFBRUcsTUFBTSxFQUFFbkUsTUFBTSxFQUFFNkQsY0FBYyxDQUFDSyxLQUFLLENBQUM7UUFDbkU7UUFDQS9CLFdBQVcsQ0FBQ29CLFlBQVksRUFBRUMsWUFBWSxDQUFDO01BQ3pDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTWSxXQUFXQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQ3RELE1BQU1DLEtBQUssR0FBR2xELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM5QyxNQUFNRixPQUFPLEdBQUdDLFFBQVEsQ0FBQ2dCLGdCQUFnQixDQUN2QyxtQ0FDRixDQUFDO0lBQ0QsTUFBTWQsT0FBTyxHQUFHRixRQUFRLENBQUNnQixnQkFBZ0IsQ0FDdkMsbUNBQ0YsQ0FBQztJQUVELElBQUlDLEtBQUssR0FBRyxDQUFDO0lBRWIsS0FBSyxJQUFJckMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM5QixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUJnQixPQUFPLENBQUNrQixLQUFLLENBQUMsQ0FBQ3dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1VBQzdDTyxTQUFTLENBQUM1RCxhQUFhLENBQUNSLENBQUMsRUFBRUcsQ0FBQyxDQUFDO1VBQzdCLElBQUlpRSxTQUFTLENBQUMvRCxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzdDOEQsU0FBUyxDQUFDN0QsUUFBUSxDQUFDLENBQUM7WUFDcEI4RCxTQUFTLENBQUM5RCxRQUFRLENBQUMsQ0FBQztZQUNwQmdFLEtBQUssQ0FBQ2hDLFdBQVcsR0FBRyxlQUFlO1VBQ3JDO1VBQ0FMLFdBQVcsQ0FBQ2tDLFNBQVMsRUFBRUMsU0FBUyxDQUFDO1VBQ2pDRyxVQUFVLENBQUM1QixZQUFZLEVBQUUsSUFBSSxDQUFDO1VBQzlCO1VBQ0EsSUFBSTBCLFdBQVcsS0FBSyxVQUFVLEVBQUU7WUFDOUJ4QixrQkFBa0IsQ0FBQyxDQUFDO1VBQ3RCO1FBQ0YsQ0FBQyxDQUFDO1FBRUZ2QixPQUFPLENBQUNlLEtBQUssQ0FBQyxDQUFDd0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07VUFDN0NNLFNBQVMsQ0FBQzNELGFBQWEsQ0FBQ1IsQ0FBQyxFQUFFRyxDQUFDLENBQUM7VUFDN0IsSUFBSWdFLFNBQVMsQ0FBQzlELG9CQUFvQixDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDN0M4RCxTQUFTLENBQUM3RCxRQUFRLENBQUMsQ0FBQztZQUNwQjhELFNBQVMsQ0FBQzlELFFBQVEsQ0FBQyxDQUFDO1lBQ3BCZ0UsS0FBSyxDQUFDaEMsV0FBVyxHQUFHLGVBQWU7VUFDckM7VUFDQUwsV0FBVyxDQUFDa0MsU0FBUyxFQUFFQyxTQUFTLENBQUM7VUFDakNHLFVBQVUsQ0FBQzVCLFlBQVksRUFBRSxJQUFJLENBQUM7VUFDOUI7UUFDRixDQUFDLENBQUM7UUFFRk4sS0FBSyxJQUFJLENBQUM7TUFDWjtJQUNGO0VBQ0Y7RUFFQSxTQUFTbUMsU0FBU0EsQ0FBQ25CLFlBQVksRUFBRUMsWUFBWSxFQUFFO0lBQzdDLE1BQU1tQixXQUFXLEdBQUdyRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1RCxNQUFNcUQsYUFBYSxHQUFHdEQsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7SUFDdkUsTUFBTXNELGFBQWEsR0FBR3ZELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBRXZFb0QsV0FBVyxDQUFDWixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUdlLEVBQUUsSUFBSztNQUNoREEsRUFBRSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUVKLGFBQWEsQ0FBQ1YsS0FBSyxDQUFDO01BQ3BEWSxFQUFFLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRUgsYUFBYSxDQUFDWCxLQUFLLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsTUFBTWUsVUFBVSxHQUFHM0QsUUFBUSxDQUFDZ0IsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7SUFDdkUsTUFBTTRDLFVBQVUsR0FBRzVELFFBQVEsQ0FBQ2dCLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO0lBRXZFLElBQUlDLEtBQUssR0FBRyxDQUFDO0lBRWIsS0FBSyxJQUFJckMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM5QixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUI0RSxVQUFVLENBQUMxQyxLQUFLLENBQUMsQ0FBQ3dCLGdCQUFnQixDQUFDLFVBQVUsRUFBR2UsRUFBRSxJQUFLO1VBQ3JEQSxFQUFFLENBQUNLLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUNGRCxVQUFVLENBQUMzQyxLQUFLLENBQUMsQ0FBQ3dCLGdCQUFnQixDQUFDLFVBQVUsRUFBR2UsRUFBRSxJQUFLO1VBQ3JEQSxFQUFFLENBQUNLLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUNGNUMsS0FBSyxJQUFJLENBQUM7TUFDWjtJQUNGO0lBRUFBLEtBQUssR0FBRyxDQUFDO0lBRVQsS0FBSyxJQUFJckMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM5QixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUI0RSxVQUFVLENBQUMxQyxLQUFLLENBQUMsQ0FBQ3dCLGdCQUFnQixDQUFDLE1BQU0sRUFBR2UsRUFBRSxJQUFLO1VBQ2pEdkIsWUFBWSxDQUFDcEQsU0FBUyxDQUNwQkQsQ0FBQyxFQUNERyxDQUFDLEVBQ0Q0RCxRQUFRLENBQUNhLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDSyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQzlDTixFQUFFLENBQUNDLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQztVQUNEakQsV0FBVyxDQUFDb0IsWUFBWSxFQUFFQyxZQUFZLENBQUM7VUFDdkNzQixFQUFFLENBQUNLLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUNGRCxVQUFVLENBQUMzQyxLQUFLLENBQUMsQ0FBQ3dCLGdCQUFnQixDQUFDLE1BQU0sRUFBR2UsRUFBRSxJQUFLO1VBQ2pEdEIsWUFBWSxDQUFDckQsU0FBUyxDQUNwQkQsQ0FBQyxFQUNERyxDQUFDLEVBQ0Q0RCxRQUFRLENBQUNhLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDSyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQzlDTixFQUFFLENBQUNDLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQztVQUNEakQsV0FBVyxDQUFDb0IsWUFBWSxFQUFFQyxZQUFZLENBQUM7VUFDdkNzQixFQUFFLENBQUNLLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUNGNUMsS0FBSyxJQUFJLENBQUM7TUFDWjtJQUNGO0VBQ0Y7RUFFQSxPQUFPO0lBQ0xuQixXQUFXO0lBQ1hnRCxXQUFXO0lBQ1hqQyxXQUFXO0lBQ1hVLFlBQVk7SUFDWlMsc0JBQXNCO0lBQ3RCb0I7RUFDRixDQUFDO0FBQ0g7QUFFQSxpRUFBZXhELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVSakI7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sUUFBUSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSwyQkFBMkIsNEJBQTRCLEdBQUcsY0FBYyxtQkFBbUIsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsdUJBQXVCLFNBQVMsdUNBQXVDLGdDQUFnQyxHQUFHLFdBQVcsdUJBQXVCLGtCQUFrQixnQ0FBZ0MsMkJBQTJCLHlCQUF5QixxQkFBcUIsR0FBRyxrQ0FBa0Msb0JBQW9CLDhCQUE4Qix1QkFBdUIsY0FBYyxHQUFHLDBHQUEwRyxpQkFBaUIsb0JBQW9CLHNCQUFzQixHQUFHLHdCQUF3QixpQkFBaUIsbUJBQW1CLGdDQUFnQyxxRUFBcUUsK0JBQStCLDRDQUE0QyxzQkFBc0IsdUJBQXVCLEdBQUcscUJBQXFCLCtCQUErQixrQkFBa0IsbUJBQW1CLEdBQUcsbUJBQW1CLHNCQUFzQixvQkFBb0IsZUFBZSxHQUFHLHFCQUFxQjtBQUN6dkQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMzRTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDRDtBQUVwQyxTQUFTbUUsSUFBSUEsQ0FBQSxFQUFHO0VBQ2QsTUFBTUMsYUFBYSxHQUFHcEUsNkRBQUUsQ0FBQyxDQUFDO0VBQzFCb0UsYUFBYSxDQUFDbEUsV0FBVyxDQUFDLENBQUM7RUFFM0IsTUFBTUMsT0FBTyxHQUFHVCwwREFBTSxDQUFDLFNBQVMsQ0FBQztFQUNqQyxNQUFNWSxPQUFPLEdBQUdaLDBEQUFNLENBQUMsQ0FBQztFQUV4QixNQUFNMkUsV0FBVyxHQUFHakUsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFFL0QrRCxhQUFhLENBQUNoQyxzQkFBc0IsQ0FDbENqQyxPQUFPLENBQUNOLGVBQWUsRUFDdkJTLE9BQU8sQ0FBQ1QsZUFDVixDQUFDO0VBRUR1RSxhQUFhLENBQUNaLFNBQVMsQ0FBQ3JELE9BQU8sQ0FBQ04sZUFBZSxFQUFFUyxPQUFPLENBQUNULGVBQWUsQ0FBQztFQUV6RXdFLFdBQVcsQ0FBQ3hCLGdCQUFnQixDQUMxQixPQUFPLEVBQ1AsTUFBTTtJQUNKdUIsYUFBYSxDQUFDbEIsV0FBVyxDQUN2Qi9DLE9BQU8sQ0FBQ04sZUFBZSxFQUN2QlMsT0FBTyxDQUFDVCxlQUFlLEVBQ3ZCUyxPQUFPLENBQUNYLElBQ1YsQ0FBQztJQUVEeUUsYUFBYSxDQUFDbkQsV0FBVyxDQUN2QmQsT0FBTyxDQUFDTixlQUFlLEVBQ3ZCUyxPQUFPLENBQUNULGVBQ1YsQ0FBQzs7SUFFRDtJQUNBOztJQUVBLE1BQU15RSxxQkFBcUIsR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBYSxDQUNsRCwwQkFDRixDQUFDO0lBRUQsTUFBTWtFLFNBQVMsR0FBR25FLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQy9ELE1BQU1tRSxTQUFTLEdBQUdwRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUMvRCxNQUFNb0UsZUFBZSxHQUFHckUsUUFBUSxDQUFDQyxhQUFhLENBQzVDLDZCQUNGLENBQUM7SUFDRCxNQUFNcUUsZUFBZSxHQUFHdEUsUUFBUSxDQUFDQyxhQUFhLENBQzVDLDZCQUNGLENBQUM7SUFDRGtFLFNBQVMsQ0FBQ2hELEtBQUssQ0FBQ0ssVUFBVSxHQUFHLFNBQVM7SUFDdEM2QyxlQUFlLENBQUNsRCxLQUFLLENBQUNLLFVBQVUsR0FBRyxTQUFTO0lBQzVDNEMsU0FBUyxDQUFDakQsS0FBSyxDQUFDSyxVQUFVLEdBQUcsUUFBUTtJQUNyQzhDLGVBQWUsQ0FBQ25ELEtBQUssQ0FBQ0ssVUFBVSxHQUFHLFFBQVE7SUFDM0MwQyxxQkFBcUIsQ0FBQy9DLEtBQUssQ0FBQ0ssVUFBVSxHQUFHLFFBQVE7RUFDbkQsQ0FBQyxFQUNEO0lBQUUrQyxJQUFJLEVBQUU7RUFBSyxDQUNmLENBQUM7QUFDSDtBQUVBUixJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2dhbWVCb2FyZC9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvdXNlckludGVyZmFjZS9VSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcblxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBnYW1lQm9hcmRUYWJsZSA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG5cbiAgZnVuY3Rpb24gdmVyaWZ5RGF0YSh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIC8vIGkgbmVlZCB0byB2ZXJpZnkgaWYgYWxsIHRoZSBkYXRhIGFyZSBjb3JyZWN0XG4gICAgLy8gYW5kIGRvbid0IGdvIGludG8gYSBub3QgYWNjZXB0YWJsZSBzdGF0ZVxuXG4gICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwIHx8IGxlbmd0aCA8PSAwIHx8IGxlbmd0aCA+IDUpIHtcbiAgICAgIC8vIGkgbmVlZCBhIG1ldGhvZCB0byB2ZXJpZnkgaWYgdGhlIGluc2VydGVkIGRhdGEgYXJlIGluY29ycmVjdFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09IFwiaG9yaXpvbnRhbFwiICYmIGRpcmVjdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAvLyB2ZXJpZnkgaWYgZGlyZWN0aW9uIGlzIGNvcnJlY3RcbiAgICAgIC8vICh0aGVvcmljYWxseSB0aGlzIHNob3VsZG4ndCBiZSBhZGRlZCBhcyBtb3N0IHByb2JhYmx5IHRoZXJlIHdpbGwgYmUgb25seSAyIG9wdGlvbnMpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChsZW5ndGggKyB5IC0gMSA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2FtZUJvYXJkVGFibGVbeF1baV0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAobGVuZ3RoICsgeCAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGdhbWVCb2FyZFRhYmxlW2ldW3ldID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAodmVyaWZ5RGF0YSh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKCk7XG4gICAgICBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9IG5ld1NoaXA7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0geCArIDE7IGkgPCBsZW5ndGggKyB4OyBpICs9IDEpIHtcbiAgICAgICAgICBnYW1lQm9hcmRUYWJsZVtpXVt5XSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBqID0geSArIDE7IGogPCBsZW5ndGggKyB5OyBqICs9IDEpIHtcbiAgICAgICAgICBnYW1lQm9hcmRUYWJsZVt4XVtqXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcCh4LCB5KSB7XG4gICAgcmV0dXJuIGdhbWVCb2FyZFRhYmxlW3hdW3ldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsU2hpcHNIYXZlQmVlblN1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVtpXVtqXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGdhbWVCb2FyZFRhYmxlW2ldW2pdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2lldmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZ2FtZUJvYXJkVGFibGVbeF1beV0uaGl0KCk7XG4gICAgICBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xuICAgIGdhbWVCb2FyZFRhYmxlW3hdW3ldID0gXCJtaXNzXCI7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4geyBwbGFjZVNoaXAsIGdldFNoaXAsIHJlY2lldmVBdHRhY2ssIGFsbFNoaXBzSGF2ZUJlZW5TdW5rLCBjbGVhckFsbCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lID0gXCJjb21wdXRlclwiKSB7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4gIHJldHVybiB7IG5hbWUsIHBsYXllckdhbWVCb2FyZCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICBsZXQgblRpbWVzSGl0ID0gMDtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgblRpbWVzSGl0ICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKG5UaW1lc0hpdCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiZnVuY3Rpb24gVUkoKSB7XG4gIGNvbnN0IGNvbXB1dGVyU3RhY2sgPSBbXTtcbiAgZnVuY3Rpb24gcGFpbnRCb2FyZHMoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMlwiKTtcbiAgICBjb25zdCBwbGF5ZXIxQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIyQ2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXJDaG9pY2UuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZF9fc3F1YXJlc1wiKTtcbiAgICAgIG5ld0NvbnRhaW5lcjJDaG9pY2UuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZF9fc3F1YXJlc1wiKTtcblxuICAgICAgcGxheWVyMS5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICAgICAgcGxheWVyMi5hcHBlbmRDaGlsZChuZXdDb250YWluZXIyKTtcbiAgICAgIHBsYXllcjFDaG9pY2UuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyQ2hvaWNlKTtcbiAgICAgIHBsYXllcjJDaG9pY2UuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyMkNob2ljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVsb2FkQm9hcmQoR0IxLCBHQjIpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjEgZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMiBkaXZcIik7XG4gICAgY29uc3QgcGxheWVyMUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIEdCMS5nZXRTaGlwKGksIGopID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgLy8gb2JqZWN0IHRvIGJlIGluc2VydGVkXG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIlNISVBcIjtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vc3JjL2ltZy9jcnVpc2UucG5nXCIpJztcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMS5nZXRTaGlwKGksIGopID09PSBcIm1pc3NcIikge1xuICAgICAgICAgIHBsYXllcjFbY291bnRdLnRleHRDb250ZW50ID0gXCJtaXNzXCI7XG4gICAgICAgICAgcGxheWVyMkNob2ljZVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2QyNjY1YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMS5nZXRTaGlwKGksIGopID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcImhpdFwiO1xuICAgICAgICAgIHBsYXllcjJDaG9pY2VbY291bnRdLnN0eWxlLmJhY2tncm91bmQgPSBcIiM1YjkxM2JcIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjEuZ2V0U2hpcChpLCBqKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBHQjIuZ2V0U2hpcChpLCBqKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIC8vIG9iamVjdCB0byBiZSBpbnNlcnRlZFxuICAgICAgICAgIHBsYXllcjJbY291bnRdLnRleHRDb250ZW50ID0gXCJTSElQXCI7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL3NyYy9pbWcvY3J1aXNlLnBuZ1wiKSc7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0uc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvbnRhaW5cIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjIuZ2V0U2hpcChpLCBqKSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS50ZXh0Q29udGVudCA9IFwibWlzc1wiO1xuICAgICAgICAgIHBsYXllcjFDaG9pY2VbY291bnRdLnN0eWxlLmJhY2tncm91bmQgPSBcIiNkMjY2NWFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjIuZ2V0U2hpcChpLCBqKSA9PT0gXCJoaXRcIikge1xuICAgICAgICAgIHBsYXllcjJbY291bnRdLnRleHRDb250ZW50ID0gXCJoaXRcIjtcbiAgICAgICAgICBwbGF5ZXIxQ2hvaWNlW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNWI5MTNiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IyLmdldFNoaXAoaSwgaikgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBsYXllcjJbY291bnRdLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2JzY3VyZUJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJcIik7XG4gICAgY29uc3QgcGxheWVyMUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2VcIik7XG4gICAgY29uc3QgcGxheWVyMkNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2VcIik7XG5cbiAgICBpZiAocGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgICBwbGF5ZXIxLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHBsYXllcjFDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID09PSBcInZpc2libGVcIikge1xuICAgICAgcGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIHBsYXllcjFDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfVxuXG4gICAgaWYgKHBsYXllcjIuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgcGxheWVyMi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBwbGF5ZXIyQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjIuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgIHBsYXllcjIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICBwbGF5ZXIyQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VDb21wdXRlckNob2ljZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjEgPiBkaXZcIik7XG4gICAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcblxuICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG5cbiAgICB3aGlsZSAoXG4gICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9PT0gXCJoaXRcIiB8fFxuICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPT09IFwibWlzc1wiXG4gICAgKSB7XG4gICAgICBjb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXB1dGVyU3RhY2subGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmIChwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9PT0gXCJTSElQXCIpIHtcbiAgICAgICAgcGxheWVyMltjb3VudF0uY2xpY2soKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgMSk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDIpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyAzKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgNCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDEpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSAyKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gMyk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDQpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyAxMCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDIwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgMzApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyA0MCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDEwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gMjApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSAzMCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDQwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcjJbY291bnRdLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21wdXRlclN0YWNrWzBdID4gOTkgfHwgY29tcHV0ZXJTdGFja1swXSA8IDApIHtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5zaGlmdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwbGF5ZXIyW2NvbXB1dGVyU3RhY2suc2hpZnQoKV0uY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGlwQnV0dG9uQWN0aXZlKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSB7XG4gICAgY29uc3QgY3JlYXRlU2hpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXNoaXAtYnV0dG9uXCIpO1xuICAgIGNvbnN0IHJvd0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3dcIik7XG4gICAgY29uc3QgY29sdW1uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbHVtblwiKTtcbiAgICBjb25zdCBsZW5ndGhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVuZ3RoXCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXJlY3Rpb25cIik7XG4gICAgY29uc3QgcGxheWVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKTtcblxuICAgIGNyZWF0ZVNoaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHJvd0lucHV0LnZhbHVlLCAxMCk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBwYXJzZUludChjb2x1bW5JbnB1dC52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoSW5wdXQudmFsdWUsIDEwKTtcblxuICAgICAgaWYgKFxuICAgICAgICByb3cgJiZcbiAgICAgICAgY29sdW1uICYmXG4gICAgICAgIGxlbmd0aCAmJlxuICAgICAgICBkaXJlY3Rpb25JbnB1dC52YWx1ZSAmJlxuICAgICAgICBwbGF5ZXJJbnB1dC52YWx1ZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGF5ZXJJbnB1dC52YWx1ZSA9PT0gXCJwbGF5ZXIxXCIpIHtcbiAgICAgICAgICBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbklucHV0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJJbnB1dC52YWx1ZSA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICAgICAgICBwbGF5ZXIyQm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbklucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZWxvYWRCb2FyZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWF0ZUJveChHQlBsYXllcjEsIEdCUGxheWVyMiwgcGxheWVyMk5hbWUpIHtcbiAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVcIik7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHBsYXllcjFbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgR0JQbGF5ZXIyLnJlY2lldmVBdHRhY2soaSwgaik7XG4gICAgICAgICAgaWYgKEdCUGxheWVyMi5hbGxTaGlwc0hhdmVCZWVuU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBHQlBsYXllcjEuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIEdCUGxheWVyMi5jbGVhckFsbCgpO1xuICAgICAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIlBMQVlFUiAxIFdJTlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsb2FkQm9hcmQoR0JQbGF5ZXIxLCBHQlBsYXllcjIpO1xuICAgICAgICAgIHNldFRpbWVvdXQob2JzY3VyZUJvYXJkLCAxMDAwKTtcbiAgICAgICAgICAvKiBvYnNjdXJlQm9hcmQoKTsgKi9cbiAgICAgICAgICBpZiAocGxheWVyMk5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgbWFrZUNvbXB1dGVyQ2hvaWNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwbGF5ZXIyW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIEdCUGxheWVyMS5yZWNpZXZlQXR0YWNrKGksIGopO1xuICAgICAgICAgIGlmIChHQlBsYXllcjEuYWxsU2hpcHNIYXZlQmVlblN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgR0JQbGF5ZXIxLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICBHQlBsYXllcjIuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCJQTEFZRVIgMiBXSU5TXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbG9hZEJvYXJkKEdCUGxheWVyMSwgR0JQbGF5ZXIyKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KG9ic2N1cmVCb2FyZCwgMTAwMCk7XG4gICAgICAgICAgLyogb2JzY3VyZUJvYXJkKCk7ICovXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnREcmFnKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveC1kaW1lbnNpb25cIik7XG4gICAgY29uc3QgZHJhZ0RpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJhZy1uLWRyb3BfX2RpcmVjdGlvblwiKTtcbiAgICBjb25zdCBkcmFnRGltZW5zaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcmFnLW4tZHJvcF9fZGltZW5zaW9uXCIpO1xuXG4gICAgZHJhZ0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXYpID0+IHtcbiAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBkcmFnRGlyZWN0aW9uLnZhbHVlKTtcbiAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dDFcIiwgZHJhZ0RpbWVuc2lvbi52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnYW1lQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjEgZGl2XCIpO1xuICAgIGNvbnN0IGdhbWVCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMiBkaXZcIik7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ2FtZUJvYXJkMVtjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldikgPT4ge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lQm9hcmQyW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ2FtZUJvYXJkMVtjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgcGxheWVyMUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgcGFyc2VJbnQoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0MVwiKSwgMTApLFxuICAgICAgICAgICAgZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZWxvYWRCb2FyZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWVCb2FyZDJbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldikgPT4ge1xuICAgICAgICAgIHBsYXllcjJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIHBhcnNlSW50KGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dDFcIiksIDEwKSxcbiAgICAgICAgICAgIGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmVsb2FkQm9hcmQocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpO1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGFpbnRCb2FyZHMsXG4gICAgaW5pdGlhdGVCb3gsXG4gICAgcmVsb2FkQm9hcmQsXG4gICAgb2JzY3VyZUJvYXJkLFxuICAgIGNyZWF0ZVNoaXBCdXR0b25BY3RpdmUsXG4gICAgc3RhcnREcmFnLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuaHRtbCxib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0ODZBO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xuICAgIFxufVxuXG5pbnB1dCxvcHRpb24sc2VsZWN0LC5ib3gtZGltZW5zaW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmIwMzY7XG59XG5cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmIwMzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjYTk0YTRhO1xufVxuXG4uZ2FtZUJvYXJkLFxuLmdhbWVCb2FyZENob2ljZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgZ2FwOjEwJTtcbn1cblxuLmdhbWVCb2FyZF9fcGxheWVyMSxcbi5nYW1lQm9hcmRfX3BsYXllcjIsXG4uZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2UsXG4uZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2V7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmdhbWVCb2FyZF9fc3F1YXJlc3tcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODE4Yzc4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCAsIzRjN2I4YiwjMjM0ODZhLCMzYjY3OTApO1xuICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7ICAvKiBhbGwgdGhlIHBocmFzZXMgYW5kIHRleHQgYXJlIGhpZGRlbiAqL1xufVxuXG4uc3RhcnRHYW1lLWJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG5cbi5ib3gtZGltZW5zaW9ue1xuICAgIGJvcmRlcjoycHggc29saWQgIzRjN2I4YjtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cblxuLmRyYWctbi1kcm9we1xuICAgIG1hcmdpbi10b3A6MnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDozMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBOzs7O0lBSUksVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsOERBQThEO0lBQzlELHNCQUFzQixHQUFHLHdDQUF3QztBQUNyRTs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNDg2QTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgXFxufVxcblxcbmlucHV0LG9wdGlvbixzZWxlY3QsLmJveC1kaW1lbnNpb257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmIwMzY7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmIwMzY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjYTk0YTRhO1xcbn1cXG5cXG4uZ2FtZUJvYXJkLFxcbi5nYW1lQm9hcmRDaG9pY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBnYXA6MTAlO1xcbn1cXG5cXG4uZ2FtZUJvYXJkX19wbGF5ZXIxLFxcbi5nYW1lQm9hcmRfX3BsYXllcjIsXFxuLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlLFxcbi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ2FtZUJvYXJkX19zcXVhcmVze1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MThjNzg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCAsIzRjN2I4YiwjMjM0ODZhLCMzYjY3OTApO1xcbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDApOyAgLyogYWxsIHRoZSBwaHJhc2VzIGFuZCB0ZXh0IGFyZSBoaWRkZW4gKi9cXG59XFxuXFxuLnN0YXJ0R2FtZS1idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcblxcbi5ib3gtZGltZW5zaW9ue1xcbiAgICBib3JkZXI6MnB4IHNvbGlkICM0YzdiOGI7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcblxcbi5kcmFnLW4tZHJvcHtcXG4gICAgbWFyZ2luLXRvcDoycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vdXNlckludGVyZmFjZS9VSVwiO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB1c2VySW50ZXJmYWNlID0gVUkoKTtcbiAgdXNlckludGVyZmFjZS5wYWludEJvYXJkcygpO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJBbnRvbmlvXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKCk7XG5cbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0R2FtZS1idXR0b25cIik7XG5cbiAgdXNlckludGVyZmFjZS5jcmVhdGVTaGlwQnV0dG9uQWN0aXZlKFxuICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLFxuICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkXG4gICk7XG5cbiAgdXNlckludGVyZmFjZS5zdGFydERyYWcocGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQsIHBsYXllcjIucGxheWVyR2FtZUJvYXJkKTtcblxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICAoKSA9PiB7XG4gICAgICB1c2VySW50ZXJmYWNlLmluaXRpYXRlQm94KFxuICAgICAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCxcbiAgICAgICAgcGxheWVyMi5wbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgIHBsYXllcjIubmFtZVxuICAgICAgKTtcblxuICAgICAgdXNlckludGVyZmFjZS5yZWxvYWRCb2FyZChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkXG4gICAgICApO1xuXG4gICAgICAvLyBIZXJlIGZpbmlzaGVzIHRoZSBwb3NpdGlvbmluZyBwaGFzZS5cbiAgICAgIC8vIG5vdyB0dXJucyBoYXZlIHRvIHRha2Ugb3Zlci5cblxuICAgICAgY29uc3Qgc2hpcENyZWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuc2hpcC1jcmVhdGlvbi1jb250YWluZXJcIlxuICAgICAgKTtcblxuICAgICAgY29uc3QgdWlQbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFcIik7XG4gICAgICBjb25zdCB1aVBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMlwiKTtcbiAgICAgIGNvbnN0IHVpUGxheWVyMUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlXCJcbiAgICAgICk7XG4gICAgICBjb25zdCB1aVBsYXllcjJDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZVwiXG4gICAgICApO1xuICAgICAgdWlQbGF5ZXIxLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHVpUGxheWVyMUNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB1aVBsYXllcjIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB1aVBsYXllcjJDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICBzaGlwQ3JlYXRpb25Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApO1xufVxuXG5tYWluKCk7XG4iXSwibmFtZXMiOlsiU2hpcCIsImdhbWVCb2FyZCIsImdhbWVCb2FyZFRhYmxlIiwidmVyaWZ5RGF0YSIsIngiLCJ5IiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwiaSIsInBsYWNlU2hpcCIsIm5ld1NoaXAiLCJqIiwiZ2V0U2hpcCIsImFsbFNoaXBzSGF2ZUJlZW5TdW5rIiwiY2xlYXJBbGwiLCJ1bmRlZmluZWQiLCJyZWNpZXZlQXR0YWNrIiwiaGl0IiwiUGxheWVyIiwibmFtZSIsImFyZ3VtZW50cyIsInBsYXllckdhbWVCb2FyZCIsIm5UaW1lc0hpdCIsImlzU3VuayIsIlVJIiwiY29tcHV0ZXJTdGFjayIsInBhaW50Qm9hcmRzIiwicGxheWVyMSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXllcjIiLCJwbGF5ZXIxQ2hvaWNlIiwicGxheWVyMkNob2ljZSIsIm5ld0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJuZXdDb250YWluZXIyIiwibmV3Q29udGFpbmVyQ2hvaWNlIiwibmV3Q29udGFpbmVyMkNob2ljZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicmVsb2FkQm9hcmQiLCJHQjEiLCJHQjIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kIiwib2JzY3VyZUJvYXJkIiwidmlzaWJpbGl0eSIsIm1ha2VDb21wdXRlckNob2ljZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNsaWNrIiwicHVzaCIsInNoaWZ0IiwiY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZSIsInBsYXllcjFCb2FyZCIsInBsYXllcjJCb2FyZCIsImNyZWF0ZVNoaXBCdXR0b24iLCJyb3dJbnB1dCIsImNvbHVtbklucHV0IiwibGVuZ3RoSW5wdXQiLCJkaXJlY3Rpb25JbnB1dCIsInBsYXllcklucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdyIsInBhcnNlSW50IiwidmFsdWUiLCJjb2x1bW4iLCJpbml0aWF0ZUJveCIsIkdCUGxheWVyMSIsIkdCUGxheWVyMiIsInBsYXllcjJOYW1lIiwic2NvcmUiLCJzZXRUaW1lb3V0Iiwic3RhcnREcmFnIiwiZHJhZ0VsZW1lbnQiLCJkcmFnRGlyZWN0aW9uIiwiZHJhZ0RpbWVuc2lvbiIsImV2IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImdhbWVCb2FyZDEiLCJnYW1lQm9hcmQyIiwicHJldmVudERlZmF1bHQiLCJnZXREYXRhIiwibWFpbiIsInVzZXJJbnRlcmZhY2UiLCJzdGFydEJ1dHRvbiIsInNoaXBDcmVhdGlvbkNvbnRhaW5lciIsInVpUGxheWVyMSIsInVpUGxheWVyMiIsInVpUGxheWVyMUNob2ljZSIsInVpUGxheWVyMkNob2ljZSIsIm9uY2UiXSwic291cmNlUm9vdCI6IiJ9