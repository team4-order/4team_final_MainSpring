package main.spring.login.demo2.dto;

import lombok.Data;

@Data
public class GradePriceInfo {
    private String goodsCode;
    private String goodsGrade;
    private int inputStock;

    public GradePriceInfo(String goodsCode, String goodsGrade, int inputStock) {
        this.goodsCode = goodsCode;
        this.goodsGrade = goodsGrade;
        this.inputStock = inputStock;
    }

}