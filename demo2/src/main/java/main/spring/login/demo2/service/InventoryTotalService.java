package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.InventoryTotal;
import main.spring.login.demo2.repository.InventorySummary;

import java.util.List;

public interface InventoryTotalService {
    List<InventoryTotal> getTotalByCustomerCode(String customerCode);
    List<InventorySummary> getTotalSummaryByCustomerCode(String customerCode);
}
