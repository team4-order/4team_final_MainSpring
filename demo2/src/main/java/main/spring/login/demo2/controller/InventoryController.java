package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.InventoryDTO;
import main.spring.login.demo2.dto.OrderProductSummaryDTO;
import main.spring.login.demo2.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventories")
public class InventoryController {

    private final InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping
    public List<InventoryDTO> getAllInventories() {
        return inventoryService.findAll();
    }


//    @GetMapping("/read/{storageCode}")
//    public List<Inventory> findByStorageCode(@PathVariable String storageCode) {ㅂ
//        return inventoryService.findByStorageCode(storageCode);
//    }

    @GetMapping("/read/{storageCode}")
    public List<InventoryDTO> findByStorageCode(@PathVariable String storageCode) {
        return inventoryService.findByStorageCode(storageCode);
    }

    @GetMapping("/summaries/{businessId}")
    public List<OrderProductSummaryDTO> getOrderedProductSummaries(@PathVariable String businessId) {
        return inventoryService.findOrderedProductSummariesForBusiness(businessId);
    }



    @GetMapping("/business/{businessId}")
    public List<InventoryDTO> getInventoriesByBusinessId(@PathVariable String businessId) {
        return inventoryService.findByBusinessId(businessId);
    }
}
