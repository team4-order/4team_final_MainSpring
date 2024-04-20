package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.entity.Delivery;
import main.spring.login.demo2.repository.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryServiceImpl implements DeliveryService1{

    @Autowired
    private DeliveryRepository deliveryRepository;

    public DeliveryDetailDTO saveDelivery(DeliveryDetailDTO deliveryDetailDTO) {
        Delivery delivery = new Delivery();
        delivery.setDeliveryNumber(deliveryDetailDTO.getDeliveryNumber());
        delivery.setDeliveryAddress(deliveryDetailDTO.getDeliveryAddress());
        delivery.setDeliveryArrive(deliveryDetailDTO.getDeliveryArrive());
        delivery.setDeliveryApply(deliveryDetailDTO.getDeliveryApply());
        delivery.setOrderNumber(deliveryDetailDTO.getOrderNumber());

        deliveryRepository.save(delivery);

        return deliveryDetailDTO;
    }
}
