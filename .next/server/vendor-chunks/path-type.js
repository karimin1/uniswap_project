"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/path-type";
exports.ids = ["vendor-chunks/path-type"];
exports.modules = {

/***/ "(ssr)/./node_modules/path-type/index.js":
/*!*****************************************!*\
  !*** ./node_modules/path-type/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nconst {promisify} = __webpack_require__(/*! util */ \"util\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nasync function isType(fsStatType, statsMethodName, filePath) {\n\tif (typeof filePath !== 'string') {\n\t\tthrow new TypeError(`Expected a string, got ${typeof filePath}`);\n\t}\n\n\ttry {\n\t\tconst stats = await promisify(fs[fsStatType])(filePath);\n\t\treturn stats[statsMethodName]();\n\t} catch (error) {\n\t\tif (error.code === 'ENOENT') {\n\t\t\treturn false;\n\t\t}\n\n\t\tthrow error;\n\t}\n}\n\nfunction isTypeSync(fsStatType, statsMethodName, filePath) {\n\tif (typeof filePath !== 'string') {\n\t\tthrow new TypeError(`Expected a string, got ${typeof filePath}`);\n\t}\n\n\ttry {\n\t\treturn fs[fsStatType](filePath)[statsMethodName]();\n\t} catch (error) {\n\t\tif (error.code === 'ENOENT') {\n\t\t\treturn false;\n\t\t}\n\n\t\tthrow error;\n\t}\n}\n\nexports.isFile = isType.bind(null, 'stat', 'isFile');\nexports.isDirectory = isType.bind(null, 'stat', 'isDirectory');\nexports.isSymlink = isType.bind(null, 'lstat', 'isSymbolicLink');\nexports.isFileSync = isTypeSync.bind(null, 'statSync', 'isFile');\nexports.isDirectorySync = isTypeSync.bind(null, 'statSync', 'isDirectory');\nexports.isSymlinkSync = isTypeSync.bind(null, 'lstatSync', 'isSymbolicLink');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGF0aC10eXBlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsT0FBTyxXQUFXLEVBQUUsbUJBQU8sQ0FBQyxrQkFBTTtBQUNsQyxXQUFXLG1CQUFPLENBQUMsY0FBSTs7QUFFdkI7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF9jbG9uZS8uL25vZGVfbW9kdWxlcy9wYXRoLXR5cGUvaW5kZXguanM/YzIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuYXN5bmMgZnVuY3Rpb24gaXNUeXBlKGZzU3RhdFR5cGUsIHN0YXRzTWV0aG9kTmFtZSwgZmlsZVBhdGgpIHtcblx0aWYgKHR5cGVvZiBmaWxlUGF0aCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIHN0cmluZywgZ290ICR7dHlwZW9mIGZpbGVQYXRofWApO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBzdGF0cyA9IGF3YWl0IHByb21pc2lmeShmc1tmc1N0YXRUeXBlXSkoZmlsZVBhdGgpO1xuXHRcdHJldHVybiBzdGF0c1tzdGF0c01ldGhvZE5hbWVdKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yLmNvZGUgPT09ICdFTk9FTlQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNUeXBlU3luYyhmc1N0YXRUeXBlLCBzdGF0c01ldGhvZE5hbWUsIGZpbGVQYXRoKSB7XG5cdGlmICh0eXBlb2YgZmlsZVBhdGggIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBzdHJpbmcsIGdvdCAke3R5cGVvZiBmaWxlUGF0aH1gKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzW2ZzU3RhdFR5cGVdKGZpbGVQYXRoKVtzdGF0c01ldGhvZE5hbWVdKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yLmNvZGUgPT09ICdFTk9FTlQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuZXhwb3J0cy5pc0ZpbGUgPSBpc1R5cGUuYmluZChudWxsLCAnc3RhdCcsICdpc0ZpbGUnKTtcbmV4cG9ydHMuaXNEaXJlY3RvcnkgPSBpc1R5cGUuYmluZChudWxsLCAnc3RhdCcsICdpc0RpcmVjdG9yeScpO1xuZXhwb3J0cy5pc1N5bWxpbmsgPSBpc1R5cGUuYmluZChudWxsLCAnbHN0YXQnLCAnaXNTeW1ib2xpY0xpbmsnKTtcbmV4cG9ydHMuaXNGaWxlU3luYyA9IGlzVHlwZVN5bmMuYmluZChudWxsLCAnc3RhdFN5bmMnLCAnaXNGaWxlJyk7XG5leHBvcnRzLmlzRGlyZWN0b3J5U3luYyA9IGlzVHlwZVN5bmMuYmluZChudWxsLCAnc3RhdFN5bmMnLCAnaXNEaXJlY3RvcnknKTtcbmV4cG9ydHMuaXNTeW1saW5rU3luYyA9IGlzVHlwZVN5bmMuYmluZChudWxsLCAnbHN0YXRTeW5jJywgJ2lzU3ltYm9saWNMaW5rJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/path-type/index.js\n");

/***/ })

};
;