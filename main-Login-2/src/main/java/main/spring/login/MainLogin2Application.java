package main.spring.login;

import jakarta.persistence.EntityListeners;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


@EnableJpaAuditing
@SpringBootApplication
public class MainLogin2Application {

	public static void main(String[] args) {
		SpringApplication.run(MainLogin2Application.class, args);
	}

}
