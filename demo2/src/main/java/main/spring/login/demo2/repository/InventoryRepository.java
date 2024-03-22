package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Inventory.InventoryId> {
    // 창고 코드를 기준으로 재고 목록을 찾는 메소드 추가
    List<Inventory> findByStorage_ContactCode(String storageCode);
}
