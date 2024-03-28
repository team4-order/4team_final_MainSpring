package main.spring.login.demo2.DTO;

public class InventorySummary {
    private String goodsCode;
    private String goodsGrade;
    private long totalInventoryQuantity;

    public InventorySummary(String goodsCode, String goodsGrade, long totalInventoryQuantity) {
        this.goodsCode = goodsCode;
        this.goodsGrade = goodsGrade;
        this.totalInventoryQuantity = totalInventoryQuantity;
    }

    // Getters
}