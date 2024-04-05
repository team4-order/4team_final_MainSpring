package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.OrderMasterDTO;
import main.spring.login.demo2.entity.OrderMaster;

import java.util.List;

public interface OrderMasterService {
    List<OrderMaster> getOrderMastersByCustomerCode(String customerCode);

    List<OrderMaster> findAllOrderMaster();


    List<OrderMaster> findByBusinessId(String businessId);
    //기업ID에 따라 다른 정보 보여주는 것

    OrderMaster updateOrderStatus(Integer orderNumber, String adjustmentStatus);

    boolean isPendingSettlement(String customerCode);

}