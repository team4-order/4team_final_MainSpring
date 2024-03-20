package main.spring.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api/auth")
@RestController
public class AuthApi {
    private final UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<User> signUp(@Valid @RequestBody UserDto userDto)
    {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.userService.join(userDto));

    }
}
