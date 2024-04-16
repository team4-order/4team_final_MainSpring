package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderProductYDto {
    private Integer orderNumber;
    private String goodsCode;
    private String goodsGrade;
    private Integer orderQuantity;
    private String orderStatus;
    private String storageCode;


    public OrderProductYDto(Integer orderNumber, String goodsCode, String goodsGrade, Integer orderQuantity, String orderStatus, String storageCode){
        this.orderNumber = orderNumber;
        this.goodsCode = goodsCode;
        this.goodsGrade = goodsGrade;
        this.orderQuantity = orderQuantity;
        this.orderStatus = orderStatus;
        this.storageCode = storageCode;
    }
}
