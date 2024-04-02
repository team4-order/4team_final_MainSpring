package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.InventoryTotal;

import java.util.List;

public interface InventoryTotalService {
    List<InventoryTotal> getTotalByCustomerCode(String customerCode);
}
