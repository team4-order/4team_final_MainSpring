package main.spring.login.demo2.controller;


import main.spring.login.demo2.dto.GPTRequest;
import main.spring.login.demo2.dto.GPTResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
//
//@RestController
//@RequestMapping("/gpt")
//@RequiredArgsConstructor
//public class GPTController {
//
//    @Value("${gpt.model}")
//    private String model;
//
//    @Value("${gpt.api.url}")
//    private String apiUrl;
//    private final RestTemplate restTemplate;
//
//
//    @GetMapping("/chat")
//    public String chat(@RequestParam("prompt") String prompt){
//
//        GPTRequest request = new GPTRequest(
//                model,prompt,1,256,1,0,0);
//
//        GPTResponse gptResponse = restTemplate.postForObject(
//                apiUrl
//                , request
//                , GPTResponse.class
//        );
//
//
//        return gptResponse.getChoices().get(0).getMessage().getContent();
//
//
//    }
//}

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GPTController {

    @Value("${gpt.model}")
    private String model;

    @Value("${gpt.api.url}")
    private String apiUrl;
    private final RestTemplate restTemplate;

    @CrossOrigin // CORS를 위한 어노테이션 추가
    @PostMapping("/ask")
    public String chat(@RequestBody String prompt) {
        try {
            GPTRequest request = new GPTRequest(model, prompt, 1, 256, 1, 0, 0);
            GPTResponse gptResponse = restTemplate.postForObject(apiUrl, request, GPTResponse.class);
            return gptResponse.getChoices().get(0).getMessage().getContent();
        } catch (Exception e) {
            // 에러 로깅
            System.out.println("Error during the API call: " + e.getMessage());
            return "Failed to get response from the GPT model.";
        }
    }
}