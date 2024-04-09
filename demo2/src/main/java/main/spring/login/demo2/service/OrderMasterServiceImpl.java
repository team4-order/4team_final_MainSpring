package main.spring.login.demo2.service;

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
    public List<OrderMaster> findByBusinessId(String businessId){
        return orderMasterRepository.findByBusinessId(businessId);
    }

    @Override
    public OrderMaster findByBusinessIdAndOrderNumber(String businessId, Integer orderNumber) {
        // 여기서는 findByBusinessIdAndOrderNumber 메서드가 구현되어야 합니다.
        // 이 로직은 businessId로 필터링 된 주문 중 특정 orderNumber에 해당하는 주문을 찾습니다.
        return orderMasterRepository.findByBusinessIdAndOrderNumber(businessId, orderNumber)
                .orElseThrow(() -> new RuntimeException("해당 businessId와 orderNumber를 가진 주문을 찾을 수 없습니다."));
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
    public boolean isPendingSettlement(String customerCode) {
        List<OrderMaster> orders = orderMasterRepository.findByCustomerCode(customerCode);
        for (OrderMaster order : orders) {
            String status = order.getAdjustmentStatus();
            if (status.equals("미정산") || status.equals("정산 요청")) {
                return true;
            }
        }
        return false;
    }


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
}
