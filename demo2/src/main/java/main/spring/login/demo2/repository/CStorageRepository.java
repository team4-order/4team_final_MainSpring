package main.spring.login.demo2.repository;

import main.spring.login.demo2.dto.CStorageDTO;
import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.entity.CStorageId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CStorageRepository extends JpaRepository<CStorage, CStorageId> {

    @Transactional
    void deleteByCustomerCode(String customerCode);

    @Query("SELECT new main.spring.login.demo2.dto.CStorageDTO(cs.storageCode, cs.customerCode, c.contactName) " +
            "FROM CStorage cs " +
            "JOIN Contact c ON cs.customerCode = c.contactCode " +
            "WHERE c.contactDelimiter = 'C'")
    List<CStorageDTO> findAllCStoragesWithContactName();
}