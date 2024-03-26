package main.spring.login.config;

import io.jsonwebtoken.Jwt;
import jakarta.servlet.http.HttpServletRequest;
import main.spring.login.jwt.JWTFilter;
import main.spring.login.jwt.JWTUtil;
import main.spring.login.jwt.LogInFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Collection;
import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JWTUtil jwtUtil;


    private final AuthenticationConfiguration authenticationConfiguration;

    public SecurityConfig(AuthenticationConfiguration authenticationConfiguration, JWTUtil jwtUtil)
    {
        this.authenticationConfiguration = authenticationConfiguration;
        this.jwtUtil = jwtUtil;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception
    {
        return configuration.getAuthenticationManager();
    }


    //security를 통해서 접근할 때 비밀번호를 캐쉬로 암호화하기 때문에 bcryptpasswordencoder를 상요함.
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder()
    {

        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http
                .cors((cors) -> cors
                        .configurationSource(new CorsConfigurationSource() {
                            @Override
                            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                                CorsConfiguration configuration = new CorsConfiguration();

                                configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
                                configuration.setAllowedMethods(Collections.singletonList("*"));
                                configuration.setAllowCredentials(true);
                                configuration.setAllowedHeaders(Collections.singletonList("*"));
                                configuration.setMaxAge(3600L);

                                configuration.setExposedHeaders(Collections.singletonList("Authorization"));

                                return configuration;
                            }
                        }));

        // 기본적인 로그인은 csrf에 대한 방어가 무조건이지만 jwt의 경우는 해당되지 않으므로 disable
        http.csrf(AbstractHttpConfigurer::disable);


        // form login도 사용하지 않을 것이기 때문에 disable
        http.formLogin(AbstractHttpConfigurer::disable);
        http.httpBasic(AbstractHttpConfigurer::disable);

        http.authorizeHttpRequests((auth) -> auth
                        .requestMatchers("/login","/","/join").permitAll()    //login 페이지는 모두가 들어올 수 있게 해주고
                       // .requestMatchers("/admin").hasRole("ADMIN")             // admin은 role가 ADMIN인 사람만 들어올 수 있게 해주고
                        .anyRequest().authenticated());// 그 외의 모든 접근은 인증이 되어야만 가능하게 설정


        http
                .addFilterBefore(new JWTFilter(jwtUtil), LogInFilter.class);

        http
                .addFilterAt(new LogInFilter(authenticationManager(authenticationConfiguration), jwtUtil), UsernamePasswordAuthenticationFilter.class);


        http
                .sessionManagement((session)-> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));   //jwt를 사용한 로그인 방식은 항상 stateless 방식을 사용하기 때문에 설정하는 부분




        return http.build();
    }
}
