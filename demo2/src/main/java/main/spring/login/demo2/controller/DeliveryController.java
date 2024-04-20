package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.service.DeliveryService;
import main.spring.login.demo2.service.DeliveryService1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @Autowired
    private DeliveryService1 deliveryService1;

    @GetMapping("/details")
    public List<DeliveryDetailDTO> getAllDeliveriesWithDetails() {
        return deliveryService.getAllDeliveriesWithDetails();
    }

    @PostMapping("/delivery/{orderNumber}")
    public ResponseEntity<DeliveryDetailDTO> createDelivery(@PathVariable int orderNumber,
                                                            @RequestBody DeliveryDetailDTO deliveryDetailDTO) {

        // 주문번호를 사용하여 DeliveryDetailDTO 객체를 생성
        DeliveryDetailDTO newDelivery = new DeliveryDetailDTO();
        newDelivery.setDeliveryNumber(generateDeliveryNumber());
        newDelivery.setDeliveryAddress(deliveryDetailDTO.getDeliveryAddress());
        newDelivery.setDeliveryArrive(deliveryDetailDTO.getDeliveryArrive());
        newDelivery.setDeliveryApply(LocalDateTime.now()); // 현재 시간 설정
        newDelivery.setOrderNumber(orderNumber);

        DeliveryDetailDTO savedDelivery = deliveryService1.saveDelivery(newDelivery);

        return new ResponseEntity<>(savedDelivery, HttpStatus.CREATED);
    }

    // 랜덤한 13자리 배송번호 생성 메서드
    private String generateDeliveryNumber() {
        return UUID.randomUUID().toString().replace("-", "").substring(0, 10);
    }
}
