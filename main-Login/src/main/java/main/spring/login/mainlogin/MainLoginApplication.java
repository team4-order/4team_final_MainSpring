package main.spring.login.mainlogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class MainLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainLoginApplication.class, args);
	}

}
