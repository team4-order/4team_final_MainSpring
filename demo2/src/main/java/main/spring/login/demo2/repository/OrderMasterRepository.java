package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.OrderMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderMasterRepository extends JpaRepository<OrderMaster, Integer> {
    List<OrderMaster> findByCustomerCode(String customerCode);

    @Override
    List<OrderMaster> findAll();

    @Query(value = "SELECT o.* FROM order_master o " +
            "INNER JOIN (SELECT contact_code FROM contact WHERE business_id = ?1) a " +
            "ON o.customer_code = a.contact_code", nativeQuery = true)
    List<OrderMaster> findByBusinessId(String businessId);




}

