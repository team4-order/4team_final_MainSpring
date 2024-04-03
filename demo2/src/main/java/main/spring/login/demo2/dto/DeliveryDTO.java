package main.spring.login.demo2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryDTO {
    private String deliveryNumber;
    private String deliveryAddress;
    private LocalDateTime deliveryArrive;
    private int orderNumber;
    private List<OrderDetail> orderDetails;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class OrderDetail {
        private String goodsName;
        private String goodsCode;
        private String customerName;
    }
}
