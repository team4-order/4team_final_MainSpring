package main.spring.login.jwt;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor

public class JwtUtil {

        public static final String AUTHORIZATION_HEADER = "Authorization";
        public static final String AUTHORIZATION_KEY = "auth";
        private static final String BEARER_PREFIX = "Bearer=";
        private static final long TOKEN_TIME=60*60*1000L;

        // private final UserDetailsServiceImpl = userDetailsService;




}
