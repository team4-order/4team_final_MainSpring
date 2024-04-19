package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, String> {
    @Query("SELECT new main.spring.login.demo2.dto.DeliveryDetailDTO(d.deliveryNumber, d.deliveryAddress, d.deliveryArrive, d.orderNumber," +
            "gm.goodsName, gm.goodsCode, c.contactName,d.deliveryDate) " +
            "FROM Delivery d " +
            "JOIN d.orderMaster om " +
            "JOIN OrderProduct op ON om.orderNumber = op.orderMaster.orderNumber " +
            "JOIN GoodsMaster gm ON op.goodsCode = gm.goodsCode " +
            "JOIN Contact c ON om.customerCode = c.contactCode")
    List<DeliveryDetailDTO> findAllWithDetails();
}
