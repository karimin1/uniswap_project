/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/at-least-node";
exports.ids = ["vendor-chunks/at-least-node"];
exports.modules = {

/***/ "(ssr)/./node_modules/at-least-node/index.js":
/*!*********************************************!*\
  !*** ./node_modules/at-least-node/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = r => {\n  const n = process.versions.node.split('.').map(x => parseInt(x, 10))\n  r = r.split('.').map(x => parseInt(x, 10))\n  return n[0] > r[0] || (n[0] === r[0] && (n[1] > r[1] || (n[1] === r[1] && n[2] >= r[2])))\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXQtbGVhc3Qtbm9kZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF9jbG9uZS8uL25vZGVfbW9kdWxlcy9hdC1sZWFzdC1ub2RlL2luZGV4LmpzP2M0YzQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByID0+IHtcbiAgY29uc3QgbiA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpLm1hcCh4ID0+IHBhcnNlSW50KHgsIDEwKSlcbiAgciA9IHIuc3BsaXQoJy4nKS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXG4gIHJldHVybiBuWzBdID4gclswXSB8fCAoblswXSA9PT0gclswXSAmJiAoblsxXSA+IHJbMV0gfHwgKG5bMV0gPT09IHJbMV0gJiYgblsyXSA+PSByWzJdKSkpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/at-least-node/index.js\n");

/***/ })

};
;