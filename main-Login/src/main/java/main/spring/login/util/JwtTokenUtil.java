package main.spring.login.util;

import io.jsonwebtoken.Claims;
import lombok.Value;
import org.springframework.stereotype.Service;

import java.io.Serial;
import java.io.Serializable;

@Service
public class JwtTokenUtil implements Serializable {


    @Serial
    private static final long serialVersionUID = 3657087671883664747L;

    private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

        @Value("${jwt.secret}")
        private String secret;

        public String getUsernameFromToken(String token){
            try{
                    return getClaimFromToken(token, Claims::getSubject);

            }catch (Exception ex){
                throw new UsernameFromTokenException("username from token exception");
            }
        }
}
