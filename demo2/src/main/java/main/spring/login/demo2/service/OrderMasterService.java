package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.entity.OrderMaster;
import org.springframework.stereotype.Service;

@Service
public interface OrderMasterService {
    OrderMaster getOrderMasterById(int orderNumber);
}
