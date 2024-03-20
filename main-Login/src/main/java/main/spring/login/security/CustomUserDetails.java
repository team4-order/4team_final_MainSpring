package main.spring.login.security;

import main.spring.login.entity.Member;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

public class CustomUserDetails implements UserDetails {
    private final Member member;

    public CustomUserDetails(Member member)
    {
        this.member = member;

    }
    public final Member getMember() {
        return member;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        return member.getRoles().stream().map(o -> new SimpleGrantedAuthority(o.getName())).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return member.getB_password();
    }

    @Override
    public String getUsername() {
        return member.getB_name();
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