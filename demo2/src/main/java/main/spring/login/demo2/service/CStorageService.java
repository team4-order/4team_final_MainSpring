package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.repository.CStorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CStorageService {

    private final CStorageRepository cStorageRepository;

    @Autowired
    public CStorageService(CStorageRepository cStorageRepository) {
        this.cStorageRepository = cStorageRepository;
    }

    public CStorage addOrUpdateCStorage(String customerCode, String storageCode) {
        CStorage cStorage = new CStorage();
        cStorage.setCustomerCode(customerCode);
        cStorage.setStorageCode(storageCode);
        return cStorageRepository.save(cStorage);
    }
}
