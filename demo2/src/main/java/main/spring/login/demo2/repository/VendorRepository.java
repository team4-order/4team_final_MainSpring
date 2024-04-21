package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VendorRepository extends JpaRepository<Contact,String> {

    @Query("SELECT s FROM Contact s WHERE s.contactDelimiter = 'V'")
    List<Contact> findByContactDelimiter(String contactDelimiter);

    Optional<Contact> findByContactCode(String contactCode);

    List<Contact> findByBusinessIdAndContactDelimiter(String businessId, String contactDelimiter);

}
