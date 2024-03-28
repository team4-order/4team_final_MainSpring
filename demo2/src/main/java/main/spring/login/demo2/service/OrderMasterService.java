package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.entity.OrderMaster;
import org.hibernate.query.Order;

import java.util.List;

public interface OrderMasterService {
    List<OrderMaster> getOrderMastersByCustomerCode(String customerCode);

    List<OrderMaster> findAllOrderMaster();
}