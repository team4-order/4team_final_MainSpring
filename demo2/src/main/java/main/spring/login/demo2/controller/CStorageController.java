package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.entity.InventoryTotal;
import main.spring.login.demo2.repository.InventorySummary;
import main.spring.login.demo2.service.CStorageService;
import main.spring.login.demo2.service.InventoryTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/storage")
public class CStorageController {
    @Autowired
    private CStorageService cStorageService;

    @GetMapping("/{customerCode}")
    public List<CStorage> getStorageByCustomerCode(@PathVariable("customerCode") String customerCode){
        return cStorageService.getStorageByCustomerCode(customerCode);
    }

}
