package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import main.spring.login.demo2.repository.BusinessRepository;

@Service
public class BusinessServiceImpl implements BusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    @Override
    public Business getBusinessById(String businessId) {
        return businessRepository.findById(businessId).orElse(null);
    }
}