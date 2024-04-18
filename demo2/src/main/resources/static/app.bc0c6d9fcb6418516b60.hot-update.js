webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CStoragePage.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_seull_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ \"./node_modules/vuedraggable/dist/vuedraggable.umd.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../../../node_modules/axios/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a\n  },\n  data: function data() {\n    return {\n      customers: [],\n      selectedCustomer: null,\n      selectedStorages: []\n    };\n  },\n  methods: {\n    fetchCustomersAndStorages: function () {\n      var _fetchCustomersAndStorages = Object(_home_seull_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var customersResponse, storagesResponse;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/api/cstorage/list');\n            case 3:\n              customersResponse = _context.sent;\n              this.customers = customersResponse.data.map(function (item) {\n                return item.customerCode;\n              });\n\n              // 사용 가능한 모든 창고를 불러옵니다. (가정: 별도의 창고 목록 API가 있음)\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/api/storages');\n            case 7:\n              storagesResponse = _context.sent;\n              this.availableStorages = storagesResponse.data;\n              _context.next = 14;\n              break;\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(\"데이터를 불러오는 중 오류가 발생했습니다:\", _context.t0);\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this, [[0, 11]]);\n      }));\n      function fetchCustomersAndStorages() {\n        return _fetchCustomersAndStorages.apply(this, arguments);\n      }\n      return fetchCustomersAndStorages;\n    }(),\n    selectCustomer: function () {\n      var _selectCustomer = Object(_home_seull_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(customerCode) {\n        var response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              this.selectedCustomer = customerCode;\n              _context2.prev = 1;\n              _context2.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/cstorage/\".concat(customerCode));\n            case 4:\n              response = _context2.sent;\n              this.selectedStorages = response.data;\n              _context2.next = 11;\n              break;\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.error(\"창고 목록을 불러오는 중 오류가 발생했습니다:\", _context2.t0);\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2, this, [[1, 8]]);\n      }));\n      function selectCustomer(_x) {\n        return _selectCustomer.apply(this, arguments);\n      }\n      return selectCustomer;\n    }(),\n    saveStorageAssignments: function () {\n      var _saveStorageAssignments = Object(_home_seull_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        var storageCodes;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              if (this.selectedCustomer) {\n                _context3.next = 3;\n                break;\n              }\n              alert(\"거래처를 선택해주세요.\");\n              return _context3.abrupt(\"return\");\n            case 3:\n              storageCodes = this.selectedStorages.map(function (storage) {\n                return storage.storageCode;\n              });\n              _context3.prev = 4;\n              _context3.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/cstorage/updateStorages/\".concat(this.selectedCustomer), storageCodes);\n            case 7:\n              alert(\"창고 목록이 성공적으로 업데이트되었습니다.\");\n              // 변경 후 상태를 새로고침하거나 업데이트\n              this.fetchCustomersAndStorages();\n              _context3.next = 14;\n              break;\n            case 11:\n              _context3.prev = 11;\n              _context3.t0 = _context3[\"catch\"](4);\n              console.error(\"창고 목록 업데이트 중 오류가 발생했습니다:\", _context3.t0);\n            case 14:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3, this, [[4, 11]]);\n      }));\n      function saveStorageAssignments() {\n        return _saveStorageAssignments.apply(this, arguments);\n      }\n      return saveStorageAssignments;\n    }()\n  },\n  mounted: function mounted() {\n    this.fetchCustomersAndStorages();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQ1N0b3JhZ2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DU3RvcmFnZVBhZ2UudnVlPzhiNjYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaW52ZW50b3J5LXBhZ2VcIj5cbiAgICA8IS0tIOqxsOuemOyymCDrsI8g7LC96rOgIOygleuztCDqtIDrpqwg7JiB7JetIC0tPlxuICAgIDxkaXY+XG4gICAgICA8aDI+6rGw656Y7LKYIOuwjyDssL3qs6Ag6rSA66asPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b21lci1zZWxlY3Rpb25cIj5cbiAgICAgICAgPGgzPuqxsOuemOyymCDrqqnroZ08L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIHYtZm9yPVwiY3VzdG9tZXIgaW4gY3VzdG9tZXJzXCIgOmtleT1cImN1c3RvbWVyLmlkXCIgQGNsaWNrPVwic2VsZWN0Q3VzdG9tZXIoY3VzdG9tZXIpXCI+XG4gICAgICAgICAgICB7eyBjdXN0b21lci5uYW1lIH19XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3RvcmFnZS1tYW5hZ2VtZW50XCI+XG4gICAgICAgIDxoMz7ssL3qs6Ag66qp66GdPC9oMz5cbiAgICAgICAgPGRyYWdnYWJsZSB2LW1vZGVsPVwic2VsZWN0ZWRTdG9yYWdlc1wiIGdyb3VwPVwieyBuYW1lOiAnc3RvcmFnZXMnLCBwdWxsOiAnY2xvbmUnLCBwdXQ6IGZhbHNlIH1cIj5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwic3RvcmFnZSBpbiBzZWxlY3RlZFN0b3JhZ2VzXCIgOmtleT1cInN0b3JhZ2UuaWRcIiBjbGFzcz1cInN0b3JhZ2UtaXRlbVwiPlxuICAgICAgICAgICAge3sgc3RvcmFnZS5uYW1lIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZHJhZ2dhYmxlPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVTdG9yYWdlQXNzaWdubWVudHNcIj7rs4Dqsr3sgqztla0g7KCA7J6lPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRyYWdnYWJsZSBmcm9tICd2dWVkcmFnZ2FibGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgZHJhZ2dhYmxlXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1c3RvbWVyczogW10sXG4gICAgICBzZWxlY3RlZEN1c3RvbWVyOiBudWxsLFxuICAgICAgc2VsZWN0ZWRTdG9yYWdlczogW11cbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG5cbiAgICBhc3luYyBmZXRjaEN1c3RvbWVyc0FuZFN0b3JhZ2VzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g6rGw656Y7LKYIOuqqeuhneydhCDrtojrn6zsmLXri4jri6QuXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NzdG9yYWdlL2xpc3QnKTtcbiAgICAgICAgdGhpcy5jdXN0b21lcnMgPSBjdXN0b21lcnNSZXNwb25zZS5kYXRhLm1hcChpdGVtID0+IGl0ZW0uY3VzdG9tZXJDb2RlKTtcblxuICAgICAgICAvLyDsgqzsmqkg6rCA64ql7ZWcIOuqqOuToCDssL3qs6Drpbwg67aI65+s7Ji164uI64ukLiAo6rCA7KCVOiDrs4Trj4TsnZgg7LC96rOgIOuqqeuhnSBBUEnqsIAg7J6I7J2MKVxuICAgICAgICBjb25zdCBzdG9yYWdlc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3N0b3JhZ2VzJyk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlU3RvcmFnZXMgPSBzdG9yYWdlc1Jlc3BvbnNlLmRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi642w7J207YSw66W8IOu2iOufrOyYpOuKlCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzZWxlY3RDdXN0b21lcihjdXN0b21lckNvZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDdXN0b21lciA9IGN1c3RvbWVyQ29kZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOyEoO2DneuQnCDqsbDrnpjsspjsl5Ag7ZWg64u565CcIOywveqzoCDrqqnroZ3snYQg67aI65+s7Ji164uI64ukLlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jc3RvcmFnZS8ke2N1c3RvbWVyQ29kZX1gKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0b3JhZ2VzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLssL3qs6Ag66qp66Gd7J2EIOu2iOufrOyYpOuKlCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpDpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzYXZlU3RvcmFnZUFzc2lnbm1lbnRzKCkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpIHtcbiAgICAgICAgYWxlcnQoXCLqsbDrnpjsspjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RvcmFnZUNvZGVzID0gdGhpcy5zZWxlY3RlZFN0b3JhZ2VzLm1hcChzdG9yYWdlID0+IHN0b3JhZ2Uuc3RvcmFnZUNvZGUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jc3RvcmFnZS91cGRhdGVTdG9yYWdlcy8ke3RoaXMuc2VsZWN0ZWRDdXN0b21lcn1gLCBzdG9yYWdlQ29kZXMpO1xuICAgICAgICBhbGVydChcIuywveqzoCDrqqnroZ3snbQg7ISx6rO17KCB7Jy866GcIOyXheuNsOydtO2KuOuQmOyXiOyKteuLiOuLpC5cIik7XG4gICAgICAgIC8vIOuzgOqyvSDtm4Qg7IOB7YOc66W8IOyDiOuhnOqzoOy5qO2VmOqxsOuCmCDsl4XrjbDsnbTtirhcbiAgICAgICAgdGhpcy5mZXRjaEN1c3RvbWVyc0FuZFN0b3JhZ2VzKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi7LC96rOgIOuqqeuhnSDsl4XrjbDsnbTtirgg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6Q6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hDdXN0b21lcnNBbmRTdG9yYWdlcygpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jb250YWluZXIge1xubWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmN1c3RvbS1jYXJkIHtcbmJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbmJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuY29sb3I6IHdoaXRlO1xuYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XG59XG5cbi5jYXJkLXRpdGxlIHtcbm1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuYm9yZGVyOiBub25lO1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG59XG5cbi5idG4tc20ge1xucGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG59XG5cbi8qIO2PvCDsmpTshowg7Iqk7YOA7J2866eBICovXG4uZm9ybS1sYWJlbCB7XG5mb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tc2VsZWN0LCAuZm9ybS1jb250cm9sIHtcbmJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi8qIOuniOyngOuniSDrpqzsiqTtirgg7JWE7J207YWc7J2YIO2VmOuLqCDthYzrkZDrpqwg7KCc6rGwICovXG4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLyog67KE7Yq8IOyKpO2DgOydvOungSAqL1xuLmJ0bi1wcmltYXJ5LCAuYnRuLWRhbmdlciB7XG4gIGNvbG9yOiB3aGl0ZTsgLyog67KE7Yq8IOuCtCDquIDsnpDsg4nsnYQg7Z2w7IOJ7Jy866GcIOyEpOygle2VqeuLiOuLpC4gKi9cbiAgYm9yZGVyOiBub25lOyAvKiDthYzrkZDrpqwg7KCc6rGwICovXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAvKiDsg4HtlZgg7KKM7JqwIO2MqOuUqSDsobDsoJUgKi9cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDQ5NDtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYnRuLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XG59XG5cbi8qIOy2lOqwgOyggeycvOuhnCwg67KE7Yq87JeQIOuMgO2VnCDtmLjrsoQg7Zqo6rO866W8IOqwleyhsO2VmOq4sCDsnITtlbQg7IOJ7IOBIOuzgOqyvSDrspTsnITrpbwg7ZmV64yA7ZWp64uI64ukLiAqL1xuLmJ0bjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpOyAvKiDrsoTtirwg7Zi467KEIOyLnCDsg4nsg4HsnYQg7JW96rCEIOyWtOuRoeqyjCDsobDsoJUgKi9cbn1cblxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.container {\\nmax-width: 800px;\\n}\\n.custom-card {\\nborder-radius: 0.5rem;\\n-webkit-box-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n        box-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n}\\n.card-header {\\nbackground-color: #007bff;\\ncolor: white;\\nborder-radius: 0.5rem 0.5rem 0 0;\\n}\\n.card-title {\\nmargin-bottom: 0;\\n}\\n.list-group-item {\\nborder: none;\\nborder-bottom: 1px solid #f0f0f0;\\n}\\n.btn-sm {\\npadding: 0.25rem 0.5rem;\\n}\\n\\n/* 폼 요소 스타일링 */\\n.form-label {\\nfont-weight: bold;\\n}\\n.form-select, .form-control {\\nborder-radius: 0.25rem;\\n}\\n\\n/* 마지막 리스트 아이템의 하단 테두리 제거 */\\n.list-group-item:last-child {\\nborder-bottom: none;\\n}\\n\\n/* 버튼 스타일링 */\\n.btn-primary, .btn-danger {\\n  color: white; /* 버튼 내 글자색을 흰색으로 설정합니다. */\\n  border: none; /* 테두리 제거 */\\n  padding: 0.5rem 1rem; /* 상하 좌우 패딩 조정 */\\n}\\n.btn-primary {\\n  background-color: #0056b3;\\n}\\n.btn-primary:hover {\\n  background-color: #004494;\\n}\\n.btn-danger {\\n  background-color: #dc3545;\\n}\\n.btn-danger:hover {\\n  background-color: #c82333;\\n}\\n\\n/* 추가적으로, 버튼에 대한 호버 효과를 강조하기 위해 색상 변경 범위를 확대합니다. */\\n.btn:hover {\\n  -webkit-filter: brightness(90%);\\n          filter: brightness(90%); /* 버튼 호버 시 색상을 약간 어둡게 조정 */\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/CStoragePage.vue\"],\"names\":[],\"mappings\":\";AA6FA;AACA,iBAAA;CACA;AAEA;AACA,sBAAA;AACA,8CAAA;QAAA,sCAAA;CACA;AAEA;AACA,0BAAA;AACA,aAAA;AACA,iCAAA;CACA;AAEA;AACA,iBAAA;CACA;AAEA;AACA,aAAA;AACA,iCAAA;CACA;AAEA;AACA,wBAAA;CACA;;AAEA,eAAA;AACA;AACA,kBAAA;CACA;AAEA;AACA,uBAAA;CACA;;AAEA,4BAAA;AACA;AACA,oBAAA;CACA;;AAEA,aAAA;AACA;EACA,aAAA,CAAA,2BAAA;EACA,aAAA,CAAA,YAAA;EACA,qBAAA,CAAA,iBAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,0BAAA;CACA;;AAEA,mDAAA;AACA;EACA,gCAAA;UAAA,wBAAA,CAAA,2BAAA;CACA\",\"file\":\"CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"inventory-page\\\">\\n    <!-- 거래처 및 창고 정보 관리 영역 -->\\n    <div>\\n      <h2>거래처 및 창고 관리</h2>\\n      <div class=\\\"customer-selection\\\">\\n        <h3>거래처 목록</h3>\\n        <ul>\\n          <li v-for=\\\"customer in customers\\\" :key=\\\"customer.id\\\" @click=\\\"selectCustomer(customer)\\\">\\n            {{ customer.name }}\\n          </li>\\n        </ul>\\n      </div>\\n\\n      <div class=\\\"storage-management\\\">\\n        <h3>창고 목록</h3>\\n        <draggable v-model=\\\"selectedStorages\\\" group=\\\"{ name: 'storages', pull: 'clone', put: false }\\\">\\n          <div v-for=\\\"storage in selectedStorages\\\" :key=\\\"storage.id\\\" class=\\\"storage-item\\\">\\n            {{ storage.name }}\\n          </div>\\n        </draggable>\\n        <button @click=\\\"saveStorageAssignments\\\">변경사항 저장</button>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n<script>\\nimport draggable from 'vuedraggable';\\nimport axios from 'axios';\\n\\nexport default {\\n  components: {\\n    draggable\\n  },\\n  data() {\\n    return {\\n      customers: [],\\n      selectedCustomer: null,\\n      selectedStorages: []\\n    };\\n  },\\n  methods: {\\n\\n    async fetchCustomersAndStorages() {\\n      try {\\n        // 거래처 목록을 불러옵니다.\\n        const customersResponse = await axios.get('/api/cstorage/list');\\n        this.customers = customersResponse.data.map(item => item.customerCode);\\n\\n        // 사용 가능한 모든 창고를 불러옵니다. (가정: 별도의 창고 목록 API가 있음)\\n        const storagesResponse = await axios.get('/api/storages');\\n        this.availableStorages = storagesResponse.data;\\n      } catch (error) {\\n        console.error(\\\"데이터를 불러오는 중 오류가 발생했습니다:\\\", error);\\n      }\\n    },\\n\\n    async selectCustomer(customerCode) {\\n      this.selectedCustomer = customerCode;\\n      try {\\n        // 선택된 거래처에 할당된 창고 목록을 불러옵니다.\\n        const response = await axios.get(`/api/cstorage/${customerCode}`);\\n        this.selectedStorages = response.data;\\n      } catch (error) {\\n        console.error(\\\"창고 목록을 불러오는 중 오류가 발생했습니다:\\\", error);\\n      }\\n    },\\n\\n    async saveStorageAssignments() {\\n      if (!this.selectedCustomer) {\\n        alert(\\\"거래처를 선택해주세요.\\\");\\n        return;\\n      }\\n      const storageCodes = this.selectedStorages.map(storage => storage.storageCode);\\n      try {\\n        await axios.post(`/api/cstorage/updateStorages/${this.selectedCustomer}`, storageCodes);\\n        alert(\\\"창고 목록이 성공적으로 업데이트되었습니다.\\\");\\n        // 변경 후 상태를 새로고침하거나 업데이트\\n        this.fetchCustomersAndStorages();\\n      } catch (error) {\\n        console.error(\\\"창고 목록 업데이트 중 오류가 발생했습니다:\\\", error);\\n      }\\n    },\\n    \\n  },\\n  mounted() {\\n    this.fetchCustomersAndStorages();\\n  }\\n};\\n</script>\\n\\n<style>\\n.container {\\nmax-width: 800px;\\n}\\n\\n.custom-card {\\nborder-radius: 0.5rem;\\nbox-shadow: 0 4px 6px rgba(0,0,0,0.1);\\n}\\n\\n.card-header {\\nbackground-color: #007bff;\\ncolor: white;\\nborder-radius: 0.5rem 0.5rem 0 0;\\n}\\n\\n.card-title {\\nmargin-bottom: 0;\\n}\\n\\n.list-group-item {\\nborder: none;\\nborder-bottom: 1px solid #f0f0f0;\\n}\\n\\n.btn-sm {\\npadding: 0.25rem 0.5rem;\\n}\\n\\n/* 폼 요소 스타일링 */\\n.form-label {\\nfont-weight: bold;\\n}\\n\\n.form-select, .form-control {\\nborder-radius: 0.25rem;\\n}\\n\\n/* 마지막 리스트 아이템의 하단 테두리 제거 */\\n.list-group-item:last-child {\\nborder-bottom: none;\\n}\\n\\n/* 버튼 스타일링 */\\n.btn-primary, .btn-danger {\\n  color: white; /* 버튼 내 글자색을 흰색으로 설정합니다. */\\n  border: none; /* 테두리 제거 */\\n  padding: 0.5rem 1rem; /* 상하 좌우 패딩 조정 */\\n}\\n\\n.btn-primary {\\n  background-color: #0056b3;\\n}\\n\\n.btn-primary:hover {\\n  background-color: #004494;\\n}\\n\\n.btn-danger {\\n  background-color: #dc3545;\\n}\\n\\n.btn-danger:hover {\\n  background-color: #c82333;\\n}\\n\\n/* 추가적으로, 버튼에 대한 호버 효과를 강조하기 위해 색상 변경 범위를 확대합니다. */\\n.btn:hover {\\n  filter: brightness(90%); /* 버튼 호버 시 색상을 약간 어둡게 조정 */\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0NTdG9yYWdlUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZmVmOTdmNyZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NTdG9yYWdlUGFnZS52dWU/Y2VkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbnRhaW5lciB7XFxubWF4LXdpZHRoOiA4MDBweDtcXG59XFxuLmN1c3RvbS1jYXJkIHtcXG5ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuLmNhcmQtaGVhZGVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbmNvbG9yOiB3aGl0ZTtcXG5ib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcXG59XFxuLmNhcmQtdGl0bGUge1xcbm1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5saXN0LWdyb3VwLWl0ZW0ge1xcbmJvcmRlcjogbm9uZTtcXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG59XFxuLmJ0bi1zbSB7XFxucGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxufVxcblxcbi8qIO2PvCDsmpTshowg7Iqk7YOA7J2866eBICovXFxuLmZvcm0tbGFiZWwge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZm9ybS1zZWxlY3QsIC5mb3JtLWNvbnRyb2wge1xcbmJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi8qIOuniOyngOuniSDrpqzsiqTtirgg7JWE7J207YWc7J2YIO2VmOuLqCDthYzrkZDrpqwg7KCc6rGwICovXFxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcXG5ib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4vKiDrsoTtirwg7Iqk7YOA7J2866eBICovXFxuLmJ0bi1wcmltYXJ5LCAuYnRuLWRhbmdlciB7XFxuICBjb2xvcjogd2hpdGU7IC8qIOuyhO2KvCDrgrQg6riA7J6Q7IOJ7J2EIO2dsOyDieycvOuhnCDshKTsoJXtlanri4jri6QuICovXFxuICBib3JkZXI6IG5vbmU7IC8qIO2FjOuRkOumrCDsoJzqsbAgKi9cXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyAvKiDsg4HtlZgg7KKM7JqwIO2MqOuUqSDsobDsoJUgKi9cXG59XFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NDk0O1xcbn1cXG4uYnRuLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xcbn1cXG4uYnRuLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xcbn1cXG5cXG4vKiDstpTqsIDsoIHsnLzroZwsIOuyhO2KvOyXkCDrjIDtlZwg7Zi467KEIO2aqOqzvOulvCDqsJXsobDtlZjquLAg7JyE7ZW0IOyDieyDgSDrs4Dqsr0g67KU7JyE66W8IO2ZleuMgO2VqeuLiOuLpC4gKi9cXG4uYnRuOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpOyAvKiDrsoTtirwg7Zi467KEIOyLnCDsg4nsg4HsnYQg7JW96rCEIOyWtOuRoeqyjCDsobDsoJUgKi9cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3NldWxsL2ZpbmFsLzR0ZWFtX2ZpbmFsX01haW5WdWUvdnVlLWxpZ2h0LWJvb3RzdHJhcC1kYXNoYm9hcmQtbWFzdGVyL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0NTdG9yYWdlUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZGQTtBQUNBLGlCQUFBO0NBQ0E7QUFFQTtBQUNBLHNCQUFBO0FBQ0EsOENBQUE7UUFBQSxzQ0FBQTtDQUNBO0FBRUE7QUFDQSwwQkFBQTtBQUNBLGFBQUE7QUFDQSxpQ0FBQTtDQUNBO0FBRUE7QUFDQSxpQkFBQTtDQUNBO0FBRUE7QUFDQSxhQUFBO0FBQ0EsaUNBQUE7Q0FDQTtBQUVBO0FBQ0Esd0JBQUE7Q0FDQTs7QUFFQSxlQUFBO0FBQ0E7QUFDQSxrQkFBQTtDQUNBO0FBRUE7QUFDQSx1QkFBQTtDQUNBOztBQUVBLDRCQUFBO0FBQ0E7QUFDQSxvQkFBQTtDQUNBOztBQUVBLGFBQUE7QUFDQTtFQUNBLGFBQUEsQ0FBQSwyQkFBQTtFQUNBLGFBQUEsQ0FBQSxZQUFBO0VBQ0EscUJBQUEsQ0FBQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSwwQkFBQTtDQUNBOztBQUVBLG1EQUFBO0FBQ0E7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBLENBQUEsMkJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ1N0b3JhZ2VQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRmZWY5N2Y3Jmxhbmc9Y3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1wYWdlXFxcIj5cXG4gICAgPCEtLSDqsbDrnpjsspgg67CPIOywveqzoCDsoJXrs7Qg6rSA66asIOyYgeyXrSAtLT5cXG4gICAgPGRpdj5cXG4gICAgICA8aDI+6rGw656Y7LKYIOuwjyDssL3qs6Ag6rSA66asPC9oMj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjdXN0b21lci1zZWxlY3Rpb25cXFwiPlxcbiAgICAgICAgPGgzPuqxsOuemOyymCDrqqnroZ08L2gzPlxcbiAgICAgICAgPHVsPlxcbiAgICAgICAgICA8bGkgdi1mb3I9XFxcImN1c3RvbWVyIGluIGN1c3RvbWVyc1xcXCIgOmtleT1cXFwiY3VzdG9tZXIuaWRcXFwiIEBjbGljaz1cXFwic2VsZWN0Q3VzdG9tZXIoY3VzdG9tZXIpXFxcIj5cXG4gICAgICAgICAgICB7eyBjdXN0b21lci5uYW1lIH19XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN0b3JhZ2UtbWFuYWdlbWVudFxcXCI+XFxuICAgICAgICA8aDM+7LC96rOgIOuqqeuhnTwvaDM+XFxuICAgICAgICA8ZHJhZ2dhYmxlIHYtbW9kZWw9XFxcInNlbGVjdGVkU3RvcmFnZXNcXFwiIGdyb3VwPVxcXCJ7IG5hbWU6ICdzdG9yYWdlcycsIHB1bGw6ICdjbG9uZScsIHB1dDogZmFsc2UgfVxcXCI+XFxuICAgICAgICAgIDxkaXYgdi1mb3I9XFxcInN0b3JhZ2UgaW4gc2VsZWN0ZWRTdG9yYWdlc1xcXCIgOmtleT1cXFwic3RvcmFnZS5pZFxcXCIgY2xhc3M9XFxcInN0b3JhZ2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAge3sgc3RvcmFnZS5uYW1lIH19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kcmFnZ2FibGU+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwic2F2ZVN0b3JhZ2VBc3NpZ25tZW50c1xcXCI+67OA6rK97IKs7ZWtIOyggOyepTwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSc7XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7XFxuICAgIGRyYWdnYWJsZVxcbiAgfSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgY3VzdG9tZXJzOiBbXSxcXG4gICAgICBzZWxlY3RlZEN1c3RvbWVyOiBudWxsLFxcbiAgICAgIHNlbGVjdGVkU3RvcmFnZXM6IFtdXFxuICAgIH07XFxuICB9LFxcbiAgbWV0aG9kczoge1xcblxcbiAgICBhc3luYyBmZXRjaEN1c3RvbWVyc0FuZFN0b3JhZ2VzKCkge1xcbiAgICAgIHRyeSB7XFxuICAgICAgICAvLyDqsbDrnpjsspgg66qp66Gd7J2EIOu2iOufrOyYteuLiOuLpC5cXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NzdG9yYWdlL2xpc3QnKTtcXG4gICAgICAgIHRoaXMuY3VzdG9tZXJzID0gY3VzdG9tZXJzUmVzcG9uc2UuZGF0YS5tYXAoaXRlbSA9PiBpdGVtLmN1c3RvbWVyQ29kZSk7XFxuXFxuICAgICAgICAvLyDsgqzsmqkg6rCA64ql7ZWcIOuqqOuToCDssL3qs6Drpbwg67aI65+s7Ji164uI64ukLiAo6rCA7KCVOiDrs4Trj4TsnZgg7LC96rOgIOuqqeuhnSBBUEnqsIAg7J6I7J2MKVxcbiAgICAgICAgY29uc3Qgc3RvcmFnZXNSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zdG9yYWdlcycpO1xcbiAgICAgICAgdGhpcy5hdmFpbGFibGVTdG9yYWdlcyA9IHN0b3JhZ2VzUmVzcG9uc2UuZGF0YTtcXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xcbiAgICAgICAgY29uc29sZS5lcnJvcihcXFwi642w7J207YSw66W8IOu2iOufrOyYpOuKlCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpDpcXFwiLCBlcnJvcik7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBhc3luYyBzZWxlY3RDdXN0b21lcihjdXN0b21lckNvZGUpIHtcXG4gICAgICB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIgPSBjdXN0b21lckNvZGU7XFxuICAgICAgdHJ5IHtcXG4gICAgICAgIC8vIOyEoO2DneuQnCDqsbDrnpjsspjsl5Ag7ZWg64u565CcIOywveqzoCDrqqnroZ3snYQg67aI65+s7Ji164uI64ukLlxcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY3N0b3JhZ2UvJHtjdXN0b21lckNvZGV9YCk7XFxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RvcmFnZXMgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XFxuICAgICAgICBjb25zb2xlLmVycm9yKFxcXCLssL3qs6Ag66qp66Gd7J2EIOu2iOufrOyYpOuKlCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpDpcXFwiLCBlcnJvcik7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBhc3luYyBzYXZlU3RvcmFnZUFzc2lnbm1lbnRzKCkge1xcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZEN1c3RvbWVyKSB7XFxuICAgICAgICBhbGVydChcXFwi6rGw656Y7LKY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cXFwiKTtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuICAgICAgY29uc3Qgc3RvcmFnZUNvZGVzID0gdGhpcy5zZWxlY3RlZFN0b3JhZ2VzLm1hcChzdG9yYWdlID0+IHN0b3JhZ2Uuc3RvcmFnZUNvZGUpO1xcbiAgICAgIHRyeSB7XFxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2NzdG9yYWdlL3VwZGF0ZVN0b3JhZ2VzLyR7dGhpcy5zZWxlY3RlZEN1c3RvbWVyfWAsIHN0b3JhZ2VDb2Rlcyk7XFxuICAgICAgICBhbGVydChcXFwi7LC96rOgIOuqqeuhneydtCDshLHqs7XsoIHsnLzroZwg7JeF642w7J207Yq465CY7JeI7Iq164uI64ukLlxcXCIpO1xcbiAgICAgICAgLy8g67OA6rK9IO2bhCDsg4Htg5zrpbwg7IOI66Gc6rOg7Lmo7ZWY6rGw64KYIOyXheuNsOydtO2KuFxcbiAgICAgICAgdGhpcy5mZXRjaEN1c3RvbWVyc0FuZFN0b3JhZ2VzKCk7XFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXFxcIuywveqzoCDrqqnroZ0g7JeF642w7J207Yq4IOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukOlxcXCIsIGVycm9yKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIFxcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMuZmV0Y2hDdXN0b21lcnNBbmRTdG9yYWdlcygpO1xcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5jb250YWluZXIge1xcbm1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5jdXN0b20tY2FyZCB7XFxuYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbmJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG5jb2xvcjogd2hpdGU7XFxuYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG5tYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubGlzdC1ncm91cC1pdGVtIHtcXG5ib3JkZXI6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxufVxcblxcbi5idG4tc20ge1xcbnBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbn1cXG5cXG4vKiDtj7wg7JqU7IaMIOyKpO2DgOydvOungSAqL1xcbi5mb3JtLWxhYmVsIHtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tc2VsZWN0LCAuZm9ybS1jb250cm9sIHtcXG5ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4vKiDrp4jsp4Drp4kg66as7Iqk7Yq4IOyVhOydtO2FnOydmCDtlZjri6gg7YWM65GQ66asIOygnOqxsCAqL1xcbi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XFxuYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLyog67KE7Yq8IOyKpO2DgOydvOungSAqL1xcbi5idG4tcHJpbWFyeSwgLmJ0bi1kYW5nZXIge1xcbiAgY29sb3I6IHdoaXRlOyAvKiDrsoTtirwg64K0IOq4gOyekOyDieydhCDtnbDsg4nsnLzroZwg7ISk7KCV7ZWp64uI64ukLiAqL1xcbiAgYm9yZGVyOiBub25lOyAvKiDthYzrkZDrpqwg7KCc6rGwICovXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgLyog7IOB7ZWYIOyijOyasCDtjKjrlKkg7KGw7KCVICovXFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDQ5NDtcXG59XFxuXFxuLmJ0bi1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcXG59XFxuXFxuLmJ0bi1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcXG59XFxuXFxuLyog7LaU6rCA7KCB7Jy866GcLCDrsoTtirzsl5Ag64yA7ZWcIO2YuOuyhCDtmqjqs7zrpbwg6rCV7KGw7ZWY6riwIOychO2VtCDsg4nsg4Eg67OA6rK9IOuylOychOulvCDtmZXrjIDtlanri4jri6QuICovXFxuLmJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTsgLyog67KE7Yq8IO2YuOuyhCDsi5wg7IOJ7IOB7J2EIOyVveqwhCDslrTrkaHqsowg7KGw7KCVICovXFxufVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&lang=css\n");

/***/ })

})