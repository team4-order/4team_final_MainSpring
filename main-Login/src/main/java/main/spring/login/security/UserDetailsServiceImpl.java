package main.spring.login.security;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.spring.login.entity.Member;
import main.spring.login.repository.MemberRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final MemberRepository memberRepository;
    @Override
    public UserDetails loadUserByUsername(String memberName) throws UsernameNotFoundException {
        Member member = memberRepository.findByMemberName(memberName)
                .orElseThrow(()->new UsernameNotFoundException("사용자를 찾을 수 없습니다."));


        return new UserDetailsImpl(member, member.getPassword(), member.getMemberName());
    }

}
