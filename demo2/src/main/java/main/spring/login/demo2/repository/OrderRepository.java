package main.spring.login.demo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import main.spring.login.demo2.entity.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByOrderNumber(int orderNumber);

}