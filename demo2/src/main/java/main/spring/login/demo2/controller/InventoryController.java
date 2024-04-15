package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<Inventory> getAllInventories() {
        return inventoryService.findAll();
    }



//    @GetMapping("/read/{storageCode}")
//    public List<Inventory> findByStorageCode(@PathVariable String storageCode) {
//        return inventoryService.findByStorageCode(storageCode);
//    }

    @GetMapping("/read/{storageCode}")
    public List<Inventory> findByStorageCode(@PathVariable String storageCode) {
        return inventoryService.findByStorageCode(storageCode);
    }
}

