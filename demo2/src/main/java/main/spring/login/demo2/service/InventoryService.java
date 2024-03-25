package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InventoryService {
    private final InventoryRepository repository;

    @Autowired
    public InventoryService(InventoryRepository repository) {
        this.repository = repository;
    }

    public List<Inventory> findAll() {
        return repository.findAll();
    }

    // 특정 창고 코드에 해당하는 재고 목록을 반환하는 메소드 수정
    public List<Inventory> findByStorageCode(String storageCode) {
        return repository.findByStorageCode(storageCode); // 메소드명 수정
    }
}
