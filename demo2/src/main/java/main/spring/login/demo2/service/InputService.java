package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Input;
import main.spring.login.demo2.repository.InputRepository;
import main.spring.login.demo2.repository.InventoryRepository;
import main.spring.login.demo2.repository.OrderProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InputService {

    @Autowired
    private InputRepository inputRepository;

    @Autowired
    private OrderProductRepository orderProductRepository;


    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Input> findInputsByVendor(String contactCode) {
        return inputRepository.findByContact_ContactCode(contactCode);
    }


}
