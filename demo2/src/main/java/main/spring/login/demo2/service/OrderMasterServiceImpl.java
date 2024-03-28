package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.repository.OrderMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderMasterServiceImpl implements OrderMasterService {

    @Autowired
    private OrderMasterRepository orderMasterRepository;


    @Override
    public List<OrderMaster> getOrderMastersByCustomerCode(String customerCode) {
        return orderMasterRepository.findByCustomerCode(customerCode);
    }

    @Override
    public List<OrderMaster> findAllOrderMaster() {
        return orderMasterRepository.findAll();
    }


}