"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/astral-regex";
exports.ids = ["vendor-chunks/astral-regex"];
exports.modules = {

/***/ "(ssr)/./node_modules/astral-regex/index.js":
/*!********************************************!*\
  !*** ./node_modules/astral-regex/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nconst regex = '[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]';\n\nconst astralRegex = options => options && options.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');\n\nmodule.exports = astralRegex;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXN0cmFsLXJlZ2V4L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7O0FBRUEseUVBQXlFLE1BQU07O0FBRS9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF9jbG9uZS8uL25vZGVfbW9kdWxlcy9hc3RyYWwtcmVnZXgvaW5kZXguanM/YTBjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCByZWdleCA9ICdbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdJztcblxuY29uc3QgYXN0cmFsUmVnZXggPSBvcHRpb25zID0+IG9wdGlvbnMgJiYgb3B0aW9ucy5leGFjdCA/IG5ldyBSZWdFeHAoYF4ke3JlZ2V4fSRgKSA6IG5ldyBSZWdFeHAocmVnZXgsICdnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXN0cmFsUmVnZXg7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/astral-regex/index.js\n");

/***/ })

};
;