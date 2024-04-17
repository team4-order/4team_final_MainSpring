package main.spring.login.demo2.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import main.spring.login.demo2.entity.Inventory;
import org.springframework.data.relational.core.sql.In;

import java.time.LocalDateTime;

@Data
public class InventoryYDto {
    private LocalDateTime firstStockDate;
    private String goodsCode;
    private String goodsGrade;
    private String inventoryQuantity;
    private LocalDateTime gradeEvaluationDates;
    private String currentGrade;
    private Integer expirationTime;
    private String storageCode;

    public InventoryYDto(LocalDateTime firstStockDate, String goodsCode, String goodsGrade, String inventoryQuantity, LocalDateTime gradeEvaluationDates, String currentGrade, Integer expirationTime, String storageCode){
        this.firstStockDate = firstStockDate;
        this.goodsGrade = goodsGrade;
        this.goodsCode = goodsCode;
        this.inventoryQuantity = inventoryQuantity;
        this.gradeEvaluationDates = gradeEvaluationDates;
        this.currentGrade = currentGrade;
        this.expirationTime = expirationTime;
        this.storageCode = storageCode;
    }

    public Inventory toEntity() {
        Inventory inventory = new Inventory();

        inventory.setFirstStockDate(this.firstStockDate);
        inventory.setGoodsCode(this.goodsCode);
        inventory.setGoodsGrade(this.goodsGrade);
        inventory.setInventoryQuantity(this.inventoryQuantity);
        inventory.setCurrentGrade(this.currentGrade);
        inventory.setStorageCode(this.storageCode);
        inventory.setGradeEvaluationDates(this.gradeEvaluationDates);

        return inventory;
    }
}
