/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\n\n// get the canvas element\nconst canvas = document.getElementById('game-canvas');\nconsole.log(document, \"doc\");\nconsole.log(_scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WIDTH, \"width\");\nconsole.log(_scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEIGHT, \"height\");\nconsole.log(canvas, \"canvas\");\n\n//set the canvas dimensions according to game constants\ncanvas.width = 500;\ncanvas.height = 500;\n\n//get the canvas Interface\nconst canvasInterface = canvas.getContext('2d');\n\n//set the background for starters\ncanvasInterface.fillStyle = \"beige\";\ncanvasInterface.fillRect(0, 0, canvas.width, canvas.height);\nconst view = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvasInterface);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ0E7O0FBRWxDO0FBQ0EsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQzNCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sMkRBQVUsRUFBRSxPQUFPLENBQUM7QUFDaENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTiw0REFBVyxFQUFFLFFBQVEsQ0FBQztBQUNsQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sRUFBRSxRQUFRLENBQUM7O0FBRTdCO0FBQ0FBLE1BQU0sQ0FBQ08sS0FBSyxHQUFHLEdBQUc7QUFDbEJQLE1BQU0sQ0FBQ1EsTUFBTSxHQUFHLEdBQUc7O0FBRW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFHVCxNQUFNLENBQUNVLFVBQVUsQ0FBQyxJQUFJLENBQUM7O0FBRS9DO0FBQ0FELGVBQWUsQ0FBQ0UsU0FBUyxHQUFHLE9BQU87QUFDbkNGLGVBQWUsQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVaLE1BQU0sQ0FBQ08sS0FBSyxFQUFFUCxNQUFNLENBQUNRLE1BQU0sQ0FBQztBQUUzRCxNQUFNSyxJQUFJLEdBQUcsSUFBSWQscURBQUksQ0FBQ1UsZUFBZSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmx5LXR5cGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL3NjcmlwdHMvdmlld1wiO1xuXG4vLyBnZXQgdGhlIGNhbnZhcyBlbGVtZW50XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbmNvbnNvbGUubG9nKGRvY3VtZW50LFwiZG9jXCIpO1xuY29uc29sZS5sb2coR2FtZS5XSURUSCwgXCJ3aWR0aFwiKTtcbmNvbnNvbGUubG9nKEdhbWUuSEVJR0hULCBcImhlaWdodFwiKTtcbmNvbnNvbGUubG9nKGNhbnZhcywgXCJjYW52YXNcIik7XG5cbi8vc2V0IHRoZSBjYW52YXMgZGltZW5zaW9ucyBhY2NvcmRpbmcgdG8gZ2FtZSBjb25zdGFudHNcbmNhbnZhcy53aWR0aCA9IDUwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbi8vZ2V0IHRoZSBjYW52YXMgSW50ZXJmYWNlXG5jb25zdCBjYW52YXNJbnRlcmZhY2UgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuLy9zZXQgdGhlIGJhY2tncm91bmQgZm9yIHN0YXJ0ZXJzXG5jYW52YXNJbnRlcmZhY2UuZmlsbFN0eWxlID0gXCJiZWlnZVwiO1xuY2FudmFzSW50ZXJmYWNlLmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbmNvbnN0IHZpZXcgPSBuZXcgVmlldyhjYW52YXNJbnRlcmZhY2UpOyJdLCJuYW1lcyI6WyJHYW1lIiwiVmlldyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiV0lEVEgiLCJIRUlHSFQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhc0ludGVyZmFjZSIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nclass Game {\n  constructor(canvasInterface) {\n    this.canvasInterface = canvasInterface;\n  }\n}\n_defineProperty(Game, \"WIDTH\", 500);\n_defineProperty(Game, \"HEIGHT\", 500);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFJdEJDLFdBQVdBLENBQUNDLGVBQWUsRUFBRTtJQUN6QixJQUFJLENBQUNBLGVBQWUsR0FBR0EsZUFBZTtFQUMxQztBQUNKO0FBQUNDLGVBQUEsQ0FQb0JILElBQUksV0FDTixHQUFHO0FBQUFHLGVBQUEsQ0FEREgsSUFBSSxZQUVMLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHktdHlwZS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBzdGF0aWMgV0lEVEggPSA1MDA7XG4gICAgc3RhdGljIEhFSUdIVCA9IDUwMDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0ludGVyZmFjZSkge1xuICAgICAgICB0aGlzLmNhbnZhc0ludGVyZmFjZSA9IGNhbnZhc0ludGVyZmFjZTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhc0ludGVyZmFjZSIsIl9kZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nclass View {\n  constructor(canvasInterface) {\n    this.canvasInterface = canvasInterface;\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasInterface);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRVgsTUFBTUMsSUFBSSxDQUFDO0VBRXRCQyxXQUFXQSxDQUFDQyxlQUFlLEVBQUU7SUFDekIsSUFBSSxDQUFDQSxlQUFlLEdBQUdBLGVBQWU7SUFDdEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSUosNkNBQUksQ0FBQ0csZUFBZSxDQUFDO0VBQ3pDO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHktdHlwZS8uL3NyYy9zY3JpcHRzL3ZpZXcuanM/ODBjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuY2FudmFzSW50ZXJmYWNlID0gY2FudmFzSW50ZXJmYWNlO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjYW52YXNJbnRlcmZhY2UpO1xuICAgIH1cblxuICAgIFxufSJdLCJuYW1lcyI6WyJHYW1lIiwiVmlldyIsImNvbnN0cnVjdG9yIiwiY2FudmFzSW50ZXJmYWNlIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHktdHlwZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;