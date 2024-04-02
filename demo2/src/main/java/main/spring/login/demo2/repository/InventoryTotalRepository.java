package main.spring.login.demo2.repository;


import main.spring.login.demo2.entity.InventoryId;
import main.spring.login.demo2.entity.InventoryTotal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryTotalRepository  extends JpaRepository<InventoryTotal, InventoryId> {

    @Query(value = "select i.goods_code, i.goods_grade from inventory_total as i\n" +
            "    inner join (select storage_code from c_storage where customer_code = ?1) as c\n" +
            "    where i.storage_code = c.storage_code", nativeQuery = true)
    List<InventoryTotal> findInventoryTotalByCustomerCode(String customerCode);
}
