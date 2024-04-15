package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.OrderProductDto;
import main.spring.login.demo2.entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Integer>{
    List<OrderProduct> findByOrderNumber(Integer orderNumber);

    @Query("SELECT new main.spring.login.demo2.dto.OrderProductDto(op.orderNumber, op.goodsCode, gm.goodsName, op.goodsGrade, op.orderQuantity, op.orderPrice) " +
            "FROM OrderProduct op LEFT JOIN GoodsMaster gm ON op.goodsCode = gm.goodsCode WHERE op.orderNumber = :orderNumber")
    List<OrderProductDto> findOrderProductByOrderNumber(@Param("orderNumber") Integer orderNumber);

    // List<InventoryTotalDto> findTotalByStorageCode(@Param("storageCode") String storageCode);
}
