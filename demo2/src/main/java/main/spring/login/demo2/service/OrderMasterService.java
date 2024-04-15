package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.OrderMasterDTO;
import main.spring.login.demo2.dto.OrderMasterYDto;
import main.spring.login.demo2.entity.OrderMaster;

import java.sql.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface OrderMasterService {
    List<OrderMaster> getOrderMastersByCustomerCode(String customerCode);

    List<OrderMaster> findAllOrderMaster();

    List<OrderMaster> findByBusinessId(String businessId);
    //기업ID에 따라 다른 정보 보여주는 것

    OrderMaster findByBusinessIdAndOrderNumber(String businessId, Integer orderNumber);
    //특정 기업의 특정 주문번호의 정보 보여주는 것

    OrderMaster updateOrderStatus(Integer orderNumber, String adjustmentStatus);

    boolean isPendingSettlement(String customerCode);

    Map<String, Integer> countOrderStatusByCurrentMonth(String customerContact);

    void cancelOrder(int orderNumber);

    Optional<OrderMaster> findByOrderNumber(int orderNumber);

    List<OrderMasterYDto> findOrderMasterDtoByBusinessId(String businessId);

    List<OrderMaster> findByStorageCode(String storageCode);
}
