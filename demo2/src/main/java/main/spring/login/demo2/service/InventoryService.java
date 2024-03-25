package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    @Autowired
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    public List<Inventory> findAll() {
        return inventoryRepository.findAll();
    }

    public List<Inventory> findByStorageCode(String storageCode) {
        return inventoryRepository.findByStorageCode(storageCode);
    }

    // 필요한 비즈니스 로직을 추가할 수 있습니다.
//    public List<Inventory> findByStorageCode(String storageCode) {
//        return inventoryRepository.findByStorageCode(storageCode);
//    }
}
