package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.ContactDTO;
import main.spring.login.demo2.dto.DeliveryDetailDTO;
import main.spring.login.demo2.repository.DeliveryRepository;

import java.util.List;


public interface DeliveryService1{

    DeliveryDetailDTO saveDelivery(DeliveryDetailDTO deliveryDetailDTO);

//    ContactDTO saveContact(ContactDTO contactDTO);

}
