package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.CStorage;

import java.util.List;

public interface CStorageService {
    //List<InventoryTotal> getTotalByCustomerCode(String customerCode);
    List<CStorage> getStorageByCustomerCode(String customerCode);
}