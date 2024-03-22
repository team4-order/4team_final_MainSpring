package main.spring.login.security;


import lombok.extern.slf4j.Slf4j;
import main.spring.login.entity.Member;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Slf4j
public class UserDetailsImpl implements UserDetails {

    private final Member member;
    private final String password;
    private final String username;

    public UserDetailsImpl(Member member, String password, String username){

        this.member = member;
        this.password = password;
        this.username = username;

    }

    public Member getMember(){
        return this.member;


    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       UserRoleEnum role = member.getRole();
       String authority = role.getAuthority();

        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(authority);
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(simpleGrantedAuthority);

        return authorities;


    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
