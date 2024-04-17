package main.spring.login.demo2.repository;

import main.spring.login.demo2.entity.Input;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InputRepository extends JpaRepository<Input, Integer> {
    List<Input> findByContact_ContactCode(String contactCode);
}
