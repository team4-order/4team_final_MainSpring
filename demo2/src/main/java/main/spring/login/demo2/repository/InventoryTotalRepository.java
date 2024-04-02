package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.InventoryTotal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryTotalRepository  extends JpaRepository<InventoryTotal, String> {

    @Query(value = "select i.* from inventory_total as i\n" +
            "    inner join (select storage_code from c_storage where customer_code = ?1) as c\n" +
            "    where i.storage_code = c.storage_code", nativeQuery = true)
    List<InventoryTotal> findInventoryTotalByCustomerCode(String customerCode);
    @Query(value = "SELECT i.goods_code AS goodsCode, i.goods_grade AS goodsGrade, SUM(i.total_quantity) AS totalQuantity " +
            "FROM inventory_total AS i " +
            "INNER JOIN c_storage AS c ON i.storage_code = c.storage_code " +
            "WHERE c.customer_code = ?1 " +
            "GROUP BY i.goods_code, i.goods_grade", nativeQuery = true)
    List<InventorySummary> findInventorySummaryByCustomerCode(String customerCode);
}

