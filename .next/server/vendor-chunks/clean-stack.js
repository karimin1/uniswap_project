"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/clean-stack";
exports.ids = ["vendor-chunks/clean-stack"];
exports.modules = {

/***/ "(ssr)/./node_modules/clean-stack/index.js":
/*!*******************************************!*\
  !*** ./node_modules/clean-stack/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\n\nconst extractPathRegex = /\\s+at.*(?:\\(|\\s)(.*)\\)?/;\nconst pathRegex = /^(?:(?:(?:node|(?:internal\\/[\\w/]*|.*node_modules\\/(?:babel-polyfill|pirates)\\/.*)?\\w+)\\.js:\\d+:\\d+)|native)/;\nconst homeDir = typeof os.homedir === 'undefined' ? '' : os.homedir();\n\nmodule.exports = (stack, options) => {\n\toptions = Object.assign({pretty: false}, options);\n\n\treturn stack.replace(/\\\\/g, '/')\n\t\t.split('\\n')\n\t\t.filter(line => {\n\t\t\tconst pathMatches = line.match(extractPathRegex);\n\t\t\tif (pathMatches === null || !pathMatches[1]) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tconst match = pathMatches[1];\n\n\t\t\t// Electron\n\t\t\tif (\n\t\t\t\tmatch.includes('.app/Contents/Resources/electron.asar') ||\n\t\t\t\tmatch.includes('.app/Contents/Resources/default_app.asar')\n\t\t\t) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn !pathRegex.test(match);\n\t\t})\n\t\t.filter(line => line.trim() !== '')\n\t\t.map(line => {\n\t\t\tif (options.pretty) {\n\t\t\t\treturn line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));\n\t\t\t}\n\n\t\t\treturn line;\n\t\t})\n\t\t.join('\\n');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xlYW4tc3RhY2svaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixXQUFXLG1CQUFPLENBQUMsY0FBSTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGNBQWM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXBfY2xvbmUvLi9ub2RlX21vZHVsZXMvY2xlYW4tc3RhY2svaW5kZXguanM/YWZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5cbmNvbnN0IGV4dHJhY3RQYXRoUmVnZXggPSAvXFxzK2F0LiooPzpcXCh8XFxzKSguKilcXCk/LztcbmNvbnN0IHBhdGhSZWdleCA9IC9eKD86KD86KD86bm9kZXwoPzppbnRlcm5hbFxcL1tcXHcvXSp8Lipub2RlX21vZHVsZXNcXC8oPzpiYWJlbC1wb2x5ZmlsbHxwaXJhdGVzKVxcLy4qKT9cXHcrKVxcLmpzOlxcZCs6XFxkKyl8bmF0aXZlKS87XG5jb25zdCBob21lRGlyID0gdHlwZW9mIG9zLmhvbWVkaXIgPT09ICd1bmRlZmluZWQnID8gJycgOiBvcy5ob21lZGlyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHN0YWNrLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtwcmV0dHk6IGZhbHNlfSwgb3B0aW9ucyk7XG5cblx0cmV0dXJuIHN0YWNrLnJlcGxhY2UoL1xcXFwvZywgJy8nKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQuZmlsdGVyKGxpbmUgPT4ge1xuXHRcdFx0Y29uc3QgcGF0aE1hdGNoZXMgPSBsaW5lLm1hdGNoKGV4dHJhY3RQYXRoUmVnZXgpO1xuXHRcdFx0aWYgKHBhdGhNYXRjaGVzID09PSBudWxsIHx8ICFwYXRoTWF0Y2hlc1sxXSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBwYXRoTWF0Y2hlc1sxXTtcblxuXHRcdFx0Ly8gRWxlY3Ryb25cblx0XHRcdGlmIChcblx0XHRcdFx0bWF0Y2guaW5jbHVkZXMoJy5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2VsZWN0cm9uLmFzYXInKSB8fFxuXHRcdFx0XHRtYXRjaC5pbmNsdWRlcygnLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvZGVmYXVsdF9hcHAuYXNhcicpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gIXBhdGhSZWdleC50ZXN0KG1hdGNoKTtcblx0XHR9KVxuXHRcdC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gJycpXG5cdFx0Lm1hcChsaW5lID0+IHtcblx0XHRcdGlmIChvcHRpb25zLnByZXR0eSkge1xuXHRcdFx0XHRyZXR1cm4gbGluZS5yZXBsYWNlKGV4dHJhY3RQYXRoUmVnZXgsIChtLCBwMSkgPT4gbS5yZXBsYWNlKHAxLCBwMS5yZXBsYWNlKGhvbWVEaXIsICd+JykpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxpbmU7XG5cdFx0fSlcblx0XHQuam9pbignXFxuJyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/clean-stack/index.js\n");

/***/ })

};
;