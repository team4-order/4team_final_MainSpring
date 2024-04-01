package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.CStorage;
import main.spring.login.demo2.entity.CStorageId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CStorageRepository extends JpaRepository<CStorage, CStorageId> {
}