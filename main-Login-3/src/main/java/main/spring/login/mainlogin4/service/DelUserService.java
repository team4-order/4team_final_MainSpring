package main.spring.login.mainlogin4.service;

import jakarta.transaction.Transactional;
import main.spring.login.mainlogin4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DelUserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void deleteUsername(String username) {
        userRepository.deleteUsername(username);
    }
}