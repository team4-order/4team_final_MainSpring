package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.InventoryTotalDto;
import main.spring.login.demo2.entity.InventoryTotal;
import main.spring.login.demo2.repository.InventorySummary;
import main.spring.login.demo2.service.InventoryTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/total")
public class InventoryTotalController {

    @Autowired
    private InventoryTotalService inventoryTotalService;


    @GetMapping("/{customerCode}")
    public List<InventoryTotal> getInventoryTotalByCustomerCode(@PathVariable("customerCode") String customerCode){
        return inventoryTotalService.getTotalByCustomerCode(customerCode);
    }

    @GetMapping("/summary/{customerCode}")
    public List<InventorySummary> getTotalSummaryByCustomerCode(@PathVariable("customerCode") String customerCode){
        return inventoryTotalService.getTotalSummaryByCustomerCode(customerCode);
    }

//    @GetMapping("/storage/{storageCode}")
//    public List<InventoryTotal> getTotalByStorageCode(@PathVariable("storageCode") String storageCode){
//        return inventoryTotalService.getTotalByStorageCode(storageCode);
//    }


    @GetMapping("/storage/{storageCode}")
    public List<InventoryTotalDto> getTotalByStorageCode(@PathVariable("storageCode") String storageCode){
        return inventoryTotalService.getInventoryTotalByStorageCode(storageCode);
    }

}

