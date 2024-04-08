package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Business;
import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, String> {

    @Query("SELECT c FROM Contact c WHERE c.contactDelimiter = 'C'")
    List<Contact> findByContactDelimiter(String contactDelimiter); // 'C'를 가진 모든 고객을 찾는 메소드

}
