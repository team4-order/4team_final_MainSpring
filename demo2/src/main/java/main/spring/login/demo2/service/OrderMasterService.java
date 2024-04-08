package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.OrderMasterDTO;
import main.spring.login.demo2.dto.OrderMasterYDto;
import main.spring.login.demo2.entity.OrderMaster;

import java.util.List;
import java.util.Optional;

public interface OrderMasterService {
    List<OrderMaster> getOrderMastersByCustomerCode(String customerCode);

    List<OrderMaster> findAllOrderMaster();

    OrderMaster updateOrderStatus(Integer orderNumber, String adjustmentStatus);

    List<OrderMaster> findByBusinessId(String businessId);

    void cancelOrder(int orderNumber);

    Optional<OrderMaster> findByOrderNumber(int orderNumber);

    List<OrderMasterYDto> findOrderMasterDtoByBusinessId(String businessId);
}