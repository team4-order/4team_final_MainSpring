package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.time.LocalDateTime;

@Getter
@Setter
public class DeliveryYDto {
    private String deliveryNumber;
    private String deliveryAddress;
    private LocalDateTime deliveryApply;
    private LocalDateTime deliveryArrive;
    private Integer orderNumber;
    //private String goodsName;
    //private String goodsCode;
    private String contactName;
    private String orderStatus;


    public DeliveryYDto(String deliveryNumber, String deliveryAddress, LocalDateTime deliveryApply,
                        LocalDateTime deliveryArrive, Integer orderNumber,
                        String contactName, String orderStatus){
        this.deliveryNumber = deliveryNumber;
        this.deliveryAddress = deliveryAddress;
        this.deliveryApply = deliveryApply;
        this.deliveryArrive = deliveryArrive;
        this.orderNumber = orderNumber;
        //this.goodsName = goodsName;
        //this.goodsCode = goodsCode;
        this.contactName = contactName;
        this.orderStatus = orderStatus;
    }
}
