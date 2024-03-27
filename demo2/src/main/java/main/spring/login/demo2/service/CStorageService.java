package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.entity.CStorageId;
import main.spring.login.demo2.repository.CStorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public List<CStorage> findAllCStorages() {
        return cStorageRepository.findAll();
    }

    // 거래처의 창고 코드 삭제 로직
    public boolean deleteCStorage(String customerCode, String storageCode) {
        CStorageId id = new CStorageId(storageCode, customerCode);
        Optional<CStorage> cStorage = cStorageRepository.findById(id);

        if (cStorage.isPresent()) {
            cStorageRepository.delete(cStorage.get()); // 엔티티가 존재하면 삭제
            return true;
        } else {
            return false; // 해당하는 CStorage가 없는 경우
        }
    }

}
