package main.spring.login.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


// security test를 위한 사용자 도메인 생성 class.
// security 자체로 구현체 User를 사용하기 때문에 member로 class 이름 결정.
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long b_id;


    private String b_name;

    private String b_password;

    private Long b_num;

    private String b_link;

    @OneToMany(mappedBy = "member", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Builder.Default
    private List<Authority> roles = new ArrayList<>();

    public void setRoles(List<Authority> role)
    {
        this.roles = role;
        role.forEach(o -> o.setMember(this));
    }



}
