package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.service.VendorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/updateStorageCode/{contactCode}")
    public ResponseEntity<Contact> updateStorageCode(@PathVariable String contactCode, @RequestParam String storageCode) {
        try {
            Contact updatedContact = vendorService.updateStorageCode(contactCode, storageCode);
            return ResponseEntity.ok(updatedContact);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/{businessId}")
    public List<Contact> getAllVendorsByBusinessId(@PathVariable String businessId) {
        return vendorService.getAllVendorsByBusinessId(businessId);
    }

}
