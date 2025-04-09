/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fs-readdir-recursive";
exports.ids = ["vendor-chunks/fs-readdir-recursive"];
exports.modules = {

/***/ "(ssr)/./node_modules/fs-readdir-recursive/index.js":
/*!****************************************************!*\
  !*** ./node_modules/fs-readdir-recursive/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fs = __webpack_require__(/*! fs */ \"fs\")\nvar path = __webpack_require__(/*! path */ \"path\")\n\nmodule.exports = read\n\nfunction read(root, filter, files, prefix) {\n  prefix = prefix || ''\n  files = files || []\n  filter = filter || noDotFiles\n\n  var dir = path.join(root, prefix)\n  if (!fs.existsSync(dir)) return files\n  if (fs.statSync(dir).isDirectory())\n    fs.readdirSync(dir)\n    .filter(function (name, index) {\n      return filter(name, index, dir)\n    })\n    .forEach(function (name) {\n      read(root, filter, files, path.join(prefix, name))\n    })\n  else\n    files.push(prefix)\n\n  return files\n}\n\nfunction noDotFiles(x) {\n  return x[0] !== '.'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnMtcmVhZGRpci1yZWN1cnNpdmUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxtQkFBTyxDQUFDLGNBQUk7QUFDckIsV0FBVyxtQkFBTyxDQUFDLGtCQUFNOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF9jbG9uZS8uL25vZGVfbW9kdWxlcy9mcy1yZWFkZGlyLXJlY3Vyc2l2ZS9pbmRleC5qcz80NmJiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVhZFxuXG5mdW5jdGlvbiByZWFkKHJvb3QsIGZpbHRlciwgZmlsZXMsIHByZWZpeCkge1xuICBwcmVmaXggPSBwcmVmaXggfHwgJydcbiAgZmlsZXMgPSBmaWxlcyB8fCBbXVxuICBmaWx0ZXIgPSBmaWx0ZXIgfHwgbm9Eb3RGaWxlc1xuXG4gIHZhciBkaXIgPSBwYXRoLmpvaW4ocm9vdCwgcHJlZml4KVxuICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlyKSkgcmV0dXJuIGZpbGVzXG4gIGlmIChmcy5zdGF0U3luYyhkaXIpLmlzRGlyZWN0b3J5KCkpXG4gICAgZnMucmVhZGRpclN5bmMoZGlyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gZmlsdGVyKG5hbWUsIGluZGV4LCBkaXIpXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmVhZChyb290LCBmaWx0ZXIsIGZpbGVzLCBwYXRoLmpvaW4ocHJlZml4LCBuYW1lKSlcbiAgICB9KVxuICBlbHNlXG4gICAgZmlsZXMucHVzaChwcmVmaXgpXG5cbiAgcmV0dXJuIGZpbGVzXG59XG5cbmZ1bmN0aW9uIG5vRG90RmlsZXMoeCkge1xuICByZXR1cm4geFswXSAhPT0gJy4nXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/fs-readdir-recursive/index.js\n");

/***/ })

};
;