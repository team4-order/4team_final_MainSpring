package main.spring.login.controller;


import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import main.spring.login.dto.LoginRequestDto;
import main.spring.login.dto.SignUpRequestDto;
import main.spring.login.security.UserDetailsImpl;
import main.spring.login.service.MemberService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Slf4j
@Controller
public class MemberController {

    private final MemberService memberService;


    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    //이미 로그인된 사용자일 경우 인덱스 페이지로 강제이동
    @GetMapping("/login")
    public String login(@AuthenticationPrincipal UserDetailsImpl userDetails)
    {
        if(userDetails != null)
        {
            log.info(userDetails.getMember().getMemberName() + "님이 로그인 페이지로 이동을 시도했습니다. -> index 페이지로 강제 이동시켰습니다.");
            return "redirect:/index";
        }

            return "login";
    }

    @GetMapping("/signup")
    public String signUp(){
        return "signup";
    }

    @GetMapping("/vip")
    public String vip(HttpServletRequest request){
        return "role";
    }

    @GetMapping("/admin")
    public String system(HttpServletRequest request)
    {
        return "role";
    }

    //회원가입
    @PostMapping("/api/signup")
    public String signUp(SignUpRequestDto requestDto)
    {
        memberService.signUp(requestDto);
        return "redirect:/login";
    }

    // 로그인

    @PostMapping("/api/login")
    public String login(LoginRequestDto requestDto, HttpServletResponse response)
    {
        memberService.login(requestDto, response);
        return "redirect:/index";
    }

    @GetMapping("/cookie/test")
    public String test(@CookieValue(value= "Authorization", defaultValue="", required = false) String test){
        log.info(test);
        return "index";

    }


    @GetMapping("/forbidden")
    public String forbidden(){

        log.warn("비정상적인 접근: 403 forbidden");
        return "redirect:/index";
    }


    // 로그아웃

    @GetMapping("/api/logout")
    public String logout(@CookieValue(value= "Authorization", defaultValue = "", required = false)Cookie jwtCookie,
                         HttpServletResponse response)
    {
        jwtCookie.setValue(null);
        jwtCookie.setMaxAge(0);
        jwtCookie.setPath("/");
        response.addCookie(jwtCookie);

        return "redirect:/login";
    }




}


