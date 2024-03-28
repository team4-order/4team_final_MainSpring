package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Business;
import main.spring.login.demo2.entity.Contact;

public interface ContactService {
    Contact getContactById(String contact_code);
}
