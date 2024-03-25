package main.spring.login.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import main.spring.login.security.UserRoleEnum;


@Getter
@NoArgsConstructor
@Entity
public class Member {

    //기업 아이디 String
    //기업 이름 String
    // 패스워드 String
    // 사업자 번호 long
    // 기업 홈페이지 링크 String

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false, unique = true)
    private String memberName;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private UserRoleEnum role;

    public Member(String memberName, String password, UserRoleEnum role){
        this.memberName = memberName;
        this.password = password;
        this.role = role;

    }



}
