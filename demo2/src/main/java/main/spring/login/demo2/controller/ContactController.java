package main.spring.login.demo2.controller;


import main.spring.login.demo2.dto.ContactDTO;
import main.spring.login.demo2.entity.Contact;
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
    @GetMapping("/customers")
    public ResponseEntity<List<Contact>> AllCustomers() {
        List<Contact> customers = contactService.findAllCustomers(); // 서비스를 통해 모든 고객 정보 조회
        return ResponseEntity.ok(customers); // 조회된 고객 정보를 HTTP 응답 본문에 포함하여 반환
    }

    @PostMapping("/inputcustomer")
    public ResponseEntity<ContactDTO> addContact(@RequestBody ContactDTO contactDTO) {
        ContactDTO savedContactDTO = contactService.saveContact(contactDTO);
        return new ResponseEntity<>(savedContactDTO, HttpStatus.CREATED);
    }

//    // 특정 고객 정보를 반환하는 메서드
//    @GetMapping("/customers/{contactCode}")
//    public ResponseEntity<Contact> getCustomerByCode(@PathVariable("contactCode") String contactCode) {
//        Contact customer = contactService.findCustomerByCode(contactCode);
//        return ResponseEntity.ok(customer);
//    }

}
