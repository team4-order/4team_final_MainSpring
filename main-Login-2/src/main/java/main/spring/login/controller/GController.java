package main.spring.login.controller;



import main.spring.login.dao.GDao;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/glogin")
public class GController {

   /* private final GService gService;

    public GController(GService gService)
    {
        this.gService = gService;

    }*/

    @PostMapping("/access")
    @CrossOrigin(origins = "http://localhost:8081/login")
    public ResponseEntity<Map <String, String>> GetAccessKey(@RequestParam(value = "code")String code , @RequestParam (value = "NickName") String NickName)// , @RequestParam("NickName") String nickname)
    {
        System.out.println("사용자 닉네임은: "+NickName);
        System.out.println("사용자 엑세스 코드는: "+code);


        GDao.saveUserData(code, NickName);
        System.out.println("DB Stored: "+ code+ "/" + NickName);




        Map<String, String> responseData = new HashMap<>();
        responseData.put(NickName, code);
        return ResponseEntity.ok(responseData);
    }




}
