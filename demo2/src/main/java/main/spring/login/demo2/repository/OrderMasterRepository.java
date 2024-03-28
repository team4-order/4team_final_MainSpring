package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.OrderMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import main.spring.login.demo2.entity.OrderMaster;

import java.util.List;

public interface OrderMasterRepository extends JpaRepository<OrderMaster, Integer> {
    List<OrderMaster> findByOrderNumber(int orderNumber);

}