package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.service.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ContactController {

    private final ContactService contactService;


    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("api/adjustment")
    public ResponseEntity<List<Contact>> listadjustment(){
        List<Contact> adjustment = contactService.findByContactDelimiter();
        return ResponseEntity.ok(adjustment);
    }
}
