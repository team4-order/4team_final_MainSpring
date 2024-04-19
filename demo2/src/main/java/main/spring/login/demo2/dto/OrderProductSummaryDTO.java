package main.spring.login.demo2.dto;

import lombok.Data;

@Data
public class OrderProductSummaryDTO {
    private String goodsCode;
    private long totalQuantity;

    public OrderProductSummaryDTO(String goodsCode, long totalQuantity) {
        this.goodsCode = goodsCode;
        this.totalQuantity = totalQuantity;
    }

}
