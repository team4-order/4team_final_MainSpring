//package main.spring.login.demo2.entity;
//
//import java.io.Serializable;
//import java.time.LocalDateTime;
//import java.util.Objects;
//
//public class InventoryId implements Serializable {
//    private LocalDateTime firstStockDate;
//    private String goodsCode;
//    private String goodsGrade;
//
//    // 기본 생성자
//    public InventoryId() {}
//
//    // 전체 인자를 받는 생성자
//    public InventoryId(LocalDateTime firstStockDate, String goodsCode, String goodsGrade) {
//        this.firstStockDate = firstStockDate;
//        this.goodsCode = goodsCode;
//        this.goodsGrade = goodsGrade;
//    }
//
//    // equals와 hashCode 구현
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        InventoryId that = (InventoryId) o;
//        return Objects.equals(firstStockDate, that.firstStockDate) &&
//                Objects.equals(goodsCode, that.goodsCode) &&
//                Objects.equals(goodsGrade, that.goodsGrade);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(firstStockDate, goodsCode, goodsGrade);
//    }
//
//    // 게터와 세터는 생략
//}
