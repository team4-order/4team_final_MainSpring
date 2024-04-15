package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.OrderProductDto;
import main.spring.login.demo2.entity.OrderProduct;

import java.util.List;

public interface OrderProductService {
    List<OrderProduct> getOrderProductsByOrderNumber(Integer orderNumber);

    List<OrderProductDto> getOrderDetailsByOrderNumber(Integer orderNumber);

}
