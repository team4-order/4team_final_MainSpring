package main.spring.login.mainlogin4.controller;

import main.spring.login.mainlogin4.service.DelUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class DelUserController {

    @Autowired
    private DelUserService deluserService;

    @PostMapping("/api/delete-username")
    public ResponseEntity<?> deleteUsername(@RequestBody Map<String, String> request) {



        String username = request.get("username");
        System.out.println(username);
        if (username == null || username.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Username is required");
        }
        deluserService.deleteUsername(username);
        return ResponseEntity.ok("Username deleted successfully");
    }
}