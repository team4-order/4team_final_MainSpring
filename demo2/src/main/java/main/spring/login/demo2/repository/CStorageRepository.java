package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.CStorage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CStorageRepository extends JpaRepository<CStorage, Long> {
    // 필요한 JPA 쿼리 메소드 추가
}