package main.spring.login.repository;

import main.spring.login.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {


    Boolean existsByUsername(String username);
    UserEntity findByUsername(String username);

    //UserEntity findByNickName(String NickName);

}
