package service;

import entity.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.StorageRepository;

import java.util.List;


@Service
public class StorageService {
    private final StorageRepository storageRepository;

    @Autowired
    public StorageService(StorageRepository storageRepository) {
        this.storageRepository = storageRepository;
    }

    public List<Storage> findAllWarehouses() {
        return storageRepository.findByContactDelimiter("S"); // 'S'는 창고를 의미
    }
}
