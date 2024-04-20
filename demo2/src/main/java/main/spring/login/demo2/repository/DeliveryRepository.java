package main.spring.login.demo2.repository;

import jakarta.transaction.Transactional;
import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.dto.DeliveryYDto;
import main.spring.login.demo2.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, String> {
//    @Query("SELECT new main.spring.login.demo2.dto.DeliveryDetailDTO(d.deliveryNumber, d.deliveryAddress, d.deliveryArrive, d.orderNumber," +
//            "gm.goodsName, gm.goodsCode, c.contactName,d.deliveryDate) " +
//            "FROM Delivery d " +
//            "JOIN d.orderMaster om " +
//            "JOIN OrderProduct op ON om.orderNumber = op.orderMaster.orderNumber " +
//            "JOIN GoodsMaster gm ON op.goodsCode = gm.goodsCode " +
//            "JOIN Contact c ON om.customerCode = c.contactCode")
//    List<DeliveryDetailDTO> findAllWithDetails();

    @Query("SELECT DISTINCT new main.spring.login.demo2.dto.DeliveryYDto(d.deliveryNumber, d.deliveryAddress, d.deliveryApply, d.deliveryArrive, d.orderNumber," +
            "c.contactName, om.orderStatus) " +
            "FROM Delivery d JOIN OrderMaster om ON d.orderNumber = om.orderNumber " +
            //"JOIN OrderProduct op ON om.orderNumber = op.orderNumber " +
            //"JOIN GoodsMaster gm ON op.goodsCode = gm.goodsCode " +
            "JOIN Contact c ON om.customerCode = c.contactCode " +
            "WHERE c.businessId = :businessId")
    List<DeliveryYDto> findDeliveryByBusinessId(@Param("businessId") String businessId);

    // 배송 도착 시간 update
    @Modifying
    @Transactional
    @Query("UPDATE Delivery d SET d.deliveryArrive = current timestamp WHERE d.orderNumber = ?1")
    int updateDeliveryArrive(int orderNumber);

}
