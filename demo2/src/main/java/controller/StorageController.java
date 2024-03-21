package controller;

import entity.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import service.StorageService;

import java.util.List;

@RestController
public class StorageController {
    private final StorageService storageService;

    @Autowired
    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/api/warehouses")
    public ResponseEntity<List<Storage>> listWarehouses() {
        List<Storage> warehouses = storageService.findAllWarehouses();
        return ResponseEntity.ok(warehouses);
    }
}
