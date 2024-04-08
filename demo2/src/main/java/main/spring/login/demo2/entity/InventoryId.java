package main.spring.login.demo2.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

public class InventoryId implements Serializable {
    private LocalDateTime firstStockDate;
    private String goodsCode;
    private String goodsGrade;


    public InventoryId() {
    }

    public InventoryId(LocalDateTime firstStockDate, String goodsCode, String goodsGrade) {
        this.firstStockDate = firstStockDate;
        this.goodsCode = goodsCode;
        this.goodsGrade = goodsGrade;
    }

    // Getters and Setters
    public LocalDateTime getFirstStockDate() {
        return firstStockDate;
    }

    public void setFirstStockDate(LocalDateTime firstStockDate) {
        this.firstStockDate = firstStockDate;
    }

    public String getGoodsCode() {
        return goodsCode;
    }

    public void setGoodsCode(String goodsCode) {
        this.goodsCode = goodsCode;
    }

    public String getGoodsGrade() {
        return goodsGrade;
    }

    public void setGoodsGrade(String goodsGrade) {
        this.goodsGrade = goodsGrade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InventoryId that = (InventoryId) o;
        return Objects.equals(firstStockDate, that.firstStockDate) &&
                Objects.equals(goodsCode, that.goodsCode) &&
                Objects.equals(goodsGrade, that.goodsGrade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstStockDate, goodsCode, goodsGrade);
    }
}
