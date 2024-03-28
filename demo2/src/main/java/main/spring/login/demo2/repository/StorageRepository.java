
package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StorageRepository extends JpaRepository<Contact, String> {
    @Query("SELECT s FROM Contact s WHERE s.contactDelimiter = 'S'")
    List<Contact> findByContactDelimiter(String contactDelimiter);
}
