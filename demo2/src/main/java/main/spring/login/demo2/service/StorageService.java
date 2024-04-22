package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.repository.StorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StorageService {
    private final StorageRepository storageRepository;

    @Autowired
    public StorageService(StorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    public List<Contact> findAllWarehouses() {
        return storageRepository.findByContactDelimiter("S");
    }

    // 비즈니스 ID에 따른 창고 목록을 찾는 메소드 추가
    public List<Contact> findWarehousesByBusinessId(String businessId) {
        return storageRepository.findWarehousesByBusinessId(businessId);
    }
}