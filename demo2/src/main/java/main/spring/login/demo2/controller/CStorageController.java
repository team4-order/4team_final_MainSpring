package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.ContactRepository;
import main.spring.login.demo2.service.CStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cstorage")
public class CStorageController {

    private final CStorageService cStorageService;
    private final ContactRepository contactRepository; // ContactRepository를 선언합니다.

    @Autowired
    public CStorageController(CStorageService cStorageService, ContactRepository contactRepository) { // 생성자를 통해 ContactRepository를 주입받습니다.
        this.cStorageService = cStorageService;
        this.contactRepository = contactRepository; // 주입받은 ContactRepository를 초기화합니다.
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

    @GetMapping("/list")
    public List<CStorage> getAllCStorages() {
        return cStorageService.findAllCStorages();
    }

    @GetMapping("/contacts")
    public List<Contact> getContactsByDelimiter() {
        return contactRepository.findByContactDelimiter("C"); // ContactRepository 인스턴스를 사용하여 구분자가 "C"인 연락처를 조회합니다.
    }
}
