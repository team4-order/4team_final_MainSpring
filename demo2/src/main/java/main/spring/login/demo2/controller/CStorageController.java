package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.service.CStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cstorage")
public class CStorageController {

    private final CStorageService cStorageService;

    @Autowired
    public CStorageController(CStorageService cStorageService) {
        this.cStorageService = cStorageService;
    }

    @PostMapping("/addOrUpdate")
    public CStorage addOrUpdateCStorage(@RequestBody CStorage cStorage) {
        return cStorageService.addOrUpdateCStorage(cStorage.getCustomerCode(), cStorage.getStorageCode());
    }
}
