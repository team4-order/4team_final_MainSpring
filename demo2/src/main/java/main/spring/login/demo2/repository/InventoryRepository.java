package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.InventoryYDto;
import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.entity.Inventory.InventoryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, InventoryId> {
    List<Inventory> findByStorageCode(String storageCode);

//    @Query(value = "SELECT new main.spring.login.demo2.dto.InventoryYDto(i.firstStockDate, i.goodsCode, i.goodsGrade, " +
//            "i.inventoryQuantity, i.gradeEvaluationDates, i.currentGrade, g.expirationTime, i.storageCode) " +
//            "FROM Inventory i LEFT JOIN GoodsMaster g ON i.goodsCode = g.goodsCode " +
//            "WHERE DATE_ADD(i.gradeEvaluationDates, INTERVAL (g.expirationTime) DAY) < CURRENT_DATE()")
//    List<InventoryYDto> findExpiredInventory();

    @Query(value = "SELECT i.first_stock_date, i.goods_code, i.goods_grade, " +
            "i.inventory_quantity, i.grade_evaluation_dates, i.current_grade, g.expiration_time, i.storage_code " +
            "FROM inventory i LEFT JOIN goods_master g ON i.goods_code = g.goods_code " +
            "WHERE DATE_ADD(i.grade_evaluation_dates, INTERVAL g.expiration_time DAY) < CURRENT_DATE()",
            nativeQuery = true)
    List<Object[]> findExpiredInventory();

}
