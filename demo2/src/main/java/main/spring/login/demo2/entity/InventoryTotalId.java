package main.spring.login.demo2.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

public class InventoryTotalId implements Serializable {
    private String storageCode;
    private String goodsCode;
    private String goodsGrade;


    public InventoryTotalId() {
    }

    public InventoryTotalId(String storageCode, String goodsCode, String goodsGrade) {
        this.storageCode = storageCode;
        this.goodsCode = goodsCode;
        this.goodsGrade = goodsGrade;
    }

    // Getters and Setters
    public String getStorageCode() {
        return storageCode;
    }

    public void setStorageCode(String storageCode) {
        this.storageCode = storageCode;
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
        InventoryTotalId that = (InventoryTotalId) o;
        return Objects.equals(storageCode, that.storageCode) &&
                Objects.equals(goodsCode, that.goodsCode) &&
                Objects.equals(goodsGrade, that.goodsGrade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(storageCode, goodsCode, goodsGrade);
    }
}
