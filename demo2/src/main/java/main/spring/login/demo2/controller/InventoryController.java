package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Inventory_K;
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
    public List<Inventory_K> getAllInventories() {
        return service.findAll();
    }

    // 창고 코드를 파라미터로 받아 해당 창고에 속한 재고 목록을 반환하는 엔드포인트 추가
//    @GetMapping(params = "storageCode") params로 하니깐 에러뜸..
    @GetMapping("/read/{storageCode}")
//    public List<Inventory> getInventoriesByStorageCode(@RequestParam String storageCode) {
    public List<Inventory_K> getInventoriesByStorageCode(@PathVariable String storageCode) {
        return service.findByStorageCode(storageCode);
    }


}