package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.OrderMasterYDto;
import main.spring.login.demo2.entity.OrderMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderMasterRepository extends JpaRepository<OrderMaster, Integer> {
    List<OrderMaster> findByCustomerCode(String customerCode);

    @Override
    List<OrderMaster> findAll();

    @Query(value = "SELECT o.* FROM order_master o " +
            "INNER JOIN (SELECT contact_code FROM contact WHERE business_id = ?1) a " +
            "ON o.customer_code = a.contact_code", nativeQuery = true)
    List<OrderMaster> findByBusinessId(String businessId);

//    @Query(value = "SELECT o.orderNumber, o.orderPrice, o.orderDate, o.orderStatus, a.contact_name FROM order_master o " +
//            "INNER JOIN (SELECT contact_code, contact_name FROM contact WHERE business_id = ?1) a " +
//            "ON o.customer_code = a.contact_code", nativeQuery = true)
//    List<OrderMasterYDto> findOrderMasterDtoByBusinessId(String businessId);

    @Query("SELECT new main.spring.login.demo2.dto.OrderMasterYDto(o.orderNumber, o.orderPrice, o.orderDate, o.orderStatus, c.contactName) " +
            "FROM OrderMaster o JOIN Contact c " +
            "ON o.customerCode = c.contactCode WHERE c.businessId = :businessId")
    List<OrderMasterYDto> findOrderMasterDtoByBusinessId(@Param("businessId") String businessId);




}

