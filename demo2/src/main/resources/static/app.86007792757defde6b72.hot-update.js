webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.inventory-page {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  max-width: 1200px;\\n  margin: 20px auto;\\n}\\n\\n/* NAV 영역 스타일 */\\n.nav-section {\\n  padding: 20px;\\n  background-color: #f0f0f0; /* 예시 색상 */\\n  margin-bottom: 20px;\\n}\\n\\n/* SECTION 영역 스타일 */\\n.section-area {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  margin-bottom: 20px;\\n}\\n.inventory-sections {\\n  -ms-flex-preferred-size: 48%;\\n      flex-basis: 48%; /* 등급별 재고 목록이 한 줄에 2개씩 표시되도록 설정 */\\n  margin-bottom: 20px; /* 섹션 간 마진 */\\n}\\n\\n/* 등급별 재고 카드 마지막 항목 마진 조정 */\\n.inventory-sections:last-child {\\n  margin-right: 0;\\n}\\n\\n/* FOOTER 영역 스타일 */\\n.footer-section {\\n  background-color: #e0e0e0; /* 예시 색상 */\\n  padding: 20px;\\n}\\n\\n/* 기타 필요한 스타일 추가 */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/InventoryAll.vue\"],\"names\":[],\"mappings\":\";AAyPA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,kBAAA;EACA,kBAAA;CACA;;AAEA,gBAAA;AACA;EACA,cAAA;EACA,0BAAA,CAAA,WAAA;EACA,oBAAA;CACA;;AAEA,oBAAA;AACA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,oBAAA;MAAA,gBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;EACA,oBAAA;CACA;AAEA;EACA,6BAAA;MAAA,gBAAA,CAAA,kCAAA;EACA,oBAAA,CAAA,aAAA;CACA;;AAEA,4BAAA;AACA;EACA,gBAAA;CACA;;AAEA,mBAAA;AACA;EACA,0BAAA,CAAA,WAAA;EACA,cAAA;CACA;;AAEA,mBAAA\",\"file\":\"InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"inventory-page\\\">\\n    <!-- NAV 영역: 총 재고 -->\\n    <div class=\\\"nav-section total-inventory-card\\\">\\n      <h2 class=\\\"section-title\\\">제품별 총 재고</h2>\\n      <div class=\\\"table-responsive\\\">\\n        <table class=\\\"table-hover table-striped\\\">\\n          <thead>\\n          <tr>\\n            <th>제품 이름</th>\\n            <th>재고량</th>\\n          </tr>\\n          </thead>\\n          <tbody>\\n          <tr v-for=\\\"(total, productName, index) in paginatedTotalInventory\\\" :key=\\\"index\\\">\\n            <td>{{ productName }}</td>\\n            <td>{{ total }}개</td>\\n          </tr>\\n          </tbody>\\n        </table>\\n      </div>\\n      <div class=\\\"pagination-controls\\\">\\n        <button @click=\\\"prevPage('total')\\\">이전</button>\\n        <button @click=\\\"nextPage('total')\\\">다음</button>\\n      </div>\\n    </div>\\n\\n    <!-- SECTION 영역: 등급별 재고 목록 -->\\n    <div class=\\\"section-area\\\">\\n      <div class=\\\"inventory-sections\\\" v-for=\\\"(grade, index) in grades\\\" :key=\\\"index\\\">\\n        <h2 class=\\\"section-title\\\">{{ grade }} 등급 재고</h2>\\n        <div class=\\\"table-responsive\\\">\\n          <table class=\\\"table-hover table-striped\\\">\\n            <thead>\\n            <tr>\\n              <th>제품 이름</th>\\n              <th>수량</th>\\n            </tr>\\n            </thead>\\n            <tbody>\\n            <tr v-for=\\\"(quantity, productName, index) in paginatedGradesInventory[grade]\\\" :key=\\\"index\\\">\\n              <td>{{ productName }}</td>\\n              <td>{{ quantity }}개</td>\\n            </tr>\\n            </tbody>\\n          </table>\\n        </div>\\n        <div class=\\\"pagination-controls\\\">\\n          <button @click=\\\"prevPage(grade)\\\">이전</button>\\n          <button @click=\\\"nextPage(grade)\\\">다음</button>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- FOOTER 영역: 재고 상세 목록 -->\\n    <div class=\\\"footer-section detailed-inventory-card\\\">\\n      <h4 class=\\\"card-title\\\">재고 상세 목록</h4>\\n      <div class=\\\"table-responsive\\\">\\n        <table class=\\\"table inventory-table\\\">\\n          <thead class=\\\"thead-dark\\\">\\n          <tr>\\n            <th>상품 이름</th>\\n            <th>상품 코드</th>\\n            <th>등급</th>\\n            <th>수량</th>\\n            <th>판매 가격</th>\\n            <th>창고 코드</th>\\n            <th>재고 입고일</th>\\n          </tr>\\n          </thead>\\n          <tbody>\\n          <tr v-for=\\\"inventory in paginatedInventories\\\" :key=\\\"inventory.goodsCode\\\">\\n            <td>{{ inventory.goodsName }}</td>\\n            <td>{{ inventory.goodsCode }}</td>\\n            <td>{{ inventory.goodsGrade }}</td>\\n            <td>{{ inventory.inventoryQuantity }}</td>\\n            <td>{{ inventory.salesPrice }}</td>\\n            <td>{{ inventory.storageCode }}</td>\\n            <td>{{ new Date(inventory.firstStockDate).toLocaleDateString() }}</td>\\n          </tr>\\n          </tbody>\\n        </table>\\n      </div>\\n      <div class=\\\"pagination-controls\\\">\\n        <button @click=\\\"prevPage('details')\\\">이전</button>\\n        <button @click=\\\"nextPage('details')\\\">다음</button>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      inventories: [],\\n      grades: ['A', 'B', 'C', '폐기'],\\n      currentPage: {\\n        total: 1,\\n        details: 1,\\n        A: 1,\\n        B: 1,\\n        C: 1,\\n        폐기: 1,\\n      },\\n      itemsPerPage: 10, // Adjust according to your need\\n    };\\n  },\\n  computed: {\\n    totalInventoryByProduct() {\\n      const totals = {};\\n      this.inventories.forEach(item => {\\n        if (!totals[item.goodsName]) {\\n          totals[item.goodsName] = 0;\\n        }\\n        totals[item.goodsName] += parseInt(item.inventoryQuantity, 10);\\n      });\\n      return totals;\\n    },\\n    paginatedTotalInventory() {\\n      const start = (this.currentPage.total - 1) * this.itemsPerPage;\\n      const end = start + this.itemsPerPage;\\n      return Object.entries(this.totalInventoryByProduct)\\n        .slice(start, end)\\n        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n    },\\n    aggregatedInventories() {\\n      const result = {};\\n      this.grades.forEach(grade => {\\n        result[grade] = this.inventories\\n          .filter(inventory => inventory.goodsGrade === grade)\\n          .reduce((acc, curr) => {\\n            if (acc[curr.goodsName]) {\\n              acc[curr.goodsName] += parseInt(curr.inventoryQuantity, 10);\\n            } else {\\n              acc[curr.goodsName] = parseInt(curr.inventoryQuantity, 10);\\n            }\\n            return acc;\\n          }, {});\\n      });\\n      return result;\\n    },\\n    paginatedGradesInventory() {\\n      const pagination = {};\\n      for (const grade of this.grades) {\\n        const start = (this.currentPage[grade] - 1) * this.itemsPerPage;\\n        const end = start + this.itemsPerPage;\\n        pagination[grade] = Object.entries(this.aggregatedInventories[grade])\\n          .slice(start, end)\\n          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});\\n      }\\n      return pagination;\\n    },\\n    paginatedInventories() {\\n      const start = (this.currentPage.details - 1) * this.itemsPerPage;\\n      return this.inventories.slice(start, start + this.itemsPerPage);\\n    },\\n  },\\n  methods: {\\n    fetchInventories() {\\n      axios.get('/api/inventories').then(response => {\\n        this.inventories = response.data;\\n      }).catch(error => {\\n        console.error(\\\"재고 목록을 가져오는 데 실패했습니다.\\\", error);\\n      });\\n    },\\n    nextPage(section) {\\n      this.currentPage[section]++;\\n    },\\n    prevPage(section) {\\n      if (this.currentPage[section] > 1) {\\n        this.currentPage[section]--;\\n      }\\n    },\\n  },\\n  mounted() {\\n    this.fetchInventories();\\n  },\\n};\\n</script>\\n\\n<!--<style>-->\\n<!--/* 기본 페이지 설정 */-->\\n<!--.inventory-page {-->\\n<!--  display: flex;-->\\n<!--  flex-wrap: wrap;-->\\n<!--  max-width: 1200px;-->\\n<!--  margin: 20px auto;-->\\n<!--  padding: 20px;-->\\n<!--}-->\\n\\n<!--/* 헤더 설정 */-->\\n<!--.inventory-header {-->\\n<!--  flex-basis: 100%;-->\\n<!--  display: flex;-->\\n<!--  justify-content: space-between;-->\\n<!--  align-items: center;-->\\n<!--  margin-bottom: 40px;-->\\n<!--}-->\\n\\n<!--.header-content {-->\\n<!--  text-align: center;-->\\n<!--}-->\\n\\n<!--/* 전체 재고, 등급별 재고 및 상세 재고 카드 스타일 */-->\\n<!--.inventory-card, .detailed-inventory-card {-->\\n<!--  background: #fff;-->\\n<!--  border: 1px solid #e0e0e0;-->\\n<!--  border-radius: 5px;-->\\n<!--  box-shadow: 0 2px 4px rgba(0,0,0,0.1);-->\\n<!--  padding: 20px;-->\\n<!--  margin-bottom: 20px;-->\\n<!--  font-size: 1rem;-->\\n<!--}-->\\n\\n<!--/* 등급별 재고 박스 */-->\\n<!--.grade-inventory-card {-->\\n<!--  flex: 1 1 280px; /* 박스 크기 조정 및 유연한 레이아웃을 위한 설정 */-->\\n<!--  height: 300px; /* 박스 높이 조정 */-->\\n<!--  margin-right: 20px; /* 박스 간의 오른쪽 여백 조정 */-->\\n<!--}-->\\n\\n<!--/* 마지막 등급별 재고 박스의 마진 조정 */-->\\n<!--.grade-inventory-card:last-child {-->\\n<!--  margin-right: 0;-->\\n<!--}-->\\n\\n<!--/* 상세 재고 목록 카드 스타일 */-->\\n<!--.detailed-inventory-card {-->\\n<!--  flex-basis: 100%; /* 전체 너비 사용 */-->\\n<!--  min-height: 400px; /* 상세 목록 높이 조정 */-->\\n<!--  font-size: 0.9rem; /* 글자 크기 조정 */-->\\n<!--}-->\\n\\n<!--/* 테이블 및 페이지네이션 컨트롤 스타일 */-->\\n<!--.table-responsive, .pagination-controls {-->\\n<!--  margin-top: 20px;-->\\n<!--}-->\\n\\n<!--.pagination-controls button {-->\\n<!--  padding: 8px 15px;-->\\n<!--  background: #f0f0f0;-->\\n<!--  border: 1px solid #d0d0d0;-->\\n<!--  cursor: pointer;-->\\n<!--}-->\\n<!--</style>-->\\n<style>\\n.inventory-page {\\n  display: flex;\\n  flex-direction: column;\\n  max-width: 1200px;\\n  margin: 20px auto;\\n}\\n\\n/* NAV 영역 스타일 */\\n.nav-section {\\n  padding: 20px;\\n  background-color: #f0f0f0; /* 예시 색상 */\\n  margin-bottom: 20px;\\n}\\n\\n/* SECTION 영역 스타일 */\\n.section-area {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  margin-bottom: 20px;\\n}\\n\\n.inventory-sections {\\n  flex-basis: 48%; /* 등급별 재고 목록이 한 줄에 2개씩 표시되도록 설정 */\\n  margin-bottom: 20px; /* 섹션 간 마진 */\\n}\\n\\n/* 등급별 재고 카드 마지막 항목 마진 조정 */\\n.inventory-sections:last-child {\\n  margin-right: 0;\\n}\\n\\n/* FOOTER 영역 스타일 */\\n.footer-section {\\n  background-color: #e0e0e0; /* 예시 색상 */\\n  padding: 20px;\\n}\\n\\n/* 기타 필요한 스타일 추가 */\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNTcwNTc1NiZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludmVudG9yeUFsbC52dWU/MjkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmludmVudG9yeS1wYWdlIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuXFxuLyogTkFWIOyYgeyXrSDsiqTtg4DsnbwgKi9cXG4ubmF2LXNlY3Rpb24ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIOyYiOyLnCDsg4nsg4EgKi9cXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIFNFQ1RJT04g7JiB7JetIOyKpO2DgOydvCAqL1xcbi5zZWN0aW9uLWFyZWEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmludmVudG9yeS1zZWN0aW9ucyB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDglO1xcbiAgICAgIGZsZXgtYmFzaXM6IDQ4JTsgLyog65Ox6riJ67OEIOyerOqzoCDrqqnroZ3snbQg7ZWcIOykhOyXkCAy6rCc7JSpIO2RnOyLnOuQmOuPhOuhnSDshKTsoJUgKi9cXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIOyEueyFmCDqsIQg66eI7KeEICovXFxufVxcblxcbi8qIOuTseq4ieuzhCDsnqzqs6Ag7Lm065OcIOuniOyngOuniSDtla3rqqkg66eI7KeEIOyhsOyglSAqL1xcbi5pbnZlbnRvcnktc2VjdGlvbnM6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qIEZPT1RFUiDsmIHsl60g7Iqk7YOA7J28ICovXFxuLmZvb3Rlci1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IC8qIOyYiOyLnCDsg4nsg4EgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIOq4sO2DgCDtlYTsmpTtlZwg7Iqk7YOA7J28IOy2lOqwgCAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zZXVsbC9maW5hbC80dGVhbV9maW5hbF9NYWluVnVlL3Z1ZS1saWdodC1ib290c3RyYXAtZGFzaGJvYXJkLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9JbnZlbnRvcnlBbGwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5UEE7RUFDQSxxQkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUNBLDZCQUFBO0VBQUEsOEJBQUE7TUFBQSwyQkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtDQUNBOztBQUVBLGdCQUFBO0FBQ0E7RUFDQSxjQUFBO0VBQ0EsMEJBQUEsQ0FBQSxXQUFBO0VBQ0Esb0JBQUE7Q0FDQTs7QUFFQSxvQkFBQTtBQUNBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSxvQkFBQTtNQUFBLGdCQUFBO0VBQ0EsMEJBQUE7TUFBQSx1QkFBQTtVQUFBLCtCQUFBO0VBQ0Esb0JBQUE7Q0FDQTtBQUVBO0VBQ0EsNkJBQUE7TUFBQSxnQkFBQSxDQUFBLGtDQUFBO0VBQ0Esb0JBQUEsQ0FBQSxhQUFBO0NBQ0E7O0FBRUEsNEJBQUE7QUFDQTtFQUNBLGdCQUFBO0NBQ0E7O0FBRUEsbUJBQUE7QUFDQTtFQUNBLDBCQUFBLENBQUEsV0FBQTtFQUNBLGNBQUE7Q0FDQTs7QUFFQSxtQkFBQVwiLFwiZmlsZVwiOlwiSW52ZW50b3J5QWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE1NzA1NzU2Jmxhbmc9Y3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImludmVudG9yeS1wYWdlXFxcIj5cXG4gICAgPCEtLSBOQVYg7JiB7JetOiDstJ0g7J6s6rOgIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtc2VjdGlvbiB0b3RhbC1pbnZlbnRvcnktY2FyZFxcXCI+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj7soJztkojrs4Qg7LSdIOyerOqzoDwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWRcXFwiPlxcbiAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGg+7KCc7ZKIIOydtOumhDwvdGg+XFxuICAgICAgICAgICAgPHRoPuyerOqzoOufiTwvdGg+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgPHRyIHYtZm9yPVxcXCIodG90YWwsIHByb2R1Y3ROYW1lLCBpbmRleCkgaW4gcGFnaW5hdGVkVG90YWxJbnZlbnRvcnlcXFwiIDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgICA8dGQ+e3sgcHJvZHVjdE5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyB0b3RhbCB9feqwnDwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb24tY29udHJvbHNcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcInByZXZQYWdlKCd0b3RhbCcpXFxcIj7snbTsoIQ8L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJuZXh0UGFnZSgndG90YWwnKVxcXCI+64uk7J2MPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFNFQ1RJT04g7JiB7JetOiDrk7HquInrs4Qg7J6s6rOgIOuqqeuhnSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1hcmVhXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbnZlbnRvcnktc2VjdGlvbnNcXFwiIHYtZm9yPVxcXCIoZ3JhZGUsIGluZGV4KSBpbiBncmFkZXNcXFwiIDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCI+e3sgZ3JhZGUgfX0g65Ox6riJIOyerOqzoDwvaDI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgPHRoPuygnO2SiCDsnbTrpoQ8L3RoPlxcbiAgICAgICAgICAgICAgPHRoPuyImOufiTwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHIgdi1mb3I9XFxcIihxdWFudGl0eSwgcHJvZHVjdE5hbWUsIGluZGV4KSBpbiBwYWdpbmF0ZWRHcmFkZXNJbnZlbnRvcnlbZ3JhZGVdXFxcIiA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICA8dGQ+e3sgcHJvZHVjdE5hbWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgPHRkPnt7IHF1YW50aXR5IH196rCcPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhZ2luYXRpb24tY29udHJvbHNcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwicHJldlBhZ2UoZ3JhZGUpXFxcIj7snbTsoIQ8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcIm5leHRQYWdlKGdyYWRlKVxcXCI+64uk7J2MPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gRk9PVEVSIOyYgeyXrTog7J6s6rOgIOyDgeyEuCDrqqnroZ0gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1zZWN0aW9uIGRldGFpbGVkLWludmVudG9yeS1jYXJkXFxcIj5cXG4gICAgICA8aDQgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPuyerOqzoCDsg4HshLgg66qp66GdPC9oND5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgaW52ZW50b3J5LXRhYmxlXFxcIj5cXG4gICAgICAgICAgPHRoZWFkIGNsYXNzPVxcXCJ0aGVhZC1kYXJrXFxcIj5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD7sg4Htkogg7J2066aEPC90aD5cXG4gICAgICAgICAgICA8dGg+7IOB7ZKIIOy9lOuTnDwvdGg+XFxuICAgICAgICAgICAgPHRoPuuTseq4iTwvdGg+XFxuICAgICAgICAgICAgPHRoPuyImOufiTwvdGg+XFxuICAgICAgICAgICAgPHRoPu2MkOunpCDqsIDqsqk8L3RoPlxcbiAgICAgICAgICAgIDx0aD7ssL3qs6Ag7L2U65OcPC90aD5cXG4gICAgICAgICAgICA8dGg+7J6s6rOgIOyeheqzoOydvDwvdGg+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgPHRyIHYtZm9yPVxcXCJpbnZlbnRvcnkgaW4gcGFnaW5hdGVkSW52ZW50b3JpZXNcXFwiIDprZXk9XFxcImludmVudG9yeS5nb29kc0NvZGVcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57eyBpbnZlbnRvcnkuZ29vZHNOYW1lIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5Lmdvb2RzQ29kZSB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGludmVudG9yeS5nb29kc0dyYWRlIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5LmludmVudG9yeVF1YW50aXR5IH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgaW52ZW50b3J5LnNhbGVzUHJpY2UgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBpbnZlbnRvcnkuc3RvcmFnZUNvZGUgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBuZXcgRGF0ZShpbnZlbnRvcnkuZmlyc3RTdG9ja0RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19PC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFnaW5hdGlvbi1jb250cm9sc1xcXCI+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwicHJldlBhZ2UoJ2RldGFpbHMnKVxcXCI+7J207KCEPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cXFwibmV4dFBhZ2UoJ2RldGFpbHMnKVxcXCI+64uk7J2MPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpbnZlbnRvcmllczogW10sXFxuICAgICAgZ3JhZGVzOiBbJ0EnLCAnQicsICdDJywgJ+2PkOq4sCddLFxcbiAgICAgIGN1cnJlbnRQYWdlOiB7XFxuICAgICAgICB0b3RhbDogMSxcXG4gICAgICAgIGRldGFpbHM6IDEsXFxuICAgICAgICBBOiAxLFxcbiAgICAgICAgQjogMSxcXG4gICAgICAgIEM6IDEsXFxuICAgICAgICDtj5DquLA6IDEsXFxuICAgICAgfSxcXG4gICAgICBpdGVtc1BlclBhZ2U6IDEwLCAvLyBBZGp1c3QgYWNjb3JkaW5nIHRvIHlvdXIgbmVlZFxcbiAgICB9O1xcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIHRvdGFsSW52ZW50b3J5QnlQcm9kdWN0KCkge1xcbiAgICAgIGNvbnN0IHRvdGFscyA9IHt9O1xcbiAgICAgIHRoaXMuaW52ZW50b3JpZXMuZm9yRWFjaChpdGVtID0+IHtcXG4gICAgICAgIGlmICghdG90YWxzW2l0ZW0uZ29vZHNOYW1lXSkge1xcbiAgICAgICAgICB0b3RhbHNbaXRlbS5nb29kc05hbWVdID0gMDtcXG4gICAgICAgIH1cXG4gICAgICAgIHRvdGFsc1tpdGVtLmdvb2RzTmFtZV0gKz0gcGFyc2VJbnQoaXRlbS5pbnZlbnRvcnlRdWFudGl0eSwgMTApO1xcbiAgICAgIH0pO1xcbiAgICAgIHJldHVybiB0b3RhbHM7XFxuICAgIH0sXFxuICAgIHBhZ2luYXRlZFRvdGFsSW52ZW50b3J5KCkge1xcbiAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMuY3VycmVudFBhZ2UudG90YWwgLSAxKSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5pdGVtc1BlclBhZ2U7XFxuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG90YWxJbnZlbnRvcnlCeVByb2R1Y3QpXFxuICAgICAgICAuc2xpY2Uoc3RhcnQsIGVuZClcXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5hY2MsIFtrZXldOiB2YWx1ZSB9KSwge30pO1xcbiAgICB9LFxcbiAgICBhZ2dyZWdhdGVkSW52ZW50b3JpZXMoKSB7XFxuICAgICAgY29uc3QgcmVzdWx0ID0ge307XFxuICAgICAgdGhpcy5ncmFkZXMuZm9yRWFjaChncmFkZSA9PiB7XFxuICAgICAgICByZXN1bHRbZ3JhZGVdID0gdGhpcy5pbnZlbnRvcmllc1xcbiAgICAgICAgICAuZmlsdGVyKGludmVudG9yeSA9PiBpbnZlbnRvcnkuZ29vZHNHcmFkZSA9PT0gZ3JhZGUpXFxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xcbiAgICAgICAgICAgIGlmIChhY2NbY3Vyci5nb29kc05hbWVdKSB7XFxuICAgICAgICAgICAgICBhY2NbY3Vyci5nb29kc05hbWVdICs9IHBhcnNlSW50KGN1cnIuaW52ZW50b3J5UXVhbnRpdHksIDEwKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgYWNjW2N1cnIuZ29vZHNOYW1lXSA9IHBhcnNlSW50KGN1cnIuaW52ZW50b3J5UXVhbnRpdHksIDEwKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIGFjYztcXG4gICAgICAgICAgfSwge30pO1xcbiAgICAgIH0pO1xcbiAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgIH0sXFxuICAgIHBhZ2luYXRlZEdyYWRlc0ludmVudG9yeSgpIHtcXG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0ge307XFxuICAgICAgZm9yIChjb25zdCBncmFkZSBvZiB0aGlzLmdyYWRlcykge1xcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5jdXJyZW50UGFnZVtncmFkZV0gLSAxKSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLml0ZW1zUGVyUGFnZTtcXG4gICAgICAgIHBhZ2luYXRpb25bZ3JhZGVdID0gT2JqZWN0LmVudHJpZXModGhpcy5hZ2dyZWdhdGVkSW52ZW50b3JpZXNbZ3JhZGVdKVxcbiAgICAgICAgICAuc2xpY2Uoc3RhcnQsIGVuZClcXG4gICAgICAgICAgLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+ICh7IC4uLmFjYywgW2tleV06IHZhbHVlIH0pLCB7fSk7XFxuICAgICAgfVxcbiAgICAgIHJldHVybiBwYWdpbmF0aW9uO1xcbiAgICB9LFxcbiAgICBwYWdpbmF0ZWRJbnZlbnRvcmllcygpIHtcXG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLmN1cnJlbnRQYWdlLmRldGFpbHMgLSAxKSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xcbiAgICAgIHJldHVybiB0aGlzLmludmVudG9yaWVzLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMuaXRlbXNQZXJQYWdlKTtcXG4gICAgfSxcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIGZldGNoSW52ZW50b3JpZXMoKSB7XFxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ludmVudG9yaWVzJykudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICB0aGlzLmludmVudG9yaWVzID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICBjb25zb2xlLmVycm9yKFxcXCLsnqzqs6Ag66qp66Gd7J2EIOqwgOyguOyYpOuKlCDrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLlxcXCIsIGVycm9yKTtcXG4gICAgICB9KTtcXG4gICAgfSxcXG4gICAgbmV4dFBhZ2Uoc2VjdGlvbikge1xcbiAgICAgIHRoaXMuY3VycmVudFBhZ2Vbc2VjdGlvbl0rKztcXG4gICAgfSxcXG4gICAgcHJldlBhZ2Uoc2VjdGlvbikge1xcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlW3NlY3Rpb25dID4gMSkge1xcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZVtzZWN0aW9uXS0tO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gIH0sXFxuICBtb3VudGVkKCkge1xcbiAgICB0aGlzLmZldGNoSW52ZW50b3JpZXMoKTtcXG4gIH0sXFxufTtcXG48L3NjcmlwdD5cXG5cXG48IS0tPHN0eWxlPi0tPlxcbjwhLS0vKiDquLDrs7gg7Y6Y7J207KeAIOyEpOyglSAqLy0tPlxcbjwhLS0uaW52ZW50b3J5LXBhZ2Ugey0tPlxcbjwhLS0gIGRpc3BsYXk6IGZsZXg7LS0+XFxuPCEtLSAgZmxleC13cmFwOiB3cmFwOy0tPlxcbjwhLS0gIG1heC13aWR0aDogMTIwMHB4Oy0tPlxcbjwhLS0gIG1hcmdpbjogMjBweCBhdXRvOy0tPlxcbjwhLS0gIHBhZGRpbmc6IDIwcHg7LS0+XFxuPCEtLX0tLT5cXG5cXG48IS0tLyog7Zek642UIOyEpOyglSAqLy0tPlxcbjwhLS0uaW52ZW50b3J5LWhlYWRlciB7LS0+XFxuPCEtLSAgZmxleC1iYXNpczogMTAwJTstLT5cXG48IS0tICBkaXNwbGF5OiBmbGV4Oy0tPlxcbjwhLS0gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjstLT5cXG48IS0tICBhbGlnbi1pdGVtczogY2VudGVyOy0tPlxcbjwhLS0gIG1hcmdpbi1ib3R0b206IDQwcHg7LS0+XFxuPCEtLX0tLT5cXG5cXG48IS0tLmhlYWRlci1jb250ZW50IHstLT5cXG48IS0tICB0ZXh0LWFsaWduOiBjZW50ZXI7LS0+XFxuPCEtLX0tLT5cXG5cXG48IS0tLyog7KCE7LK0IOyerOqzoCwg65Ox6riJ67OEIOyerOqzoCDrsI8g7IOB7IS4IOyerOqzoCDsubTrk5wg7Iqk7YOA7J28ICovLS0+XFxuPCEtLS5pbnZlbnRvcnktY2FyZCwgLmRldGFpbGVkLWludmVudG9yeS1jYXJkIHstLT5cXG48IS0tICBiYWNrZ3JvdW5kOiAjZmZmOy0tPlxcbjwhLS0gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7LS0+XFxuPCEtLSAgYm9yZGVyLXJhZGl1czogNXB4Oy0tPlxcbjwhLS0gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7LS0+XFxuPCEtLSAgcGFkZGluZzogMjBweDstLT5cXG48IS0tICBtYXJnaW4tYm90dG9tOiAyMHB4Oy0tPlxcbjwhLS0gIGZvbnQtc2l6ZTogMXJlbTstLT5cXG48IS0tfS0tPlxcblxcbjwhLS0vKiDrk7HquInrs4Qg7J6s6rOgIOuwleyKpCAqLy0tPlxcbjwhLS0uZ3JhZGUtaW52ZW50b3J5LWNhcmQgey0tPlxcbjwhLS0gIGZsZXg6IDEgMSAyODBweDsgLyog67CV7IqkIO2BrOq4sCDsobDsoJUg67CPIOycoOyXsO2VnCDroIjsnbTslYTsm4PsnYQg7JyE7ZWcIOyEpOyglSAqLy0tPlxcbjwhLS0gIGhlaWdodDogMzAwcHg7IC8qIOuwleyKpCDrhpLsnbQg7KGw7KCVICovLS0+XFxuPCEtLSAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAvKiDrsJXsiqQg6rCE7J2YIOyYpOuluOyqvSDsl6zrsLEg7KGw7KCVICovLS0+XFxuPCEtLX0tLT5cXG5cXG48IS0tLyog66eI7KeA66eJIOuTseq4ieuzhCDsnqzqs6Ag67CV7Iqk7J2YIOuniOynhCDsobDsoJUgKi8tLT5cXG48IS0tLmdyYWRlLWludmVudG9yeS1jYXJkOmxhc3QtY2hpbGQgey0tPlxcbjwhLS0gIG1hcmdpbi1yaWdodDogMDstLT5cXG48IS0tfS0tPlxcblxcbjwhLS0vKiDsg4HshLgg7J6s6rOgIOuqqeuhnSDsubTrk5wg7Iqk7YOA7J28ICovLS0+XFxuPCEtLS5kZXRhaWxlZC1pbnZlbnRvcnktY2FyZCB7LS0+XFxuPCEtLSAgZmxleC1iYXNpczogMTAwJTsgLyog7KCE7LK0IOuEiOu5hCDsgqzsmqkgKi8tLT5cXG48IS0tICBtaW4taGVpZ2h0OiA0MDBweDsgLyog7IOB7IS4IOuqqeuhnSDrhpLsnbQg7KGw7KCVICovLS0+XFxuPCEtLSAgZm9udC1zaXplOiAwLjlyZW07IC8qIOq4gOyekCDtgazquLAg7KGw7KCVICovLS0+XFxuPCEtLX0tLT5cXG5cXG48IS0tLyog7YWM7J2067iUIOuwjyDtjpjsnbTsp4DrhKTsnbTshZgg7Luo7Yq466GkIOyKpO2DgOydvCAqLy0tPlxcbjwhLS0udGFibGUtcmVzcG9uc2l2ZSwgLnBhZ2luYXRpb24tY29udHJvbHMgey0tPlxcbjwhLS0gIG1hcmdpbi10b3A6IDIwcHg7LS0+XFxuPCEtLX0tLT5cXG5cXG48IS0tLnBhZ2luYXRpb24tY29udHJvbHMgYnV0dG9uIHstLT5cXG48IS0tICBwYWRkaW5nOiA4cHggMTVweDstLT5cXG48IS0tICBiYWNrZ3JvdW5kOiAjZjBmMGYwOy0tPlxcbjwhLS0gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7LS0+XFxuPCEtLSAgY3Vyc29yOiBwb2ludGVyOy0tPlxcbjwhLS19LS0+XFxuPCEtLTwvc3R5bGU+LS0+XFxuPHN0eWxlPlxcbi5pbnZlbnRvcnktcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi8qIE5BViDsmIHsl60g7Iqk7YOA7J28ICovXFxuLm5hdi1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiDsmIjsi5wg7IOJ7IOBICovXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBTRUNUSU9OIOyYgeyXrSDsiqTtg4DsnbwgKi9cXG4uc2VjdGlvbi1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaW52ZW50b3J5LXNlY3Rpb25zIHtcXG4gIGZsZXgtYmFzaXM6IDQ4JTsgLyog65Ox6riJ67OEIOyerOqzoCDrqqnroZ3snbQg7ZWcIOykhOyXkCAy6rCc7JSpIO2RnOyLnOuQmOuPhOuhnSDshKTsoJUgKi9cXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIOyEueyFmCDqsIQg66eI7KeEICovXFxufVxcblxcbi8qIOuTseq4ieuzhCDsnqzqs6Ag7Lm065OcIOuniOyngOuniSDtla3rqqkg66eI7KeEIOyhsOyglSAqL1xcbi5pbnZlbnRvcnktc2VjdGlvbnM6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qIEZPT1RFUiDsmIHsl60g7Iqk7YOA7J28ICovXFxuLmZvb3Rlci1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IC8qIOyYiOyLnCDsg4nsg4EgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIOq4sO2DgCDtlYTsmpTtlZwg7Iqk7YOA7J28IOy2lOqwgCAqL1xcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/InventoryAll.vue?vue&type=style&index=0&id=a5705756&lang=css\n");

/***/ })

})