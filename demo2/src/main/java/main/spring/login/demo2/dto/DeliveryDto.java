package main.spring.login.demo2.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DeliveryDto {
    private String deliveryNumber;
    private String deliveryAddress;
    private LocalDateTime deliveryArrive;
    private String customerName;
    private String goodsName; // 아직 여러품목일때 생각안함...


    public DeliveryDto(String deliveryNumber, String deliveryAddress, LocalDateTime deliveryArrive, String customerName, String goodsName) {
        this.deliveryNumber = deliveryNumber;
        this.deliveryAddress = deliveryAddress;
        this.deliveryArrive = deliveryArrive;
        this.customerName = customerName;
        this.goodsName = goodsName;
    }


}