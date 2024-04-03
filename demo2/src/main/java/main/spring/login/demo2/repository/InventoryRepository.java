package main.spring.login.demo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository<Inventory, InventoryId> extends JpaRepository<Inventory, InventoryId> {
    List<Inventory> findByStorageCode(String storageCode);


}
