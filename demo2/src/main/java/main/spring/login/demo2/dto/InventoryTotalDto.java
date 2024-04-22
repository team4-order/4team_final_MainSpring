package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.relational.core.sql.In;

import java.math.BigDecimal;

@Setter
@Getter
public class InventoryTotalDto {
    private String storageCode;
    private String goodsCode;
    private String goodsName;
    private String goodsGrade;
    private Integer inputPrice;
    private Integer marginRate;
    private Integer totalQuantity;

    // 생성자
    public InventoryTotalDto(String storageCode, String goodsCode, String goodsName, String goodsGrade, Integer inputPrice, Integer marginRate, Integer totalQuantity) {
        this.storageCode = storageCode;
        this.goodsCode = goodsCode;
        this.goodsName = goodsName;
        this.goodsGrade = goodsGrade;
        this.inputPrice = inputPrice;
        this.marginRate = marginRate;
        this.totalQuantity = totalQuantity;
    }

}