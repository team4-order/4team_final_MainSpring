package main.spring.login.mainlogin4.repository;

import main.spring.login.mainlogin4.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, String> {
    @Query(value = "SELECT * FROM contact c WHERE c.contact_code = :contactCode", nativeQuery = true)
    Contact findByContactCode(@Param("contactCode") String contactCode);

  /*  @Query(value = "SELECT c.* FROM contact c WHERE c.contact_code = ?1", nativeQuery = true)
    List<Contact> findByContactCode(String contactCode);*/
}