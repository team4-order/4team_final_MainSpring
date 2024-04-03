package main.spring.login.demo2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryDetailDTO {
    private String deliveryNumber;
    private String deliveryAddress;
    private LocalDateTime deliveryArrive;
    private int orderNumber;
    private String goodsName;
    private String goodsCode;
    private String contactName;
}
