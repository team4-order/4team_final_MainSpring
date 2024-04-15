package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import main.spring.login.demo2.service.BusinessService;

@RestController
@RequestMapping("/api/business")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @GetMapping("{businessId}")
    public Business getBusinessById(@PathVariable("businessId") String businessId) {
        return businessService.getBusinessById(businessId);
    }
}