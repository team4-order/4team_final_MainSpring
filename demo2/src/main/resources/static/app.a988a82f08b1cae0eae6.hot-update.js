webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n/* 전체 페이지 스타일 */\\n.inventory-page {\\n  background-color: #FAFAFA;\\n  font-family: 'Roboto', sans-serif;\\n  padding: 20px;\\n}\\n\\n/* NAV, SECTION, FOOTER 공통 스타일 */\\n.nav-section, .inventory-section, .footer-section {\\n  background-color: #FFFFFF;\\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);\\n          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);\\n  border-radius: 8px;\\n  margin-bottom: 20px;\\n  padding: 20px;\\n}\\n\\n/* 테이블 스타일 */\\n.inventory-table {\\n  width: 100%;\\n  border-collapse: collapse;\\n}\\n.inventory-table th, .inventory-table td {\\n  text-align: left;\\n  padding: 12px;\\n  border-bottom: 1px solid #E0E0E0;\\n}\\n.thead-dark th {\\n  background-color: #4A4A4A;\\n  color: white;\\n}\\n\\n/* 제목 스타일 */\\n.section-title {\\n  margin-bottom: 20px;\\n  color: #32325D;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n/* 반응형 레이아웃 */\\n@media (min-width: 768px) {\\n.section-area {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between;\\n}\\n.inventory-section {\\n    -ms-flex-preferred-size: 48%;\\n        flex-basis: 48%;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/InventoryAll.vue\"],\"names\":[],\"mappings\":\";AA8KA,gBAAA;AACA;EACA,0BAAA;EACA,kCAAA;EACA,cAAA;CACA;;AAEA,iCAAA;AACA;EACA,0BAAA;EACA,gDAAA;UAAA,wCAAA;EACA,mBAAA;EACA,oBAAA;EACA,cAAA;CACA;;AAEA,aAAA;AACA;EACA,YAAA;EACA,0BAAA;CACA;AAEA;EACA,iBAAA;EACA,cAAA;EACA,iCAAA;CACA;AAEA;EACA,0BAAA;EACA,aAAA;CACA;;AAEA,YAAA;AACA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;CACA;;AAEA,cAAA;AACA;AACA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,+BAAA;CACA;AAEA;IACA,6BAAA;QAAA,gBAAA;CACA;CACA\",\"file\":\"InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"inventory-page\\\">\\n    <!-- NAV 영역: 총 재고 요약 -->\\n    <div class=\\\"nav-section\\\">\\n      <h2 class=\\\"section-title\\\">제품별 총 재고</h2>\\n      <div class=\\\"table-responsive\\\">\\n        <table class=\\\"inventory-table\\\">\\n          <thead>\\n          <tr>\\n            <th>제품 이름</th>\\n            <th>재고량</th>\\n          </tr>\\n          </thead>\\n          <tbody>\\n          <tr v-for=\\\"(total, productName, index) in paginatedTotalInventory\\\" :key=\\\"index\\\">\\n            <td>{{ productName }}</td>\\n            <td>{{ total }}개</td>\\n          </tr>\\n          </tbody>\\n        </table>\\n      </div>\\n    </div>\\n\\n    <!-- SECTION 영역: 등급별 재고 목록 -->\\n    <div class=\\\"section-area\\\">\\n      <div class=\\\"inventory-section\\\" v-for=\\\"(grade, index) in grades\\\" :key=\\\"index\\\">\\n        <h2 class=\\\"section-title\\\">{{ grade }} 등급 과일</h2>\\n        <div class=\\\"table-responsive\\\">\\n          <table class=\\\"inventory-table\\\">\\n            <thead>\\n            <tr>\\n              <th>제품 이름</th>\\n              <th>수량</th>\\n            </tr>\\n            </thead>\\n            <tbody>\\n            <tr v-for=\\\"(quantity, productName, index) in paginatedGradesInventory[grade]\\\" :key=\\\"index\\\">\\n              <td>{{ productName }}</td>\\n              <td>{{ quantity }}개</td>\\n            </tr>\\n            </tbody>\\n          </table>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- FOOTER 영역: 재고 상세 목록 -->\\n    <div class=\\\"footer-section\\\">\\n      <h4 class=\\\"card-title\\\">과일 상세 목록</h4>\\n      <div class=\\\"table-responsive\\\">\\n        <table class=\\\"inventory-table\\\">\\n          <thead class=\\\"thead-dark\\\">\\n          <tr>\\n            <th>상품 이름</th>\\n            <th>상품 코드</th>\\n            <th>등급</th>\\n            <th>수량</th>\\n            <th>판매 가격</th>\\n            <th>창고 코드</th>\\n            <th>재고 입고일</th>\\n          </tr>\\n          </thead>\\n          <tbody>\\n          <tr v-for=\\\"inventory in paginatedInventories\\\" :key=\\\"inventory.goodsCode\\\">\\n            <td>{{ inventory.goodsName }}</td>\\n            <td>{{ inventory.goodsCode }}</td>\\n            <td>{{ inventory.goodsGrade }}</td>\\n            <td>{{ inventory.inventoryQuantity }}</td>\\n            <td>{{ inventory.salesPrice }}</td>\\n            <td>{{ inventory.storageCode }}</td>\\n            <td>{{ new Date(inventory.firstStockDate).toLocaleDateString() }}</td>\\n          </tr>\\n          </tbody>\\n        </table>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n\\n\\n<script>\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      inventories: [],\\n      grades: ['A', 'B', 'C', '폐기'],\\n      currentPage: {\\n        total: 1,\\n        details: 1,\\n        A: 1,\\n        B: 1,\\n        C: 1,\\n        폐기: 1,\\n      },\\n      itemsPerPage: 10, // Adjust according to your need\\n    };\\n  },\\n  computed: {\\n    totalInventoryByProduct() {\\n      const totals = {};\\n      this.inventories.forEach(item => {\\n        if (!totals[item.goodsName]) {\\n          totals[item.goodsName] = 0;\\n        }\\n        totals[item.goodsName] += parseInt(item.inventoryQuantity, 10);\\n      });\\n      return totals;\\n    },\\n    paginatedTotalInventory() {\\n      const start = (this.currentPage.total - 1) * this.itemsPerPage;\\n      const end = start + this.itemsPerPage;\\n      return Object.entries(this.totalInventoryByProduct)\\n        .slice(start, end)\\n        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n    },\\n    aggregatedInventories() {\\n      const result = {};\\n      this.grades.forEach(grade => {\\n        result[grade] = this.inventories\\n          .filter(inventory => inventory.goodsGrade === grade)\\n          .reduce((acc, curr) => {\\n            if (acc[curr.goodsName]) {\\n              acc[curr.goodsName] += parseInt(curr.inventoryQuantity, 10);\\n            } else {\\n              acc[curr.goodsName] = parseInt(curr.inventoryQuantity, 10);\\n            }\\n            return acc;\\n          }, {});\\n      });\\n      return result;\\n    },\\n    paginatedGradesInventory() {\\n      const pagination = {};\\n      for (const grade of this.grades) {\\n        const start = (this.currentPage[grade] - 1) * this.itemsPerPage;\\n        const end = start + this.itemsPerPage;\\n        pagination[grade] = Object.entries(this.aggregatedInventories[grade])\\n          .slice(start, end)\\n          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n      }\\n      return pagination;\\n    },\\n    paginatedInventories() {\\n      const start = (this.currentPage.details - 1) * this.itemsPerPage;\\n      return this.inventories.slice(start, start + this.itemsPerPage);\\n    },\\n  },\\n  methods: {\\n    fetchInventories() {\\n      axios.get('/api/inventories').then(response => {\\n        this.inventories = response.data;\\n      }).catch(error => {\\n        console.error(\\\"재고 목록을 가져오는 데 실패했습니다.\\\", error);\\n      });\\n    },\\n    nextPage(section) {\\n      this.currentPage[section]++;\\n    },\\n    prevPage(section) {\\n      if (this.currentPage[section] > 1) {\\n        this.currentPage[section]--;\\n      }\\n    },\\n  },\\n  mounted() {\\n    this.fetchInventories();\\n  },\\n};\\n</script>\\n\\n<style>\\n/* 전체 페이지 스타일 */\\n.inventory-page {\\n  background-color: #FAFAFA;\\n  font-family: 'Roboto', sans-serif;\\n  padding: 20px;\\n}\\n\\n/* NAV, SECTION, FOOTER 공통 스타일 */\\n.nav-section, .inventory-section, .footer-section {\\n  background-color: #FFFFFF;\\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);\\n  border-radius: 8px;\\n  margin-bottom: 20px;\\n  padding: 20px;\\n}\\n\\n/* 테이블 스타일 */\\n.inventory-table {\\n  width: 100%;\\n  border-collapse: collapse;\\n}\\n\\n.inventory-table th, .inventory-table td {\\n  text-align: left;\\n  padding: 12px;\\n  border-bottom: 1px solid #E0E0E0;\\n}\\n\\n.thead-dark th {\\n  background-color: #4A4A4A;\\n  color: white;\\n}\\n\\n/* 제목 스타일 */\\n.section-title {\\n  margin-bottom: 20px;\\n  color: #32325D;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n/* 반응형 레이아웃 */\\n@media (min-width: 768px) {\\n  .section-area {\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n\\n  .inventory-section {\\n    flex-basis: 48%;\\n  }\\n}\\n</style>\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNTcwNTc1NiZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/MjkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyog7KCE7LK0IO2OmOydtOyngCDsiqTtg4DsnbwgKi9cXG4uaW52ZW50b3J5LXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIE5BViwgU0VDVElPTiwgRk9PVEVSIOqzte2GtSDsiqTtg4DsnbwgKi9cXG4ubmF2LXNlY3Rpb24sIC5pbnZlbnRvcnktc2VjdGlvbiwgLmZvb3Rlci1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIO2FjOydtOu4lCDsiqTtg4DsnbwgKi9cXG4uaW52ZW50b3J5LXRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLmludmVudG9yeS10YWJsZSB0aCwgLmludmVudG9yeS10YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUwO1xcbn1cXG4udGhlYWQtZGFyayB0aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0QTRBO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiDsoJzrqqkg7Iqk7YOA7J28ICovXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjMzIzMjVEO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyog67CY7J2R7ZiVIOugiOydtOyVhOybgyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbi5zZWN0aW9uLWFyZWEge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmludmVudG9yeS1zZWN0aW9uIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQ4JTtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDQ4JTtcXG59XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zZXVsbC9maW5hbC80dGVhbV9maW5hbF9NYWluVnVlL3Z1ZS1saWdodC1ib290c3RyYXAtZGFzaGJvYXJkLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9JbnZlbnRvcnlBbGwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4S0EsZ0JBQUE7QUFDQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0NBQ0E7O0FBRUEsaUNBQUE7QUFDQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0NBQ0E7O0FBRUEsYUFBQTtBQUNBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0NBQ0E7QUFFQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0NBQ0E7QUFFQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtDQUNBOztBQUVBLFlBQUE7QUFDQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7Q0FDQTs7QUFFQSxjQUFBO0FBQ0E7QUFDQTtJQUNBLHFCQUFBO0lBQUEscUJBQUE7SUFBQSxjQUFBO0lBQ0EsMEJBQUE7UUFBQSx1QkFBQTtZQUFBLCtCQUFBO0NBQ0E7QUFFQTtJQUNBLDZCQUFBO1FBQUEsZ0JBQUE7Q0FDQTtDQUNBXCIsXCJmaWxlXCI6XCJJbnZlbnRvcnlBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTU3MDU3NTYmbGFuZz1jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwiaW52ZW50b3J5LXBhZ2VcXFwiPlxcbiAgICA8IS0tIE5BViDsmIHsl606IOy0nSDsnqzqs6Ag7JqU7JW9IC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtc2VjdGlvblxcXCI+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj7soJztkojrs4Qg7LSdIOyerOqzoDwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImludmVudG9yeS10YWJsZVxcXCI+XFxuICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD7soJztkogg7J2066aEPC90aD5cXG4gICAgICAgICAgICA8dGg+7J6s6rOg65+JPC90aD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICA8dHIgdi1mb3I9XFxcIih0b3RhbCwgcHJvZHVjdE5hbWUsIGluZGV4KSBpbiBwYWdpbmF0ZWRUb3RhbEludmVudG9yeVxcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57eyBwcm9kdWN0TmFtZSB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IHRvdGFsIH196rCcPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFNFQ1RJT04g7JiB7JetOiDrk7HquInrs4Qg7J6s6rOgIOuqqeuhnSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1hcmVhXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktc2VjdGlvblxcXCIgdi1mb3I9XFxcIihncmFkZSwgaW5kZXgpIGluIGdyYWRlc1xcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj57eyBncmFkZSB9fSDrk7HquIkg6rO87J28PC9oMj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcbiAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImludmVudG9yeS10YWJsZVxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgIDx0aD7soJztkogg7J2066aEPC90aD5cXG4gICAgICAgICAgICAgIDx0aD7siJjrn4k8L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIocXVhbnRpdHksIHByb2R1Y3ROYW1lLCBpbmRleCkgaW4gcGFnaW5hdGVkR3JhZGVzSW52ZW50b3J5W2dyYWRlXVxcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgPHRkPnt7IHByb2R1Y3ROYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZD57eyBxdWFudGl0eSB9feqwnDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIEZPT1RFUiDsmIHsl606IOyerOqzoCDsg4HshLgg66qp66GdIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItc2VjdGlvblxcXCI+XFxuICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj7qs7zsnbwg7IOB7IS4IOuqqeuhnTwvaDQ+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImludmVudG9yeS10YWJsZVxcXCI+XFxuICAgICAgICAgIDx0aGVhZCBjbGFzcz1cXFwidGhlYWQtZGFya1xcXCI+XFxuICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGg+7IOB7ZKIIOydtOumhDwvdGg+XFxuICAgICAgICAgICAgPHRoPuyDge2SiCDsvZTrk5w8L3RoPlxcbiAgICAgICAgICAgIDx0aD7rk7HquIk8L3RoPlxcbiAgICAgICAgICAgIDx0aD7siJjrn4k8L3RoPlxcbiAgICAgICAgICAgIDx0aD7tjJDrp6Qg6rCA6rKpPC90aD5cXG4gICAgICAgICAgICA8dGg+7LC96rOgIOy9lOuTnDwvdGg+XFxuICAgICAgICAgICAgPHRoPuyerOqzoCDsnoXqs6Dsnbw8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgIDx0ciB2LWZvcj1cXFwiaW52ZW50b3J5IGluIHBhZ2luYXRlZEludmVudG9yaWVzXFxcIiA6a2V5PVxcXCJpbnZlbnRvcnkuZ29vZHNDb2RlXFxcIj5cXG4gICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5Lmdvb2RzTmFtZSB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5nb29kc0NvZGUgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBpbnZlbnRvcnkuZ29vZHNHcmFkZSB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5pbnZlbnRvcnlRdWFudGl0eSB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5zYWxlc1ByaWNlIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5LnN0b3JhZ2VDb2RlIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgbmV3IERhdGUoaW52ZW50b3J5LmZpcnN0U3RvY2tEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSB9fTwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuXFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaW52ZW50b3JpZXM6IFtdLFxcbiAgICAgIGdyYWRlczogWydBJywgJ0InLCAnQycsICftj5DquLAnXSxcXG4gICAgICBjdXJyZW50UGFnZToge1xcbiAgICAgICAgdG90YWw6IDEsXFxuICAgICAgICBkZXRhaWxzOiAxLFxcbiAgICAgICAgQTogMSxcXG4gICAgICAgIEI6IDEsXFxuICAgICAgICBDOiAxLFxcbiAgICAgICAg7Y+Q6riwOiAxLFxcbiAgICAgIH0sXFxuICAgICAgaXRlbXNQZXJQYWdlOiAxMCwgLy8gQWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG5lZWRcXG4gICAgfTtcXG4gIH0sXFxuICBjb21wdXRlZDoge1xcbiAgICB0b3RhbEludmVudG9yeUJ5UHJvZHVjdCgpIHtcXG4gICAgICBjb25zdCB0b3RhbHMgPSB7fTtcXG4gICAgICB0aGlzLmludmVudG9yaWVzLmZvckVhY2goaXRlbSA9PiB7XFxuICAgICAgICBpZiAoIXRvdGFsc1tpdGVtLmdvb2RzTmFtZV0pIHtcXG4gICAgICAgICAgdG90YWxzW2l0ZW0uZ29vZHNOYW1lXSA9IDA7XFxuICAgICAgICB9XFxuICAgICAgICB0b3RhbHNbaXRlbS5nb29kc05hbWVdICs9IHBhcnNlSW50KGl0ZW0uaW52ZW50b3J5UXVhbnRpdHksIDEwKTtcXG4gICAgICB9KTtcXG4gICAgICByZXR1cm4gdG90YWxzO1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRUb3RhbEludmVudG9yeSgpIHtcXG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLmN1cnJlbnRQYWdlLnRvdGFsIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlO1xcbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvdGFsSW52ZW50b3J5QnlQcm9kdWN0KVxcbiAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXFxuICAgICAgICAucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfSksIHt9KTtcXG4gICAgfSxcXG4gICAgYWdncmVnYXRlZEludmVudG9yaWVzKCkge1xcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xcbiAgICAgIHRoaXMuZ3JhZGVzLmZvckVhY2goZ3JhZGUgPT4ge1xcbiAgICAgICAgcmVzdWx0W2dyYWRlXSA9IHRoaXMuaW52ZW50b3JpZXNcXG4gICAgICAgICAgLmZpbHRlcihpbnZlbnRvcnkgPT4gaW52ZW50b3J5Lmdvb2RzR3JhZGUgPT09IGdyYWRlKVxcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgICAgICBpZiAoYWNjW2N1cnIuZ29vZHNOYW1lXSkge1xcbiAgICAgICAgICAgICAgYWNjW2N1cnIuZ29vZHNOYW1lXSArPSBwYXJzZUludChjdXJyLmludmVudG9yeVF1YW50aXR5LCAxMCk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIGFjY1tjdXJyLmdvb2RzTmFtZV0gPSBwYXJzZUludChjdXJyLmludmVudG9yeVF1YW50aXR5LCAxMCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgICAgIH0sIHt9KTtcXG4gICAgICB9KTtcXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRHcmFkZXNJbnZlbnRvcnkoKSB7XFxuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHt9O1xcbiAgICAgIGZvciAoY29uc3QgZ3JhZGUgb2YgdGhpcy5ncmFkZXMpIHtcXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMuY3VycmVudFBhZ2VbZ3JhZGVdIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5pdGVtc1BlclBhZ2U7XFxuICAgICAgICBwYWdpbmF0aW9uW2dyYWRlXSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuYWdncmVnYXRlZEludmVudG9yaWVzW2dyYWRlXSlcXG4gICAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXFxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5hY2MsIFtrZXldOiB2YWx1ZSB9KSwge30pO1xcbiAgICAgIH1cXG4gICAgICByZXR1cm4gcGFnaW5hdGlvbjtcXG4gICAgfSxcXG4gICAgcGFnaW5hdGVkSW52ZW50b3JpZXMoKSB7XFxuICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5jdXJyZW50UGFnZS5kZXRhaWxzIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICByZXR1cm4gdGhpcy5pbnZlbnRvcmllcy5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLml0ZW1zUGVyUGFnZSk7XFxuICAgIH0sXFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBmZXRjaEludmVudG9yaWVzKCkge1xcbiAgICAgIGF4aW9zLmdldCgnL2FwaS9pbnZlbnRvcmllcycpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgdGhpcy5pbnZlbnRvcmllcyA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xcbiAgICAgICAgY29uc29sZS5lcnJvcihcXFwi7J6s6rOgIOuqqeuhneydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC5cXFwiLCBlcnJvcik7XFxuICAgICAgfSk7XFxuICAgIH0sXFxuICAgIG5leHRQYWdlKHNlY3Rpb24pIHtcXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlW3NlY3Rpb25dKys7XFxuICAgIH0sXFxuICAgIHByZXZQYWdlKHNlY3Rpb24pIHtcXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVtzZWN0aW9uXSA+IDEpIHtcXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2Vbc2VjdGlvbl0tLTtcXG4gICAgICB9XFxuICAgIH0sXFxuICB9LFxcbiAgbW91bnRlZCgpIHtcXG4gICAgdGhpcy5mZXRjaEludmVudG9yaWVzKCk7XFxuICB9LFxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi8qIOyghOyytCDtjpjsnbTsp4Ag7Iqk7YOA7J28ICovXFxuLmludmVudG9yeS1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBOQVYsIFNFQ1RJT04sIEZPT1RFUiDqs7XthrUg7Iqk7YOA7J28ICovXFxuLm5hdi1zZWN0aW9uLCAuaW52ZW50b3J5LXNlY3Rpb24sIC5mb290ZXItc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIO2FjOydtOu4lCDsiqTtg4DsnbwgKi9cXG4uaW52ZW50b3J5LXRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLmludmVudG9yeS10YWJsZSB0aCwgLmludmVudG9yeS10YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFMEUwO1xcbn1cXG5cXG4udGhlYWQtZGFyayB0aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0QTRBO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiDsoJzrqqkg7Iqk7YOA7J28ICovXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjMzIzMjVEO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyog67CY7J2R7ZiVIOugiOydtOyVhOybgyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnNlY3Rpb24tYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5pbnZlbnRvcnktc2VjdGlvbiB7XFxuICAgIGZsZXgtYmFzaXM6IDQ4JTtcXG4gIH1cXG59XFxuPC9zdHlsZT5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\n");

/***/ })

})