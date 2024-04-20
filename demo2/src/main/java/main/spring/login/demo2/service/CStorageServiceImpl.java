package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.repository.CStorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CStorageServiceImpl implements CStorageService{

    @Autowired
    private CStorageRepository cStorageRepository;
    @Override
    public List<CStorage> getStorageByCustomerCode(String customerCode){
        return cStorageRepository.findAllByCustomerCode(customerCode);
    }
}