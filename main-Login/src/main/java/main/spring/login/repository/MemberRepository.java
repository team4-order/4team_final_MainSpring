package main.spring.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.spring.login.entity.Member;

import java.util.Optional;
import java.util.OptionalInt;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {

    Optional<Member> findByMemberName(String memberName);



}
