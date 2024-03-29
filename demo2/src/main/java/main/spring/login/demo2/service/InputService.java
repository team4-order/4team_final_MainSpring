package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Input;
import main.spring.login.demo2.repository.InputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InputService {

    @Autowired
    private InputRepository inputRepository;

    public List<Input> findInputsByVendor(String contactCode) {
        return inputRepository.findByContact_ContactCode(contactCode);
    }
}
