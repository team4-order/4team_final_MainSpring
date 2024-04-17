package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.CStorage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CStorageRepository  extends JpaRepository<CStorage, String> {
    List<CStorage> findAllByCustomerCode(String customerCode);

}
