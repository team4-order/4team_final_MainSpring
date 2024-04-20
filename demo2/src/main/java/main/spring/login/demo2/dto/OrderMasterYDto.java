package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class OrderMasterYDto {
    private Integer orderNumber;
    private Integer orderPrice;
    private String customerName;
    private Date orderDate;
    private String orderStatus;
    private String customerCode;

// o.orderNumber, o.orderPrice, o.orderDate, o.orderStatus, c.contactName)
    public OrderMasterYDto(Integer orderNumber, Integer orderPrice, Date orderDate, String orderStatus, String customerName, String customerCode){
        this.orderNumber = orderNumber;
        this.orderPrice = orderPrice;
        this.customerName = customerName;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.customerCode = customerCode;
    }
}
