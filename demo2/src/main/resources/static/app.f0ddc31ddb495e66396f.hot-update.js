webpackHotUpdate("app",{

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/DashboardLayout.vue */ \"./src/layout/DashboardLayout.vue\");\n/* harmony import */ var _pages_NotFoundPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/NotFoundPage.vue */ \"./src/pages/NotFoundPage.vue\");\n/* harmony import */ var src_pages_Overview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/Overview.vue */ \"./src/pages/Overview.vue\");\n/* harmony import */ var src_pages_UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/UserProfile.vue */ \"./src/pages/UserProfile.vue\");\n/* harmony import */ var src_pages_TableList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/TableList.vue */ \"./src/pages/TableList.vue\");\n/* harmony import */ var src_pages_Typography_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/Typography.vue */ \"./src/pages/Typography.vue\");\n/* harmony import */ var src_pages_Icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/Icons.vue */ \"./src/pages/Icons.vue\");\n/* harmony import */ var src_pages_Maps_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/Maps.vue */ \"./src/pages/Maps.vue\");\n/* harmony import */ var src_pages_Notifications_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pages/Notifications.vue */ \"./src/pages/Notifications.vue\");\n/* harmony import */ var src_pages_Upgrade_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/Upgrade.vue */ \"./src/pages/Upgrade.vue\");\n/* harmony import */ var src_components_WarehouseList_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/WarehouseList.vue */ \"./src/components/WarehouseList.vue\");\n/* harmony import */ var src_components_InventoryList_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/InventoryList.vue */ \"./src/components/InventoryList.vue\");\n/* harmony import */ var _components_InventoryAll_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/InventoryAll.vue */ \"./src/components/InventoryAll.vue\");\n/* harmony import */ var src_components_CStoragePage_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/CStoragePage.vue */ \"./src/components/CStoragePage.vue\");\n/* harmony import */ var src_components_VendorList_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/VendorList.vue */ \"./src/components/VendorList.vue\");\n\n// GeneralViews\n\n\n// Admin pages\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  component: _layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  redirect: '/admin/overview'\n}, {\n  path: '/admin',\n  component: _layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  redirect: '/admin/overview',\n  children: [{\n    path: 'overview',\n    name: 'Overview',\n    component: src_pages_Overview_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: 'cstoragePage',\n    name: 'CstoragePage',\n    component: src_components_CStoragePage_vue__WEBPACK_IMPORTED_MODULE_13__[\"default\"] // 거래처 창고관리 페이지\n  }, {\n    path: 'warehouses',\n    name: 'Warehouses',\n    component: src_components_WarehouseList_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"] // 추가된 컴포넌트 라우트 창고페이지\n  }, {\n    path: 'inventory/:storageCode',\n    name: 'Inventory',\n    component: src_components_InventoryList_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    props: true // 이렇게 설정하면 컴포넌트 내에서 $route.params를 통해 파라미터에 접근할 수 있습니다.\n  },\n  // {\n  //   path: 'inventory',\n  //   name: 'Inventory',\n  //   component: InventoryList // 추가된 컴포넌트 라우트 창고별 인벤토리\n  // },\n  {\n    path: 'inventoryAll',\n    name: 'InventoryAll',\n    component: _components_InventoryAll_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"] // 모든재고목록 페이지\n  }, {\n    path: 'vendorList',\n    name: 'VendorList',\n    component: src_components_VendorList_vue__WEBPACK_IMPORTED_MODULE_14__[\"default\"] // 공급처 관리 페이지\n  }, {\n    path: 'vendorList',\n    name: 'VendorList',\n    component: src_components_VendorList_vue__WEBPACK_IMPORTED_MODULE_14__[\"default\"] // 공급처 상세정보 페이지\n  }, {\n    path: 'user',\n    name: 'User',\n    component: src_pages_UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: 'table-list',\n    name: 'Table List',\n    component: src_pages_TableList_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: 'typography',\n    name: 'Typography',\n    component: src_pages_Typography_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, {\n    path: 'icons',\n    name: 'Icons',\n    component: src_pages_Icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }, {\n    path: 'maps',\n    name: 'Maps',\n    component: src_pages_Maps_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }, {\n    path: 'notifications',\n    name: 'Notifications',\n    component: src_pages_Notifications_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }, {\n    path: 'upgrade',\n    name: 'Upgrade to PRO',\n    component: src_pages_Upgrade_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }]\n}, {\n  path: '*',\n  component: _pages_NotFoundPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n\n/**\n * Asynchronously load view (Webpack Lazy loading compatible)\n * The specified component must be inside the Views folder\n * @param  {string} name  the filename (basename) of the view to load.\nfunction view(name) {\n   var res= require('../components/Dashboard/Views/' + name + '.vue');\n   return res;\n};**/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzPzY0MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tICcuLi9sYXlvdXQvRGFzaGJvYXJkTGF5b3V0LnZ1ZSdcbi8vIEdlbmVyYWxWaWV3c1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL3BhZ2VzL05vdEZvdW5kUGFnZS52dWUnXG5cbi8vIEFkbWluIHBhZ2VzXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnc3JjL3BhZ2VzL092ZXJ2aWV3LnZ1ZSdcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICdzcmMvcGFnZXMvVXNlclByb2ZpbGUudnVlJ1xuaW1wb3J0IFRhYmxlTGlzdCBmcm9tICdzcmMvcGFnZXMvVGFibGVMaXN0LnZ1ZSdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ3NyYy9wYWdlcy9UeXBvZ3JhcGh5LnZ1ZSdcbmltcG9ydCBJY29ucyBmcm9tICdzcmMvcGFnZXMvSWNvbnMudnVlJ1xuaW1wb3J0IE1hcHMgZnJvbSAnc3JjL3BhZ2VzL01hcHMudnVlJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnc3JjL3BhZ2VzL05vdGlmaWNhdGlvbnMudnVlJ1xuaW1wb3J0IFVwZ3JhZGUgZnJvbSAnc3JjL3BhZ2VzL1VwZ3JhZGUudnVlJ1xuaW1wb3J0IFdhcmVob3VzZUxpc3QgZnJvbSAnc3JjL2NvbXBvbmVudHMvV2FyZWhvdXNlTGlzdC52dWUnXG5pbXBvcnQgSW52ZW50b3J5TGlzdCBmcm9tIFwic3JjL2NvbXBvbmVudHMvSW52ZW50b3J5TGlzdC52dWVcIjtcbmltcG9ydCBJbnZlbnRvcnlBbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW52ZW50b3J5QWxsLnZ1ZVwiO1xuaW1wb3J0IENzdG9yYWdlUGFnZSBmcm9tIFwic3JjL2NvbXBvbmVudHMvQ1N0b3JhZ2VQYWdlLnZ1ZVwiO1xuaW1wb3J0IFZlbmRvckxpc3QgZnJvbSBcInNyYy9jb21wb25lbnRzL1ZlbmRvckxpc3QudnVlXCI7XG5pbXBvcnQgdmVuZG9yTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9WZW5kb3JMaXN0LnZ1ZVwiO1xuXG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZExheW91dCxcbiAgICByZWRpcmVjdDogJy9hZG1pbi9vdmVydmlldydcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWRtaW4nLFxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkTGF5b3V0LFxuICAgIHJlZGlyZWN0OiAnL2FkbWluL292ZXJ2aWV3JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnb3ZlcnZpZXcnLFxuICAgICAgICBuYW1lOiAnT3ZlcnZpZXcnLFxuICAgICAgICBjb21wb25lbnQ6IE92ZXJ2aWV3XG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjc3RvcmFnZVBhZ2UnLFxuICAgICAgICBuYW1lOiAnQ3N0b3JhZ2VQYWdlJyxcbiAgICAgICAgY29tcG9uZW50OiBDc3RvcmFnZVBhZ2UgLy8g6rGw656Y7LKYIOywveqzoOq0gOumrCDtjpjsnbTsp4BcbiAgICAgIH0sXG5cblxuICAgICAge1xuICAgICAgICBwYXRoOiAnd2FyZWhvdXNlcycsXG4gICAgICAgIG5hbWU6ICdXYXJlaG91c2VzJyxcbiAgICAgICAgY29tcG9uZW50OiBXYXJlaG91c2VMaXN0IC8vIOy2lOqwgOuQnCDsu7Ttj6zrhIztirgg65287Jqw7Yq4IOywveqzoO2OmOydtOyngFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBwYXRoOiAnaW52ZW50b3J5LzpzdG9yYWdlQ29kZScsXG4gICAgICAgIG5hbWU6ICdJbnZlbnRvcnknLFxuICAgICAgICBjb21wb25lbnQ6IEludmVudG9yeUxpc3QsXG4gICAgICAgIHByb3BzOiB0cnVlIC8vIOydtOugh+qyjCDshKTsoJXtlZjrqbQg7Lu07Y+s64SM7Yq4IOuCtOyXkOyEnCAkcm91dGUucGFyYW1z66W8IO2Gte2VtCDtjIzrnbzrr7jthLDsl5Ag7KCR6re87ZWgIOyImCDsnojsirXri4jri6QuXG4gICAgICB9LFxuXG4gICAgICAvLyB7XG4gICAgICAvLyAgIHBhdGg6ICdpbnZlbnRvcnknLFxuICAgICAgLy8gICBuYW1lOiAnSW52ZW50b3J5JyxcbiAgICAgIC8vICAgY29tcG9uZW50OiBJbnZlbnRvcnlMaXN0IC8vIOy2lOqwgOuQnCDsu7Ttj6zrhIztirgg65287Jqw7Yq4IOywveqzoOuzhCDsnbjrsqTthqDrpqxcbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdpbnZlbnRvcnlBbGwnLFxuICAgICAgICBuYW1lOiAnSW52ZW50b3J5QWxsJyxcbiAgICAgICAgY29tcG9uZW50OiBJbnZlbnRvcnlBbGwgLy8g66qo65Og7J6s6rOg66qp66GdIO2OmOydtOyngFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBwYXRoOiAndmVuZG9yTGlzdCcsXG4gICAgICAgIG5hbWU6ICdWZW5kb3JMaXN0JyxcbiAgICAgICAgY29tcG9uZW50OiB2ZW5kb3JMaXN0IC8vIOqzteq4ieyymCDqtIDrpqwg7Y6Y7J207KeAXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd2ZW5kb3JMaXN0JyxcbiAgICAgICAgbmFtZTogJ1ZlbmRvckxpc3QnLFxuICAgICAgICBjb21wb25lbnQ6IHZlbmRvckxpc3QgLy8g6rO16riJ7LKYIOyDgeyEuOygleuztCDtjpjsnbTsp4BcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXInLFxuICAgICAgICBuYW1lOiAnVXNlcicsXG4gICAgICAgIGNvbXBvbmVudDogVXNlclByb2ZpbGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd0YWJsZS1saXN0JyxcbiAgICAgICAgbmFtZTogJ1RhYmxlIExpc3QnLFxuICAgICAgICBjb21wb25lbnQ6IFRhYmxlTGlzdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3R5cG9ncmFwaHknLFxuICAgICAgICBuYW1lOiAnVHlwb2dyYXBoeScsXG4gICAgICAgIGNvbXBvbmVudDogVHlwb2dyYXBoeVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2ljb25zJyxcbiAgICAgICAgbmFtZTogJ0ljb25zJyxcbiAgICAgICAgY29tcG9uZW50OiBJY29uc1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ21hcHMnLFxuICAgICAgICBuYW1lOiAnTWFwcycsXG4gICAgICAgIGNvbXBvbmVudDogTWFwc1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ25vdGlmaWNhdGlvbnMnLFxuICAgICAgICBuYW1lOiAnTm90aWZpY2F0aW9ucycsXG4gICAgICAgIGNvbXBvbmVudDogTm90aWZpY2F0aW9uc1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VwZ3JhZGUnLFxuICAgICAgICBuYW1lOiAnVXBncmFkZSB0byBQUk8nLFxuICAgICAgICBjb21wb25lbnQ6IFVwZ3JhZGVcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHsgcGF0aDogJyonLCBjb21wb25lbnQ6IE5vdEZvdW5kIH1cbl1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBsb2FkIHZpZXcgKFdlYnBhY2sgTGF6eSBsb2FkaW5nIGNvbXBhdGlibGUpXG4gKiBUaGUgc3BlY2lmaWVkIGNvbXBvbmVudCBtdXN0IGJlIGluc2lkZSB0aGUgVmlld3MgZm9sZGVyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgIHRoZSBmaWxlbmFtZSAoYmFzZW5hbWUpIG9mIHRoZSB2aWV3IHRvIGxvYWQuXG5mdW5jdGlvbiB2aWV3KG5hbWUpIHtcbiAgIHZhciByZXM9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1ZpZXdzLycgKyBuYW1lICsgJy52dWUnKTtcbiAgIHJldHVybiByZXM7XG59OyoqL1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ })

})