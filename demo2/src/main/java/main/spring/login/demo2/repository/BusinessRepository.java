package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, String> {

}