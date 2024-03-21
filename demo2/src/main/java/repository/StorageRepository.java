package repository;

import entity.Storage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StorageRepository extends JpaRepository<Storage, String> {
    List<Storage> findByContactDelimiter(String contactDelimiter);
}
