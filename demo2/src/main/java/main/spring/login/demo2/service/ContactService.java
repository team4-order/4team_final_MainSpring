package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Business;
import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContactService {
    Contact getContactById(String contact_code);

    List<Contact> findByContactDelimiter();

    List<Contact> findByContactDelimiterAndContactName(String contactName);
}