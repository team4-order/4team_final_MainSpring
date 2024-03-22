package main.spring.login.config;

import io.jsonwebtoken.JwtBuilder;
import lombok.RequiredArgsConstructor;
import main.spring.login.jwt.JwtAuthFilter;
import main.spring.login.jwt.JwtUtil;
import main.spring.login.security.UserRoleEnum;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SpringSecurityConfig {

    private final JwtUtil jwtUtil;
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){
        // resources 자원 접근 허용
        return (web) -> web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());


    }

    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(AbstractHttpConfigurer::disable)
                .sessionManagement((sessionManagement)->
                        sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.authorizeRequests()
                .requestMatchers(HttpMethod.GET, "/signup").permitAll()
                .requestMatchers(HttpMethod.GET, "/login").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/signup").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/login").permitAll()
                .requestMatchers("/cookie/test").permitAll()
                .requestMatchers("/vip").hasRole(UserRoleEnum.VIP_MEMBER.toString())
                .requestMatchers("/admin").hasRole(UserRoleEnum.ADMIN.toString())
                .anyRequest().authenticated()
                .and().addFilterBefore(new JwtAuthFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);

        http.formLogin((formLogin)-> formLogin
                .loginPage("/login"));
        http.exceptionHandling(excepthonHandling-> excepthonHandling
                .accessDeniedPage("/forbidden"));

        return http.build();

    }
}
