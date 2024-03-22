package main.spring.login.dto;


import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Getter
@Setter
public class LoginRequestDto {

private String memberName;
private String password;
}
