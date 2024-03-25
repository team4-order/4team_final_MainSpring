package main.spring.login.demo2.service;

import lombok.RequiredArgsConstructor;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService{

    private final ContactRepository contactRepository;

    @Override
    public Contact getContactById(String contact_code) {
        return contactRepository.findById(contact_code).orElse(null);
    }

    @Override
    public List<Contact> findByContactDelimiter() {
        // 'C'를 매개변수로 사용하지 않고, 내부에서 'C'를 구분자로 사용하여 연락처를 찾습니다.
        return contactRepository.findByContactDelimiter("C"); // 'C'는 이미 메서드 내에서 정의되어 있으므로 여기서 전달할 필요가 없습니다.
    }

    @Override
    public List<Contact> findByContactDelimiterAndContactName(String contactName) {
        return contactRepository.findByContactDelimiterAndContactNameStartingWith(contactName);
    }
}
