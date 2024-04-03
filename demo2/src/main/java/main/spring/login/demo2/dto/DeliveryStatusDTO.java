package main.spring.login.demo2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryStatusDTO {
    private String deliveryNumber;
    private String deliveryAddress;
    private String companyName;
    private String goodsName;
}
