"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/demo */ \"./components/demo.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar server = \"wss://demo.nats.io:8443\" || 0;\nvar eventName = \"kubecon23eu\" || 0;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var n = localStorage.getItem(\"name\");\n        if (n != null) {\n            setName(n);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-2 text-white bg-slate-800 flex justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold\",\n                        children: \"KubeConEU 2023\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex flex-col w-screen pt-16 justify-center px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://rsms.me/inter/inter.css\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, _this),\n                    name == \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white shadow rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-4 py-5 sm:p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-medium leading-6 text-gray-900\",\n                                    children: [\n                                        \"NATS \",\n                                        eventName,\n                                        \" Demo\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2 max-w-xl text-sm text-gray-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"\\uD83C\\uDF89 To kick off the demo, let's start with your name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"mt-5 sm:flex sm:items-center\",\n                                    onSubmit: function() {\n                                        return setName(text);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full sm:max-w-xs\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email\",\n                                                    className: \"sr-only\",\n                                                    children: \"Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    name: \"name\",\n                                                    id: \"email\",\n                                                    className: \"block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm\",\n                                                    placeholder: \"My Name\",\n                                                    onChange: function(e) {\n                                                        return setText(e.target.value);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                                            children: \"Save\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    name != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_demo__WEBPACK_IMPORTED_MODULE_3__.Demo, {\n                        name: name,\n                        server: server,\n                        eventName: eventName\n                    }, void 0, false, {\n                        fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dgee/Documents/Rethink/kubecon22/demo/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"mY2RsrqoWTLo+cwG97RGukVGK4Q=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDVixrREFBSTt3QkFBQ1UsSUFBSSxFQUFFQSxJQUFJO3dCQUFFVCxNQUFNLEVBQUVBLE1BQU07d0JBQUVJLFNBQVMsRUFBRUEsU0FBUzs7Ozs7NkJBQUk7Ozs7OztxQkFFeEQ7O29CQUNILENBQ0o7QUFDSCxDQUFDO0dBaEVLRSxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFrRVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEZW1vIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZW1vJ1xuXG5jb25zdCBzZXJ2ZXIgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OQVRTX1NFUlZFUl9VUkwgfHwgXCJuYXRzOi8vbG9jYWxob3N0OjQyMjJcIiBcbmNvbnN0IGV2ZW50TmFtZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VWRU5UX05BTUUgfHwgXCJteV9ldmVudFwiXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKVxuICAgIGlmIChuICE9IG51bGwpIHtcbiAgICAgIHNldE5hbWUobilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMiB0ZXh0LXdoaXRlIGJnLXNsYXRlLTgwMCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkt1YmVDb25FVSAyMDIzPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgdy1zY3JlZW4gcHQtMTYganVzdGlmeS1jZW50ZXIgcHgtNFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHtuYW1lID09IFwiXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTUgc206cC02XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPk5BVFMge2V2ZW50TmFtZX0gRGVtbzwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWF4LXcteGwgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIDxwPvCfjokgVG8ga2ljayBvZmYgdGhlIGRlbW8sIGxldCZhcG9zO3Mgc3RhcnQgd2l0aCB5b3VyIG5hbWU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTUgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIiBvblN1Ym1pdD17KCkgPT4gc2V0TmFtZSh0ZXh0KX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXhzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTp0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgTmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyBpbmxpbmUtZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1pbmRpZ28tNjAwIHB4LTQgcHktMiBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgc206bXQtMCBzbTptbC0zIHNtOnctYXV0byBzbTp0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuXG4gICAgICApfVxuXG4gICAgICB7bmFtZSAhPSBcIlwiICYmIChcbiAgICAgICAgPERlbW8gbmFtZT17bmFtZX0gc2VydmVyPXtzZXJ2ZXJ9IGV2ZW50TmFtZT17ZXZlbnROYW1lfSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVtbyIsInNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19OQVRTX1NFUlZFUl9VUkwiLCJldmVudE5hbWUiLCJORVhUX1BVQkxJQ19FVkVOVF9OQU1FIiwiSG9tZSIsInRleHQiLCJzZXRUZXh0IiwibmFtZSIsInNldE5hbWUiLCJuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJsaW5rIiwicmVsIiwiaHJlZiIsImgzIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});