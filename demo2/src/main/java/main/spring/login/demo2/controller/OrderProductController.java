package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.OrderProductDto;
import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.entity.OrderProduct;
import main.spring.login.demo2.repository.OrderProductRepository;
import main.spring.login.demo2.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderProductController {

    @Autowired
    private OrderProductService orderProductService;
    @Autowired
    private OrderProductRepository orderProductRepository;

    @GetMapping("/detail/{orderNumber}")
    public List<OrderProductDto> getOrderProductsByOrderNumber(@PathVariable("orderNumber") Integer orderNumber) {
        return orderProductService.getOrderDetailsByOrderNumber(orderNumber);
    }

    @PostMapping("/detail/post")
    public OrderProduct createOrderProduct(@RequestBody OrderProduct orderProduct) {
        return orderProductRepository.save(orderProduct);
    }

}