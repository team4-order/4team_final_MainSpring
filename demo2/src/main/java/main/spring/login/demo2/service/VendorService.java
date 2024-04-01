package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendorService {

    private final VendorRepository vendorRepository;

    public VendorService(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    public List<Contact> getAllVendors() {
        return vendorRepository.findByContactDelimiter("V");
    }

    public Optional<Contact> findVendorByContactCode(String contactCode) {
        return vendorRepository.findByContactCode(contactCode);
    }

}
