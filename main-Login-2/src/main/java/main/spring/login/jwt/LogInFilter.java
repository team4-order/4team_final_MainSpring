package main.spring.login.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import main.spring.login.dto.CustomUserDetails;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.Collection;
import java.util.Iterator;

public class LogInFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;

    private final JWTUtil jwtUtil;





    public LogInFilter(AuthenticationManager authenticationManager, JWTUtil jwtUtil)
    {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;


    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response){


        String username = obtainUsername(request);
        String password = obtainPassword(request);


        System.out.println(username);

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password, null);



        return authenticationManager.authenticate(authToken);


    }


        @Override
        protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication)
        {

            CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();

            String username = customUserDetails.getUsername();

            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
            Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
            GrantedAuthority auth = iterator.next();

            String role = auth.getAuthority();

            String token = jwtUtil.createJwt(username, role, 60*60*10L);

            response.addHeader("Authorization", "Bearer "+token);


            // System.out.println("successfully logged in");

        }

        @Override
        protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed)
        {
            response.setStatus(401);

            //System.out.println("UnSuccessfully logged in. you failed to log in");
        }

}
