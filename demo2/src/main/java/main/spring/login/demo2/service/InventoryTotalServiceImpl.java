package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.InventoryTotal;
import main.spring.login.demo2.repository.InventoryTotalRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class InventoryTotalServiceImpl implements InventoryTotalService{

    @Autowired
    private InventoryTotalRepository inventoryTotalRepository;

    @Override
    public List<InventoryTotal> getTotalByCustomerCode(String customerCode) {
        return inventoryTotalRepository.findInventoryTotalByCustomerCode(customerCode);
    }
}
