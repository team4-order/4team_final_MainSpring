webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n/* 전체 페이지와 헤더 스타일 조정 */\\n.inventory-page {\\n  max-width: 1200px;\\n  margin: 20px auto;\\n  padding: 20px;\\n}\\n.inventory-header, .inventory-content, .inventory-sections, .inventory-table-section {\\n  margin-bottom: 20px;\\n}\\n\\n/* 섹션 카드 스타일 */\\n.inventory-card {\\n  background: #fff;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 5px;\\n  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n          box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n  padding: 10px; /* 패딩 줄임 */\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  font-size: 0.8rem; /* 글자 크기 줄임 */\\n}\\n\\n/* 스크롤 적용 부분 조정 */\\n.scrollable-content {\\n  overflow-y: auto;\\n  max-height: 150px; /* 섹션 높이 줄임 */\\n}\\n\\n/* 테이블 섹션 스타일 유지 */\\n.detailed-inventory-card {\\n  min-height: 400px; /* 상세 목록 높이 조정 */\\n}\\n\\n/* 페이지네이션 컨트롤 스타일 */\\n.pagination-controls {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  margin-top: auto;\\n}\\n.pagination-controls button {\\n  margin: 0 5px;\\n  padding: 5px 10px;\\n  background: #f0f0f0;\\n  border: 1px solid #d0d0d0;\\n  cursor: pointer;\\n}\\n\\n/* 섹션 가로 배열 */\\n.inventory-sections {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n.total-inventory-card, .grade-inventory-card {\\n  width: calc(10% - 10px); /* 각 카드의 너비 조정 */\\n  margin-bottom: 20px; /* 마진으로 카드 사이 간격 조정 */\\n}\\n\\n/* 상세 재고 목록 박스 스타일 조정 */\\n.inventory-table-section {\\n  width: 100%; /* 너비를 100%로 조정하여 전체 너비를 차지하도록 함 */\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1;\\n          flex: 1; /* flex 항목으로 만들어 자동으로 높이 조정이 가능하게 함 */\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column; /* 자식 요소들이 세로로 배열되도록 함 */\\n}\\n/// 헤더 영역 스타일 조정\\n.inventory-header {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-bottom: 40px;\\n}\\n.header-content {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1;\\n          flex: 1;\\n}\\n\\n/* 제품별 총 재고 목록 스타일 조정 */\\n.total-inventory-card {\\n  width: 600px; /* 너비 자동 조정 */\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1;\\n          flex: 1;\\n  margin-left: 20px; /* 헤더와의 간격 조정 */\\n  padding: 10px;\\n  font-size: 0.9rem; /* 글자 크기 추가 조정 */\\n  max-height: 400px; /* 높이 조정 */\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/InventoryAll.vue\"],\"names\":[],\"mappings\":\";AAuLA,uBAAA;AACA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;CACA;AAEA;EACA,oBAAA;CACA;;AAEA,eAAA;AACA;EACA,iBAAA;EACA,0BAAA;EACA,mBAAA;EACA,8CAAA;UAAA,sCAAA;EACA,cAAA,CAAA,WAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,kBAAA,CAAA,cAAA;CACA;;AAEA,kBAAA;AACA;EACA,iBAAA;EACA,kBAAA,CAAA,cAAA;CACA;;AAEA,mBAAA;AACA;EACA,kBAAA,CAAA,iBAAA;CACA;;AAEA,oBAAA;AACA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,0BAAA;EACA,gBAAA;CACA;;AAEA,cAAA;AACA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,oBAAA;MAAA,gBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;CACA;AAEA;EACA,wBAAA,CAAA,iBAAA;EACA,oBAAA,CAAA,sBAAA;CACA;;AAEA,wBAAA;AACA;EACA,YAAA,CAAA,mCAAA;EACA,oBAAA;MAAA,YAAA;UAAA,QAAA,CAAA,sCAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA,CAAA,yBAAA;CACA;AAEA;;EAEA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,oBAAA;MAAA,YAAA;UAAA,QAAA;CACA;;AAEA,wBAAA;AACA;EACA,aAAA,CAAA,cAAA;EACA,oBAAA;MAAA,YAAA;UAAA,QAAA;EACA,kBAAA,CAAA,gBAAA;EACA,cAAA;EACA,kBAAA,CAAA,iBAAA;EACA,kBAAA,CAAA,WAAA;CACA\",\"file\":\"InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"inventory-page\\\">\\n    <!-- Header Section with Total Inventory Section -->\\n    <div class=\\\"inventory-header\\\">\\n      <div class=\\\"header-content\\\">\\n        <h1 class=\\\"inventory-title\\\">재고 목록19</h1>\\n        <p class=\\\"inventory-subtitle\\\">전체 재고 현황</p>\\n      </div>\\n      <section class=\\\"inventory-card total-inventory-card\\\">\\n        <h2 class=\\\"section-title\\\">제품별 총 재고</h2>\\n        <div class=\\\"inventory-items scrollable-content\\\">\\n          <div class=\\\"inventory-item\\\" v-for=\\\"(total, productName, index) in paginatedTotalInventory\\\" :key=\\\"index\\\">\\n            <h4>{{ productName }}</h4>\\n            <span>{{ total }}개</span>\\n          </div>\\n        </div>\\n        <!-- Pagination Controls -->\\n        <div class=\\\"pagination-controls\\\">\\n          <button @click=\\\"prevPage('total')\\\">이전</button>\\n          <button @click=\\\"nextPage('total')\\\">다음</button>\\n        </div>\\n      </section>\\n    </div>\\n\\n    <!-- Remaining Inventory Sections -->\\n    <div class=\\\"inventory-content\\\">\\n      <div class=\\\"inventory-sections\\\">\\n        <!-- Grade Inventory List Section -->\\n        <section class=\\\"inventory-card grade-inventory-card\\\" v-for=\\\"(grade, index) in grades\\\" :key=\\\"index\\\">\\n          <h2 class=\\\"section-title\\\">{{ grade }} 등급 재고</h2>\\n          <ul class=\\\"inventory-list scrollable-content\\\">\\n            <li v-for=\\\"(quantity, productName, index) in paginatedGradesInventory[grade]\\\" :key=\\\"index\\\">\\n              {{ productName }} - {{ quantity }}개\\n            </li>\\n          </ul>\\n          <!-- Pagination Controls -->\\n          <div class=\\\"pagination-controls\\\">\\n            <button @click=\\\"prevPage(grade)\\\">이전</button>\\n            <button @click=\\\"nextPage(grade)\\\">다음</button>\\n          </div>\\n        </section>\\n\\n        <!-- Inventory Table Section -->\\n        <div class=\\\"inventory-table-section\\\">\\n          <div class=\\\"card detailed-inventory-card\\\">\\n            <div class=\\\"card-header\\\">\\n              <h4 class=\\\"card-title\\\">재고 상세 목록</h4>\\n            </div>\\n            <div class=\\\"table-responsive scrollable-content\\\">\\n              <table class=\\\"table inventory-table\\\">\\n                <thead class=\\\"thead-dark\\\">\\n                <tr>\\n                  <th>상품 이름</th>\\n                  <th>상품 코드</th>\\n                  <th>등급</th>\\n                  <th>수량</th>\\n                  <th>판매 가격</th>\\n                  <th>창고 코드</th>\\n                  <th>재고 입고일</th>\\n                </tr>\\n                </thead>\\n                <tbody>\\n                <tr v-for=\\\"inventory in paginatedInventories\\\" :key=\\\"inventory.goodsCode\\\">\\n                  <td>{{ inventory.goodsName }}</td>\\n                  <td>{{ inventory.goodsCode }}</td>\\n                  <td>{{ inventory.goodsGrade }}</td>\\n                  <td>{{ inventory.inventoryQuantity }}</td>\\n                  <td>{{ inventory.salesPrice }}</td>\\n                  <td>{{ inventory.storageCode }}</td>\\n                  <td>{{ new Date(inventory.firstStockDate).toLocaleDateString() }}</td>\\n                </tr>\\n                </tbody>\\n              </table>\\n            </div>\\n            <!-- Pagination Controls -->\\n            <div class=\\\"pagination-controls\\\">\\n              <button @click=\\\"prevPage('details')\\\">이전</button>\\n              <button @click=\\\"nextPage('details')\\\">다음</button>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n\\n<script>\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      inventories: [],\\n      grades: ['A', 'B', 'C', '폐기'],\\n      currentPage: {\\n        total: 1,\\n        details: 1,\\n        A: 1,\\n        B: 1,\\n        C: 1,\\n        폐기: 1,\\n      },\\n      itemsPerPage: 4,\\n      detailsPerPage: 10,\\n    };\\n  },\\n  computed: {\\n    // 전체 제품별 총 재고 수량 계산\\n    totalInventoryByProduct() {\\n      const totals = {};\\n      this.inventories.forEach(item => {\\n        if (!totals[item.goodsName]) {\\n          totals[item.goodsName] = 0;\\n        }\\n        totals[item.goodsName] += parseInt(item.inventoryQuantity, 10);\\n      });\\n      return totals;\\n    },\\n    paginatedTotalInventory() {\\n      const start = (this.currentPage.total - 1) * this.itemsPerPage;\\n      const end = start + this.itemsPerPage;\\n      return Object.entries(this.totalInventoryByProduct)\\n        .slice(start, end)\\n        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n    },\\n    // 등급별로 각 제품의 재고 수량 합산\\n    aggregatedInventories() {\\n      const result = {};\\n      this.grades.forEach(grade => {\\n        result[grade] = this.inventories\\n          .filter(inventory => inventory.goodsGrade === grade)\\n          .reduce((acc, curr) => {\\n            if (acc[curr.goodsName]) {\\n              acc[curr.goodsName] += parseInt(curr.inventoryQuantity, 10);\\n            } else {\\n              acc[curr.goodsName] = parseInt(curr.inventoryQuantity, 10);\\n            }\\n            return acc;\\n          }, {});\\n      });\\n      return result;\\n    },\\n    paginatedGradesInventory() {\\n      const pagination = {};\\n      for (const grade of this.grades) {\\n        const start = (this.currentPage[grade] - 1) * this.itemsPerPage;\\n        const end = start + this.itemsPerPage;\\n        pagination[grade] = Object.entries(this.aggregatedInventories[grade])\\n          .slice(start, end)\\n          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n      }\\n      return pagination;\\n    },\\n    paginatedInventories() {\\n      const start = (this.currentPage.details - 1) * this.detailsPerPage;\\n      return this.inventories.slice(start, start + this.detailsPerPage);\\n    },\\n  },\\n  methods: {\\n    fetchInventories() {\\n      axios.get('/api/inventories').then(response => {\\n        this.inventories = response.data;\\n      }).catch(error => {\\n        console.error(\\\"재고 목록을 가져오는 데 실패했습니다.\\\", error);\\n      });\\n    },\\n    nextPage(section) {\\n      this.currentPage[section]++;\\n    },\\n    prevPage(section) {\\n      if (this.currentPage[section] > 1) {\\n        this.currentPage[section]--;\\n      }\\n    },\\n  },\\n  mounted() {\\n    this.fetchInventories();\\n  },\\n};\\n</script>\\n\\n<style>\\n/* 전체 페이지와 헤더 스타일 조정 */\\n.inventory-page {\\n  max-width: 1200px;\\n  margin: 20px auto;\\n  padding: 20px;\\n}\\n\\n.inventory-header, .inventory-content, .inventory-sections, .inventory-table-section {\\n  margin-bottom: 20px;\\n}\\n\\n/* 섹션 카드 스타일 */\\n.inventory-card {\\n  background: #fff;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 5px;\\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n  padding: 10px; /* 패딩 줄임 */\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 0.8rem; /* 글자 크기 줄임 */\\n}\\n\\n/* 스크롤 적용 부분 조정 */\\n.scrollable-content {\\n  overflow-y: auto;\\n  max-height: 150px; /* 섹션 높이 줄임 */\\n}\\n\\n/* 테이블 섹션 스타일 유지 */\\n.detailed-inventory-card {\\n  min-height: 400px; /* 상세 목록 높이 조정 */\\n}\\n\\n/* 페이지네이션 컨트롤 스타일 */\\n.pagination-controls {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: auto;\\n}\\n\\n.pagination-controls button {\\n  margin: 0 5px;\\n  padding: 5px 10px;\\n  background: #f0f0f0;\\n  border: 1px solid #d0d0d0;\\n  cursor: pointer;\\n}\\n\\n/* 섹션 가로 배열 */\\n.inventory-sections {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n\\n.total-inventory-card, .grade-inventory-card {\\n  width: calc(10% - 10px); /* 각 카드의 너비 조정 */\\n  margin-bottom: 20px; /* 마진으로 카드 사이 간격 조정 */\\n}\\n\\n/* 상세 재고 목록 박스 스타일 조정 */\\n.inventory-table-section {\\n  width: 100%; /* 너비를 100%로 조정하여 전체 너비를 차지하도록 함 */\\n  flex: 1; /* flex 항목으로 만들어 자동으로 높이 조정이 가능하게 함 */\\n  display: flex;\\n  flex-direction: column; /* 자식 요소들이 세로로 배열되도록 함 */\\n}\\n\\n/// 헤더 영역 스타일 조정\\n.inventory-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 40px;\\n}\\n\\n.header-content {\\n  flex: 1;\\n}\\n\\n/* 제품별 총 재고 목록 스타일 조정 */\\n.total-inventory-card {\\n  width: 600px; /* 너비 자동 조정 */\\n  flex: 1;\\n  margin-left: 20px; /* 헤더와의 간격 조정 */\\n  padding: 10px;\\n  font-size: 0.9rem; /* 글자 크기 추가 조정 */\\n  max-height: 400px; /* 높이 조정 */\\n}\\n\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNTcwNTc1NiZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/MjkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyog7KCE7LK0IO2OmOydtOyngOyZgCDtl6TrjZQg7Iqk7YOA7J28IOyhsOyglSAqL1xcbi5pbnZlbnRvcnktcGFnZSB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmludmVudG9yeS1oZWFkZXIsIC5pbnZlbnRvcnktY29udGVudCwgLmludmVudG9yeS1zZWN0aW9ucywgLmludmVudG9yeS10YWJsZS1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIOyEueyFmCDsubTrk5wg7Iqk7YOA7J28ICovXFxuLmludmVudG9yeS1jYXJkIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xcbiAgcGFkZGluZzogMTBweDsgLyog7Yyo65SpIOykhOyehCAqL1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDAuOHJlbTsgLyog6riA7J6QIO2BrOq4sCDspITsnoQgKi9cXG59XFxuXFxuLyog7Iqk7YGs66GkIOyggeyaqSDrtoDrtoQg7KGw7KCVICovXFxuLnNjcm9sbGFibGUtY29udGVudCB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTUwcHg7IC8qIOyEueyFmCDrhpLsnbQg7KSE7J6EICovXFxufVxcblxcbi8qIO2FjOydtOu4lCDshLnshZgg7Iqk7YOA7J28IOycoOyngCAqL1xcbi5kZXRhaWxlZC1pbnZlbnRvcnktY2FyZCB7XFxuICBtaW4taGVpZ2h0OiA0MDBweDsgLyog7IOB7IS4IOuqqeuhnSDrhpLsnbQg7KGw7KCVICovXFxufVxcblxcbi8qIO2OmOydtOyngOuEpOydtOyFmCDsu6jtirjroaQg7Iqk7YOA7J28ICovXFxuLnBhZ2luYXRpb24tY29udHJvbHMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5wYWdpbmF0aW9uLWNvbnRyb2xzIGJ1dHRvbiB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyog7IS57IWYIOqwgOuhnCDrsLDsl7QgKi9cXG4uaW52ZW50b3J5LXNlY3Rpb25zIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRvdGFsLWludmVudG9yeS1jYXJkLCAuZ3JhZGUtaW52ZW50b3J5LWNhcmQge1xcbiAgd2lkdGg6IGNhbGMoMTAlIC0gMTBweCk7IC8qIOqwgSDsubTrk5zsnZgg64SI67mEIOyhsOyglSAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyog66eI7KeE7Jy866GcIOy5tOuTnCDsgqzsnbQg6rCE6rKpIOyhsOyglSAqL1xcbn1cXG5cXG4vKiDsg4HshLgg7J6s6rOgIOuqqeuhnSDrsJXsiqQg7Iqk7YOA7J28IOyhsOyglSAqL1xcbi5pbnZlbnRvcnktdGFibGUtc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTsgLyog64SI67mE66W8IDEwMCXroZwg7KGw7KCV7ZWY7JesIOyghOyytCDrhIjruYTrpbwg7LCo7KeA7ZWY64+E66GdIO2VqCAqL1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTsgLyogZmxleCDtla3rqqnsnLzroZwg66eM65Ok7Ja0IOyekOuPmeycvOuhnCDrhpLsnbQg7KGw7KCV7J20IOqwgOuKpe2VmOqyjCDtlaggKi9cXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiDsnpDsi50g7JqU7IaM65Ok7J20IOyEuOuhnOuhnCDrsLDsl7TrkJjrj4TroZ0g7ZWoICovXFxufVxcbi8vLyDtl6TrjZQg7JiB7JetIOyKpO2DgOydvCDsobDsoJVcXG4uaW52ZW50b3J5LWhlYWRlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLmhlYWRlci1jb250ZW50IHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcblxcbi8qIOygnO2SiOuzhCDstJ0g7J6s6rOgIOuqqeuhnSDsiqTtg4Dsnbwg7KGw7KCVICovXFxuLnRvdGFsLWludmVudG9yeS1jYXJkIHtcXG4gIHdpZHRoOiA2MDBweDsgLyog64SI67mEIOyekOuPmSDsobDsoJUgKi9cXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBtYXJnaW4tbGVmdDogMjBweDsgLyog7Zek642U7JmA7J2YIOqwhOqyqSDsobDsoJUgKi9cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTsgLyog6riA7J6QIO2BrOq4sCDstpTqsIAg7KGw7KCVICovXFxuICBtYXgtaGVpZ2h0OiA0MDBweDsgLyog64aS7J20IOyhsOyglSAqL1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2V1bGwvZmluYWwvNHRlYW1fZmluYWxfTWFpblZ1ZS92dWUtbGlnaHQtYm9vdHN0cmFwLWRhc2hib2FyZC1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvSW52ZW50b3J5QWxsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUxBLHVCQUFBO0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSxvQkFBQTtDQUNBOztBQUVBLGVBQUE7QUFDQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxjQUFBLENBQUEsV0FBQTtFQUNBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0EsNkJBQUE7RUFBQSw4QkFBQTtNQUFBLDJCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQSxDQUFBLGNBQUE7Q0FDQTs7QUFFQSxrQkFBQTtBQUNBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQSxDQUFBLGNBQUE7Q0FDQTs7QUFFQSxtQkFBQTtBQUNBO0VBQ0Esa0JBQUEsQ0FBQSxpQkFBQTtDQUNBOztBQUVBLG9CQUFBO0FBQ0E7RUFDQSxxQkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtDQUNBOztBQUVBLGNBQUE7QUFDQTtFQUNBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0Esb0JBQUE7TUFBQSxnQkFBQTtFQUNBLDBCQUFBO01BQUEsdUJBQUE7VUFBQSwrQkFBQTtDQUNBO0FBRUE7RUFDQSx3QkFBQSxDQUFBLGlCQUFBO0VBQ0Esb0JBQUEsQ0FBQSxzQkFBQTtDQUNBOztBQUVBLHdCQUFBO0FBQ0E7RUFDQSxZQUFBLENBQUEsbUNBQUE7RUFDQSxvQkFBQTtNQUFBLFlBQUE7VUFBQSxRQUFBLENBQUEsc0NBQUE7RUFDQSxxQkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUNBLDZCQUFBO0VBQUEsOEJBQUE7TUFBQSwyQkFBQTtVQUFBLHVCQUFBLENBQUEseUJBQUE7Q0FDQTtBQUVBOztFQUVBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0EsMEJBQUE7TUFBQSx1QkFBQTtVQUFBLCtCQUFBO0VBQ0EsMEJBQUE7TUFBQSx1QkFBQTtVQUFBLG9CQUFBO0VBQ0Esb0JBQUE7Q0FDQTtBQUVBO0VBQ0Esb0JBQUE7TUFBQSxZQUFBO1VBQUEsUUFBQTtDQUNBOztBQUVBLHdCQUFBO0FBQ0E7RUFDQSxhQUFBLENBQUEsY0FBQTtFQUNBLG9CQUFBO01BQUEsWUFBQTtVQUFBLFFBQUE7RUFDQSxrQkFBQSxDQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBLENBQUEsaUJBQUE7RUFDQSxrQkFBQSxDQUFBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52ZW50b3J5QWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE1NzA1NzU2Jmxhbmc9Y3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1wYWdlXFxcIj5cXG4gICAgPCEtLSBIZWFkZXIgU2VjdGlvbiB3aXRoIFRvdGFsIEludmVudG9yeSBTZWN0aW9uIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImludmVudG9yeS10aXRsZVxcXCI+7J6s6rOgIOuqqeuhnTE5PC9oMT5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJpbnZlbnRvcnktc3VidGl0bGVcXFwiPuyghOyytCDsnqzqs6Ag7ZiE7ZmpPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJpbnZlbnRvcnktY2FyZCB0b3RhbC1pbnZlbnRvcnktY2FyZFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb24tdGl0bGVcXFwiPuygnO2SiOuzhCDstJ0g7J6s6rOgPC9oMj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1pdGVtcyBzY3JvbGxhYmxlLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktaXRlbVxcXCIgdi1mb3I9XFxcIih0b3RhbCwgcHJvZHVjdE5hbWUsIGluZGV4KSBpbiBwYWdpbmF0ZWRUb3RhbEludmVudG9yeVxcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgIDxoND57eyBwcm9kdWN0TmFtZSB9fTwvaDQ+XFxuICAgICAgICAgICAgPHNwYW4+e3sgdG90YWwgfX3qsJw8L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIFBhZ2luYXRpb24gQ29udHJvbHMgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYWdpbmF0aW9uLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcInByZXZQYWdlKCd0b3RhbCcpXFxcIj7snbTsoIQ8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcIm5leHRQYWdlKCd0b3RhbCcpXFxcIj7ri6TsnYw8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gUmVtYWluaW5nIEludmVudG9yeSBTZWN0aW9ucyAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW52ZW50b3J5LWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1zZWN0aW9uc1xcXCI+XFxuICAgICAgICA8IS0tIEdyYWRlIEludmVudG9yeSBMaXN0IFNlY3Rpb24gLS0+XFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiaW52ZW50b3J5LWNhcmQgZ3JhZGUtaW52ZW50b3J5LWNhcmRcXFwiIHYtZm9yPVxcXCIoZ3JhZGUsIGluZGV4KSBpbiBncmFkZXNcXFwiIDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj57eyBncmFkZSB9fSDrk7HquIkg7J6s6rOgPC9oMj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJpbnZlbnRvcnktbGlzdCBzY3JvbGxhYmxlLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiKHF1YW50aXR5LCBwcm9kdWN0TmFtZSwgaW5kZXgpIGluIHBhZ2luYXRlZEdyYWRlc0ludmVudG9yeVtncmFkZV1cXFwiIDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgICAgIHt7IHByb2R1Y3ROYW1lIH19IC0ge3sgcXVhbnRpdHkgfX3qsJxcXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8IS0tIFBhZ2luYXRpb24gQ29udHJvbHMgLS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb24tY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJwcmV2UGFnZShncmFkZSlcXFwiPuydtOyghDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJuZXh0UGFnZShncmFkZSlcXFwiPuuLpOydjDwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgICAgIDwhLS0gSW52ZW50b3J5IFRhYmxlIFNlY3Rpb24gLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktdGFibGUtc2VjdGlvblxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgZGV0YWlsZWQtaW52ZW50b3J5LWNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+7J6s6rOgIOyDgeyEuCDrqqnroZ08L2g0PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmUgc2Nyb2xsYWJsZS1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgaW52ZW50b3J5LXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVxcXCJ0aGVhZC1kYXJrXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgIDx0aD7sg4Htkogg7J2066aEPC90aD5cXG4gICAgICAgICAgICAgICAgICA8dGg+7IOB7ZKIIOy9lOuTnDwvdGg+XFxuICAgICAgICAgICAgICAgICAgPHRoPuuTseq4iTwvdGg+XFxuICAgICAgICAgICAgICAgICAgPHRoPuyImOufiTwvdGg+XFxuICAgICAgICAgICAgICAgICAgPHRoPu2MkOunpCDqsIDqsqk8L3RoPlxcbiAgICAgICAgICAgICAgICAgIDx0aD7ssL3qs6Ag7L2U65OcPC90aD5cXG4gICAgICAgICAgICAgICAgICA8dGg+7J6s6rOgIOyeheqzoOydvDwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJpbnZlbnRvcnkgaW4gcGFnaW5hdGVkSW52ZW50b3JpZXNcXFwiIDprZXk9XFxcImludmVudG9yeS5nb29kc0NvZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDx0ZD57eyBpbnZlbnRvcnkuZ29vZHNOYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5Lmdvb2RzQ29kZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5nb29kc0dyYWRlIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5LmludmVudG9yeVF1YW50aXR5IH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5LnNhbGVzUHJpY2UgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgIDx0ZD57eyBpbnZlbnRvcnkuc3RvcmFnZUNvZGUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgIDx0ZD57eyBuZXcgRGF0ZShpbnZlbnRvcnkuZmlyc3RTdG9ja0RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSBQYWdpbmF0aW9uIENvbnRyb2xzIC0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb24tY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcInByZXZQYWdlKCdkZXRhaWxzJylcXFwiPuydtOyghDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcIm5leHRQYWdlKCdkZXRhaWxzJylcXFwiPuuLpOydjDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaW52ZW50b3JpZXM6IFtdLFxcbiAgICAgIGdyYWRlczogWydBJywgJ0InLCAnQycsICftj5DquLAnXSxcXG4gICAgICBjdXJyZW50UGFnZToge1xcbiAgICAgICAgdG90YWw6IDEsXFxuICAgICAgICBkZXRhaWxzOiAxLFxcbiAgICAgICAgQTogMSxcXG4gICAgICAgIEI6IDEsXFxuICAgICAgICBDOiAxLFxcbiAgICAgICAg7Y+Q6riwOiAxLFxcbiAgICAgIH0sXFxuICAgICAgaXRlbXNQZXJQYWdlOiA0LFxcbiAgICAgIGRldGFpbHNQZXJQYWdlOiAxMCxcXG4gICAgfTtcXG4gIH0sXFxuICBjb21wdXRlZDoge1xcbiAgICAvLyDsoITssrQg7KCc7ZKI67OEIOy0nSDsnqzqs6Ag7IiY65+JIOqzhOyCsFxcbiAgICB0b3RhbEludmVudG9yeUJ5UHJvZHVjdCgpIHtcXG4gICAgICBjb25zdCB0b3RhbHMgPSB7fTtcXG4gICAgICB0aGlzLmludmVudG9yaWVzLmZvckVhY2goaXRlbSA9PiB7XFxuICAgICAgICBpZiAoIXRvdGFsc1tpdGVtLmdvb2RzTmFtZV0pIHtcXG4gICAgICAgICAgdG90YWxzW2l0ZW0uZ29vZHNOYW1lXSA9IDA7XFxuICAgICAgICB9XFxuICAgICAgICB0b3RhbHNbaXRlbS5nb29kc05hbWVdICs9IHBhcnNlSW50KGl0ZW0uaW52ZW50b3J5UXVhbnRpdHksIDEwKTtcXG4gICAgICB9KTtcXG4gICAgICByZXR1cm4gdG90YWxzO1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRUb3RhbEludmVudG9yeSgpIHtcXG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLmN1cnJlbnRQYWdlLnRvdGFsIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlO1xcbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvdGFsSW52ZW50b3J5QnlQcm9kdWN0KVxcbiAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXFxuICAgICAgICAucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfSksIHt9KTtcXG4gICAgfSxcXG4gICAgLy8g65Ox6riJ67OE66GcIOqwgSDsoJztkojsnZgg7J6s6rOgIOyImOufiSDtlansgrBcXG4gICAgYWdncmVnYXRlZEludmVudG9yaWVzKCkge1xcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xcbiAgICAgIHRoaXMuZ3JhZGVzLmZvckVhY2goZ3JhZGUgPT4ge1xcbiAgICAgICAgcmVzdWx0W2dyYWRlXSA9IHRoaXMuaW52ZW50b3JpZXNcXG4gICAgICAgICAgLmZpbHRlcihpbnZlbnRvcnkgPT4gaW52ZW50b3J5Lmdvb2RzR3JhZGUgPT09IGdyYWRlKVxcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgICAgICBpZiAoYWNjW2N1cnIuZ29vZHNOYW1lXSkge1xcbiAgICAgICAgICAgICAgYWNjW2N1cnIuZ29vZHNOYW1lXSArPSBwYXJzZUludChjdXJyLmludmVudG9yeVF1YW50aXR5LCAxMCk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIGFjY1tjdXJyLmdvb2RzTmFtZV0gPSBwYXJzZUludChjdXJyLmludmVudG9yeVF1YW50aXR5LCAxMCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgICAgIH0sIHt9KTtcXG4gICAgICB9KTtcXG4gICAgICByZXR1cm4gcmVzdWx0O1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRHcmFkZXNJbnZlbnRvcnkoKSB7XFxuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHt9O1xcbiAgICAgIGZvciAoY29uc3QgZ3JhZGUgb2YgdGhpcy5ncmFkZXMpIHtcXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMuY3VycmVudFBhZ2VbZ3JhZGVdIC0gMSkgKiB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5pdGVtc1BlclBhZ2U7XFxuICAgICAgICBwYWdpbmF0aW9uW2dyYWRlXSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuYWdncmVnYXRlZEludmVudG9yaWVzW2dyYWRlXSlcXG4gICAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXFxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5hY2MsIFtrZXldOiB2YWx1ZSB9KSwge30pO1xcbiAgICAgIH1cXG4gICAgICByZXR1cm4gcGFnaW5hdGlvbjtcXG4gICAgfSxcXG4gICAgcGFnaW5hdGVkSW52ZW50b3JpZXMoKSB7XFxuICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5jdXJyZW50UGFnZS5kZXRhaWxzIC0gMSkgKiB0aGlzLmRldGFpbHNQZXJQYWdlO1xcbiAgICAgIHJldHVybiB0aGlzLmludmVudG9yaWVzLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMuZGV0YWlsc1BlclBhZ2UpO1xcbiAgICB9LFxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgZmV0Y2hJbnZlbnRvcmllcygpIHtcXG4gICAgICBheGlvcy5nZXQoJy9hcGkvaW52ZW50b3JpZXMnKS50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgIHRoaXMuaW52ZW50b3JpZXMgPSByZXNwb25zZS5kYXRhO1xcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXFxcIuyerOqzoCDrqqnroZ3snYQg6rCA7KC47Jik64qUIOuNsCDsi6TtjKjtlojsirXri4jri6QuXFxcIiwgZXJyb3IpO1xcbiAgICAgIH0pO1xcbiAgICB9LFxcbiAgICBuZXh0UGFnZShzZWN0aW9uKSB7XFxuICAgICAgdGhpcy5jdXJyZW50UGFnZVtzZWN0aW9uXSsrO1xcbiAgICB9LFxcbiAgICBwcmV2UGFnZShzZWN0aW9uKSB7XFxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2Vbc2VjdGlvbl0gPiAxKSB7XFxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlW3NlY3Rpb25dLS07XFxuICAgICAgfVxcbiAgICB9LFxcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMuZmV0Y2hJbnZlbnRvcmllcygpO1xcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4vKiDsoITssrQg7Y6Y7J207KeA7JmAIO2XpOuNlCDsiqTtg4Dsnbwg7KGw7KCVICovXFxuLmludmVudG9yeS1wYWdlIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW52ZW50b3J5LWhlYWRlciwgLmludmVudG9yeS1jb250ZW50LCAuaW52ZW50b3J5LXNlY3Rpb25zLCAuaW52ZW50b3J5LXRhYmxlLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyog7IS57IWYIOy5tOuTnCDsiqTtg4DsnbwgKi9cXG4uaW52ZW50b3J5LWNhcmQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xcbiAgcGFkZGluZzogMTBweDsgLyog7Yyo65SpIOykhOyehCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDAuOHJlbTsgLyog6riA7J6QIO2BrOq4sCDspITsnoQgKi9cXG59XFxuXFxuLyog7Iqk7YGs66GkIOyggeyaqSDrtoDrtoQg7KGw7KCVICovXFxuLnNjcm9sbGFibGUtY29udGVudCB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTUwcHg7IC8qIOyEueyFmCDrhpLsnbQg7KSE7J6EICovXFxufVxcblxcbi8qIO2FjOydtOu4lCDshLnshZgg7Iqk7YOA7J28IOycoOyngCAqL1xcbi5kZXRhaWxlZC1pbnZlbnRvcnktY2FyZCB7XFxuICBtaW4taGVpZ2h0OiA0MDBweDsgLyog7IOB7IS4IOuqqeuhnSDrhpLsnbQg7KGw7KCVICovXFxufVxcblxcbi8qIO2OmOydtOyngOuEpOydtOyFmCDsu6jtirjroaQg7Iqk7YOA7J28ICovXFxuLnBhZ2luYXRpb24tY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnBhZ2luYXRpb24tY29udHJvbHMgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiDshLnshZgg6rCA66GcIOuwsOyXtCAqL1xcbi5pbnZlbnRvcnktc2VjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvdGFsLWludmVudG9yeS1jYXJkLCAuZ3JhZGUtaW52ZW50b3J5LWNhcmQge1xcbiAgd2lkdGg6IGNhbGMoMTAlIC0gMTBweCk7IC8qIOqwgSDsubTrk5zsnZgg64SI67mEIOyhsOyglSAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyog66eI7KeE7Jy866GcIOy5tOuTnCDsgqzsnbQg6rCE6rKpIOyhsOyglSAqL1xcbn1cXG5cXG4vKiDsg4HshLgg7J6s6rOgIOuqqeuhnSDrsJXsiqQg7Iqk7YOA7J28IOyhsOyglSAqL1xcbi5pbnZlbnRvcnktdGFibGUtc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTsgLyog64SI67mE66W8IDEwMCXroZwg7KGw7KCV7ZWY7JesIOyghOyytCDrhIjruYTrpbwg7LCo7KeA7ZWY64+E66GdIO2VqCAqL1xcbiAgZmxleDogMTsgLyogZmxleCDtla3rqqnsnLzroZwg66eM65Ok7Ja0IOyekOuPmeycvOuhnCDrhpLsnbQg7KGw7KCV7J20IOqwgOuKpe2VmOqyjCDtlaggKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiDsnpDsi50g7JqU7IaM65Ok7J20IOyEuOuhnOuhnCDrsLDsl7TrkJjrj4TroZ0g7ZWoICovXFxufVxcblxcbi8vLyDtl6TrjZQg7JiB7JetIOyKpO2DgOydvCDsobDsoJVcXG4uaW52ZW50b3J5LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGVudCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiDsoJztkojrs4Qg7LSdIOyerOqzoCDrqqnroZ0g7Iqk7YOA7J28IOyhsOyglSAqL1xcbi50b3RhbC1pbnZlbnRvcnktY2FyZCB7XFxuICB3aWR0aDogNjAwcHg7IC8qIOuEiOu5hCDsnpDrj5kg7KGw7KCVICovXFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IC8qIO2XpOuNlOyZgOydmCDqsITqsqkg7KGw7KCVICovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07IC8qIOq4gOyekCDtgazquLAg7LaU6rCAIOyhsOyglSAqL1xcbiAgbWF4LWhlaWdodDogNDAwcHg7IC8qIOuGkuydtCDsobDsoJUgKi9cXG59XFxuXFxuPC9zdHlsZT5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\n");

/***/ })

})