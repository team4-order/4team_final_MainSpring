package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Integer>{
    List<OrderProduct> findByOrderNumber(Integer orderNumber);
}
