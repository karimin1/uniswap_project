/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/yocto-queue";
exports.ids = ["vendor-chunks/yocto-queue"];
exports.modules = {

/***/ "(ssr)/./node_modules/yocto-queue/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yocto-queue/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("class Node {\n\t/// value;\n\t/// next;\n\n\tconstructor(value) {\n\t\tthis.value = value;\n\n\t\t// TODO: Remove this when targeting Node.js 12.\n\t\tthis.next = undefined;\n\t}\n}\n\nclass Queue {\n\t// TODO: Use private class fields when targeting Node.js 12.\n\t// #_head;\n\t// #_tail;\n\t// #_size;\n\n\tconstructor() {\n\t\tthis.clear();\n\t}\n\n\tenqueue(value) {\n\t\tconst node = new Node(value);\n\n\t\tif (this._head) {\n\t\t\tthis._tail.next = node;\n\t\t\tthis._tail = node;\n\t\t} else {\n\t\t\tthis._head = node;\n\t\t\tthis._tail = node;\n\t\t}\n\n\t\tthis._size++;\n\t}\n\n\tdequeue() {\n\t\tconst current = this._head;\n\t\tif (!current) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._head = this._head.next;\n\t\tthis._size--;\n\t\treturn current.value;\n\t}\n\n\tclear() {\n\t\tthis._head = undefined;\n\t\tthis._tail = undefined;\n\t\tthis._size = 0;\n\t}\n\n\tget size() {\n\t\treturn this._size;\n\t}\n\n\t* [Symbol.iterator]() {\n\t\tlet current = this._head;\n\n\t\twhile (current) {\n\t\t\tyield current.value;\n\t\t\tcurrent = current.next;\n\t\t}\n\t}\n}\n\nmodule.exports = Queue;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMveW9jdG8tcXVldWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXBfY2xvbmUvLi9ub2RlX21vZHVsZXMveW9jdG8tcXVldWUvaW5kZXguanM/ZGUwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcblx0Ly8vIHZhbHVlO1xuXHQvLy8gbmV4dDtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuXHRcdC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTIuXG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xuXHR9XG59XG5cbmNsYXNzIFF1ZXVlIHtcblx0Ly8gVE9ETzogVXNlIHByaXZhdGUgY2xhc3MgZmllbGRzIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTIuXG5cdC8vICNfaGVhZDtcblx0Ly8gI190YWlsO1xuXHQvLyAjX3NpemU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHR9XG5cblx0ZW5xdWV1ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cblx0XHRpZiAodGhpcy5faGVhZCkge1xuXHRcdFx0dGhpcy5fdGFpbC5uZXh0ID0gbm9kZTtcblx0XHRcdHRoaXMuX3RhaWwgPSBub2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9oZWFkID0gbm9kZTtcblx0XHRcdHRoaXMuX3RhaWwgPSBub2RlO1xuXHRcdH1cblxuXHRcdHRoaXMuX3NpemUrKztcblx0fVxuXG5cdGRlcXVldWUoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuX2hlYWQ7XG5cdFx0aWYgKCFjdXJyZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5faGVhZCA9IHRoaXMuX2hlYWQubmV4dDtcblx0XHR0aGlzLl9zaXplLS07XG5cdFx0cmV0dXJuIGN1cnJlbnQudmFsdWU7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLl9oZWFkID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc2l6ZTtcblx0fVxuXG5cdCogW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0bGV0IGN1cnJlbnQgPSB0aGlzLl9oZWFkO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRcdHlpZWxkIGN1cnJlbnQudmFsdWU7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/yocto-queue/index.js\n");

/***/ })

};
;