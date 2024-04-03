package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.DeliveryStatusDTO;
import main.spring.login.demo2.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, String> {

    @Query("SELECT new main.spring.login.demo2.dto.DeliveryStatusDTO(d.deliveryNumber, d.deliveryAddress, c.contactName, gm.goodsName) " +
            "FROM Delivery d " +
            "JOIN d.orderMaster om " +
            "JOIN om.customerContact c " +
            "JOIN OrderProduct op ON om.orderNumber = op.orderMaster.orderNumber " +
            "JOIN GoodsMaster gm ON op.goodsCode = gm.goodsCode " +
            "GROUP BY d.deliveryNumber")
    List<DeliveryStatusDTO> findAllDeliveryStatusDTOs();
}