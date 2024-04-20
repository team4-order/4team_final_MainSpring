package main.spring.login.demo2.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryDetailDTO {
    private String deliveryNumber;
    private String deliveryAddress;
    private LocalDateTime deliveryApply;
    private LocalDateTime deliveryArrive;
    private int orderNumber;

    //private LocalDateTime deliveryApply;

    private String goodsName;
    private String goodsCode;
    private String contactName;
    private String orderStatus;

}
