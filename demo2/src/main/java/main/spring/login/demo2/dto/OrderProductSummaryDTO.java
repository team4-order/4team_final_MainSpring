package main.spring.login.demo2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderProductSummaryDTO {
    private String goodsCode;
    private long orderedQuantity;

    public OrderProductSummaryDTO(String goodsCode, long orderedQuantity) {
        this.goodsCode = goodsCode;
        this.orderedQuantity = orderedQuantity;
    }


}
