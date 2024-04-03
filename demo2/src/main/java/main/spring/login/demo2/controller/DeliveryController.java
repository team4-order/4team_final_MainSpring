//package main.spring.login.demo2.controller;
//
//import main.spring.login.demo2.dto.DeliveryStatusDTO;
//import main.spring.login.demo2.service.DeliveryService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/deliveries")
//public class DeliveryController {
//
//    private final DeliveryService deliveryService;
//
//    @Autowired
//    public DeliveryController(DeliveryService deliveryService) {
//        this.deliveryService = deliveryService;
//    }
//
//    @GetMapping("/status")
//    public List<DeliveryStatusDTO> getAllDeliveryStatus() {
//        return deliveryService.findAllDeliveryStatus();
//    }
//}
