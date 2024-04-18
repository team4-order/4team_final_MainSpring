package main.spring.login.mainlogin4.controller;

import main.spring.login.mainlogin4.entity.UserEntity;
import main.spring.login.mainlogin4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/findallusername")
    public Map<String, Boolean> findUsername(@RequestBody Map<String, String> request) {
        Map<String, Boolean> response = new HashMap<>();
        String code = request.get("code");

        // 클라이언트로부터 받은 code를 이용하여 username을 DB에서 찾음
        // 이 예시에서는 단순히 code를 username으로 사용함
        // 실제로는 해당하는 사용자를 DB에서 찾아야 함




            UserEntity user = userRepository.findByUsername(code);
            response.put("usernameExists", user != null);




        System.out.println(response);

        return response;
    }
}