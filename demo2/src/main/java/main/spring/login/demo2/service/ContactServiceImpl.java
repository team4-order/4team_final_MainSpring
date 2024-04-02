package main.spring.login.demo2.service;

import jakarta.transaction.Transactional;
import main.spring.login.demo2.dto.ContactDTO;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ContactServiceImpl implements ContactService {
    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }


//    @Override
//    public List<Contact> findAllWarehouses() {
//        return null;
//    }
//
//    @Override
//    public Contact findCustomerByCode(String customerCode) {
//        return null;
//    }

    @Override
    public List<Contact> findByBusinessIdC(String businessId) {
        return contactRepository.findByBusinessId(businessId); // 'C' delimiter를 가진 모든 고객 정보 조회
    }

    @Override
    public List<Contact> findAllSCustomers() {
        return contactRepository.findByContactDelimiter("S");
    }


    @Override
    public Contact findByContactCode(String contactCode) {
        List<Contact> contacts = contactRepository.findByContactCode(contactCode);
        return contacts.isEmpty() ? null : contacts.get(0);
    }


    @Override
    public ContactDTO saveContact(ContactDTO contactDTO) {
        Contact contact = new Contact();
        contact.setContactCode(contactDTO.getContactCode());
        contact.setContactDelimiter("C");
        contact.setContactName(contactDTO.getContactName());
        contact.setContactAddress(contactDTO.getContactAddress());
        contact.setCustomerPassword(contactDTO.getCustomerPassword());
        contact.setCustomerPhone(contactDTO.getCustomerPhone());
        contact.setStorageCode(contactDTO.getStorageCode());
        contact.setBusinessId(contactDTO.getBusinessId());
        contactRepository.save(contact);
        return contactDTO; // In a real application, you might return a filled DTO
    }

//    @Override
//    public List<Contact> findAllCustomers() {
//        List<Contact> allCustomers = contactRepository.findByContactDelimiter("C");
//
//        List<Contact> selectedFields = allCustomers.stream()
//                .map(contact -> new Contact(contact.getContactCode(), contact.getContactName(), contact.getContactAddress()))
//                .collect(Collectors.toList());
//
//        return selectedFields;
//    }


}
