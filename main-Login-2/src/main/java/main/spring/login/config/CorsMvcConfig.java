package main.spring.login.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class CorsMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry)
    {
        corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:8081")
                .exposedHeaders("Set-Cookie")
                .allowedMethods("GET", "POST") // 허용할 HTTP method
                .allowCredentials(true)
                .maxAge(3000);



    }
}

/*,"http://localhost:8080/login","http://localhost:8081","http://localhost:8081/login/"*/