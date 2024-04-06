package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, String> {
    List<Contact> findByContactDelimiter(String delimiter);
}
