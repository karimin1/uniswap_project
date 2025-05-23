"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-locate";
exports.ids = ["vendor-chunks/p-locate"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-locate/index.js":
/*!****************************************!*\
  !*** ./node_modules/p-locate/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst pLimit = __webpack_require__(/*! p-limit */ \"(ssr)/./node_modules/p-limit/index.js\");\n\nclass EndError extends Error {\n\tconstructor(value) {\n\t\tsuper();\n\t\tthis.value = value;\n\t}\n}\n\n// The input can also be a promise, so we await it\nconst testElement = async (element, tester) => tester(await element);\n\n// The input can also be a promise, so we `Promise.all()` them both\nconst finder = async element => {\n\tconst values = await Promise.all(element);\n\tif (values[1] === true) {\n\t\tthrow new EndError(values[0]);\n\t}\n\n\treturn false;\n};\n\nconst pLocate = async (iterable, tester, options) => {\n\toptions = {\n\t\tconcurrency: Infinity,\n\t\tpreserveOrder: true,\n\t\t...options\n\t};\n\n\tconst limit = pLimit(options.concurrency);\n\n\t// Start all the promises concurrently with optional limit\n\tconst items = [...iterable].map(element => [element, limit(testElement, element, tester)]);\n\n\t// Check the promises either serially or concurrently\n\tconst checkLimit = pLimit(options.preserveOrder ? 1 : Infinity);\n\n\ttry {\n\t\tawait Promise.all(items.map(element => checkLimit(finder, element)));\n\t} catch (error) {\n\t\tif (error instanceof EndError) {\n\t\t\treturn error.value;\n\t\t}\n\n\t\tthrow error;\n\t}\n};\n\nmodule.exports = pLocate;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1sb2NhdGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixlQUFlLG1CQUFPLENBQUMsc0RBQVM7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF9jbG9uZS8uL25vZGVfbW9kdWxlcy9wLWxvY2F0ZS9pbmRleC5qcz80MmMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHBMaW1pdCA9IHJlcXVpcmUoJ3AtbGltaXQnKTtcblxuY2xhc3MgRW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuLy8gVGhlIGlucHV0IGNhbiBhbHNvIGJlIGEgcHJvbWlzZSwgc28gd2UgYXdhaXQgaXRcbmNvbnN0IHRlc3RFbGVtZW50ID0gYXN5bmMgKGVsZW1lbnQsIHRlc3RlcikgPT4gdGVzdGVyKGF3YWl0IGVsZW1lbnQpO1xuXG4vLyBUaGUgaW5wdXQgY2FuIGFsc28gYmUgYSBwcm9taXNlLCBzbyB3ZSBgUHJvbWlzZS5hbGwoKWAgdGhlbSBib3RoXG5jb25zdCBmaW5kZXIgPSBhc3luYyBlbGVtZW50ID0+IHtcblx0Y29uc3QgdmFsdWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZWxlbWVudCk7XG5cdGlmICh2YWx1ZXNbMV0gPT09IHRydWUpIHtcblx0XHR0aHJvdyBuZXcgRW5kRXJyb3IodmFsdWVzWzBdKTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHBMb2NhdGUgPSBhc3luYyAoaXRlcmFibGUsIHRlc3Rlciwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdGNvbmN1cnJlbmN5OiBJbmZpbml0eSxcblx0XHRwcmVzZXJ2ZU9yZGVyOiB0cnVlLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblxuXHRjb25zdCBsaW1pdCA9IHBMaW1pdChvcHRpb25zLmNvbmN1cnJlbmN5KTtcblxuXHQvLyBTdGFydCBhbGwgdGhlIHByb21pc2VzIGNvbmN1cnJlbnRseSB3aXRoIG9wdGlvbmFsIGxpbWl0XG5cdGNvbnN0IGl0ZW1zID0gWy4uLml0ZXJhYmxlXS5tYXAoZWxlbWVudCA9PiBbZWxlbWVudCwgbGltaXQodGVzdEVsZW1lbnQsIGVsZW1lbnQsIHRlc3RlcildKTtcblxuXHQvLyBDaGVjayB0aGUgcHJvbWlzZXMgZWl0aGVyIHNlcmlhbGx5IG9yIGNvbmN1cnJlbnRseVxuXHRjb25zdCBjaGVja0xpbWl0ID0gcExpbWl0KG9wdGlvbnMucHJlc2VydmVPcmRlciA/IDEgOiBJbmZpbml0eSk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBQcm9taXNlLmFsbChpdGVtcy5tYXAoZWxlbWVudCA9PiBjaGVja0xpbWl0KGZpbmRlciwgZWxlbWVudCkpKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFbmRFcnJvcikge1xuXHRcdFx0cmV0dXJuIGVycm9yLnZhbHVlO1xuXHRcdH1cblxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBMb2NhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-locate/index.js\n");

/***/ })

};
;