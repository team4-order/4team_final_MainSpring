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
    private final InventoryService service;

    @Autowired
    public InventoryController(InventoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Inventory> getAllInventories() {
        return service.findAll();
    }

    @GetMapping("/read/{storageCode}")
    public List<Inventory> getInventoriesByStorageCode(@PathVariable String storageCode) {
        return service.findByStorageCode(storageCode);
    }
}
