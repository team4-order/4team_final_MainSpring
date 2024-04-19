package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StorageController {
    private final StorageService storageService;

    @Autowired
    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/api/warehouses")
    public ResponseEntity<List<Contact>> listWarehouses() {
        List<Contact> warehouses = storageService.findAllWarehouses();
        return ResponseEntity.ok(warehouses);
    }
}