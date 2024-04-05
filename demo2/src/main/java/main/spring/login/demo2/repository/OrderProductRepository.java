package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.OrderProductSummaryDTO;
import main.spring.login.demo2.entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Integer> {
    List<OrderProduct> findByOrderNumber(Integer orderNumber);

    //인벤토리에서 나갈 재고
    @Query("SELECT new main.spring.login.demo2.dto.OrderProductSummaryDTO(op.goodsCode, SUM(op.orderQuantity)) " +
            "FROM OrderProduct op " +
            "GROUP BY op.goodsCode")
    List<OrderProductSummaryDTO> findOrderedProductSummaries();
}
