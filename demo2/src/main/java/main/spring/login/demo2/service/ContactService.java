package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Contact;

import java.util.List;

public interface ContactService {
//    List<Contact> findAllWarehouses(); //창고 찾는 메소드
//
//    Contact findCustomerByCode(String customerCode);

    List<Contact> findAllCustomers();// 'C' delimiter를 가진 모든 연락처(고객) 정보 조회
}