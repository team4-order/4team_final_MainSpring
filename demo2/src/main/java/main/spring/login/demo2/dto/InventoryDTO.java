package main.spring.login.demo2.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InventoryDTO {
    private LocalDateTime firstStockDate;
    private String goodsCode;
    private String goodsGrade;
    private String inventoryQuantity;
    private int salesPrice;
    private LocalDateTime gradeEvaluationDates;
    private String storageCode;
    private String goodsName; // GoodsMaster로부터 가져온 상품 이름

}
