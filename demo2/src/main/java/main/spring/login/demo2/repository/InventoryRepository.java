package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// 임시로 단일 키를 사용하는 것으로 가정
public interface InventoryRepository extends JpaRepository<Inventory, String> {
    // 창고 코드를 기준으로 재고 목록을 찾는 메소드 추가
    List<Inventory> findByStorageCode(String storageCode);
}
