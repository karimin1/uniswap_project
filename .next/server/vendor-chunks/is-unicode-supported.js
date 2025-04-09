"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-unicode-supported";
exports.ids = ["vendor-chunks/is-unicode-supported"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-unicode-supported/index.js":
/*!****************************************************!*\
  !*** ./node_modules/is-unicode-supported/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = () => {\n\tif (process.platform !== 'win32') {\n\t\treturn true;\n\t}\n\n\treturn Boolean(process.env.CI) ||\n\t\tBoolean(process.env.WT_SESSION) || // Windows Terminal\n\t\tprocess.env.TERM_PROGRAM === 'vscode' ||\n\t\tprocess.env.TERM === 'xterm-256color' ||\n\t\tprocess.env.TERM === 'alacritty';\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdW5pY29kZS1zdXBwb3J0ZWQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF9jbG9uZS8uL25vZGVfbW9kdWxlcy9pcy11bmljb2RlLXN1cHBvcnRlZC9pbmRleC5qcz8wYWNmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gQm9vbGVhbihwcm9jZXNzLmVudi5DSSkgfHxcblx0XHRCb29sZWFuKHByb2Nlc3MuZW52LldUX1NFU1NJT04pIHx8IC8vIFdpbmRvd3MgVGVybWluYWxcblx0XHRwcm9jZXNzLmVudi5URVJNX1BST0dSQU0gPT09ICd2c2NvZGUnIHx8XG5cdFx0cHJvY2Vzcy5lbnYuVEVSTSA9PT0gJ3h0ZXJtLTI1NmNvbG9yJyB8fFxuXHRcdHByb2Nlc3MuZW52LlRFUk0gPT09ICdhbGFjcml0dHknO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-unicode-supported/index.js\n");

/***/ })

};
;