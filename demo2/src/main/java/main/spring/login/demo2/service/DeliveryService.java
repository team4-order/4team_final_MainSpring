package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.repository.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

//    public List<DeliveryDetailDTO> getAllDeliveriesWithDetails() {
//        return deliveryRepository.findAllWithDetails();
//    }

    public Boolean updateDeliveryArriveToDelivered(int orderNumber) {
        return deliveryRepository.updateDeliveryArrive(orderNumber) > 0;
    }
}
