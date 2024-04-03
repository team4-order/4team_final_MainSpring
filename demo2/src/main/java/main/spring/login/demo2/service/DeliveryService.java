//package main.spring.login.demo2.service;
//
//import main.spring.login.demo2.dto.DeliveryStatusDTO;
//import main.spring.login.demo2.repository.DeliveryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class DeliveryService {
//
//    private final DeliveryRepository deliveryRepository;
//
//    @Autowired
//    public DeliveryService(DeliveryRepository deliveryRepository) {
//        this.deliveryRepository = deliveryRepository;
//    }
//
//
//
//    public List<DeliveryStatusDTO> findAllDeliveryStatus() {
//        return deliveryRepository.findAllDeliveryStatusDTOs();
//    }
//}
