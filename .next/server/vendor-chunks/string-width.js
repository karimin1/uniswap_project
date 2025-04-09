"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/string-width";
exports.ids = ["vendor-chunks/string-width"];
exports.modules = {

/***/ "(ssr)/./node_modules/string-width/index.js":
/*!********************************************!*\
  !*** ./node_modules/string-width/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst stripAnsi = __webpack_require__(/*! strip-ansi */ \"(ssr)/./node_modules/strip-ansi/index.js\");\nconst isFullwidthCodePoint = __webpack_require__(/*! is-fullwidth-code-point */ \"(ssr)/./node_modules/is-fullwidth-code-point/index.js\");\nconst emojiRegex = __webpack_require__(/*! emoji-regex */ \"(ssr)/./node_modules/emoji-regex/index.js\");\n\nconst stringWidth = string => {\n\tif (typeof string !== 'string' || string.length === 0) {\n\t\treturn 0;\n\t}\n\n\tstring = stripAnsi(string);\n\n\tif (string.length === 0) {\n\t\treturn 0;\n\t}\n\n\tstring = string.replace(emojiRegex(), '  ');\n\n\tlet width = 0;\n\n\tfor (let i = 0; i < string.length; i++) {\n\t\tconst code = string.codePointAt(i);\n\n\t\t// Ignore control characters\n\t\tif (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {\n\t\t\tcontinue;\n\t\t}\n\n\t\t// Ignore combining characters\n\t\tif (code >= 0x300 && code <= 0x36F) {\n\t\t\tcontinue;\n\t\t}\n\n\t\t// Surrogates\n\t\tif (code > 0xFFFF) {\n\t\t\ti++;\n\t\t}\n\n\t\twidth += isFullwidthCodePoint(code) ? 2 : 1;\n\t}\n\n\treturn width;\n};\n\nmodule.exports = stringWidth;\n// TODO: remove this in the next major version\nmodule.exports[\"default\"] = stringWidth;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMsNERBQVk7QUFDdEMsNkJBQTZCLG1CQUFPLENBQUMsc0ZBQXlCO0FBQzlELG1CQUFtQixtQkFBTyxDQUFDLDhEQUFhOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXBfY2xvbmUvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzPzg1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaXBBbnNpID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuY29uc3QgaXNGdWxsd2lkdGhDb2RlUG9pbnQgPSByZXF1aXJlKCdpcy1mdWxsd2lkdGgtY29kZS1wb2ludCcpO1xuY29uc3QgZW1vamlSZWdleCA9IHJlcXVpcmUoJ2Vtb2ppLXJlZ2V4Jyk7XG5cbmNvbnN0IHN0cmluZ1dpZHRoID0gc3RyaW5nID0+IHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmlwQW5zaShzdHJpbmcpO1xuXG5cdGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShlbW9qaVJlZ2V4KCksICcgICcpO1xuXG5cdGxldCB3aWR0aCA9IDA7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjb2RlID0gc3RyaW5nLmNvZGVQb2ludEF0KGkpO1xuXG5cdFx0Ly8gSWdub3JlIGNvbnRyb2wgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlIDw9IDB4MUYgfHwgKGNvZGUgPj0gMHg3RiAmJiBjb2RlIDw9IDB4OUYpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgY29tYmluaW5nIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA+PSAweDMwMCAmJiBjb2RlIDw9IDB4MzZGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBTdXJyb2dhdGVzXG5cdFx0aWYgKGNvZGUgPiAweEZGRkYpIHtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR3aWR0aCArPSBpc0Z1bGx3aWR0aENvZGVQb2ludChjb2RlKSA/IDIgOiAxO1xuXHR9XG5cblx0cmV0dXJuIHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdXaWR0aDtcbi8vIFRPRE86IHJlbW92ZSB0aGlzIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdXaWR0aDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/string-width/index.js\n");

/***/ })

};
;