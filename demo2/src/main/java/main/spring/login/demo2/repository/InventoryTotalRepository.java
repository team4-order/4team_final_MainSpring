package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryTotalRepository extends JpaRepository<Inventory, String> {
    @Query("SELECT\n" +
            "    inventory.goods_code, inventory.goods_grade,\n" +
            "    SUM(CAST(inventory.inventory_quantity AS UNSIGNED)) AS total_inventory_quantity\n" +
            "FROM inventory INNER JOIN (SELECT *\n" +
            "    FROM c_storage\n" +
            "    WHERE customer_code = ?\n" +
            ") c ON inventory.storage_code = c.storage_code\n" +
            "GROUP BY inventory.goods_code, inventory.goods_grade\n" +
            "ORDER BY inventory.goods_code, inventory.goods_grade, total_inventory_quantity DESC")
    List<Inventory> findByCustomerCode(String customerCode);
}
