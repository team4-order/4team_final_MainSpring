webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Overview1.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Overview1.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\n/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var src_components_Cards_ChartCard_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Cards/ChartCard.vue */ \"./src/components/Cards/ChartCard.vue\");\n/* harmony import */ var src_components_Cards_StatsCard_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Cards/StatsCard.vue */ \"./src/components/Cards/StatsCard.vue\");\n/* harmony import */ var src_components_Table_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Table.vue */ \"./src/components/Table.vue\");\n/* harmony import */ var _components_Cards_Card_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cards/Card.vue */ \"./src/components/Cards/Card.vue\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    LTable: src_components_Table_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ChartCard: src_components_Cards_ChartCard_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    StatsCard: src_components_Cards_StatsCard_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    Card: _components_Cards_Card_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  },\n  data: function data() {\n    return {\n      isDataLoaded: false,\n      weeklyReadyOrders: 0,\n      weeklydeliveryOrders: 0,\n      weeklyCompletedOrders: 0,\n      weeklySales: 0,\n      editTooltip: 'Edit Task',\n      deleteTooltip: 'Remove',\n      pieChart: {\n        data: {\n          labels: ['40%', '20%', '40%'],\n          series: [40, 20, 40]\n        }\n      },\n      lineChart: {\n        data: {\n          labels: [],\n          series: []\n        },\n        options: {\n          scales: {\n            yAxes: [{\n              scaleLabel: {\n                display: true,\n                labelString: \"단위: 만 원\",\n                fontStyle: 'bold'\n              },\n              ticks: {\n                callback: function callback(value, index, values) {\n                  return value / 1000; // Convert the value to 'thousands' for display\n                }\n              }\n            }]\n          },\n          layout: {\n            padding: {\n              left: 20,\n              // Increase left padding to ensure y-axis labels are visible\n              right: 20 // Adjust right padding if necessary\n            }\n          },\n          showArea: false,\n          height: '245px',\n          axisX: {\n            showGrid: false\n          },\n          lineSmooth: true,\n          showLine: true,\n          showPoint: true,\n          fullWidth: true,\n          chartPadding: {\n            right: 50,\n            left: 10 // Make sure to adjust this value to prevent y-axis label clipping\n          }\n        },\n        responsiveOptions: [['screen and (max-width: 640px)', {\n          axisX: {\n            labelInterpolationFnc: function labelInterpolationFnc(value) {\n              return value[0];\n            }\n          }\n        }]]\n      },\n      barChart: {\n        data: {\n          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895], [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]]\n        },\n        options: {\n          seriesBarDistance: 10,\n          axisX: {\n            showGrid: false\n          },\n          height: '245px'\n        },\n        responsiveOptions: [['screen and (max-width: 640px)', {\n          seriesBarDistance: 5,\n          axisX: {\n            labelInterpolationFnc: function labelInterpolationFnc(value) {\n              return value[0];\n            }\n          }\n        }]]\n      },\n      tableData: {\n        columns: ['고객명', '정산 요청 금액'],\n        data: []\n      }\n    };\n  },\n  mounted: function mounted() {\n    this.fetchOrderList();\n    this.fetchAdjustmentReqList();\n    this.fetchMonthlySalesData();\n    //    this.updateSalesChart(months, sales)\n  },\n  methods: {\n    fetchMonthlySalesData: function () {\n      var _fetchMonthlySalesData = Object(_home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response, months, sales;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('http://localhost:8080/api/orders/chart1/BUS002');\n            case 3:\n              response = _context.sent;\n              months = response.data.map(function (item) {\n                return \"\".concat(item.year, \"-\").concat(item.month.toString().padStart(2, '0'));\n              });\n              sales = response.data.map(function (item) {\n                return item.price;\n              });\n              this.updateSalesChart(months, sales);\n              _context.next = 12;\n              break;\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(\"Failed to fetch monthly sales data:\", _context.t0);\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this, [[0, 9]]);\n      }));\n      function fetchMonthlySalesData() {\n        return _fetchMonthlySalesData.apply(this, arguments);\n      }\n      return fetchMonthlySalesData;\n    }(),\n    updateSalesChart: function updateSalesChart(months, sales) {\n      var minPrice = Math.min.apply(Math, Object(_home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sales));\n      var maxPrice = Math.max.apply(Math, Object(_home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sales));\n\n      // Scale the max price a bit higher for better visualization\n      var maxChartValue = maxPrice + (maxPrice - minPrice) * 0.1;\n\n      // Update the chart data\n      this.lineChart.data.labels = months;\n      this.lineChart.data.series = [sales];\n      this.isDataLoaded = true;\n      // Ensure the chart updates or redraws if necessary\n      if (this.$refs.salesChart && this.$refs.salesChart.update) {\n        this.$refs.salesChart.update(); // Call update if it is a function provided by the chart lib\n      }\n\n      // Update the chart options for y-axis\n      this.lineChart.options.axisY = {\n        low: minPrice,\n        high: maxChartValue,\n        onlyInteger: true,\n        // if you want to display only integer values\n        scaleMinSpace: 20 // minimum space between scale steps\n      };\n      this.isDataLoaded = true; // Set this once data is ready\n      this.$refs.salesChart.update();\n    },\n    fetchOrderList: function fetchOrderList() {\n      var _this = this;\n      var businessId = this.$route.params.businessId;\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8080/api/orders/id/\".concat(businessId)).then(function (response) {\n        var data = response.data;\n        var startOfWeek = new Date();\n        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + (startOfWeek.getDay() === 0 ? -6 : 1));\n        startOfWeek.setHours(0, 0, 0, 0);\n        var totalSales = 0;\n        var completedOrders = 0;\n        var deliveryOrders = 0;\n        var readyOrders = 0;\n        data.forEach(function (order) {\n          var orderDate = new Date(order.orderDate);\n          if (orderDate >= startOfWeek) {\n            switch (order.orderStatus) {\n              case '배송 완료':\n                completedOrders++;\n                totalSales += order.orderPrice; // 주문 상태가 '배송 완료'인 경우에 매출액을 더합니다.\n                break;\n              case '배송 중':\n                deliveryOrders++;\n                break;\n              case '출고 준비 중':\n                readyOrders++;\n                break;\n            }\n          }\n        });\n        _this.weeklyCompletedOrders = completedOrders;\n        _this.weeklyReadyOrders = readyOrders;\n        _this.weeklydeliveryOrders = deliveryOrders;\n        _this.weeklySales = totalSales;\n      }).catch(function (error) {\n        console.error(\"Failed to fetch orders:\", error);\n      });\n    },\n    fetchAdjustmentReqList: function fetchAdjustmentReqList() {\n      var _this2 = this;\n      var businessId = this.$route.params.businessId;\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8080/api/orders/req/\".concat(businessId)).then(function (response) {\n        _this2.tableData.data = response.data.map(function (item) {\n          return {\n            '고객명': item.contactName,\n            '고객코드': item.contactCode\n          };\n        });\n      }).catch(function (error) {\n        console.error(\"Failed to fetch adjustment requests:\", error);\n      });\n    } // continue with other methods...\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL092ZXJ2aWV3MS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL092ZXJ2aWV3MS52dWU/ZGFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxoNT7so7zqsIQg642w7J207YSwPC9oNT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8c3RhdHMtY2FyZD5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJpY29uLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5jLWljb24gbmMtbW9uZXktY29pbnMgdGV4dC1zdWNjZXNzXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1jYXRlZ29yeVwiPuunpOy2nDwvcD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd2Vla2x5U2FsZXMgfX0g7JuQPC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXItb1wiPjwvaT4gICAgIGZvciBhIHdlZWsgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3N0YXRzLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTMgY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxzdGF0cy1jYXJkPlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cImljb24td2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmMtaWNvbiBuYy1jYXJ0LXNpbXBsZSB0ZXh0LXdhcm5pbmdcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNhdGVnb3J5XCI+7Lac6rOgIOykgOu5hCDspJE8L3A+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IHdlZWtseVJlYWR5T3JkZXJzIH19IOqxtDwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCI+PC9pPlVwZGF0ZWQgbm93XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3RhdHMtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8c3RhdHMtY2FyZD5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJpY29uLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmMtaWNvbiBuYy12ZWN0b3IgdGV4dC1kYW5nZXJcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNhdGVnb3J5XCI+67Cw7IahIOykkTwvcD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd2Vla2x5ZGVsaXZlcnlPcmRlcnMgfX0g6rG0PC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5MYXN0IGRheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3RhdHMtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMyBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHN0YXRzLWNhcmQ+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwiaWNvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuYy1pY29uIG5jLWZhdm91cml0ZS0yOCB0ZXh0LXByaW1hcnlcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNhdGVnb3J5XCI+67Cw7IahIOyZhOujjDwvcD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd2Vla2x5Q29tcGxldGVkT3JkZXJzIH19IOqxtDwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIj48L2k+VXBkYXRlZCBub3dcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3N0YXRzLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCIgdi1pZj1cImlzRGF0YUxvYWRlZFwiPlxuICAgICAgICAgIDxjaGFydC1jYXJkIHJlZj1cInNhbGVzQ2hhcnRcIiA6Y2hhcnQtZGF0YT1cImxpbmVDaGFydC5kYXRhXCIgOmNoYXJ0LW9wdGlvbnM9XCJsaW5lQ2hhcnQub3B0aW9uc1wiIFxuICAgICAgICAgIDpyZXNwb25zaXZlLW9wdGlvbnM9XCJsaW5lQ2hhcnQucmVzcG9uc2l2ZU9wdGlvbnNcIj5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPuunpOy2nCDtmITtmak8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtY2F0ZWdvcnlcIj5wZXJmb3JtYW5jZTwvcD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgdGV4dC1pbmZvXCI+PC9pPiDstJ0g66ek7LacXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaGlzdG9yeVwiPjwvaT4gVXBkYXRlZCAzIG1pbnV0ZXMgYWdvXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2NoYXJ0LWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgIDxjYXJkPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGl0bGVcIj7soJXsgrAg7JqU7LKtIOumrOyKpO2KuDwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnlcIj48L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPGwtdGFibGUgOmRhdGE9XCJ0YWJsZURhdGEuZGF0YVwiIDpjb2x1bW5zPVwidGFibGVEYXRhLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDwvbC10YWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWhpc3RvcnlcIj48L2k+IFVwZGF0ZWQgMyBtaW51dGVzIGFnb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvY2FyZD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxjaGFydC1jYXJkIDpjaGFydC1kYXRhPVwiYmFyQ2hhcnQuZGF0YVwiIDpjaGFydC1vcHRpb25zPVwiYmFyQ2hhcnQub3B0aW9uc1wiXG4gICAgICAgICAgICA6Y2hhcnQtcmVzcG9uc2l2ZS1vcHRpb25zPVwiYmFyQ2hhcnQucmVzcG9uc2l2ZU9wdGlvbnNcIiBjaGFydC10eXBlPVwiQmFyXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+MjAxNCBTYWxlczwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1jYXRlZ29yeVwiPkFsbCBwcm9kdWN0cyBpbmNsdWRpbmcgVGF4ZXM8L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIHRleHQtaW5mb1wiPjwvaT4gVGVzbGEgTW9kZWwgU1xuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIHRleHQtZGFuZ2VyXCI+PC9pPiBCTVcgNSBTZXJpZXNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4gRGF0YSBpbmZvcm1hdGlvbiBjZXJ0aWZpZWRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvY2hhcnQtY2FyZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPGNoYXJ0LWNhcmQgOmNoYXJ0LWRhdGE9XCJwaWVDaGFydC5kYXRhXCIgY2hhcnQtdHlwZT1cIlBpZVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPkVtYWlsIFN0YXRpc3RpY3M8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtY2F0ZWdvcnlcIj5MYXN0IENhbXBhaWduIFBlcmZvcm1hbmNlPC9wPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSB0ZXh0LWluZm9cIj48L2k+IE9wZW5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSB0ZXh0LWRhbmdlclwiPjwvaT4gQm91bmNlXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgdGV4dC13YXJuaW5nXCI+PC9pPiBVbnN1YnNjcmliZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+IENhbXBhaWduIHNlbnQgMiBkYXlzIGFnb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9jaGFydC1jYXJkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDaGFydENhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZHMvQ2hhcnRDYXJkLnZ1ZSdcbmltcG9ydCBTdGF0c0NhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZHMvU3RhdHNDYXJkLnZ1ZSdcbmltcG9ydCBMVGFibGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvVGFibGUudnVlJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcy9DYXJkLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTFRhYmxlLFxuICAgIENoYXJ0Q2FyZCxcbiAgICBTdGF0c0NhcmQsXG4gICAgQ2FyZFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0RhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgd2Vla2x5UmVhZHlPcmRlcnM6IDAsXG4gICAgICB3ZWVrbHlkZWxpdmVyeU9yZGVyczogMCxcbiAgICAgIHdlZWtseUNvbXBsZXRlZE9yZGVyczogMCxcbiAgICAgIHdlZWtseVNhbGVzOiAwLFxuICAgICAgZWRpdFRvb2x0aXA6ICdFZGl0IFRhc2snLFxuICAgICAgZGVsZXRlVG9vbHRpcDogJ1JlbW92ZScsXG4gICAgICBwaWVDaGFydDoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGFiZWxzOiBbJzQwJScsICcyMCUnLCAnNDAlJ10sXG4gICAgICAgICAgc2VyaWVzOiBbNDAsIDIwLCA0MF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVDaGFydDoge1xuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbXSxcbiAgICBzZXJpZXM6IFtdXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBzY2FsZXM6IHtcbiAgICAgIHlBeGVzOiBbe1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCLri6jsnIQ6IOunjCDsm5BcIixcbiAgICAgICAgICBmb250U3R5bGU6ICdib2xkJ1xuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIC8gMTAwMDsgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvICd0aG91c2FuZHMnIGZvciBkaXNwbGF5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgbGF5b3V0OiB7XG4gICAgICBwYWRkaW5nOiB7XG4gICAgICAgIGxlZnQ6IDIwLCAgLy8gSW5jcmVhc2UgbGVmdCBwYWRkaW5nIHRvIGVuc3VyZSB5LWF4aXMgbGFiZWxzIGFyZSB2aXNpYmxlXG4gICAgICAgIHJpZ2h0OiAyMCAgLy8gQWRqdXN0IHJpZ2h0IHBhZGRpbmcgaWYgbmVjZXNzYXJ5XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93QXJlYTogZmFsc2UsXG4gICAgaGVpZ2h0OiAnMjQ1cHgnLFxuICAgIGF4aXNYOiB7XG4gICAgICBzaG93R3JpZDogZmFsc2VcbiAgICB9LFxuICAgIGxpbmVTbW9vdGg6IHRydWUsXG4gICAgc2hvd0xpbmU6IHRydWUsXG4gICAgc2hvd1BvaW50OiB0cnVlLFxuICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICBjaGFydFBhZGRpbmc6IHtcbiAgICAgIHJpZ2h0OiA1MCxcbiAgICAgIGxlZnQ6IDEwICAvLyBNYWtlIHN1cmUgdG8gYWRqdXN0IHRoaXMgdmFsdWUgdG8gcHJldmVudCB5LWF4aXMgbGFiZWwgY2xpcHBpbmdcbiAgICB9XG4gIH0sXG4gIHJlc3BvbnNpdmVPcHRpb25zOiBbXG4gICAgWydzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsIHtcbiAgICAgIGF4aXNYOiB7XG4gICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XVxuICBdXG59LFxuICAgICAgYmFyQ2hhcnQ6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxhYmVsczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgWzU0MiwgNDQzLCAzMjAsIDc4MCwgNTUzLCA0NTMsIDMyNiwgNDM0LCA1NjgsIDYxMCwgNzU2LCA4OTVdLFxuICAgICAgICAgICAgWzQxMiwgMjQzLCAyODAsIDU4MCwgNDUzLCAzNTMsIDMwMCwgMzY0LCAzNjgsIDQxMCwgNjM2LCA2OTVdXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgc2VyaWVzQmFyRGlzdGFuY2U6IDEwLFxuICAgICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgICBzaG93R3JpZDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlaWdodDogJzI0NXB4J1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlT3B0aW9uczogW1xuICAgICAgICAgIFsnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknLCB7XG4gICAgICAgICAgICBzZXJpZXNCYXJEaXN0YW5jZTogNSxcbiAgICAgICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVswXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHRhYmxlRGF0YToge1xuICAgICAgICBjb2x1bW5zOiBbJ+qzoOqwneuqhScsICfsoJXsgrAg7JqU7LKtIOq4iOyVoSddLFxuICAgICAgICBkYXRhOiBbXSBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaE9yZGVyTGlzdCgpO1xuICAgIHRoaXMuZmV0Y2hBZGp1c3RtZW50UmVxTGlzdCgpO1xuICAgIHRoaXMuZmV0Y2hNb250aGx5U2FsZXNEYXRhKCk7XG4vLyAgICB0aGlzLnVwZGF0ZVNhbGVzQ2hhcnQobW9udGhzLCBzYWxlcylcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGZldGNoTW9udGhseVNhbGVzRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9vcmRlcnMvY2hhcnQxL0JVUzAwMicpO1xuICAgIGNvbnN0IG1vbnRocyA9IHJlc3BvbnNlLmRhdGEubWFwKGl0ZW0gPT4gYCR7aXRlbS55ZWFyfS0ke2l0ZW0ubW9udGgudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWApO1xuICAgIGNvbnN0IHNhbGVzID0gcmVzcG9uc2UuZGF0YS5tYXAoaXRlbSA9PiBpdGVtLnByaWNlKTtcbiAgICB0aGlzLnVwZGF0ZVNhbGVzQ2hhcnQobW9udGhzLCBzYWxlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtb250aGx5IHNhbGVzIGRhdGE6XCIsIGVycm9yKTtcbiAgfVxufSxcbnVwZGF0ZVNhbGVzQ2hhcnQobW9udGhzLCBzYWxlcykge1xuICAgIGNvbnN0IG1pblByaWNlID0gTWF0aC5taW4oLi4uc2FsZXMpO1xuICAgIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uc2FsZXMpO1xuXG4gICAgLy8gU2NhbGUgdGhlIG1heCBwcmljZSBhIGJpdCBoaWdoZXIgZm9yIGJldHRlciB2aXN1YWxpemF0aW9uXG4gICAgY29uc3QgbWF4Q2hhcnRWYWx1ZSA9IG1heFByaWNlICsgKG1heFByaWNlIC0gbWluUHJpY2UpICogMC4xO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCBkYXRhXG4gICAgdGhpcy5saW5lQ2hhcnQuZGF0YS5sYWJlbHMgPSBtb250aHM7XG4gICAgdGhpcy5saW5lQ2hhcnQuZGF0YS5zZXJpZXMgPSBbc2FsZXNdO1xuICAgIHRoaXMuaXNEYXRhTG9hZGVkID0gdHJ1ZTtcbiAgLy8gRW5zdXJlIHRoZSBjaGFydCB1cGRhdGVzIG9yIHJlZHJhd3MgaWYgbmVjZXNzYXJ5XG4gIGlmICh0aGlzLiRyZWZzLnNhbGVzQ2hhcnQgJiYgdGhpcy4kcmVmcy5zYWxlc0NoYXJ0LnVwZGF0ZSkge1xuICAgIHRoaXMuJHJlZnMuc2FsZXNDaGFydC51cGRhdGUoKTsgIC8vIENhbGwgdXBkYXRlIGlmIGl0IGlzIGEgZnVuY3Rpb24gcHJvdmlkZWQgYnkgdGhlIGNoYXJ0IGxpYlxuICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IG9wdGlvbnMgZm9yIHktYXhpc1xuICAgIHRoaXMubGluZUNoYXJ0Lm9wdGlvbnMuYXhpc1kgPSB7XG4gICAgICAgIGxvdzogbWluUHJpY2UsXG4gICAgICAgIGhpZ2g6IG1heENoYXJ0VmFsdWUsXG4gICAgICAgIG9ubHlJbnRlZ2VyOiB0cnVlLCAvLyBpZiB5b3Ugd2FudCB0byBkaXNwbGF5IG9ubHkgaW50ZWdlciB2YWx1ZXNcbiAgICAgICAgc2NhbGVNaW5TcGFjZTogMjAgLy8gbWluaW11bSBzcGFjZSBiZXR3ZWVuIHNjYWxlIHN0ZXBzXG4gICAgfTtcblxuICAgIHRoaXMuaXNEYXRhTG9hZGVkID0gdHJ1ZTsgIC8vIFNldCB0aGlzIG9uY2UgZGF0YSBpcyByZWFkeVxuICB0aGlzLiRyZWZzLnNhbGVzQ2hhcnQudXBkYXRlKCk7XG59LFxuICAgIGZldGNoT3JkZXJMaXN0KCkge1xuICBjb25zdCBidXNpbmVzc0lkID0gdGhpcy4kcm91dGUucGFyYW1zLmJ1c2luZXNzSWQ7XG4gIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9vcmRlcnMvaWQvJHtidXNpbmVzc0lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKCk7XG4gICAgICBzdGFydE9mV2Vlay5zZXREYXRlKHN0YXJ0T2ZXZWVrLmdldERhdGUoKSAtIHN0YXJ0T2ZXZWVrLmdldERheSgpICsgKHN0YXJ0T2ZXZWVrLmdldERheSgpID09PSAwID8gLTYgOiAxKSk7XG4gICAgICBzdGFydE9mV2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgbGV0IHRvdGFsU2FsZXMgPSAwO1xuICAgICAgbGV0IGNvbXBsZXRlZE9yZGVycyA9IDA7XG4gICAgICBsZXQgZGVsaXZlcnlPcmRlcnMgPSAwO1xuICAgICAgbGV0IHJlYWR5T3JkZXJzID0gMDtcblxuICAgICAgZGF0YS5mb3JFYWNoKG9yZGVyID0+IHtcbiAgICAgICAgY29uc3Qgb3JkZXJEYXRlID0gbmV3IERhdGUob3JkZXIub3JkZXJEYXRlKTtcbiAgICAgICAgaWYgKG9yZGVyRGF0ZSA+PSBzdGFydE9mV2Vlaykge1xuICAgICAgICAgIHN3aXRjaCAob3JkZXIub3JkZXJTdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ+uwsOyGoSDsmYTro4wnOlxuICAgICAgICAgICAgICBjb21wbGV0ZWRPcmRlcnMrKztcbiAgICAgICAgICAgICAgdG90YWxTYWxlcyArPSBvcmRlci5vcmRlclByaWNlOyAvLyDso7zrrLgg7IOB7YOc6rCAICfrsLDshqEg7JmE66OMJ+yduCDqsr3smrDsl5Ag66ek7Lac7JWh7J2EIOuNlO2VqeuLiOuLpC5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICfrsLDshqEg7KSRJzpcbiAgICAgICAgICAgICAgZGVsaXZlcnlPcmRlcnMrKztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICfstpzqs6Ag7KSA67mEIOykkSc6XG4gICAgICAgICAgICAgIHJlYWR5T3JkZXJzKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2Vla2x5Q29tcGxldGVkT3JkZXJzID0gY29tcGxldGVkT3JkZXJzO1xuICAgICAgdGhpcy53ZWVrbHlSZWFkeU9yZGVycyA9IHJlYWR5T3JkZXJzO1xuICAgICAgdGhpcy53ZWVrbHlkZWxpdmVyeU9yZGVycyA9IGRlbGl2ZXJ5T3JkZXJzO1xuICAgICAgdGhpcy53ZWVrbHlTYWxlcyA9IHRvdGFsU2FsZXM7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBvcmRlcnM6XCIsIGVycm9yKTtcbiAgICB9KTtcbn0sXG4gICAgZmV0Y2hBZGp1c3RtZW50UmVxTGlzdCgpIHtcbiAgICAgIGNvbnN0IGJ1c2luZXNzSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuYnVzaW5lc3NJZDtcbiAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9vcmRlcnMvcmVxLyR7YnVzaW5lc3NJZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy50YWJsZURhdGEuZGF0YSA9IHJlc3BvbnNlLmRhdGEubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICfqs6DqsJ3rqoUnOiBpdGVtLmNvbnRhY3ROYW1lLFxuICAgICAgICAgICAgJ+qzoOqwney9lOuTnCc6IGl0ZW0uY29udGFjdENvZGVcbiAgICAgICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhZGp1c3RtZW50IHJlcXVlc3RzOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG4gICAgLy8gY29udGludWUgd2l0aCBvdGhlciBtZXRob2RzLi4uXG4gIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlPjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Overview1.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcGFkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXBhZC5qcz8yZTA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KSB7XG4gIHZhciBTID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICB2YXIgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGg7XG4gIHZhciBmaWxsU3RyID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpO1xuICB2YXIgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYgKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJykgcmV0dXJuIFM7XG4gIHZhciBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoO1xuICB2YXIgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZiAoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pIHN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcbiAgcmV0dXJuIGxlZnQgPyBzdHJpbmdGaWxsZXIgKyBTIDogUyArIHN0cmluZ0ZpbGxlcjtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/modules/_string-pad.js\n");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXJlcGVhdC5qcz85NzQ0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKTtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/modules/_string-repeat.js\n");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1zdGFydC5qcz9mNTc2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYWQgPSByZXF1aXJlKCcuL19zdHJpbmctcGFkJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMjgwXG52YXIgV0VCS0lUX0JVRyA9IC9WZXJzaW9uXFwvMTBcXC5cXGQrKFxcLlxcZCspPyggTW9iaWxlXFwvXFx3Kyk/IFNhZmFyaVxcLy8udGVzdCh1c2VyQWdlbnQpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIFdFQktJVF9CVUcsICdTdHJpbmcnLCB7XG4gIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGggLyogLCBmaWxsU3RyaW5nID0gJyAnICovKSB7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/modules/es7.string.pad-start.js\n");

/***/ })

})