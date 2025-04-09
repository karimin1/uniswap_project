"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/indent-string";
exports.ids = ["vendor-chunks/indent-string"];
exports.modules = {

/***/ "(ssr)/./node_modules/indent-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/indent-string/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = (string, count = 1, options) => {\n\toptions = {\n\t\tindent: ' ',\n\t\tincludeEmptyLines: false,\n\t\t...options\n\t};\n\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError(\n\t\t\t`Expected \\`input\\` to be a \\`string\\`, got \\`${typeof string}\\``\n\t\t);\n\t}\n\n\tif (typeof count !== 'number') {\n\t\tthrow new TypeError(\n\t\t\t`Expected \\`count\\` to be a \\`number\\`, got \\`${typeof count}\\``\n\t\t);\n\t}\n\n\tif (typeof options.indent !== 'string') {\n\t\tthrow new TypeError(\n\t\t\t`Expected \\`options.indent\\` to be a \\`string\\`, got \\`${typeof options.indent}\\``\n\t\t);\n\t}\n\n\tif (count === 0) {\n\t\treturn string;\n\t}\n\n\tconst regex = options.includeEmptyLines ? /^/gm : /^(?!\\s*$)/gm;\n\n\treturn string.replace(regex, options.indent.repeat(count));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW5kZW50LXN0cmluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxzQkFBc0I7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXBfY2xvbmUvLi9ub2RlX21vZHVsZXMvaW5kZW50LXN0cmluZy9pbmRleC5qcz81MDE2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RyaW5nLCBjb3VudCA9IDEsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRpbmRlbnQ6ICcgJyxcblx0XHRpbmNsdWRlRW1wdHlMaW5lczogZmFsc2UsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiBzdHJpbmd9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGNvdW50ICE9PSAnbnVtYmVyJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRgRXhwZWN0ZWQgXFxgY291bnRcXGAgdG8gYmUgYSBcXGBudW1iZXJcXGAsIGdvdCBcXGAke3R5cGVvZiBjb3VudH1cXGBgXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbmRlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdGBFeHBlY3RlZCBcXGBvcHRpb25zLmluZGVudFxcYCB0byBiZSBhIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIG9wdGlvbnMuaW5kZW50fVxcYGBcblx0XHQpO1xuXHR9XG5cblx0aWYgKGNvdW50ID09PSAwKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHJlZ2V4ID0gb3B0aW9ucy5pbmNsdWRlRW1wdHlMaW5lcyA/IC9eL2dtIDogL14oPyFcXHMqJCkvZ207XG5cblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCBvcHRpb25zLmluZGVudC5yZXBlYXQoY291bnQpKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/indent-string/index.js\n");

/***/ })

};
;