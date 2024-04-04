package main.spring.login.controller;


import jakarta.servlet.http.Cookie;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/glogin")
public class GController {


    @PostMapping("/access")
    @CrossOrigin(origins = "http://localhost:8081/login")
    public ResponseEntity<String> GetAccessKey(@RequestBody String accesskey)// , @RequestParam("NickName") String nickname)
    {
        System.out.println(accesskey);
        //System.out.println(NickName);

        //System.out.println("닉네임"+NickName);

        return ResponseEntity.ok(accesskey);
    }

}
