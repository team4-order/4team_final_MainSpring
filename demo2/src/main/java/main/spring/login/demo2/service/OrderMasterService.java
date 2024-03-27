package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.OrderMaster;

import java.util.List;

public interface OrderMasterService {
    List<OrderMaster> getOrderMastersByCustomerCode(String customerCode);
    List<OrderMaster> getOrderMaster();
}