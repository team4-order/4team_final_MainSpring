package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.OrderMasterYDto;
import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.repository.OrderMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


    @Override
    @Transactional
    public void cancelOrder(int orderNumber) {
        orderMasterRepository.findById(orderNumber).ifPresent(orderMaster -> {
            orderMaster.setOrderStatus("주문 취소");
            orderMaster.setAdjustmentStatus("주문 취소");
            orderMasterRepository.save(orderMaster);
        });
    }

    public Optional<OrderMaster> findByOrderNumber(int orderNumber){
        return orderMasterRepository.findById(orderNumber);
    }

    @Override
    public List<OrderMasterYDto> findOrderMasterDtoByBusinessId(String businessId){
        return orderMasterRepository.findOrderMasterDtoByBusinessId(businessId);
    }
}