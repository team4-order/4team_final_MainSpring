webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n/* 기본 페이지 설정 */\\n.inventory-page {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  max-width: 1200px;\\n  margin: 20px auto;\\n  padding: 20px;\\n}\\n\\n/* 헤더 설정 */\\n.inventory-header {\\n  -ms-flex-preferred-size: 100%;\\n      flex-basis: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-bottom: 40px;\\n}\\n.header-content {\\n  text-align: center;\\n}\\n\\n/* 전체 재고, 등급별 재고 및 상세 재고 카드 스타일 */\\n.inventory-card, .detailed-inventory-card {\\n  background: #fff;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 5px;\\n  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n          box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n  padding: 20px;\\n  margin-bottom: 20px;\\n  font-size: 1rem;\\n}\\n\\n/* 등급별 재고 박스 */\\n.grade-inventory-card {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 1 280px;\\n          flex: 1 1 280px; /* 박스 크기 조정 및 유연한 레이아웃을 위한 설정 */\\n  height: 300px; /* 박스 높이 조정 */\\n  margin-right: 20px; /* 박스 간의 오른쪽 여백 조정 */\\n}\\n\\n/* 마지막 등급별 재고 박스의 마진 조정 */\\n.grade-inventory-card:last-child {\\n  margin-right: 0;\\n}\\n\\n/* 상세 재고 목록 카드 스타일 */\\n.detailed-inventory-card {\\n  -ms-flex-preferred-size: 100%;\\n      flex-basis: 100%; /* 전체 너비 사용 */\\n  min-height: 400px; /* 상세 목록 높이 조정 */\\n  font-size: 0.9rem; /* 글자 크기 조정 */\\n}\\n\\n/* 테이블 및 페이지네이션 컨트롤 스타일 */\\n.table-responsive, .pagination-controls {\\n  margin-top: 20px;\\n}\\n.pagination-controls button {\\n  padding: 8px 15px;\\n  background: #f0f0f0;\\n  border: 1px solid #d0d0d0;\\n  cursor: pointer;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/InventoryAll.vue\"],\"names\":[],\"mappings\":\";AAkMA,eAAA;AACA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,oBAAA;MAAA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;CACA;;AAEA,WAAA;AACA;EACA,8BAAA;MAAA,iBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,mBAAA;CACA;;AAEA,kCAAA;AACA;EACA,iBAAA;EACA,0BAAA;EACA,mBAAA;EACA,8CAAA;UAAA,sCAAA;EACA,cAAA;EACA,oBAAA;EACA,gBAAA;CACA;;AAEA,eAAA;AACA;EACA,oBAAA;MAAA,oBAAA;UAAA,gBAAA,CAAA,gCAAA;EACA,cAAA,CAAA,cAAA;EACA,mBAAA,CAAA,qBAAA;CACA;;AAEA,0BAAA;AACA;EACA,gBAAA;CACA;;AAEA,qBAAA;AACA;EACA,8BAAA;MAAA,iBAAA,CAAA,cAAA;EACA,kBAAA,CAAA,iBAAA;EACA,kBAAA,CAAA,cAAA;CACA;;AAEA,0BAAA;AACA;EACA,iBAAA;CACA;AAEA;EACA,kBAAA;EACA,oBAAA;EACA,0BAAA;EACA,gBAAA;CACA\",\"file\":\"InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\",\"sourcesContent\":[\"<template>\\n<div class=\\\"inventory-page\\\">\\n  <div>\\n    <section class=\\\"inventory-card total-inventory-card\\\">\\n      <h2 class=\\\"section-title\\\">제품별 총 재고</h2>\\n      <div class=\\\"table-responsive\\\">\\n        <table class=\\\"table-hover table-striped\\\">\\n          <thead>\\n          <tr>\\n            <th>제품 이름</th>\\n            <th>재고량</th>\\n          </tr>\\n          </thead>\\n          <tbody>\\n          <tr v-for=\\\"(total, productName, index) in paginatedTotalInventory\\\" :key=\\\"index\\\">\\n            <td>{{ productName }}</td>\\n            <td>{{ total }}개</td>\\n          </tr>\\n          </tbody>\\n        </table>\\n      </div>\\n      <div class=\\\"pagination-controls\\\">\\n        <button @click=\\\"prevPage('total')\\\">이전</button>\\n        <button @click=\\\"nextPage('total')\\\">다음</button>\\n      </div>\\n    </section>\\n  </div>\\n  <div class=\\\"inventory-header\\\">\\n    <div class=\\\"header-content\\\">\\n      <p class=\\\"inventory-subtitle\\\">전체 재고 현황</p>\\n    </div>\\n  </div>\\n\\n  <div class=\\\"inventory-content\\\">\\n    <div class=\\\"inventory-sections\\\">\\n      <section class=\\\"inventory-card grade-inventory-card\\\" v-for=\\\"(grade, index) in grades\\\" :key=\\\"index\\\">\\n        <h2 class=\\\"section-title\\\">{{ grade }} 등급 재고</h2>\\n        <div class=\\\"table-responsive\\\">\\n          <table class=\\\"table-hover table-striped\\\">\\n            <thead>\\n            <tr>\\n              <th>제품 이름</th>\\n              <th>수량</th>\\n            </tr>\\n            </thead>\\n            <tbody>\\n            <tr v-for=\\\"(quantity, productName, index) in paginatedGradesInventory[grade]\\\" :key=\\\"index\\\">\\n              <td>{{ productName }}</td>\\n              <td>{{ quantity }}개</td>\\n            </tr>\\n            </tbody>\\n          </table>\\n        </div>\\n        <div class=\\\"pagination-controls\\\">\\n          <button @click=\\\"prevPage(grade)\\\">이전</button>\\n          <button @click=\\\"nextPage(grade)\\\">다음</button>\\n        </div>\\n      </section>\\n\\n      <div class=\\\"inventory-table-section\\\">\\n        <div class=\\\"card detailed-inventory-card\\\">\\n          <div class=\\\"card-header\\\">\\n            <h4 class=\\\"card-title\\\">재고 상세 목록</h4>\\n          </div>\\n          <div class=\\\"table-responsive\\\">\\n            <table class=\\\"table inventory-table\\\">\\n              <thead class=\\\"thead-dark\\\">\\n              <tr>\\n                <th>상품 이름</th>\\n                <th>상품 코드</th>\\n                <th>등급</th>\\n                <th>수량</th>\\n                <th>판매 가격</th>\\n                <th>창고 코드</th>\\n                <th>재고 입고일</th>\\n              </tr>\\n              </thead>\\n              <tbody>\\n              <tr v-for=\\\"inventory in paginatedInventories\\\" :key=\\\"inventory.goodsCode\\\">\\n                <td>{{ inventory.goodsName }}</td>\\n                <td>{{ inventory.goodsCode }}</td>\\n                <td>{{ inventory.goodsGrade }}</td>\\n                <td>{{ inventory.inventoryQuantity }}</td>\\n                <td>{{ inventory.salesPrice }}</td>\\n                <td>{{ inventory.storageCode }}</td>\\n                <td>{{ new Date(inventory.firstStockDate).toLocaleDateString() }}</td>\\n              </tr>\\n              </tbody>\\n            </table>\\n          </div>\\n          <div class=\\\"pagination-controls\\\">\\n            <button @click=\\\"prevPage('details')\\\">이전</button>\\n            <button @click=\\\"nextPage('details')\\\">다음</button>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n</template>\\n\\n<script>\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      inventories: [],\\n      grades: ['A', 'B', 'C', '폐기'],\\n      currentPage: {\\n        total: 1,\\n        details: 1,\\n        A: 1,\\n        B: 1,\\n        C: 1,\\n        폐기: 1,\\n      },\\n      itemsPerPage: 10, // Adjust according to your need\\n    };\\n  },\\n  computed: {\\n    totalInventoryByProduct() {\\n      const totals = {};\\n      this.inventories.forEach(item => {\\n        if (!totals[item.goodsName]) {\\n          totals[item.goodsName] = 0;\\n        }\\n        totals[item.goodsName] += parseInt(item.inventoryQuantity, 10);\\n      });\\n      return totals;\\n    },\\n    paginatedTotalInventory() {\\n      const start = (this.currentPage.total - 1) * this.itemsPerPage;\\n      const end = start + this.itemsPerPage;\\n      return Object.entries(this.totalInventoryByProduct)\\n        .slice(start, end)\\n        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n    },\\n    aggregatedInventories() {\\n      const result = {};\\n      this.grades.forEach(grade => {\\n        result[grade] = this.inventories\\n          .filter(inventory => inventory.goodsGrade === grade)\\n          .reduce((acc, curr) => {\\n            if (acc[curr.goodsName]) {\\n              acc[curr.goodsName] += parseInt(curr.inventoryQuantity, 10);\\n            } else {\\n              acc[curr.goodsName] = parseInt(curr.inventoryQuantity, 10);\\n            }\\n            return acc;\\n          }, {});\\n      });\\n      return result;\\n    },\\n    paginatedGradesInventory() {\\n      const pagination = {};\\n      for (const grade of this.grades) {\\n        const start = (this.currentPage[grade] - 1) * this.itemsPerPage;\\n        const end = start + this.itemsPerPage;\\n        pagination[grade] = Object.entries(this.aggregatedInventories[grade])\\n          .slice(start, end)\\n          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n      }\\n      return pagination;\\n    },\\n    paginatedInventories() {\\n      const start = (this.currentPage.details - 1) * this.itemsPerPage;\\n      return this.inventories.slice(start, start + this.itemsPerPage);\\n    },\\n  },\\n  methods: {\\n    fetchInventories() {\\n      axios.get('/api/inventories').then(response => {\\n        this.inventories = response.data;\\n      }).catch(error => {\\n        console.error(\\\"재고 목록을 가져오는 데 실패했습니다.\\\", error);\\n      });\\n    },\\n    nextPage(section) {\\n      this.currentPage[section]++;\\n    },\\n    prevPage(section) {\\n      if (this.currentPage[section] > 1) {\\n        this.currentPage[section]--;\\n      }\\n    },\\n  },\\n  mounted() {\\n    this.fetchInventories();\\n  },\\n};\\n</script>\\n\\n<style>\\n/* 기본 페이지 설정 */\\n.inventory-page {\\n  display: flex;\\n  flex-wrap: wrap;\\n  max-width: 1200px;\\n  margin: 20px auto;\\n  padding: 20px;\\n}\\n\\n/* 헤더 설정 */\\n.inventory-header {\\n  flex-basis: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 40px;\\n}\\n\\n.header-content {\\n  text-align: center;\\n}\\n\\n/* 전체 재고, 등급별 재고 및 상세 재고 카드 스타일 */\\n.inventory-card, .detailed-inventory-card {\\n  background: #fff;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 5px;\\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n  padding: 20px;\\n  margin-bottom: 20px;\\n  font-size: 1rem;\\n}\\n\\n/* 등급별 재고 박스 */\\n.grade-inventory-card {\\n  flex: 1 1 280px; /* 박스 크기 조정 및 유연한 레이아웃을 위한 설정 */\\n  height: 300px; /* 박스 높이 조정 */\\n  margin-right: 20px; /* 박스 간의 오른쪽 여백 조정 */\\n}\\n\\n/* 마지막 등급별 재고 박스의 마진 조정 */\\n.grade-inventory-card:last-child {\\n  margin-right: 0;\\n}\\n\\n/* 상세 재고 목록 카드 스타일 */\\n.detailed-inventory-card {\\n  flex-basis: 100%; /* 전체 너비 사용 */\\n  min-height: 400px; /* 상세 목록 높이 조정 */\\n  font-size: 0.9rem; /* 글자 크기 조정 */\\n}\\n\\n/* 테이블 및 페이지네이션 컨트롤 스타일 */\\n.table-responsive, .pagination-controls {\\n  margin-top: 20px;\\n}\\n\\n.pagination-controls button {\\n  padding: 8px 15px;\\n  background: #f0f0f0;\\n  border: 1px solid #d0d0d0;\\n  cursor: pointer;\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNTcwNTc1NiZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/MjkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyog6riw67O4IO2OmOydtOyngCDshKTsoJUgKi9cXG4uaW52ZW50b3J5LXBhZ2Uge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiDtl6TrjZQg7ISk7KCVICovXFxuLmludmVudG9yeS1oZWFkZXIge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4uaGVhZGVyLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiDsoITssrQg7J6s6rOgLCDrk7HquInrs4Qg7J6s6rOgIOuwjyDsg4HshLgg7J6s6rOgIOy5tOuTnCDsiqTtg4DsnbwgKi9cXG4uaW52ZW50b3J5LWNhcmQsIC5kZXRhaWxlZC1pbnZlbnRvcnktY2FyZCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiDrk7HquInrs4Qg7J6s6rOgIOuwleyKpCAqL1xcbi5ncmFkZS1pbnZlbnRvcnktY2FyZCB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxIDEgMjgwcHg7XFxuICAgICAgICAgIGZsZXg6IDEgMSAyODBweDsgLyog67CV7IqkIO2BrOq4sCDsobDsoJUg67CPIOycoOyXsO2VnCDroIjsnbTslYTsm4PsnYQg7JyE7ZWcIOyEpOyglSAqL1xcbiAgaGVpZ2h0OiAzMDBweDsgLyog67CV7IqkIOuGkuydtCDsobDsoJUgKi9cXG4gIG1hcmdpbi1yaWdodDogMjBweDsgLyog67CV7IqkIOqwhOydmCDsmKTrpbjsqr0g7Jes67CxIOyhsOyglSAqL1xcbn1cXG5cXG4vKiDrp4jsp4Drp4kg65Ox6riJ67OEIOyerOqzoCDrsJXsiqTsnZgg66eI7KeEIOyhsOyglSAqL1xcbi5ncmFkZS1pbnZlbnRvcnktY2FyZDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLyog7IOB7IS4IOyerOqzoCDrqqnroZ0g7Lm065OcIOyKpO2DgOydvCAqL1xcbi5kZXRhaWxlZC1pbnZlbnRvcnktY2FyZCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlOyAvKiDsoITssrQg64SI67mEIOyCrOyaqSAqL1xcbiAgbWluLWhlaWdodDogNDAwcHg7IC8qIOyDgeyEuCDrqqnroZ0g64aS7J20IOyhsOyglSAqL1xcbiAgZm9udC1zaXplOiAwLjlyZW07IC8qIOq4gOyekCDtgazquLAg7KGw7KCVICovXFxufVxcblxcbi8qIO2FjOydtOu4lCDrsI8g7Y6Y7J207KeA64Sk7J207IWYIOy7qO2KuOuhpCDsiqTtg4DsnbwgKi9cXG4udGFibGUtcmVzcG9uc2l2ZSwgLnBhZ2luYXRpb24tY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnBhZ2luYXRpb24tY29udHJvbHMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zZXVsbC9maW5hbC80dGVhbV9maW5hbF9NYWluVnVlL3Z1ZS1saWdodC1ib290c3RyYXAtZGFzaGJvYXJkLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9JbnZlbnRvcnlBbGwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrTUEsZUFBQTtBQUNBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSxvQkFBQTtNQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7Q0FDQTs7QUFFQSxXQUFBO0FBQ0E7RUFDQSw4QkFBQTtNQUFBLGlCQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSwwQkFBQTtNQUFBLHVCQUFBO1VBQUEsK0JBQUE7RUFDQSwwQkFBQTtNQUFBLHVCQUFBO1VBQUEsb0JBQUE7RUFDQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtDQUNBOztBQUVBLGtDQUFBO0FBQ0E7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7Q0FDQTs7QUFFQSxlQUFBO0FBQ0E7RUFDQSxvQkFBQTtNQUFBLG9CQUFBO1VBQUEsZ0JBQUEsQ0FBQSxnQ0FBQTtFQUNBLGNBQUEsQ0FBQSxjQUFBO0VBQ0EsbUJBQUEsQ0FBQSxxQkFBQTtDQUNBOztBQUVBLDBCQUFBO0FBQ0E7RUFDQSxnQkFBQTtDQUNBOztBQUVBLHFCQUFBO0FBQ0E7RUFDQSw4QkFBQTtNQUFBLGlCQUFBLENBQUEsY0FBQTtFQUNBLGtCQUFBLENBQUEsaUJBQUE7RUFDQSxrQkFBQSxDQUFBLGNBQUE7Q0FDQTs7QUFFQSwwQkFBQTtBQUNBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52ZW50b3J5QWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE1NzA1NzU2Jmxhbmc9Y3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG48ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktcGFnZVxcXCI+XFxuICA8ZGl2PlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiaW52ZW50b3J5LWNhcmQgdG90YWwtaW52ZW50b3J5LWNhcmRcXFwiPlxcbiAgICAgIDxoMiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCI+7KCc7ZKI67OEIOy0nSDsnqzqs6A8L2gyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkXFxcIj5cXG4gICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoPuygnO2SiCDsnbTrpoQ8L3RoPlxcbiAgICAgICAgICAgIDx0aD7snqzqs6Drn4k8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgIDx0ciB2LWZvcj1cXFwiKHRvdGFsLCBwcm9kdWN0TmFtZSwgaW5kZXgpIGluIHBhZ2luYXRlZFRvdGFsSW52ZW50b3J5XFxcIiA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgPHRkPnt7IHByb2R1Y3ROYW1lIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgdG90YWwgfX3qsJw8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJwcmV2UGFnZSgndG90YWwnKVxcXCI+7J207KCEPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwibmV4dFBhZ2UoJ3RvdGFsJylcXFwiPuuLpOydjDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImludmVudG9yeS1zdWJ0aXRsZVxcXCI+7KCE7LK0IOyerOqzoCDtmITtmak8L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1zZWN0aW9uc1xcXCI+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImludmVudG9yeS1jYXJkIGdyYWRlLWludmVudG9yeS1jYXJkXFxcIiB2LWZvcj1cXFwiKGdyYWRlLCBpbmRleCkgaW4gZ3JhZGVzXFxcIiA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb24tdGl0bGVcXFwiPnt7IGdyYWRlIH19IOuTseq4iSDsnqzqs6A8L2gyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgIDx0aD7soJztkogg7J2066aEPC90aD5cXG4gICAgICAgICAgICAgIDx0aD7siJjrn4k8L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCIocXVhbnRpdHksIHByb2R1Y3ROYW1lLCBpbmRleCkgaW4gcGFnaW5hdGVkR3JhZGVzSW52ZW50b3J5W2dyYWRlXVxcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgPHRkPnt7IHByb2R1Y3ROYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZD57eyBxdWFudGl0eSB9feqwnDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcInByZXZQYWdlKGdyYWRlKVxcXCI+7J207KCEPC9idXR0b24+XFxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJuZXh0UGFnZShncmFkZSlcXFwiPuuLpOydjDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9zZWN0aW9uPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS10YWJsZS1zZWN0aW9uXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgZGV0YWlsZWQtaW52ZW50b3J5LWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj7snqzqs6Ag7IOB7IS4IOuqqeuhnTwvaDQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIGludmVudG9yeS10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICA8dGhlYWQgY2xhc3M9XFxcInRoZWFkLWRhcmtcXFwiPlxcbiAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGg+7IOB7ZKIIOydtOumhDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD7sg4Htkogg7L2U65OcPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPuuTseq4iTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD7siJjrn4k8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGg+7YyQ66ekIOqwgOqyqTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD7ssL3qs6Ag7L2U65OcPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPuyerOqzoCDsnoXqs6Dsnbw8L3RoPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcImludmVudG9yeSBpbiBwYWdpbmF0ZWRJbnZlbnRvcmllc1xcXCIgOmtleT1cXFwiaW52ZW50b3J5Lmdvb2RzQ29kZVxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBpbnZlbnRvcnkuZ29vZHNOYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5nb29kc0NvZGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5Lmdvb2RzR3JhZGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5LmludmVudG9yeVF1YW50aXR5IH19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5zYWxlc1ByaWNlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5zdG9yYWdlQ29kZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD57eyBuZXcgRGF0ZShpbnZlbnRvcnkuZmlyc3RTdG9ja0RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19PC90ZD5cXG4gICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwicHJldlBhZ2UoJ2RldGFpbHMnKVxcXCI+7J207KCEPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcIm5leHRQYWdlKCdkZXRhaWxzJylcXFwiPuuLpOydjDwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaW52ZW50b3JpZXM6IFtdLFxcbiAgICAgIGdyYWRlczogWydBJywgJ0InLCAnQycsICftj5DquLAnXSxcXG4gICAgICBjdXJyZW50UGFnZToge1xcbiAgICAgICAgdG90YWw6IDEsXFxuICAgICAgICBkZXRhaWxzOiAxLFxcbiAgICAgICAgQTogMSxcXG4gICAgICAgIEI6IDEsXFxuICAgICAgICBDOiAxLFxcbiAgICAgICAg7Y+Q6riwOiAxLFxcbiAgICAgIH0sXFxuICAgICAgaXRlbXNQZXJQYWdlOiAxMCwgLy8gQWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG5lZWRcXG4gICAgfTtcXG4gIH0sXFxuICBjb21wdXRlZDoge1xcbiAgICB0b3RhbEludmVudG9yeUJ5UHJvZHVjdCgpIHtcXG4gICAgICBjb25zdCB0b3RhbHMgPSB7fTtcXG4gICAgICB0aGlzLmludmVudG9yaWVzLmZvckVhY2goaXRlbSA9PiB7XFxuICAgICAgICBpZiAoIXRvdGFsc1tpdGVtLmdvb2RzTmFtZV0pIHtcXG4gICAgICAgICAgdG90YWxzW2l0ZW0uZ29vZHNOYW1lXSA9IDA7XFxuICAgICAgICB9XFxuICAgICAgICB0b3RhbHNbaXRlbS5nb29kc05hbWVdICs9IHBhcnNlSW50KGl0ZW0uaW52ZW50b3J5UXVhbnRpdHksIDEwKTtcXG4gICAgICB9KTtcXG4gICAgICByZXR1cm4gdG90YWxzO1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRUb3RhbEludmVudG9yeSgpIHtcXG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLmN1cnJlbnRQYWdlLnRvdGFsIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlO1xcbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvdGFsSW52ZW50b3J5QnlQcm9kdWN0KVxcbiAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXFxuICAgICAgICAucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfSksIHt9KTtcXG4gICAgfSxcXG4gICAgYWdncmVnYXRlZEludmVudG9yaWVzKCkge1xcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xcbiAgICAgIHRoaXMuZ3JhZGVzLmZvckVhY2goZ3JhZGUgPT4ge1xcbiAgICAgICAgcmVzdWx0W2dyYWRlXSA9IHRoaXMuaW52ZW50b3JpZXNcXG4gICAgICAgICAgLmZpbHRlcihpbnZlbnRvcnkgPT4gaW52ZW50b3J5Lmdvb2RzR3JhZGUgPT09IGdyYWRlKVxcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgICAgICBpZiAoYWNjW2N1cnIuZ29vZHNOYW1lXSkge1xcbiAgICAgICAgICAgICAgYWNjW2N1cnIuZ29vZHNOYW1lXSArPSBwYXJzZUludChjdXJyLmludmVudG9yeVF1YW50aXR5LCAxMCk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIGFjY1tjdXJyLmdvb2RzTmFtZV0gPSBwYXJzZUludChjdXJyLmludmVudG9yeVF1YW50aXR5LCAxMCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgICAgIH0sIHt9KTtcXG4gICAgICB9KTtcXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRHcmFkZXNJbnZlbnRvcnkoKSB7XFxuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHt9O1xcbiAgICAgIGZvciAoY29uc3QgZ3JhZGUgb2YgdGhpcy5ncmFkZXMpIHtcXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMuY3VycmVudFBhZ2VbZ3JhZGVdIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5pdGVtc1BlclBhZ2U7XFxuICAgICAgICBwYWdpbmF0aW9uW2dyYWRlXSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuYWdncmVnYXRlZEludmVudG9yaWVzW2dyYWRlXSlcXG4gICAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXFxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5hY2MsIFtrZXldOiB2YWx1ZSB9KSwge30pO1xcbiAgICAgIH1cXG4gICAgICByZXR1cm4gcGFnaW5hdGlvbjtcXG4gICAgfSxcXG4gICAgcGFnaW5hdGVkSW52ZW50b3JpZXMoKSB7XFxuICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5jdXJyZW50UGFnZS5kZXRhaWxzIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICByZXR1cm4gdGhpcy5pbnZlbnRvcmllcy5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLml0ZW1zUGVyUGFnZSk7XFxuICAgIH0sXFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBmZXRjaEludmVudG9yaWVzKCkge1xcbiAgICAgIGF4aW9zLmdldCgnL2FwaS9pbnZlbnRvcmllcycpLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgdGhpcy5pbnZlbnRvcmllcyA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xcbiAgICAgICAgY29uc29sZS5lcnJvcihcXFwi7J6s6rOgIOuqqeuhneydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC5cXFwiLCBlcnJvcik7XFxuICAgICAgfSk7XFxuICAgIH0sXFxuICAgIG5leHRQYWdlKHNlY3Rpb24pIHtcXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlW3NlY3Rpb25dKys7XFxuICAgIH0sXFxuICAgIHByZXZQYWdlKHNlY3Rpb24pIHtcXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVtzZWN0aW9uXSA+IDEpIHtcXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2Vbc2VjdGlvbl0tLTtcXG4gICAgICB9XFxuICAgIH0sXFxuICB9LFxcbiAgbW91bnRlZCgpIHtcXG4gICAgdGhpcy5mZXRjaEludmVudG9yaWVzKCk7XFxuICB9LFxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi8qIOq4sOuzuCDtjpjsnbTsp4Ag7ISk7KCVICovXFxuLmludmVudG9yeS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyog7Zek642UIOyEpOyglSAqL1xcbi5pbnZlbnRvcnktaGVhZGVyIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIOyghOyytCDsnqzqs6AsIOuTseq4ieuzhCDsnqzqs6Ag67CPIOyDgeyEuCDsnqzqs6Ag7Lm065OcIOyKpO2DgOydvCAqL1xcbi5pbnZlbnRvcnktY2FyZCwgLmRldGFpbGVkLWludmVudG9yeS1jYXJkIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiDrk7HquInrs4Qg7J6s6rOgIOuwleyKpCAqL1xcbi5ncmFkZS1pbnZlbnRvcnktY2FyZCB7XFxuICBmbGV4OiAxIDEgMjgwcHg7IC8qIOuwleyKpCDtgazquLAg7KGw7KCVIOuwjyDsnKDsl7DtlZwg66CI7J207JWE7JuD7J2EIOychO2VnCDshKTsoJUgKi9cXG4gIGhlaWdodDogMzAwcHg7IC8qIOuwleyKpCDrhpLsnbQg7KGw7KCVICovXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IC8qIOuwleyKpCDqsITsnZgg7Jik66W47Kq9IOyXrOuwsSDsobDsoJUgKi9cXG59XFxuXFxuLyog66eI7KeA66eJIOuTseq4ieuzhCDsnqzqs6Ag67CV7Iqk7J2YIOuniOynhCDsobDsoJUgKi9cXG4uZ3JhZGUtaW52ZW50b3J5LWNhcmQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qIOyDgeyEuCDsnqzqs6Ag66qp66GdIOy5tOuTnCDsiqTtg4DsnbwgKi9cXG4uZGV0YWlsZWQtaW52ZW50b3J5LWNhcmQge1xcbiAgZmxleC1iYXNpczogMTAwJTsgLyog7KCE7LK0IOuEiOu5hCDsgqzsmqkgKi9cXG4gIG1pbi1oZWlnaHQ6IDQwMHB4OyAvKiDsg4HshLgg66qp66GdIOuGkuydtCDsobDsoJUgKi9cXG4gIGZvbnQtc2l6ZTogMC45cmVtOyAvKiDquIDsnpAg7YGs6riwIOyhsOyglSAqL1xcbn1cXG5cXG4vKiDthYzsnbTruJQg67CPIO2OmOydtOyngOuEpOydtOyFmCDsu6jtirjroaQg7Iqk7YOA7J28ICovXFxuLnRhYmxlLXJlc3BvbnNpdmUsIC5wYWdpbmF0aW9uLWNvbnRyb2xzIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wYWdpbmF0aW9uLWNvbnRyb2xzIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\n");

/***/ })

})