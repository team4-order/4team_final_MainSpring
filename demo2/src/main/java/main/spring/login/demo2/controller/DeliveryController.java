package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @GetMapping("/details")
    public List<DeliveryDetailDTO> getAllDeliveriesWithDetails() {
        return deliveryService.getAllDeliveriesWithDetails();
    }
}
