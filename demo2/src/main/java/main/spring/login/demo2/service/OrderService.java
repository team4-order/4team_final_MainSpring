package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Order;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {
    Order getOrderById(int orderNumber);
}
