package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.OrderMasterDTO;
import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.repository.OrderMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderMasterServiceImpl implements OrderMasterService {

    @Autowired
    private OrderMasterRepository orderMasterRepository;


    @Override
    public List<OrderMaster> getOrderMastersByCustomerCode(String customerCode) {
        return orderMasterRepository.findByCustomerCode(customerCode);
    }

    @Override
    public List<OrderMaster> findByBusinessId(String businessId){
        return orderMasterRepository.findByBusinessId(businessId);
    }

    @Override
    public List<OrderMaster> findAllOrderMaster() {
        return orderMasterRepository.findAll();
    }

    @Override
    public OrderMaster updateOrderStatus(Integer orderNumber, String adjustmentStatus) {
        Optional<OrderMaster> optionalOrderMaster = orderMasterRepository.findById(orderNumber);
        if (optionalOrderMaster.isPresent()) {
            OrderMaster orderMaster = optionalOrderMaster.get();
            orderMaster.setAdjustmentStatus(adjustmentStatus);
            return orderMasterRepository.save(orderMaster);
        } else {
            throw new RuntimeException("주문을 찾을 수 없습니다: " + orderNumber);
        }
    }


}