package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.CStorageDTO;
import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.ContactRepository;
import main.spring.login.demo2.service.CStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cstorage")
public class CStorageController {

    private final CStorageService cStorageService;
    private final ContactRepository contactRepository;

    @Autowired
    public CStorageController(CStorageService cStorageService, ContactRepository contactRepository) {
        this.cStorageService = cStorageService;
        this.contactRepository = contactRepository;
    }

    @PostMapping("/addOrUpdate")
    public CStorage addOrUpdateCStorage(@RequestBody CStorage cStorage) {
        return cStorageService.addOrUpdateCStorage(cStorage.getCustomerCode(), cStorage.getStorageCode());
    }

    @DeleteMapping("/delete/{customerCode}/{storageCode}")
    public ResponseEntity<?> deleteCStorage(@PathVariable String customerCode, @PathVariable String storageCode) {
        boolean isDeleted = cStorageService.deleteCStorage(customerCode, storageCode);

        if (isDeleted) {
            // 성공적으로 삭제되었다면, HTTP 200 OK 응답을 리턴
            return ResponseEntity.ok().build();
        } else {
            // 삭제에 실패했다면, HTTP 404 Not Found 또는 다른 적절한 에러 응답을 리턴
            return ResponseEntity.notFound().build();
        }
    }

//    @GetMapping("/list")
//    public ResponseEntity<List<CStorageDTO>> getAllCStoragesWithContactName() {
//        // 거래처 이름을 포함한 창고 목록 데이터 조회 로직 구현
//        return ResponseEntity.ok(cStorageService.findAllCStoragesWithContactName());
//    }



    @PostMapping("/updateStorages/{customerCode}")
    @Transactional
    public ResponseEntity<?> updateCStorageList(@PathVariable String customerCode, @RequestBody List<String> storageCodes) {
        try {
            // 기존에 해당 거래처 코드에 할당된 모든 창고 목록을 삭제
            cStorageService.deleteAllCStoragesByCustomerCode(customerCode);

            // 새로운 창고 코드 목록으로 업데이트
            for (String storageCode : storageCodes) {
                cStorageService.addOrUpdateCStorage(customerCode, storageCode);
            }
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/assignStoragesToCustomer/{customerCode}")
    @Transactional
    public ResponseEntity<?> assignStoragesToCustomer(@PathVariable String customerCode, @RequestBody List<String> storageCodes) {
        try {
            // 먼저, 해당 거래처에 할당된 모든 창고를 삭제
            cStorageService.deleteAllStoragesForCustomer(customerCode);

            // 다음, 제공된 창고 코드 리스트를 해당 거래처에 할당
            storageCodes.forEach(storageCode -> cStorageService.addOrUpdateCStorage(customerCode, storageCode));

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    // 거래처 목록을 반환하는 엔드포인트
    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        // 'C' 구분자를 가진 거래처만 조회
        return contactRepository.findByContactDelimiter("C");
    }
}