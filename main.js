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
    player2[count].click();
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
    border: 2px solid black;
}

.startGame-button{
    margin-top: 3rem;
}


.box-dimension{
    border:2px solid red;
    width: 2rem;
    height: 2rem;
}


.drag-n-drop{
    margin-top:2rem;
    display: flex;
    gap:30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,OAAO;AACX;;AAEA;;;;IAII,UAAU;IACV,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,oBAAoB;IACpB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,QAAQ;AACZ","sourcesContent":["*{\n    box-sizing:border-box;\n}\n\nhtml,body{\n    height: 100%;\n}\n\n.gameBoard,\n.gameBoardChoice{\n    display: flex;\n    justify-content: center;\n    margin-top: 3rem;\n    gap:10%;\n}\n\n.gameBoard__player1,\n.gameBoard__player2,\n.gameBoard__player1__choice,\n.gameBoard__player2__choice{\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.gameBoard__squares{\n    width: 10%;\n    height: 30px;\n    border: 2px solid black;\n}\n\n.startGame-button{\n    margin-top: 3rem;\n}\n\n\n.box-dimension{\n    border:2px solid red;\n    width: 2rem;\n    height: 2rem;\n}\n\n\n.drag-n-drop{\n    margin-top:2rem;\n    display: flex;\n    gap:30px;\n}\n"],"sourceRoot":""}]);
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
  const player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])("franco");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDLHFCQUFxQixDQUFDO0lBQy9ELE1BQU1nRSxlQUFlLEdBQUdqRSxRQUFRLENBQUNDLGFBQWEsQ0FDNUMsNkJBQ0YsQ0FBQztJQUNELE1BQU1pRSxlQUFlLEdBQUdsRSxRQUFRLENBQUNDLGFBQWEsQ0FDNUMsNkJBQ0YsQ0FBQztJQUNEOEQsU0FBUyxDQUFDNUMsS0FBSyxDQUFDRyxVQUFVLEdBQUcsU0FBUztJQUN0QzJDLGVBQWUsQ0FBQzlDLEtBQUssQ0FBQ0csVUFBVSxHQUFHLFNBQVM7SUFDNUMwQyxTQUFTLENBQUM3QyxLQUFLLENBQUNHLFVBQVUsR0FBRyxRQUFRO0lBQ3JDNEMsZUFBZSxDQUFDL0MsS0FBSyxDQUFDRyxVQUFVLEdBQUcsUUFBUTtJQUMzQ3dDLHFCQUFxQixDQUFDM0MsS0FBSyxDQUFDRyxVQUFVLEdBQUcsUUFBUTtFQUNuRCxDQUFDLEVBQ0Q7SUFBRTZDLElBQUksRUFBRTtFQUFLLENBQ2YsQ0FBQztBQUNIO0FBRUFSLElBQUksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvZ2FtZUJvYXJkL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy91c2VySW50ZXJmYWNlL1VJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gIGNvbnN0IGdhbWVCb2FyZFRhYmxlID0gW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXTtcblxuICBmdW5jdGlvbiB2ZXJpZnlEYXRhKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgLy8gaSBuZWVkIHRvIHZlcmlmeSBpZiBhbGwgdGhlIGRhdGEgYXJlIGNvcnJlY3RcbiAgICAvLyBhbmQgZG9uJ3QgZ28gaW50byBhIG5vdCBhY2NlcHRhYmxlIHN0YXRlXG5cbiAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDAgfHwgbGVuZ3RoIDw9IDAgfHwgbGVuZ3RoID4gNSkge1xuICAgICAgLy8gaSBuZWVkIGEgbWV0aG9kIHRvIHZlcmlmeSBpZiB0aGUgaW5zZXJ0ZWQgZGF0YSBhcmUgaW5jb3JyZWN0XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJob3Jpem9udGFsXCIgJiYgZGlyZWN0aW9uICE9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIC8vIHZlcmlmeSBpZiBkaXJlY3Rpb24gaXMgY29ycmVjdFxuICAgICAgLy8gKHRoZW9yaWNhbGx5IHRoaXMgc2hvdWxkbid0IGJlIGFkZGVkIGFzIG1vc3QgcHJvYmFibHkgdGhlcmUgd2lsbCBiZSBvbmx5IDIgb3B0aW9ucylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKGxlbmd0aCArIHkgLSAxID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnYW1lQm9hcmRUYWJsZVt4XVtpXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChsZW5ndGggKyB4IC0gMSA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2FtZUJvYXJkVGFibGVbaV1beV0gPT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIGlmICh2ZXJpZnlEYXRhKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoKTtcbiAgICAgIGdhbWVCb2FyZFRhYmxlW3hdW3ldID0gbmV3U2hpcDtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB4ICsgMTsgaSA8IGxlbmd0aCArIHg7IGkgKz0gMSkge1xuICAgICAgICAgIGdhbWVCb2FyZFRhYmxlW2ldW3ldID0gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGogPSB5ICsgMTsgaiA8IGxlbmd0aCArIHk7IGogKz0gMSkge1xuICAgICAgICAgIGdhbWVCb2FyZFRhYmxlW3hdW2pdID0gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaGlwKHgsIHkpIHtcbiAgICByZXR1cm4gZ2FtZUJvYXJkVGFibGVbeF1beV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxTaGlwc0hhdmVCZWVuU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGdhbWVCb2FyZFRhYmxlW2ldW2pdID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJBbGwoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ2FtZUJvYXJkVGFibGVbaV1bal0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIGdhbWVCb2FyZFRhYmxlW3hdW3ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBnYW1lQm9hcmRUYWJsZVt4XVt5XS5oaXQoKTtcbiAgICAgIGdhbWVCb2FyZFRhYmxlW3hdW3ldID0gXCJoaXRcIjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdhbWVCb2FyZFRhYmxlW3hdW3ldID09PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgZ2FtZUJvYXJkVGFibGVbeF1beV0gPSBcIm1pc3NcIjtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7IHBsYWNlU2hpcCwgZ2V0U2hpcCwgcmVjaWV2ZUF0dGFjaywgYWxsU2hpcHNIYXZlQmVlblN1bmssIGNsZWFyQWxsIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4uL2dhbWVCb2FyZC9nYW1lQm9hcmRcIjtcblxuZnVuY3Rpb24gUGxheWVyKG5hbWUgPSBcImNvbXB1dGVyXCIpIHtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgcmV0dXJuIHsgbmFtZSwgcGxheWVyR2FtZUJvYXJkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gIGxldCBuVGltZXNIaXQgPSAwO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBuVGltZXNIaXQgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoblRpbWVzSGl0ID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJmdW5jdGlvbiBVSSgpIHtcbiAgZnVuY3Rpb24gcGFpbnRCb2FyZHMoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMlwiKTtcbiAgICBjb25zdCBwbGF5ZXIxQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJfX2Nob2ljZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBuZXdDb250YWluZXIyQ2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRfX3NxdWFyZXNcIik7XG4gICAgICBuZXdDb250YWluZXJDaG9pY2UuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZF9fc3F1YXJlc1wiKTtcbiAgICAgIG5ld0NvbnRhaW5lcjJDaG9pY2UuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZF9fc3F1YXJlc1wiKTtcblxuICAgICAgcGxheWVyMS5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICAgICAgcGxheWVyMi5hcHBlbmRDaGlsZChuZXdDb250YWluZXIyKTtcbiAgICAgIHBsYXllcjFDaG9pY2UuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyQ2hvaWNlKTtcbiAgICAgIHBsYXllcjJDaG9pY2UuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyMkNob2ljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVsb2FkQm9hcmQoR0IxLCBHQjIpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjEgZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMiBkaXZcIik7XG4gICAgY29uc3QgcGxheWVyMUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIEdCMS5nZXRTaGlwKGksIGopID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgLy8gb2JqZWN0IHRvIGJlIGluc2VydGVkXG4gICAgICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPSBcIlNISVBcIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjEuZ2V0U2hpcChpLCBqKSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9IFwibWlzc1wiO1xuICAgICAgICAgIHBsYXllcjJDaG9pY2VbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IxLmdldFNoaXAoaSwgaikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9IFwiaGl0XCI7XG4gICAgICAgICAgcGxheWVyMkNob2ljZVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMS5nZXRTaGlwKGksIGopID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIxW2NvdW50XS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIEdCMi5nZXRTaGlwKGksIGopID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgLy8gb2JqZWN0IHRvIGJlIGluc2VydGVkXG4gICAgICAgICAgcGxheWVyMltjb3VudF0udGV4dENvbnRlbnQgPSBcIlNISVBcIjtcbiAgICAgICAgfSBlbHNlIGlmIChHQjIuZ2V0U2hpcChpLCBqKSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS50ZXh0Q29udGVudCA9IFwibWlzc1wiO1xuICAgICAgICAgIHBsYXllcjFDaG9pY2VbY291bnRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoR0IyLmdldFNoaXAoaSwgaikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS50ZXh0Q29udGVudCA9IFwiaGl0XCI7XG4gICAgICAgICAgcGxheWVyMUNob2ljZVtjb3VudF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9IGVsc2UgaWYgKEdCMi5nZXRTaGlwKGksIGopID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwbGF5ZXIyW2NvdW50XS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2N1cmVCb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjFcIik7XG4gICAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIyXCIpO1xuICAgIGNvbnN0IHBsYXllcjFDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlXCIpO1xuICAgIGNvbnN0IHBsYXllcjJDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlXCIpO1xuXG4gICAgaWYgKHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgcGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBwbGF5ZXIxQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgIHBsYXllcjEuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICBwbGF5ZXIxQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcbiAgICAgIHBsYXllcjIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgcGxheWVyMkNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICBwbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgcGxheWVyMkNob2ljZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ29tcHV0ZXJDaG9pY2UoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxID4gZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2UgPiBkaXZcIlxuICAgICk7XG5cbiAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuXG4gICAgd2hpbGUgKFxuICAgICAgcGxheWVyMVtjb3VudF0udGV4dENvbnRlbnQgPT09IFwiaGl0XCIgfHxcbiAgICAgIHBsYXllcjFbY291bnRdLnRleHRDb250ZW50ID09PSBcIm1pc3NcIlxuICAgICkge1xuICAgICAgY291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cblxuICAgIHBsYXllcjJbY291bnRdLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGlwQnV0dG9uQWN0aXZlKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSB7XG4gICAgY29uc3QgY3JlYXRlU2hpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXNoaXAtYnV0dG9uXCIpO1xuICAgIGNvbnN0IHJvd0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3dcIik7XG4gICAgY29uc3QgY29sdW1uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbHVtblwiKTtcbiAgICBjb25zdCBsZW5ndGhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVuZ3RoXCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXJlY3Rpb25cIik7XG4gICAgY29uc3QgcGxheWVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKTtcblxuICAgIGNyZWF0ZVNoaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHJvd0lucHV0LnZhbHVlLCAxMCk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBwYXJzZUludChjb2x1bW5JbnB1dC52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoSW5wdXQudmFsdWUsIDEwKTtcblxuICAgICAgaWYgKFxuICAgICAgICByb3cgJiZcbiAgICAgICAgY29sdW1uICYmXG4gICAgICAgIGxlbmd0aCAmJlxuICAgICAgICBkaXJlY3Rpb25JbnB1dC52YWx1ZSAmJlxuICAgICAgICBwbGF5ZXJJbnB1dC52YWx1ZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGF5ZXJJbnB1dC52YWx1ZSA9PT0gXCJwbGF5ZXIxXCIpIHtcbiAgICAgICAgICBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbklucHV0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJJbnB1dC52YWx1ZSA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICAgICAgICBwbGF5ZXIyQm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbklucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZWxvYWRCb2FyZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWF0ZUJveChHQlBsYXllcjEsIEdCUGxheWVyMiwgcGxheWVyMk5hbWUpIHtcbiAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVcIik7XG4gICAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZSA+IGRpdlwiXG4gICAgKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNlID4gZGl2XCJcbiAgICApO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHBsYXllcjFbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgR0JQbGF5ZXIyLnJlY2lldmVBdHRhY2soaSwgaik7XG4gICAgICAgICAgaWYgKEdCUGxheWVyMi5hbGxTaGlwc0hhdmVCZWVuU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBHQlBsYXllcjEuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIEdCUGxheWVyMi5jbGVhckFsbCgpO1xuICAgICAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIlBMQVlFUiAxIFdJTlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsb2FkQm9hcmQoR0JQbGF5ZXIxLCBHQlBsYXllcjIpO1xuICAgICAgICAgIHNldFRpbWVvdXQob2JzY3VyZUJvYXJkLCAxMDAwKTtcbiAgICAgICAgICAvKiBvYnNjdXJlQm9hcmQoKTsgKi9cbiAgICAgICAgICBpZiAocGxheWVyMk5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgbWFrZUNvbXB1dGVyQ2hvaWNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwbGF5ZXIyW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIEdCUGxheWVyMS5yZWNpZXZlQXR0YWNrKGksIGopO1xuICAgICAgICAgIGlmIChHQlBsYXllcjEuYWxsU2hpcHNIYXZlQmVlblN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgR0JQbGF5ZXIxLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICBHQlBsYXllcjIuY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCJQTEFZRVIgMiBXSU5TXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbG9hZEJvYXJkKEdCUGxheWVyMSwgR0JQbGF5ZXIyKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KG9ic2N1cmVCb2FyZCwgMTAwMCk7XG4gICAgICAgICAgLyogb2JzY3VyZUJvYXJkKCk7ICovXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnREcmFnKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveC1kaW1lbnNpb25cIik7XG4gICAgY29uc3QgZHJhZ0RpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJhZy1uLWRyb3BfX2RpcmVjdGlvblwiKTtcbiAgICBjb25zdCBkcmFnRGltZW5zaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcmFnLW4tZHJvcF9fZGltZW5zaW9uXCIpO1xuXG4gICAgZHJhZ0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXYpID0+IHtcbiAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBkcmFnRGlyZWN0aW9uLnZhbHVlKTtcbiAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dDFcIiwgZHJhZ0RpbWVuc2lvbi52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnYW1lQm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lQm9hcmRfX3BsYXllcjEgZGl2XCIpO1xuICAgIGNvbnN0IGdhbWVCb2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWVCb2FyZF9fcGxheWVyMiBkaXZcIik7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ2FtZUJvYXJkMVtjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldikgPT4ge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lQm9hcmQyW2NvdW50XS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ2FtZUJvYXJkMVtjb3VudF0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgcGxheWVyMUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgcGFyc2VJbnQoZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0MVwiKSwgMTApLFxuICAgICAgICAgICAgZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZWxvYWRCb2FyZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCk7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWVCb2FyZDJbY291bnRdLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldikgPT4ge1xuICAgICAgICAgIHBsYXllcjJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIHBhcnNlSW50KGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dDFcIiksIDEwKSxcbiAgICAgICAgICAgIGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmVsb2FkQm9hcmQocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpO1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGFpbnRCb2FyZHMsXG4gICAgaW5pdGlhdGVCb3gsXG4gICAgcmVsb2FkQm9hcmQsXG4gICAgb2JzY3VyZUJvYXJkLFxuICAgIGNyZWF0ZVNoaXBCdXR0b25BY3RpdmUsXG4gICAgc3RhcnREcmFnLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuaHRtbCxib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmdhbWVCb2FyZCxcbi5nYW1lQm9hcmRDaG9pY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGdhcDoxMCU7XG59XG5cbi5nYW1lQm9hcmRfX3BsYXllcjEsXG4uZ2FtZUJvYXJkX19wbGF5ZXIyLFxuLmdhbWVCb2FyZF9fcGxheWVyMV9fY2hvaWNlLFxuLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNle1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5nYW1lQm9hcmRfX3NxdWFyZXN7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5zdGFydEdhbWUtYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG5cblxuLmJveC1kaW1lbnNpb257XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG5cbi5kcmFnLW4tZHJvcHtcbiAgICBtYXJnaW4tdG9wOjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6MzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBOzs7O0lBSUksVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lQm9hcmQsXFxuLmdhbWVCb2FyZENob2ljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGdhcDoxMCU7XFxufVxcblxcbi5nYW1lQm9hcmRfX3BsYXllcjEsXFxuLmdhbWVCb2FyZF9fcGxheWVyMixcXG4uZ2FtZUJvYXJkX19wbGF5ZXIxX19jaG9pY2UsXFxuLmdhbWVCb2FyZF9fcGxheWVyMl9fY2hvaWNle1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5nYW1lQm9hcmRfX3NxdWFyZXN7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydEdhbWUtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5cXG4uYm94LWRpbWVuc2lvbntcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcblxcbi5kcmFnLW4tZHJvcHtcXG4gICAgbWFyZ2luLXRvcDoycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vdXNlckludGVyZmFjZS9VSVwiO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB1c2VySW50ZXJmYWNlID0gVUkoKTtcbiAgdXNlckludGVyZmFjZS5wYWludEJvYXJkcygpO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJBbnRvbmlvXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKFwiZnJhbmNvXCIpO1xuXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEdhbWUtYnV0dG9uXCIpO1xuXG4gIHVzZXJJbnRlcmZhY2UuY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZShcbiAgICBwbGF5ZXIxLnBsYXllckdhbWVCb2FyZCxcbiAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZFxuICApO1xuXG4gIHVzZXJJbnRlcmZhY2Uuc3RhcnREcmFnKHBsYXllcjEucGxheWVyR2FtZUJvYXJkLCBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZCk7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKCkgPT4ge1xuICAgICAgdXNlckludGVyZmFjZS5pbml0aWF0ZUJveChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJHYW1lQm9hcmQsXG4gICAgICAgIHBsYXllcjIucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICBwbGF5ZXIyLm5hbWVcbiAgICAgICk7XG5cbiAgICAgIHVzZXJJbnRlcmZhY2UucmVsb2FkQm9hcmQoXG4gICAgICAgIHBsYXllcjEucGxheWVyR2FtZUJvYXJkLFxuICAgICAgICBwbGF5ZXIyLnBsYXllckdhbWVCb2FyZFxuICAgICAgKTtcblxuICAgICAgLy8gSGVyZSBmaW5pc2hlcyB0aGUgcG9zaXRpb25pbmcgcGhhc2UuXG4gICAgICAvLyBub3cgdHVybnMgaGF2ZSB0byB0YWtlIG92ZXIuXG5cbiAgICAgIGNvbnN0IHNoaXBDcmVhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnNoaXAtY3JlYXRpb24tY29udGFpbmVyXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHVpUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUJvYXJkX19wbGF5ZXIxXCIpO1xuICAgICAgY29uc3QgdWlQbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQm9hcmRfX3BsYXllcjJcIik7XG4gICAgICBjb25zdCB1aVBsYXllcjFDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5nYW1lQm9hcmRfX3BsYXllcjFfX2Nob2ljZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgdWlQbGF5ZXIyQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZ2FtZUJvYXJkX19wbGF5ZXIyX19jaG9pY2VcIlxuICAgICAgKTtcbiAgICAgIHVpUGxheWVyMS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB1aVBsYXllcjFDaG9pY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgdWlQbGF5ZXIyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgdWlQbGF5ZXIyQ2hvaWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgc2hpcENyZWF0aW9uQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKTtcbn1cblxubWFpbigpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJnYW1lQm9hcmQiLCJnYW1lQm9hcmRUYWJsZSIsInZlcmlmeURhdGEiLCJ4IiwieSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImkiLCJwbGFjZVNoaXAiLCJuZXdTaGlwIiwiaiIsImdldFNoaXAiLCJhbGxTaGlwc0hhdmVCZWVuU3VuayIsImNsZWFyQWxsIiwidW5kZWZpbmVkIiwicmVjaWV2ZUF0dGFjayIsImhpdCIsIlBsYXllciIsIm5hbWUiLCJhcmd1bWVudHMiLCJwbGF5ZXJHYW1lQm9hcmQiLCJuVGltZXNIaXQiLCJpc1N1bmsiLCJVSSIsInBhaW50Qm9hcmRzIiwicGxheWVyMSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXllcjIiLCJwbGF5ZXIxQ2hvaWNlIiwicGxheWVyMkNob2ljZSIsIm5ld0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJuZXdDb250YWluZXIyIiwibmV3Q29udGFpbmVyQ2hvaWNlIiwibmV3Q29udGFpbmVyMkNob2ljZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicmVsb2FkQm9hcmQiLCJHQjEiLCJHQjIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib2JzY3VyZUJvYXJkIiwidmlzaWJpbGl0eSIsIm1ha2VDb21wdXRlckNob2ljZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNsaWNrIiwiY3JlYXRlU2hpcEJ1dHRvbkFjdGl2ZSIsInBsYXllcjFCb2FyZCIsInBsYXllcjJCb2FyZCIsImNyZWF0ZVNoaXBCdXR0b24iLCJyb3dJbnB1dCIsImNvbHVtbklucHV0IiwibGVuZ3RoSW5wdXQiLCJkaXJlY3Rpb25JbnB1dCIsInBsYXllcklucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdyIsInBhcnNlSW50IiwidmFsdWUiLCJjb2x1bW4iLCJpbml0aWF0ZUJveCIsIkdCUGxheWVyMSIsIkdCUGxheWVyMiIsInBsYXllcjJOYW1lIiwic2NvcmUiLCJzZXRUaW1lb3V0Iiwic3RhcnREcmFnIiwiZHJhZ0VsZW1lbnQiLCJkcmFnRGlyZWN0aW9uIiwiZHJhZ0RpbWVuc2lvbiIsImV2IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImdhbWVCb2FyZDEiLCJnYW1lQm9hcmQyIiwicHJldmVudERlZmF1bHQiLCJnZXREYXRhIiwibWFpbiIsInVzZXJJbnRlcmZhY2UiLCJzdGFydEJ1dHRvbiIsInNoaXBDcmVhdGlvbkNvbnRhaW5lciIsInVpUGxheWVyMSIsInVpUGxheWVyMiIsInVpUGxheWVyMUNob2ljZSIsInVpUGxheWVyMkNob2ljZSIsIm9uY2UiXSwic291cmNlUm9vdCI6IiJ9