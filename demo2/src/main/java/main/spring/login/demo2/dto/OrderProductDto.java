package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.relational.core.sql.In;

@Getter
@Setter
public class OrderProductDto {
    private Integer orderNumber;
    private String goodsCode;
    private String goodsGrade;
    private Integer orderPrice;
    private Integer orderQuantity;
    private String goodsName;

    public OrderProductDto(Integer orderNumber, String goodsCode, String goodsName, String goodsGrade, Integer orderQuantity, Integer orderPrice){
        this.orderNumber = orderNumber;
        this.goodsCode = goodsCode;
        this.goodsGrade = goodsGrade;
        this.orderQuantity = orderQuantity;
        this.orderPrice = orderPrice;
        this.goodsName = goodsName;
    }
}
