package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
    public List<Contact> findAllCustomers() {
        return contactRepository.findByContactDelimiter("C"); // 'C' delimiter를 가진 모든 고객 정보 조회
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
