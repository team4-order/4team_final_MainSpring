package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.entity.Inventory.InventoryId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, InventoryId> {
    // 추가적으로 필요한 쿼리 메소드를 정의할 수 있습니다.
}
