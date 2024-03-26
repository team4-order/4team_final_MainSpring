package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.OrderProduct;
import main.spring.login.demo2.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderProductController {

    @Autowired
    private OrderProductService orderProductService;
    //private OrderProductService orderProductService;

    @GetMapping("/detail/{orderNumber}")
    public List<OrderProduct> getOrderProductsByOrderNumber(@PathVariable("orderNumber") Integer orderNumber) {
        System.out.println(orderNumber);
        return orderProductService.getOrderProductsByOrderNumber(orderNumber);
    }


}