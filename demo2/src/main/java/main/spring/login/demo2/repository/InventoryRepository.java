package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Inventory.InventoryId> {
}
