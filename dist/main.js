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
/* harmony import */ var _img_cruise_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/cruise.png */ "./src/img/cruise.png");

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
          player1[count].style.backgroundImage = `url(${_img_cruise_png__WEBPACK_IMPORTED_MODULE_0__})`;
          player1[count].style.backgroundSize = "contain";
          player1[count].style.backgroundRepeat = "no-repeat";
        } else if (GB1.getShip(i, j) === "miss") {
          player1[count].textContent = "miss";
          player2Choice[count].style.background = "#d2665a";
        } else if (GB1.getShip(i, j) === "hit") {
          player1[count].textContent = "hit";
          player1[count].style.backgroundImage = "none";
          player2Choice[count].style.background = "#5b913b";
        } else if (GB1.getShip(i, j) === undefined) {
          player1[count].textContent = "";
        }
        if (typeof GB2.getShip(i, j) === "object") {
          // object to be inserted
          player2[count].textContent = "SHIP";
          player2[count].style.backgroundImage = `url(${_img_cruise_png__WEBPACK_IMPORTED_MODULE_0__})`;
          player2[count].style.backgroundSize = "contain";
          player2[count].style.backgroundRepeat = "no-repeat";
        } else if (GB2.getShip(i, j) === "miss") {
          player2[count].textContent = "miss";
          player1Choice[count].style.background = "#d2665a";
        } else if (GB2.getShip(i, j) === "hit") {
          player2[count].textContent = "hit";
          player2[count].style.backgroundImage = "none";
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

/***/ }),

/***/ "./src/img/cruise.png":
/*!****************************!*\
  !*** ./src/img/cruise.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "037b182407bb24090402.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
  const player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])("Franco");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvZ2FtZUJvYXJkL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy91c2VySW50ZXJmYWNlL1VJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcblxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBjb25zdCBnYW1lQm9hcmRUYWJsZSA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG5cbiAgZnVuY3Rpb24gdmVyaWZ5RGF0YSh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIC8vIGkgbmVlZCB0byB2ZXJpZnkgaWYgYWxsIHRoZSBkYXRhIGFyZSBjb3JyZWN0XG4gICAgLy8gYW5kIGRvbid0IGdvIGludG8gYSBub3QgYWNjZXB0YWJsZSBzdGF0ZVxuXG4gICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwIHx8IGxlbmd0aCA8PSAwIHx8IGxlbmd0aCA+IDUpIHtcbiAgICAgIC8vIGkgbmVlZCBhIG1ldGhvZCB0byB2ZXJpZnkgaWYgdGhlIGluc2VydGVkIGRhdGEgYXJlIGluY29ycmVjdFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09IFwiaG9yaXpvbnRhbFwiICYmIGRpcmVjdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAvLyB2ZXJpZnkgaWYgZGlyZWN0aW9uIGlzIGNvcnJlY3RcbiAgICAgIC8vICh0aGVvcmljYWxseSB0aGlzIHNob3VsZG4ndCBiZSBhZGRlZCBhcyBtb3N0IHByb2JhYmx5IHRoZXJlIHdpbGwgYmUgb25seSAyIG9wdGlvbnMpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChsZW5ndGggKyB5IC0gMSA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2FtZUJvYXJkVGFibGVbeF1baV0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAobGVuZ3RoICsgeCAtIDEgPiA5KSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGdhbWVCb2FyZFRhYmxlW2ldW3ldID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAodmVyaWZ5RGF0YSh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKCk7XG4gICAgICBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9IG5ld1NoaXA7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0geCArIDE7IGkgPCBsZW5ndGggKyB4OyBpICs9IDEpIHtcbiAgICAgICAgICBnYW1lQm9hcmRUYWJsZVtpXVt5XSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBqID0geSArIDE7IGogPCBsZW5ndGggKyB5OyBqICs9IDEpIHtcbiAgICAgICAgICBnYW1lQm9hcmRUYWJsZVt4XVtqXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcCh4LCB5KSB7XG4gICAgcmV0dXJuIGdhbWVCb2FyZFRhYmxlW3hdW3ldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsU2hpcHNIYXZlQmVlblN1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVtpXVtqXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGdhbWVCb2FyZFRhYmxlW2ldW2pdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2lldmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZ2FtZUJvYXJkVGFibGVbeF1beV0uaGl0KCk7XG4gICAgICBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVt4XVt5XSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xuICAgIGdhbWVCb2FyZFRhYmxlW3hdW3ldID0gXCJtaXNzXCI7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4geyBwbGFjZVNoaXAsIGdldFNoaXAsIHJlY2lldmVBdHRhY2ssIGFsbFNoaXBzSGF2ZUJlZW5TdW5rLCBjbGVhckFsbCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lID0gXCJjb21wdXRlclwiKSB7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4gIHJldHVybiB7IG5hbWUsIHBsYXllckdhbWVCb2FyZCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICBsZXQgblRpbWVzSGl0ID0gMDtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgblRpbWVzSGl0ICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKG5UaW1lc0hpdCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IGltYWdlU2hpcCBmcm9tIFwiLi4vaW1nL2NydWlzZS5wbmdcIjtcblxuZnVuY3Rpb24gVUkoKSB7XG4gIGNvbnN0IGNvbXB1dGVyU3RhY2sgPSBbXTtcbiAgZnVuY3Rpb24gcGFpbnRCb2FyZHMoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMlwiKTtcbiAgICBjb25zdCBwbGF5ZXIxQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIyQ2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXJDaG9pY2UuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZF9fc3F1YXJlc1wiKTtcbiAgICAgIG5ld0NvbnRhaW5lcjJDaG9pY2UuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZF9fc3F1YXJlc1wiKTtcblxuICAgICAgcGxheWVyMS5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICAgICAgcGxheWVyMi5hcHBlbmRDaGlsZChuZXdDb250YWluZXIyKTtcbiAgICAgIHBsYXllcjFDaG9pY2UuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyQ2hvaWNlKTtcbiAgICAgIHBsYXllcjJDaG9pY2UuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyMkNob2ljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVsb2FkQm9hcmQoR0IxLCBHQjIpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjEgZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMiBkaXZcIik7XG4gICAgY29uc3QgcGxheWVyMUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIEdCMS5nZXRTaGlwKGksIGopID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgLy8gb2JqZWN0IHRvIGJlIGluc2VydGVkXG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIlNISVBcIjtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VTaGlwfSlgO1xuICAgICAgICAgIHBsYXllcjFbY291bnRdLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb250YWluXCI7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IxLmdldFNoaXAoaSwgaikgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgICBwbGF5ZXIyQ2hvaWNlW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZDI2NjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IxLmdldFNoaXAoaSwgaikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9IFwiaGl0XCI7XG4gICAgICAgICAgcGxheWVyMVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJub25lXCI7XG4gICAgICAgICAgcGxheWVyMkNob2ljZVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzViOTEzYlwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMS5nZXRTaGlwKGksIGopID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIEdCMi5nZXRTaGlwKGksIGopID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgLy8gb2JqZWN0IHRvIGJlIGluc2VydGVkXG4gICAgICAgICAgcGxheWVyMltjb3VudF0udGV4dENvbnRlbnQgPSBcIlNISVBcIjtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VTaGlwfSlgO1xuICAgICAgICAgIHBsYXllcjJbY291bnRdLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb250YWluXCI7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IyLmdldFNoaXAoaSwgaikgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0udGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgICBwbGF5ZXIxQ2hvaWNlW2NvdW50XS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZDI2NjVhXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IyLmdldFNoaXAoaSwgaikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS50ZXh0Q29udGVudCA9IFwiaGl0XCI7XG4gICAgICAgICAgcGxheWVyMltjb3VudF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJub25lXCI7XG4gICAgICAgICAgcGxheWVyMUNob2ljZVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzViOTEzYlwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMi5nZXRTaGlwKGksIGopID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2N1cmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFcIik7XG4gICAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIyXCIpO1xuICAgIGNvbnN0IHBsYXllcjFDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlXCIpO1xuICAgIGNvbnN0IHBsYXllcjJDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlXCIpO1xuXG4gICAgaWYgKHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgcGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBwbGF5ZXIxQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgIHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICBwbGF5ZXIxQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcbiAgICAgIHBsYXllcjIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgcGxheWVyMkNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICBwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgcGxheWVyMkNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ29tcHV0ZXJDaG9pY2UoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxID4gZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2UgPiBkaXZcIlxuICAgICk7XG5cbiAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuXG4gICAgd2hpbGUgKFxuICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPT09IFwiaGl0XCIgfHxcbiAgICAgIHBsYXllcjFbY291bnRdLnRleHRDb250ZW50ID09PSBcIm1pc3NcIlxuICAgICkge1xuICAgICAgY291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cblxuICAgIGlmIChjb21wdXRlclN0YWNrLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAocGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPT09IFwiU0hJUFwiKSB7XG4gICAgICAgIHBsYXllcjJbY291bnRdLmNsaWNrKCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDEpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyAyKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgMyk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDQpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSAxKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gMik7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDMpO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSA0KTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgMTApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgKyAyMCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCArIDMwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50ICsgNDApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSAxMCk7XG4gICAgICAgIGNvbXB1dGVyU3RhY2sucHVzaChjb3VudCAtIDIwKTtcbiAgICAgICAgY29tcHV0ZXJTdGFjay5wdXNoKGNvdW50IC0gMzApO1xuICAgICAgICBjb21wdXRlclN0YWNrLnB1c2goY291bnQgLSA0MCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIyW2NvdW50XS5jbGljaygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tcHV0ZXJTdGFja1swXSA+IDk5IHx8IGNvbXB1dGVyU3RhY2tbMF0gPCAwKSB7XG4gICAgICAgIGNvbXB1dGVyU3RhY2suc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGxheWVyMltjb21wdXRlclN0YWNrLnNoaWZ0KCldLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZShwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCkge1xuICAgIGNvbnN0IGNyZWF0ZVNoaXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1zaGlwLWJ1dHRvblwiKTtcbiAgICBjb25zdCByb3dJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm93XCIpO1xuICAgIGNvbnN0IGNvbHVtbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2x1bW5cIik7XG4gICAgY29uc3QgbGVuZ3RoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlbmd0aFwiKTtcbiAgICBjb25zdCBkaXJlY3Rpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlyZWN0aW9uXCIpO1xuICAgIGNvbnN0IHBsYXllcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIik7XG5cbiAgICBjcmVhdGVTaGlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBwYXJzZUludChyb3dJbnB1dC52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoY29sdW1uSW5wdXQudmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aElucHV0LnZhbHVlLCAxMCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm93ICYmXG4gICAgICAgIGNvbHVtbiAmJlxuICAgICAgICBsZW5ndGggJiZcbiAgICAgICAgZGlyZWN0aW9uSW5wdXQudmFsdWUgJiZcbiAgICAgICAgcGxheWVySW5wdXQudmFsdWVcbiAgICAgICkge1xuICAgICAgICBpZiAocGxheWVySW5wdXQudmFsdWUgPT09IFwicGxheWVyMVwiKSB7XG4gICAgICAgICAgcGxheWVyMUJvYXJkLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb25JbnB1dC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVySW5wdXQudmFsdWUgPT09IFwicGxheWVyMlwiKSB7XG4gICAgICAgICAgcGxheWVyMkJvYXJkLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBkaXJlY3Rpb25JbnB1dC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVsb2FkQm9hcmQocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhdGVCb3goR0JQbGF5ZXIxLCBHQlBsYXllcjIsIHBsYXllcjJOYW1lKSB7XG4gICAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlXCIpO1xuICAgIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2UgPiBkaXZcIlxuICAgICk7XG4gICAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBwbGF5ZXIxW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIEdCUGxheWVyMi5yZWNpZXZlQXR0YWNrKGksIGopO1xuICAgICAgICAgIGlmIChHQlBsYXllcjIuYWxsU2hpcHNIYXZlQmVlblN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgR0JQbGF5ZXIxLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICBHQlBsYXllcjIuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCJQTEFZRVIgMSBXSU5TXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbG9hZEJvYXJkKEdCUGxheWVyMSwgR0JQbGF5ZXIyKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KG9ic2N1cmVCb2FyZCwgMTAwMCk7XG4gICAgICAgICAgLyogb2JzY3VyZUJvYXJkKCk7ICovXG4gICAgICAgICAgaWYgKHBsYXllcjJOYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIG1ha2VDb21wdXRlckNob2ljZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGxheWVyMltjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBHQlBsYXllcjEucmVjaWV2ZUF0dGFjayhpLCBqKTtcbiAgICAgICAgICBpZiAoR0JQbGF5ZXIxLmFsbFNoaXBzSGF2ZUJlZW5TdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIEdCUGxheWVyMS5jbGVhckFsbCgpO1xuICAgICAgICAgICAgR0JQbGF5ZXIyLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICBzY29yZS50ZXh0Q29udGVudCA9IFwiUExBWUVSIDIgV0lOU1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWxvYWRCb2FyZChHQlBsYXllcjEsIEdCUGxheWVyMik7XG4gICAgICAgICAgc2V0VGltZW91dChvYnNjdXJlQm9hcmQsIDEwMDApO1xuICAgICAgICAgIC8qIG9ic2N1cmVCb2FyZCgpOyAqL1xuICAgICAgICB9KTtcblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZyhwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCkge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3gtZGltZW5zaW9uXCIpO1xuICAgIGNvbnN0IGRyYWdEaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RyYWctbi1kcm9wX19kaXJlY3Rpb25cIik7XG4gICAgY29uc3QgZHJhZ0RpbWVuc2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJhZy1uLWRyb3BfX2RpbWVuc2lvblwiKTtcblxuICAgIGRyYWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGV2KSA9PiB7XG4gICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZHJhZ0RpcmVjdGlvbi52YWx1ZSk7XG4gICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQxXCIsIGRyYWdEaW1lbnNpb24udmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ2FtZUJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxIGRpdlwiKTtcbiAgICBjb25zdCBnYW1lQm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjIgZGl2XCIpO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGdhbWVCb2FyZDFbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXYpID0+IHtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZUJvYXJkMltjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldikgPT4ge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGdhbWVCb2FyZDFbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldikgPT4ge1xuICAgICAgICAgIHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIHBhcnNlSW50KGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dDFcIiksIDEwKSxcbiAgICAgICAgICAgIGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmVsb2FkQm9hcmQocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpO1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lQm9hcmQyW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXYpID0+IHtcbiAgICAgICAgICBwbGF5ZXIyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBwYXJzZUludChldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQxXCIpLCAxMCksXG4gICAgICAgICAgICBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIilcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlbG9hZEJvYXJkKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKTtcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhaW50Qm9hcmRzLFxuICAgIGluaXRpYXRlQm94LFxuICAgIHJlbG9hZEJvYXJkLFxuICAgIG9ic2N1cmVCb2FyZCxcbiAgICBjcmVhdGVTaGlwQnV0dG9uQWN0aXZlLFxuICAgIHN0YXJ0RHJhZyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbmh0bWwsYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNDg2QTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6d2hpdGVzbW9rZTtcbiAgICBcbn1cblxuaW5wdXQsb3B0aW9uLHNlbGVjdCwuYm94LWRpbWVuc2lvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZiMDM2O1xufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZiMDM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogI2E5NGE0YTtcbn1cblxuLmdhbWVCb2FyZCxcbi5nYW1lQm9hcmRDaG9pY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGdhcDoxMCU7XG59XG5cbi5nYW1lQm9hcmRfX3BsYXllcjEsXG4uZ2FtZUJvYXJkX19wbGF5ZXIyLFxuLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlLFxuLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNle1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5nYW1lQm9hcmRfX3NxdWFyZXN7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzgxOGM3ODtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgLCM0YzdiOGIsIzIzNDg2YSwjM2I2NzkwKTtcbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDApOyAgLyogYWxsIHRoZSBwaHJhc2VzIGFuZCB0ZXh0IGFyZSBoaWRkZW4gKi9cbn1cblxuLnN0YXJ0R2FtZS1idXR0b257XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuXG4uYm94LWRpbWVuc2lvbntcbiAgICBib3JkZXI6MnB4IHNvbGlkICM0YzdiOGI7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG5cbi5kcmFnLW4tZHJvcHtcbiAgICBtYXJnaW4tdG9wOjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6MzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLE9BQU87QUFDWDs7QUFFQTs7OztJQUlJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDhEQUE4RDtJQUM5RCxzQkFBc0IsR0FBRyx3Q0FBd0M7QUFDckU7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzQ4NkE7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxuICAgIFxcbn1cXG5cXG5pbnB1dCxvcHRpb24sc2VsZWN0LC5ib3gtZGltZW5zaW9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZiMDM2O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZiMDM2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogI2E5NGE0YTtcXG59XFxuXFxuLmdhbWVCb2FyZCxcXG4uZ2FtZUJvYXJkQ2hvaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZ2FwOjEwJTtcXG59XFxuXFxuLmdhbWVCb2FyZF9fcGxheWVyMSxcXG4uZ2FtZUJvYXJkX19wbGF5ZXIyLFxcbi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSxcXG4uZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2V7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdhbWVCb2FyZF9fc3F1YXJlc3tcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODE4Yzc4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgLCM0YzdiOGIsIzIzNDg2YSwjM2I2NzkwKTtcXG4gICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwKTsgIC8qIGFsbCB0aGUgcGhyYXNlcyBhbmQgdGV4dCBhcmUgaGlkZGVuICovXFxufVxcblxcbi5zdGFydEdhbWUtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5cXG4uYm94LWRpbWVuc2lvbntcXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNGM3YjhiO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5cXG4uZHJhZy1uLWRyb3B7XFxuICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vdXNlckludGVyZmFjZS9VSVwiO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB1c2VySW50ZXJmYWNlID0gVUkoKTtcbiAgdXNlckludGVyZmFjZS5wYWludEJvYXJkcygpO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJBbnRvbmlvXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKFwiRnJhbmNvXCIpO1xuXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEdhbWUtYnV0dG9uXCIpO1xuXG4gIHVzZXJJbnRlcmZhY2UuY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZShcbiAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCxcbiAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZFxuICApO1xuXG4gIHVzZXJJbnRlcmZhY2Uuc3RhcnREcmFnKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLCBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZCk7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKCkgPT4ge1xuICAgICAgdXNlckludGVyZmFjZS5pbml0aWF0ZUJveChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICBwbGF5ZXIyLm5hbWVcbiAgICAgICk7XG5cbiAgICAgIHVzZXJJbnRlcmZhY2UucmVsb2FkQm9hcmQoXG4gICAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZFxuICAgICAgKTtcblxuICAgICAgLy8gSGVyZSBmaW5pc2hlcyB0aGUgcG9zaXRpb25pbmcgcGhhc2UuXG4gICAgICAvLyBub3cgdHVybnMgaGF2ZSB0byB0YWtlIG92ZXIuXG5cbiAgICAgIGNvbnN0IHNoaXBDcmVhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnNoaXAtY3JlYXRpb24tY29udGFpbmVyXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHVpUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgICAgY29uc3QgdWlQbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJcIik7XG4gICAgICBjb25zdCB1aVBsYXllcjFDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgdWlQbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2VcIlxuICAgICAgKTtcbiAgICAgIHVpUGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB1aVBsYXllcjFDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgdWlQbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgdWlQbGF5ZXIyQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgc2hpcENyZWF0aW9uQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKTtcbn1cblxubWFpbigpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJnYW1lQm9hcmQiLCJnYW1lQm9hcmRUYWJsZSIsInZlcmlmeURhdGEiLCJ4IiwieSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImkiLCJwbGFjZVNoaXAiLCJuZXdTaGlwIiwiaiIsImdldFNoaXAiLCJhbGxTaGlwc0hhdmVCZWVuU3VuayIsImNsZWFyQWxsIiwidW5kZWZpbmVkIiwicmVjaWV2ZUF0dGFjayIsImhpdCIsIlBsYXllciIsIm5hbWUiLCJhcmd1bWVudHMiLCJwbGF5ZXJHYW1lQm9hcmQiLCJuVGltZXNIaXQiLCJpc1N1bmsiLCJpbWFnZVNoaXAiLCJVSSIsImNvbXB1dGVyU3RhY2siLCJwYWludEJvYXJkcyIsInBsYXllcjEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXIyIiwicGxheWVyMUNob2ljZSIsInBsYXllcjJDaG9pY2UiLCJuZXdDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwibmV3Q29udGFpbmVyMiIsIm5ld0NvbnRhaW5lckNob2ljZSIsIm5ld0NvbnRhaW5lcjJDaG9pY2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInJlbG9hZEJvYXJkIiwiR0IxIiwiR0IyIiwicXVlcnlTZWxlY3RvckFsbCIsImNvdW50IiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmQiLCJvYnNjdXJlQm9hcmQiLCJ2aXNpYmlsaXR5IiwibWFrZUNvbXB1dGVyQ2hvaWNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2xpY2siLCJwdXNoIiwic2hpZnQiLCJjcmVhdGVTaGlwQnV0dG9uQWN0aXZlIiwicGxheWVyMUJvYXJkIiwicGxheWVyMkJvYXJkIiwiY3JlYXRlU2hpcEJ1dHRvbiIsInJvd0lucHV0IiwiY29sdW1uSW5wdXQiLCJsZW5ndGhJbnB1dCIsImRpcmVjdGlvbklucHV0IiwicGxheWVySW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicm93IiwicGFyc2VJbnQiLCJ2YWx1ZSIsImNvbHVtbiIsImluaXRpYXRlQm94IiwiR0JQbGF5ZXIxIiwiR0JQbGF5ZXIyIiwicGxheWVyMk5hbWUiLCJzY29yZSIsInNldFRpbWVvdXQiLCJzdGFydERyYWciLCJkcmFnRWxlbWVudCIsImRyYWdEaXJlY3Rpb24iLCJkcmFnRGltZW5zaW9uIiwiZXYiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZ2FtZUJvYXJkMSIsImdhbWVCb2FyZDIiLCJwcmV2ZW50RGVmYXVsdCIsImdldERhdGEiLCJtYWluIiwidXNlckludGVyZmFjZSIsInN0YXJ0QnV0dG9uIiwic2hpcENyZWF0aW9uQ29udGFpbmVyIiwidWlQbGF5ZXIxIiwidWlQbGF5ZXIyIiwidWlQbGF5ZXIxQ2hvaWNlIiwidWlQbGF5ZXIyQ2hvaWNlIiwib25jZSJdLCJzb3VyY2VSb290IjoiIn0=