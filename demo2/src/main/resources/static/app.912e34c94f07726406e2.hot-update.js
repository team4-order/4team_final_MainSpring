webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Overview1.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Overview1.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\n/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var src_components_Cards_ChartCard_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Cards/ChartCard.vue */ \"./src/components/Cards/ChartCard.vue\");\n/* harmony import */ var src_components_Cards_StatsCard_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Cards/StatsCard.vue */ \"./src/components/Cards/StatsCard.vue\");\n/* harmony import */ var src_components_Table_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Table.vue */ \"./src/components/Table.vue\");\n/* harmony import */ var _components_Cards_Card_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Cards/Card.vue */ \"./src/components/Cards/Card.vue\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    LTable: src_components_Table_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ChartCard: src_components_Cards_ChartCard_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    StatsCard: src_components_Cards_StatsCard_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    Card: _components_Cards_Card_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  },\n  data: function data() {\n    return {\n      isDataLoaded: false,\n      weeklyReadyOrders: 0,\n      weeklydeliveryOrders: 0,\n      weeklyCompletedOrders: 0,\n      weeklySales: 0,\n      editTooltip: 'Edit Task',\n      deleteTooltip: 'Remove',\n      pieChart: {\n        data: {\n          labels: ['40%', '20%', '40%'],\n          series: [40, 20, 40]\n        }\n      },\n      lineChart: {\n        data: {\n          labels: [],\n          series: []\n        },\n        options: {\n          scales: {\n            xAxes: [{\n              ticks: {\n                fontSize: 10,\n                // Smaller font size\n                fontColor: '#333',\n                // Adjust color for better visibility\n                fontStyle: 'bold' // Makes text bold\n              }\n            }],\n            yAxes: [{\n              scaleLabel: {\n                display: true,\n                labelString: \"단위: 만 원\",\n                fontStyle: 'bold'\n              }\n            }]\n          },\n          layout: {\n            padding: {\n              left: 20,\n              // Increase left padding to ensure y-axis labels are visible\n              right: 20,\n              top: 10,\n              bottom: 10 // Adjust right padding if necessary\n            }\n          },\n          showArea: false,\n          height: '245px',\n          axisX: {\n            showGrid: false\n          },\n          lineSmooth: true,\n          showLine: true,\n          showPoint: true,\n          fullWidth: true,\n          chartPadding: {\n            right: 50,\n            left: 10 // Make sure to adjust this value to prevent y-axis label clipping\n          }\n        },\n        responsiveOptions: [['screen and (max-width: 640px)', {\n          axisX: {\n            labelInterpolationFnc: function labelInterpolationFnc(value) {\n              return value[0];\n            }\n          }\n        }]]\n      },\n      barChart: {\n        data: {\n          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895], [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]]\n        },\n        options: {\n          seriesBarDistance: 10,\n          axisX: {\n            showGrid: false\n          },\n          height: '245px'\n        },\n        responsiveOptions: [['screen and (max-width: 640px)', {\n          seriesBarDistance: 5,\n          axisX: {\n            labelInterpolationFnc: function labelInterpolationFnc(value) {\n              return value[0];\n            }\n          }\n        }]]\n      },\n      tableData: {\n        columns: ['고객명', '정산 요청 금액'],\n        data: []\n      }\n    };\n  },\n  mounted: function mounted() {\n    this.fetchOrderList();\n    this.fetchAdjustmentReqList();\n    this.fetchMonthlySalesData();\n    //    this.updateSalesChart(months, sales)\n  },\n  methods: {\n    fetchMonthlySalesData: function () {\n      var _fetchMonthlySalesData = Object(_home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var businessId, response, months, sales;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              businessId = this.$route.params.businessId;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8080/api/orders/chart1/\".concat(businessId));\n            case 4:\n              response = _context.sent;\n              months = response.data.map(function (item) {\n                return \"\".concat(item.year.toString().slice(-2), \"/\").concat(item.month.toString().padStart(2, '0'));\n              });\n              sales = response.data.map(function (item) {\n                return item.price;\n              });\n              this.updateSalesChart(months, sales);\n              _context.next = 13;\n              break;\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(\"Failed to fetch monthly sales data:\", _context.t0);\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this, [[0, 10]]);\n      }));\n      function fetchMonthlySalesData() {\n        return _fetchMonthlySalesData.apply(this, arguments);\n      }\n      return fetchMonthlySalesData;\n    }(),\n    updateSalesChart: function updateSalesChart(months, sales) {\n      var minPrice = Math.min.apply(Math, Object(_home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sales));\n      var maxPrice = Math.max.apply(Math, Object(_home_user1_final_4team_final_MainVue_vue_light_bootstrap_dashboard_master_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sales));\n\n      // Scale the max price a bit higher for better visualization\n      var maxChartValue = maxPrice + (maxPrice - minPrice) * 0.1;\n\n      // Update the chart data\n      this.lineChart.data.labels = months;\n      this.lineChart.data.series = [sales];\n      this.isDataLoaded = true;\n      // Ensure the chart updates or redraws if necessary\n      if (this.$refs.salesChart && this.$refs.salesChart.update) {\n        this.$refs.salesChart.update(); // Call update if it is a function provided by the chart lib\n      }\n\n      // Update the chart options for y-axis\n      this.lineChart.options.axisY = {\n        low: minPrice,\n        high: maxChartValue,\n        onlyInteger: true,\n        // if you want to display only integer values\n        scaleMinSpace: 20 // minimum space between scale steps\n      };\n      this.lineChart.options.scales.yAxes[0].scaleLabel.labelString = \"단위: 만 원\";\n      this.isDataLoaded = true; // Set this once data is ready\n      this.$refs.salesChart.update();\n    },\n    fetchOrderList: function fetchOrderList() {\n      var _this = this;\n      var businessId = this.$route.params.businessId;\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8080/api/orders/id/\".concat(businessId)).then(function (response) {\n        var data = response.data;\n        var startOfWeek = new Date();\n        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + (startOfWeek.getDay() === 0 ? -6 : 1));\n        startOfWeek.setHours(0, 0, 0, 0);\n        var totalSales = 0;\n        var completedOrders = 0;\n        var deliveryOrders = 0;\n        var readyOrders = 0;\n        data.forEach(function (order) {\n          var orderDate = new Date(order.orderDate);\n          if (orderDate >= startOfWeek) {\n            switch (order.orderStatus) {\n              case '배송 완료':\n                completedOrders++;\n                totalSales += order.orderPrice; // 주문 상태가 '배송 완료'인 경우에 매출액을 더합니다.\n                break;\n              case '배송 중':\n                deliveryOrders++;\n                break;\n              case '출고 준비 중':\n                readyOrders++;\n                break;\n            }\n          }\n        });\n        _this.weeklyCompletedOrders = completedOrders;\n        _this.weeklyReadyOrders = readyOrders;\n        _this.weeklydeliveryOrders = deliveryOrders;\n        _this.weeklySales = totalSales;\n      }).catch(function (error) {\n        console.error(\"Failed to fetch orders:\", error);\n      });\n    },\n    fetchAdjustmentReqList: function fetchAdjustmentReqList() {\n      var _this2 = this;\n      var businessId = this.$route.params.businessId;\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8080/api/orders/req/\".concat(businessId)).then(function (response) {\n        _this2.tableData.data = response.data.map(function (item) {\n          return {\n            '고객명': item.contactName,\n            '고객코드': item.contactCode\n          };\n        });\n      }).catch(function (error) {\n        console.error(\"Failed to fetch adjustment requests:\", error);\n      });\n    } // continue with other methods...\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL092ZXJ2aWV3MS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL092ZXJ2aWV3MS52dWU/ZGFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxoNT7so7zqsIQg642w7J207YSwPC9oNT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8c3RhdHMtY2FyZD5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJpY29uLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5jLWljb24gbmMtbW9uZXktY29pbnMgdGV4dC1zdWNjZXNzXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1jYXRlZ29yeVwiPuunpOy2nDwvcD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd2Vla2x5U2FsZXMgfX0g7JuQPC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXItb1wiPjwvaT4gICAgIGZvciBhIHdlZWsgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3N0YXRzLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTMgY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxzdGF0cy1jYXJkPlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cImljb24td2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmMtaWNvbiBuYy1jYXJ0LXNpbXBsZSB0ZXh0LXdhcm5pbmdcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNhdGVnb3J5XCI+7Lac6rOgIOykgOu5hCDspJE8L3A+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IHdlZWtseVJlYWR5T3JkZXJzIH19IOqxtDwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCI+PC9pPlVwZGF0ZWQgbm93XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3RhdHMtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8c3RhdHMtY2FyZD5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJpY29uLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmMtaWNvbiBuYy12ZWN0b3IgdGV4dC1kYW5nZXJcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNhdGVnb3J5XCI+67Cw7IahIOykkTwvcD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd2Vla2x5ZGVsaXZlcnlPcmRlcnMgfX0g6rG0PC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5MYXN0IGRheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3RhdHMtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMyBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHN0YXRzLWNhcmQ+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwiaWNvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuYy1pY29uIG5jLWZhdm91cml0ZS0yOCB0ZXh0LXByaW1hcnlcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWNhdGVnb3J5XCI+67Cw7IahIOyZhOujjDwvcD5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgd2Vla2x5Q29tcGxldGVkT3JkZXJzIH19IOqxtDwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2hcIj48L2k+VXBkYXRlZCBub3dcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3N0YXRzLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCIgdi1pZj1cImlzRGF0YUxvYWRlZFwiPlxuICAgICAgICAgIDxjaGFydC1jYXJkIHJlZj1cInNhbGVzQ2hhcnRcIiA6Y2hhcnQtZGF0YT1cImxpbmVDaGFydC5kYXRhXCIgOmNoYXJ0LW9wdGlvbnM9XCJsaW5lQ2hhcnQub3B0aW9uc1wiIFxuICAgICAgICAgIDpyZXNwb25zaXZlLW9wdGlvbnM9XCJsaW5lQ2hhcnQucmVzcG9uc2l2ZU9wdGlvbnNcIj5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPuunpOy2nCDtmITtmak8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtY2F0ZWdvcnlcIj4o64uo7JyEOiDrp4wg7JuQKTwvcD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgdGV4dC1pbmZvXCI+PC9pPiDstJ0g66ek7LacXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1oaXN0b3J5XCI+PC9pPiBVcGRhdGVkIDMgbWludXRlcyBhZ29cbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2NoYXJ0LWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgIDxjYXJkPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGl0bGVcIj7soJXsgrAg7JqU7LKtIOumrOyKpO2KuDwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnlcIj48L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPGwtdGFibGUgOmRhdGE9XCJ0YWJsZURhdGEuZGF0YVwiIDpjb2x1bW5zPVwidGFibGVEYXRhLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDwvbC10YWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWhpc3RvcnlcIj48L2k+IFVwZGF0ZWQgMyBtaW51dGVzIGFnb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvY2FyZD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxjaGFydC1jYXJkIDpjaGFydC1kYXRhPVwiYmFyQ2hhcnQuZGF0YVwiIDpjaGFydC1vcHRpb25zPVwiYmFyQ2hhcnQub3B0aW9uc1wiXG4gICAgICAgICAgICA6Y2hhcnQtcmVzcG9uc2l2ZS1vcHRpb25zPVwiYmFyQ2hhcnQucmVzcG9uc2l2ZU9wdGlvbnNcIiBjaGFydC10eXBlPVwiQmFyXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+MjAxNCBTYWxlczwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1jYXRlZ29yeVwiPkFsbCBwcm9kdWN0cyBpbmNsdWRpbmcgVGF4ZXM8L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIHRleHQtaW5mb1wiPjwvaT4gVGVzbGEgTW9kZWwgU1xuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIHRleHQtZGFuZ2VyXCI+PC9pPiBCTVcgNSBTZXJpZXNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4gRGF0YSBpbmZvcm1hdGlvbiBjZXJ0aWZpZWRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvY2hhcnQtY2FyZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPGNoYXJ0LWNhcmQgOmNoYXJ0LWRhdGE9XCJwaWVDaGFydC5kYXRhXCIgY2hhcnQtdHlwZT1cIlBpZVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPkVtYWlsIFN0YXRpc3RpY3M8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtY2F0ZWdvcnlcIj5MYXN0IENhbXBhaWduIFBlcmZvcm1hbmNlPC9wPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSB0ZXh0LWluZm9cIj48L2k+IE9wZW5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSB0ZXh0LWRhbmdlclwiPjwvaT4gQm91bmNlXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgdGV4dC13YXJuaW5nXCI+PC9pPiBVbnN1YnNjcmliZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+IENhbXBhaWduIHNlbnQgMiBkYXlzIGFnb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9jaGFydC1jYXJkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDaGFydENhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZHMvQ2hhcnRDYXJkLnZ1ZSdcbmltcG9ydCBTdGF0c0NhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZHMvU3RhdHNDYXJkLnZ1ZSdcbmltcG9ydCBMVGFibGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvVGFibGUudnVlJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcy9DYXJkLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTFRhYmxlLFxuICAgIENoYXJ0Q2FyZCxcbiAgICBTdGF0c0NhcmQsXG4gICAgQ2FyZFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0RhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgd2Vla2x5UmVhZHlPcmRlcnM6IDAsXG4gICAgICB3ZWVrbHlkZWxpdmVyeU9yZGVyczogMCxcbiAgICAgIHdlZWtseUNvbXBsZXRlZE9yZGVyczogMCxcbiAgICAgIHdlZWtseVNhbGVzOiAwLFxuICAgICAgZWRpdFRvb2x0aXA6ICdFZGl0IFRhc2snLFxuICAgICAgZGVsZXRlVG9vbHRpcDogJ1JlbW92ZScsXG4gICAgICBwaWVDaGFydDoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGFiZWxzOiBbJzQwJScsICcyMCUnLCAnNDAlJ10sXG4gICAgICAgICAgc2VyaWVzOiBbNDAsIDIwLCA0MF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVDaGFydDoge1xuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbXSxcbiAgICBzZXJpZXM6IFtdXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBzY2FsZXM6IHtcbiAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCwgLy8gU21hbGxlciBmb250IHNpemVcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzMzMycsIC8vIEFkanVzdCBjb2xvciBmb3IgYmV0dGVyIHZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnYm9sZCcgLy8gTWFrZXMgdGV4dCBib2xkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IFwi64uo7JyEOiDrp4wg7JuQXCIsXG4gICAgICAgICAgZm9udFN0eWxlOiAnYm9sZCdcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9LFxuICAgIGxheW91dDoge1xuICAgICAgcGFkZGluZzoge1xuICAgICAgICBsZWZ0OiAyMCwgIC8vIEluY3JlYXNlIGxlZnQgcGFkZGluZyB0byBlbnN1cmUgeS1heGlzIGxhYmVscyBhcmUgdmlzaWJsZVxuICAgICAgICByaWdodDogMjAsXG4gICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMCAgLy8gQWRqdXN0IHJpZ2h0IHBhZGRpbmcgaWYgbmVjZXNzYXJ5XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93QXJlYTogZmFsc2UsXG4gICAgaGVpZ2h0OiAnMjQ1cHgnLFxuICAgIGF4aXNYOiB7XG4gICAgICBzaG93R3JpZDogZmFsc2VcbiAgICB9LFxuICAgIGxpbmVTbW9vdGg6IHRydWUsXG4gICAgc2hvd0xpbmU6IHRydWUsXG4gICAgc2hvd1BvaW50OiB0cnVlLFxuICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICBjaGFydFBhZGRpbmc6IHtcbiAgICAgIHJpZ2h0OiA1MCxcbiAgICAgIGxlZnQ6IDEwICAvLyBNYWtlIHN1cmUgdG8gYWRqdXN0IHRoaXMgdmFsdWUgdG8gcHJldmVudCB5LWF4aXMgbGFiZWwgY2xpcHBpbmdcbiAgICB9XG4gIH0sXG4gIHJlc3BvbnNpdmVPcHRpb25zOiBbXG4gICAgWydzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsIHtcbiAgICAgIGF4aXNYOiB7XG4gICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XVxuICBdXG59LFxuICAgICAgYmFyQ2hhcnQ6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxhYmVsczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgWzU0MiwgNDQzLCAzMjAsIDc4MCwgNTUzLCA0NTMsIDMyNiwgNDM0LCA1NjgsIDYxMCwgNzU2LCA4OTVdLFxuICAgICAgICAgICAgWzQxMiwgMjQzLCAyODAsIDU4MCwgNDUzLCAzNTMsIDMwMCwgMzY0LCAzNjgsIDQxMCwgNjM2LCA2OTVdXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgc2VyaWVzQmFyRGlzdGFuY2U6IDEwLFxuICAgICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgICBzaG93R3JpZDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlaWdodDogJzI0NXB4J1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlT3B0aW9uczogW1xuICAgICAgICAgIFsnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCknLCB7XG4gICAgICAgICAgICBzZXJpZXNCYXJEaXN0YW5jZTogNSxcbiAgICAgICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVswXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHRhYmxlRGF0YToge1xuICAgICAgICBjb2x1bW5zOiBbJ+qzoOqwneuqhScsICfsoJXsgrAg7JqU7LKtIOq4iOyVoSddLFxuICAgICAgICBkYXRhOiBbXSBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaE9yZGVyTGlzdCgpO1xuICAgIHRoaXMuZmV0Y2hBZGp1c3RtZW50UmVxTGlzdCgpO1xuICAgIHRoaXMuZmV0Y2hNb250aGx5U2FsZXNEYXRhKCk7XG4vLyAgICB0aGlzLnVwZGF0ZVNhbGVzQ2hhcnQobW9udGhzLCBzYWxlcylcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGZldGNoTW9udGhseVNhbGVzRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBidXNpbmVzc0lkID0gdGhpcy4kcm91dGUucGFyYW1zLmJ1c2luZXNzSWQ7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvb3JkZXJzL2NoYXJ0MS8ke2J1c2luZXNzSWR9YCk7XG4gICAgY29uc3QgbW9udGhzID0gcmVzcG9uc2UuZGF0YS5tYXAoaXRlbSA9PiBgJHtpdGVtLnllYXIudG9TdHJpbmcoKS5zbGljZSgtMil9LyR7aXRlbS5tb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YCk7XG4gICAgY29uc3Qgc2FsZXMgPSByZXNwb25zZS5kYXRhLm1hcChpdGVtID0+IGl0ZW0ucHJpY2UpO1xuICAgIHRoaXMudXBkYXRlU2FsZXNDaGFydChtb250aHMsIHNhbGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG1vbnRobHkgc2FsZXMgZGF0YTpcIiwgZXJyb3IpO1xuICB9XG59LFxudXBkYXRlU2FsZXNDaGFydChtb250aHMsIHNhbGVzKSB7XG4gICAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5zYWxlcyk7XG4gICAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heCguLi5zYWxlcyk7XG5cbiAgICAvLyBTY2FsZSB0aGUgbWF4IHByaWNlIGEgYml0IGhpZ2hlciBmb3IgYmV0dGVyIHZpc3VhbGl6YXRpb25cbiAgICBjb25zdCBtYXhDaGFydFZhbHVlID0gbWF4UHJpY2UgKyAobWF4UHJpY2UgLSBtaW5QcmljZSkgKiAwLjE7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGRhdGFcbiAgICB0aGlzLmxpbmVDaGFydC5kYXRhLmxhYmVscyA9IG1vbnRocztcbiAgICB0aGlzLmxpbmVDaGFydC5kYXRhLnNlcmllcyA9IFtzYWxlc107XG4gICAgdGhpcy5pc0RhdGFMb2FkZWQgPSB0cnVlO1xuICAvLyBFbnN1cmUgdGhlIGNoYXJ0IHVwZGF0ZXMgb3IgcmVkcmF3cyBpZiBuZWNlc3NhcnlcbiAgaWYgKHRoaXMuJHJlZnMuc2FsZXNDaGFydCAmJiB0aGlzLiRyZWZzLnNhbGVzQ2hhcnQudXBkYXRlKSB7XG4gICAgdGhpcy4kcmVmcy5zYWxlc0NoYXJ0LnVwZGF0ZSgpOyAgLy8gQ2FsbCB1cGRhdGUgaWYgaXQgaXMgYSBmdW5jdGlvbiBwcm92aWRlZCBieSB0aGUgY2hhcnQgbGliXG4gIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgb3B0aW9ucyBmb3IgeS1heGlzXG4gICAgdGhpcy5saW5lQ2hhcnQub3B0aW9ucy5heGlzWSA9IHtcbiAgICAgICAgbG93OiBtaW5QcmljZSxcbiAgICAgICAgaGlnaDogbWF4Q2hhcnRWYWx1ZSxcbiAgICAgICAgb25seUludGVnZXI6IHRydWUsIC8vIGlmIHlvdSB3YW50IHRvIGRpc3BsYXkgb25seSBpbnRlZ2VyIHZhbHVlc1xuICAgICAgICBzY2FsZU1pblNwYWNlOiAyMCAvLyBtaW5pbXVtIHNwYWNlIGJldHdlZW4gc2NhbGUgc3RlcHNcbiAgICB9O1xuXG4gICAgdGhpcy5saW5lQ2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uc2NhbGVMYWJlbC5sYWJlbFN0cmluZyA9IFwi64uo7JyEOiDrp4wg7JuQXCI7XG5cbiAgICB0aGlzLmlzRGF0YUxvYWRlZCA9IHRydWU7ICAvLyBTZXQgdGhpcyBvbmNlIGRhdGEgaXMgcmVhZHlcbiAgdGhpcy4kcmVmcy5zYWxlc0NoYXJ0LnVwZGF0ZSgpO1xuXG4gIFxufSxcbiAgICBmZXRjaE9yZGVyTGlzdCgpIHtcbiAgY29uc3QgYnVzaW5lc3NJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5idXNpbmVzc0lkO1xuICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvb3JkZXJzL2lkLyR7YnVzaW5lc3NJZH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBuZXcgRGF0ZSgpO1xuICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgLSBzdGFydE9mV2Vlay5nZXREYXkoKSArIChzdGFydE9mV2Vlay5nZXREYXkoKSA9PT0gMCA/IC02IDogMSkpO1xuICAgICAgc3RhcnRPZldlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICAgIGxldCB0b3RhbFNhbGVzID0gMDtcbiAgICAgIGxldCBjb21wbGV0ZWRPcmRlcnMgPSAwO1xuICAgICAgbGV0IGRlbGl2ZXJ5T3JkZXJzID0gMDtcbiAgICAgIGxldCByZWFkeU9yZGVycyA9IDA7XG5cbiAgICAgIGRhdGEuZm9yRWFjaChvcmRlciA9PiB7XG4gICAgICAgIGNvbnN0IG9yZGVyRGF0ZSA9IG5ldyBEYXRlKG9yZGVyLm9yZGVyRGF0ZSk7XG4gICAgICAgIGlmIChvcmRlckRhdGUgPj0gc3RhcnRPZldlZWspIHtcbiAgICAgICAgICBzd2l0Y2ggKG9yZGVyLm9yZGVyU3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlICfrsLDshqEg7JmE66OMJzpcbiAgICAgICAgICAgICAgY29tcGxldGVkT3JkZXJzKys7XG4gICAgICAgICAgICAgIHRvdGFsU2FsZXMgKz0gb3JkZXIub3JkZXJQcmljZTsgLy8g7KO866y4IOyDge2DnOqwgCAn67Cw7IahIOyZhOujjCfsnbgg6rK97Jqw7JeQIOunpOy2nOyVoeydhCDrjZTtlanri4jri6QuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAn67Cw7IahIOykkSc6XG4gICAgICAgICAgICAgIGRlbGl2ZXJ5T3JkZXJzKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAn7Lac6rOgIOykgOu5hCDspJEnOlxuICAgICAgICAgICAgICByZWFkeU9yZGVycysrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLndlZWtseUNvbXBsZXRlZE9yZGVycyA9IGNvbXBsZXRlZE9yZGVycztcbiAgICAgIHRoaXMud2Vla2x5UmVhZHlPcmRlcnMgPSByZWFkeU9yZGVycztcbiAgICAgIHRoaXMud2Vla2x5ZGVsaXZlcnlPcmRlcnMgPSBkZWxpdmVyeU9yZGVycztcbiAgICAgIHRoaXMud2Vla2x5U2FsZXMgPSB0b3RhbFNhbGVzO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggb3JkZXJzOlwiLCBlcnJvcik7XG4gICAgfSk7XG59LFxuICAgIGZldGNoQWRqdXN0bWVudFJlcUxpc3QoKSB7XG4gICAgICBjb25zdCBidXNpbmVzc0lkID0gdGhpcy4kcm91dGUucGFyYW1zLmJ1c2luZXNzSWQ7XG4gICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvb3JkZXJzL3JlcS8ke2J1c2luZXNzSWR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEgPSByZXNwb25zZS5kYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICAn6rOg6rCd66qFJzogaXRlbS5jb250YWN0TmFtZSxcbiAgICAgICAgICAgICfqs6DqsJ3svZTrk5wnOiBpdGVtLmNvbnRhY3RDb2RlXG4gICAgICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYWRqdXN0bWVudCByZXF1ZXN0czpcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuICAgIC8vIGNvbnRpbnVlIHdpdGggb3RoZXIgbWV0aG9kcy4uLlxuICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZT48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Overview1.vue?vue&type=script&lang=js\n");

/***/ })

})