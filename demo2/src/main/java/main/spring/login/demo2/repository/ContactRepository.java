package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Business;
import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, String> {

}
