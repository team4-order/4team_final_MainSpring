package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StorageController {
    private final StorageService storageService;

    @Autowired
    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    // 로그인한 사용자의 비즈니스 ID에 따라 창고 목록을 반환하는 엔드포인트
    @GetMapping("/api/warehouses/{businessId}")
    public ResponseEntity<List<Contact>> listWarehouses(@PathVariable String businessId) {
        List<Contact> warehouses = storageService.findWarehousesByBusinessId(businessId);
        return ResponseEntity.ok(warehouses);
    }
}