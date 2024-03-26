package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.entity.OrderProduct;
import main.spring.login.demo2.service.OrderMasterService;
import main.spring.login.demo2.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderMasterController {

    @Autowired
    private OrderMasterService orderMasterService;

    @GetMapping("/customer/{customerCode}")
    public List<OrderMaster> getOrdersByCustomerCode(@PathVariable("customerCode") String customerCode) {
        return orderMasterService.getOrderMastersByCustomerCode(customerCode);
    }



}