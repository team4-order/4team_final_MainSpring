package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.service.VendorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {

    private final VendorService vendorService;

    public VendorController(VendorService vendorService) {
        this.vendorService = vendorService;
    }

    @GetMapping
    public List<Contact> getAllVendors() {
        return vendorService.getAllVendors();
    }


    @GetMapping("/read/{contactCode}")
    public ResponseEntity<Contact> getVendorDetails(@PathVariable String contactCode) {
        return vendorService.findVendorByContactCode(contactCode)
                .map(contact -> ResponseEntity.ok(contact))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
