"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-binary-path";
exports.ids = ["vendor-chunks/is-binary-path"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-binary-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-binary-path/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst path = __webpack_require__(/*! path */ \"path\");\nconst binaryExtensions = __webpack_require__(/*! binary-extensions */ \"(ssr)/./node_modules/binary-extensions/index.js\");\n\nconst extensions = new Set(binaryExtensions);\n\nmodule.exports = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYmluYXJ5LXBhdGgvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0IseUJBQXlCLG1CQUFPLENBQUMsMEVBQW1COztBQUVwRDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXBfY2xvbmUvLi9ub2RlX21vZHVsZXMvaXMtYmluYXJ5LXBhdGgvaW5kZXguanM/ZGM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgYmluYXJ5RXh0ZW5zaW9ucyA9IHJlcXVpcmUoJ2JpbmFyeS1leHRlbnNpb25zJyk7XG5cbmNvbnN0IGV4dGVuc2lvbnMgPSBuZXcgU2V0KGJpbmFyeUV4dGVuc2lvbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVQYXRoID0+IGV4dGVuc2lvbnMuaGFzKHBhdGguZXh0bmFtZShmaWxlUGF0aCkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-binary-path/index.js\n");

/***/ })

};
;