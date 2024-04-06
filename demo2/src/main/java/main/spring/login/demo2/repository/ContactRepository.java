package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, String> {

    // 구분자가 'C'인 거래처 목록을 조회하는 메소드
    List<Contact> findByContactDelimiter(String delimiter);


}
