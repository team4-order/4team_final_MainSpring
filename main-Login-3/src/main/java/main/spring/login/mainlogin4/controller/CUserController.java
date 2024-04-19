package main.spring.login.mainlogin4.controller;

import lombok.Data;
import main.spring.login.mainlogin4.entity.Contact;
import main.spring.login.mainlogin4.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/omsuser")
public class CUserController {

    @Autowired
    private ContactRepository contactRepository; // Contact 테이블에 접근하기 위한 Repository

    @PostMapping("/checkPassword")
    public ResponseEntity<?> checkPassword(@RequestBody CheckPasswordRequest request) {
        String contactCode = request.getContactCode();
        String password = request.getPassword();
        System.out.println(contactCode);
        System.out.println(password);
        // DB에서 contact_code에 해당하는 customer_password 가져오기
        Contact contact = contactRepository.findByContactCode(contactCode);
        System.out.println(contact);
        if (contact != null && contact.getCustomerPassword() != null && contact.getCustomerPassword().equals(password)) {
            return ResponseEntity.ok(new CheckPasswordResponse(true)); // 유효한 비밀번호
        } else {
            return ResponseEntity.ok(new CheckPasswordResponse(false)); // 유효하지 않은 비밀번호
        }
    }
}
@Data
// 요청 바디의 DTO 클래스
class CheckPasswordRequest {
    private String contactCode;
    private String password;

    // getters and setters
}

@Data
// 응답 바디의 DTO 클래스
class CheckPasswordResponse {
    private boolean validPassword;

    public CheckPasswordResponse() {}

    // 매개변수가 있는 생성자
    public CheckPasswordResponse(boolean validPassword) {
        this.validPassword = validPassword;
    }
    // constructor, getters and setters
}