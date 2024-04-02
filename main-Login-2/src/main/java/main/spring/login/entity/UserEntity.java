package main.spring.login.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserEntity {
// entity를 통해 데이터베이스를 통해 데이터를 사용

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String username;
    private String password;
    private String name;
    private String role;
    private String email;


}
