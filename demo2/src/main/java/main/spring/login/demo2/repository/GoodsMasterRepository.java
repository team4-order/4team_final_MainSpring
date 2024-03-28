package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.GoodsMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodsMasterRepository extends JpaRepository<GoodsMaster, String> {

}
