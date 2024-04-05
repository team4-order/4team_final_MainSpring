package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.InventoryTotalDto;
import main.spring.login.demo2.entity.InventoryTotal;
import main.spring.login.demo2.repository.InventorySummary;
import main.spring.login.demo2.repository.InventoryTotalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryTotalServiceImpl implements InventoryTotalService{

    @Autowired
    private InventoryTotalRepository inventoryTotalRepository;

    @Override
    public List<InventoryTotal> getTotalByCustomerCode(String customerCode) {
        return inventoryTotalRepository.findInventoryTotalByCustomerCode(customerCode);
    }

    @Override
    public List<InventorySummary> getTotalSummaryByCustomerCode(String customerCode){
        return inventoryTotalRepository.findInventorySummaryByCustomerCode(customerCode);
    }

    @Override
    public List<InventoryTotal> getTotalByStorageCode(String storageCode){
        return inventoryTotalRepository.findInventoryTotalByStorageCode(storageCode);
    }

    @Override
    public List<InventoryTotalDto> getInventoryTotalByStorageCode(String storageCode){
        return inventoryTotalRepository.findTotalByStorageCode(storageCode);
    }
}
