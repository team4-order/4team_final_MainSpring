webpackHotUpdate("app",{

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/DashboardLayout.vue */ \"./src/layout/DashboardLayout.vue\");\n/* harmony import */ var _pages_NotFoundPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/NotFoundPage.vue */ \"./src/pages/NotFoundPage.vue\");\n/* harmony import */ var src_pages_Overview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/Overview.vue */ \"./src/pages/Overview.vue\");\n/* harmony import */ var src_pages_UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/UserProfile.vue */ \"./src/pages/UserProfile.vue\");\n/* harmony import */ var src_pages_TableList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/TableList.vue */ \"./src/pages/TableList.vue\");\n/* harmony import */ var src_pages_Typography_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/Typography.vue */ \"./src/pages/Typography.vue\");\n/* harmony import */ var src_pages_Icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/Icons.vue */ \"./src/pages/Icons.vue\");\n/* harmony import */ var src_pages_Maps_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/Maps.vue */ \"./src/pages/Maps.vue\");\n/* harmony import */ var src_pages_Notifications_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pages/Notifications.vue */ \"./src/pages/Notifications.vue\");\n/* harmony import */ var src_pages_Upgrade_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/Upgrade.vue */ \"./src/pages/Upgrade.vue\");\n/* harmony import */ var src_components_WarehouseList_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/WarehouseList.vue */ \"./src/components/WarehouseList.vue\");\n/* harmony import */ var src_components_InventoryList_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/InventoryList.vue */ \"./src/components/InventoryList.vue\");\n/* harmony import */ var _components_InventoryAll_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/InventoryAll.vue */ \"./src/components/InventoryAll.vue\");\n/* harmony import */ var src_components_CStoragePage_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/CStoragePage.vue */ \"./src/components/CStoragePage.vue\");\n\n// GeneralViews\n\n\n// Admin pages\n\n\n\n\n\n\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  component: _layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  redirect: '/admin/overview'\n}, {\n  path: '/admin',\n  component: _layout_DashboardLayout_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  redirect: '/admin/overview',\n  children: [{\n    path: 'overview',\n    name: 'Overview',\n    component: src_pages_Overview_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: 'cstorage',\n    name: 'Cstorage',\n    component: src_components_CStoragePage_vue__WEBPACK_IMPORTED_MODULE_13__[\"default\"] // 거래처 창고관리 페이지\n  }, {\n    path: 'warehouses',\n    name: 'Warehouses',\n    component: src_components_WarehouseList_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"] // 추가된 컴포넌트 라우트 창고페이지\n  }, {\n    path: 'inventory/:storageCode',\n    name: 'Inventory',\n    component: src_components_InventoryList_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    props: true // 이렇게 설정하면 컴포넌트 내에서 $route.params를 통해 파라미터에 접근할 수 있습니다.\n  },\n  // {\n  //   path: 'inventory',\n  //   name: 'Inventory',\n  //   component: InventoryList // 추가된 컴포넌트 라우트 창고별 인벤토리\n  // },\n  {\n    path: 'inventoryAll',\n    name: 'InventoryAll',\n    component: _components_InventoryAll_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"] // 모든재고목록 페이지\n  }, {\n    path: 'user',\n    name: 'User',\n    component: src_pages_UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: 'table-list',\n    name: 'Table List',\n    component: src_pages_TableList_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: 'typography',\n    name: 'Typography',\n    component: src_pages_Typography_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, {\n    path: 'icons',\n    name: 'Icons',\n    component: src_pages_Icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }, {\n    path: 'maps',\n    name: 'Maps',\n    component: src_pages_Maps_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }, {\n    path: 'notifications',\n    name: 'Notifications',\n    component: src_pages_Notifications_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }, {\n    path: 'upgrade',\n    name: 'Upgrade to PRO',\n    component: src_pages_Upgrade_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }]\n}, {\n  path: '*',\n  component: _pages_NotFoundPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n\n/**\n * Asynchronously load view (Webpack Lazy loading compatible)\n * The specified component must be inside the Views folder\n * @param  {string} name  the filename (basename) of the view to load.\nfunction view(name) {\n   var res= require('../components/Dashboard/Views/' + name + '.vue');\n   return res;\n};**/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzPzY0MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tICcuLi9sYXlvdXQvRGFzaGJvYXJkTGF5b3V0LnZ1ZSdcbi8vIEdlbmVyYWxWaWV3c1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL3BhZ2VzL05vdEZvdW5kUGFnZS52dWUnXG5cbi8vIEFkbWluIHBhZ2VzXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnc3JjL3BhZ2VzL092ZXJ2aWV3LnZ1ZSdcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICdzcmMvcGFnZXMvVXNlclByb2ZpbGUudnVlJ1xuaW1wb3J0IFRhYmxlTGlzdCBmcm9tICdzcmMvcGFnZXMvVGFibGVMaXN0LnZ1ZSdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ3NyYy9wYWdlcy9UeXBvZ3JhcGh5LnZ1ZSdcbmltcG9ydCBJY29ucyBmcm9tICdzcmMvcGFnZXMvSWNvbnMudnVlJ1xuaW1wb3J0IE1hcHMgZnJvbSAnc3JjL3BhZ2VzL01hcHMudnVlJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnc3JjL3BhZ2VzL05vdGlmaWNhdGlvbnMudnVlJ1xuaW1wb3J0IFVwZ3JhZGUgZnJvbSAnc3JjL3BhZ2VzL1VwZ3JhZGUudnVlJ1xuaW1wb3J0IFdhcmVob3VzZUxpc3QgZnJvbSAnc3JjL2NvbXBvbmVudHMvV2FyZWhvdXNlTGlzdC52dWUnXG5pbXBvcnQgSW52ZW50b3J5TGlzdCBmcm9tIFwic3JjL2NvbXBvbmVudHMvSW52ZW50b3J5TGlzdC52dWVcIjtcbmltcG9ydCBJbnZlbnRvcnlBbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW52ZW50b3J5QWxsLnZ1ZVwiO1xuaW1wb3J0IENTdG9yYWdlUGFnZSBmcm9tIFwic3JjL2NvbXBvbmVudHMvQ1N0b3JhZ2VQYWdlLnZ1ZVwiO1xuXG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZExheW91dCxcbiAgICByZWRpcmVjdDogJy9hZG1pbi9vdmVydmlldydcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWRtaW4nLFxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkTGF5b3V0LFxuICAgIHJlZGlyZWN0OiAnL2FkbWluL292ZXJ2aWV3JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnb3ZlcnZpZXcnLFxuICAgICAgICBuYW1lOiAnT3ZlcnZpZXcnLFxuICAgICAgICBjb21wb25lbnQ6IE92ZXJ2aWV3XG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjc3RvcmFnZScsXG4gICAgICAgIG5hbWU6ICdDc3RvcmFnZScsXG4gICAgICAgIGNvbXBvbmVudDogQ1N0b3JhZ2VQYWdlIC8vIOqxsOuemOyymCDssL3qs6DqtIDrpqwg7Y6Y7J207KeAXG4gICAgICB9LFxuXG5cbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3dhcmVob3VzZXMnLFxuICAgICAgICBuYW1lOiAnV2FyZWhvdXNlcycsXG4gICAgICAgIGNvbXBvbmVudDogV2FyZWhvdXNlTGlzdCAvLyDstpTqsIDrkJwg7Lu07Y+s64SM7Yq4IOudvOyasO2KuCDssL3qs6DtjpjsnbTsp4BcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2ludmVudG9yeS86c3RvcmFnZUNvZGUnLFxuICAgICAgICBuYW1lOiAnSW52ZW50b3J5JyxcbiAgICAgICAgY29tcG9uZW50OiBJbnZlbnRvcnlMaXN0LFxuICAgICAgICBwcm9wczogdHJ1ZSAvLyDsnbTroIfqsowg7ISk7KCV7ZWY66m0IOy7tO2PrOuEjO2KuCDrgrTsl5DshJwgJHJvdXRlLnBhcmFtc+ulvCDthrXtlbQg7YyM652866+47YSw7JeQIOygkeq3vO2VoCDsiJgg7J6I7Iq164uI64ukLlxuICAgICAgfSxcblxuICAgICAgLy8ge1xuICAgICAgLy8gICBwYXRoOiAnaW52ZW50b3J5JyxcbiAgICAgIC8vICAgbmFtZTogJ0ludmVudG9yeScsXG4gICAgICAvLyAgIGNvbXBvbmVudDogSW52ZW50b3J5TGlzdCAvLyDstpTqsIDrkJwg7Lu07Y+s64SM7Yq4IOudvOyasO2KuCDssL3qs6Drs4Qg7J2467Kk7Yag66asXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnaW52ZW50b3J5QWxsJyxcbiAgICAgICAgbmFtZTogJ0ludmVudG9yeUFsbCcsXG4gICAgICAgIGNvbXBvbmVudDogSW52ZW50b3J5QWxsIC8vIOuqqOuToOyerOqzoOuqqeuhnSDtjpjsnbTsp4BcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd1c2VyJyxcbiAgICAgICAgbmFtZTogJ1VzZXInLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJQcm9maWxlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAndGFibGUtbGlzdCcsXG4gICAgICAgIG5hbWU6ICdUYWJsZSBMaXN0JyxcbiAgICAgICAgY29tcG9uZW50OiBUYWJsZUxpc3RcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd0eXBvZ3JhcGh5JyxcbiAgICAgICAgbmFtZTogJ1R5cG9ncmFwaHknLFxuICAgICAgICBjb21wb25lbnQ6IFR5cG9ncmFwaHlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdpY29ucycsXG4gICAgICAgIG5hbWU6ICdJY29ucycsXG4gICAgICAgIGNvbXBvbmVudDogSWNvbnNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdtYXBzJyxcbiAgICAgICAgbmFtZTogJ01hcHMnLFxuICAgICAgICBjb21wb25lbnQ6IE1hcHNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdub3RpZmljYXRpb25zJyxcbiAgICAgICAgbmFtZTogJ05vdGlmaWNhdGlvbnMnLFxuICAgICAgICBjb21wb25lbnQ6IE5vdGlmaWNhdGlvbnNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd1cGdyYWRlJyxcbiAgICAgICAgbmFtZTogJ1VwZ3JhZGUgdG8gUFJPJyxcbiAgICAgICAgY29tcG9uZW50OiBVcGdyYWRlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7IHBhdGg6ICcqJywgY29tcG9uZW50OiBOb3RGb3VuZCB9XG5dXG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgbG9hZCB2aWV3IChXZWJwYWNrIExhenkgbG9hZGluZyBjb21wYXRpYmxlKVxuICogVGhlIHNwZWNpZmllZCBjb21wb25lbnQgbXVzdCBiZSBpbnNpZGUgdGhlIFZpZXdzIGZvbGRlclxuICogQHBhcmFtICB7c3RyaW5nfSBuYW1lICB0aGUgZmlsZW5hbWUgKGJhc2VuYW1lKSBvZiB0aGUgdmlldyB0byBsb2FkLlxuZnVuY3Rpb24gdmlldyhuYW1lKSB7XG4gICB2YXIgcmVzPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9WaWV3cy8nICsgbmFtZSArICcudnVlJyk7XG4gICByZXR1cm4gcmVzO1xufTsqKi9cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ })

})