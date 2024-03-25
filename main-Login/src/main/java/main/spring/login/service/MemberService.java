package main.spring.login.service;


import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.spring.login.dto.LoginRequestDto;
import main.spring.login.dto.SignUpRequestDto;
import main.spring.login.entity.Member;
import main.spring.login.jwt.JwtUtil;
import main.spring.login.repository.MemberRepository;
import main.spring.login.security.UserRoleEnum;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberService {


    private final MemberRepository memberRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    // 회원 가입
    @Transactional
    public void signUp(SignUpRequestDto requestDto){

        String memberName = requestDto.getMemberName();
        String password = passwordEncoder.encode(requestDto.getPassword());
        UserRoleEnum role =UserRoleEnum.valueOf(requestDto.getRole());

        Member member = new Member(memberName, password, role);
        memberRepository.save(member);
    }

    @Transactional
    public void login(LoginRequestDto requestDto, HttpServletResponse response)
    {
        Optional<Member> optionalMember = memberRepository.findByMemberName(requestDto.getMemberName());

        if(optionalMember.isEmpty())
        {
            log.warn("회원이 존재하지 않습니다.");
            throw new IllegalArgumentException("회원이 존재하지 않습니다.");
        }

        Member member = optionalMember.get();

        if(!passwordEncoder.matches(requestDto.getPassword(), member.getPassword()))
        {
            log.warn("비밀번호가 일치하지 않습니다.");
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        Cookie cookie = new Cookie(JwtUtil.AUTHORIZATION_HEADER,
                jwtUtil.createToken(member.getMemberName(), member.getRole()));

        cookie.setMaxAge(7*24*60*60);
        cookie.setPath("/");
        cookie.setDomain("localhost");
        cookie.setSecure(false);

        response.addCookie(cookie);


    }


}


