package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Storage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StorageRepository extends JpaRepository<Storage, String> {
    @Query("SELECT s FROM Storage s WHERE s.contactDelimiter = 'S'")
    List<Storage> findByContactDelimiter(String contactDelimiter);
}
