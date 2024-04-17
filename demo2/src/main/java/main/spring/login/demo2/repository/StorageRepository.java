
package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StorageRepository extends JpaRepository<Contact, String> {
    @Query("SELECT s FROM Contact s WHERE s.contactDelimiter = 'S'")
    List<Contact> findByContactDelimiter(String contactDelimiter);

    // 비즈니스 ID를 이용해 창고 목록을 조회하는 쿼리 추가
    @Query("SELECT s FROM Contact s WHERE s.businessId = :businessId AND s.contactDelimiter = 'S'")
    List<Contact> findWarehousesByBusinessId(String businessId);
}

