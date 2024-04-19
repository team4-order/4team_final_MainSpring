package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.ContactYDto;
import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.dto.DeliveryYDto;
import main.spring.login.demo2.repository.DeliveryRepository;
import main.spring.login.demo2.service.DeliveryService;
import main.spring.login.demo2.service.OrderMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private OrderMasterService orderMasterService;

//    @GetMapping("/details")
//    public List<DeliveryDetailDTO> getAllDeliveriesWithDetails() {
//        return deliveryService.getAllDeliveriesWithDetails();
//    }

    @GetMapping("/status/{businessId}")
    public List<DeliveryYDto> getDeliveryStatusByBusinessId(@PathVariable("businessId") String businessId) {
        return deliveryRepository.findDeliveryByBusinessId(businessId);
    }

    @PutMapping("/{orderNumber}/complete")
    public ResponseEntity<String> updateOrderStatusToDelivered(@PathVariable int orderNumber) {
        boolean updated = orderMasterService.updateOrderStatusToDelivered(orderNumber);
        if (updated) {
            return ResponseEntity.ok("Order status updated to 배송 완료");
        } else {
            return ResponseEntity.badRequest().body("Failed to update order status");
        }
    }
}
