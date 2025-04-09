/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ordinal";
exports.ids = ["vendor-chunks/ordinal"];
exports.modules = {

/***/ "(ssr)/./node_modules/ordinal/index.js":
/*!***************************************!*\
  !*** ./node_modules/ordinal/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var indicator = __webpack_require__(/*! ./indicator */ \"(ssr)/./node_modules/ordinal/indicator.js\")\n\nfunction ordinal (i) {\n  if (typeof i !== 'number') throw new TypeError('Expected Number, got ' + (typeof i) + ' ' + i)\n\n  if (!Number.isFinite(i)) return i\n  return i + indicator(i)\n}\n\nordinal.indicator = indicator\nmodule.exports = ordinal\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3JkaW5hbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQU8sQ0FBQyw4REFBYTs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXBfY2xvbmUvLi9ub2RlX21vZHVsZXMvb3JkaW5hbC9pbmRleC5qcz9iYmI5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbmRpY2F0b3IgPSByZXF1aXJlKCcuL2luZGljYXRvcicpXG5cbmZ1bmN0aW9uIG9yZGluYWwgKGkpIHtcbiAgaWYgKHR5cGVvZiBpICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgTnVtYmVyLCBnb3QgJyArICh0eXBlb2YgaSkgKyAnICcgKyBpKVxuXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKGkpKSByZXR1cm4gaVxuICByZXR1cm4gaSArIGluZGljYXRvcihpKVxufVxuXG5vcmRpbmFsLmluZGljYXRvciA9IGluZGljYXRvclxubW9kdWxlLmV4cG9ydHMgPSBvcmRpbmFsXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ordinal/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ordinal/indicator.js":
/*!*******************************************!*\
  !*** ./node_modules/ordinal/indicator.js ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = function indicator (i) {\n  i = Math.abs(i)\n  var cent = i % 100\n  if (cent >= 10 && cent <= 20) return 'th'\n  var dec = i % 10\n  if (dec === 1) return 'st'\n  if (dec === 2) return 'nd'\n  if (dec === 3) return 'rd'\n  return 'th'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3JkaW5hbC9pbmRpY2F0b3IuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwX2Nsb25lLy4vbm9kZV9tb2R1bGVzL29yZGluYWwvaW5kaWNhdG9yLmpzP2JlNDYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmRpY2F0b3IgKGkpIHtcbiAgaSA9IE1hdGguYWJzKGkpXG4gIHZhciBjZW50ID0gaSAlIDEwMFxuICBpZiAoY2VudCA+PSAxMCAmJiBjZW50IDw9IDIwKSByZXR1cm4gJ3RoJ1xuICB2YXIgZGVjID0gaSAlIDEwXG4gIGlmIChkZWMgPT09IDEpIHJldHVybiAnc3QnXG4gIGlmIChkZWMgPT09IDIpIHJldHVybiAnbmQnXG4gIGlmIChkZWMgPT09IDMpIHJldHVybiAncmQnXG4gIHJldHVybiAndGgnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ordinal/indicator.js\n");

/***/ })

};
;