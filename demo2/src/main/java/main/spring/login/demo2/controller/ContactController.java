package main.spring.login.demo2.controller;


import main.spring.login.demo2.dto.ContactDTO;
import main.spring.login.demo2.dto.ContactYDto;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    // 모든 고객 정보를 반환하는 메서드
    @GetMapping("/customers/{businessId}")
    public ResponseEntity<List<Contact>> AllCustomers(@PathVariable("businessId") String businessId) {
        List<Contact> customers = contactService.findByBusinessIdC(businessId); // 서비스를 통해 모든 고객 정보 조회
        return ResponseEntity.ok(customers); // 조회된 고객 정보를 HTTP 응답 본문에 포함하여 반환
    }

    @GetMapping("/storages") //창고 정보 가져오는 controller
    public ResponseEntity<List<Contact>> AllSCustomers() {
        List<Contact> storages = contactService.findAllSCustomers();
        return ResponseEntity.ok(storages);
    }

    @PostMapping("/inputcustomer")
    public ResponseEntity<ContactDTO> addContact(@RequestBody ContactDTO contactDTO) {
        ContactDTO savedContactDTO = contactService.saveContact(contactDTO);
        return new ResponseEntity<>(savedContactDTO, HttpStatus.CREATED);
    }

    // 특정 고객 정보를 반환하는 메서드
    @GetMapping("/customer/{contactCode}")
    public ResponseEntity<Contact> getCustomerByCode(@PathVariable("contactCode") String contactCode) {
        Contact customer = (Contact) contactService.findByContactCode(contactCode);
        return ResponseEntity.ok(customer);
    }

    //고객 정보 수정하는 기능
    @PutMapping("/customers/{contactCode}")
    public ResponseEntity<Contact> updateCustomer(@PathVariable("contactCode") String contactCode,
                                                  @RequestBody ContactDTO updatedContactDTO) {
        Contact existingCustomer = contactService.findByContactCode(contactCode);
        if (existingCustomer != null) {
            // 업데이트할 데이터 설정
            existingCustomer.setContactName(updatedContactDTO.getContactName());
            existingCustomer.setContactAddress(updatedContactDTO.getContactAddress());
            existingCustomer.setCustomerPassword(updatedContactDTO.getCustomerPassword());
            existingCustomer.setCustomerPhone(updatedContactDTO.getCustomerPhone());

            // 업데이트된 고객 정보 저장
            Contact updatedCustomer = contactService.saveContact(existingCustomer);

            return ResponseEntity.ok(updatedCustomer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/busId/{businessId}")
    public List<ContactYDto> findContactNameByBusinessId(@PathVariable("businessId") String businessId) {
        return contactService.findContactNameByBusinessId(businessId);
    }



}
