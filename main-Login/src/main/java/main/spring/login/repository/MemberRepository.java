package main.spring.login.repository;

import jakarta.transaction.Transactional;
import main.spring.login.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Transactional
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByAccount(String account);
}