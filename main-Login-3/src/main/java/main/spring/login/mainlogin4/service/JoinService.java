package main.spring.login.mainlogin4.service;

import main.spring.login.mainlogin4.dto.JoinDTO;
import main.spring.login.mainlogin4.entity.UserEntity;
import main.spring.login.mainlogin4.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JoinService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public JoinService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void joinProcess(JoinDTO joinDTO) throws Exception {

        String username = joinDTO.getUsername();
        String password = joinDTO.getPassword();

        Boolean isExist = userRepository.existsByUsername(username);

        if (isExist) {
            Exception ex = new Exception();

            throw ex;

        }
        else{
            UserEntity data = new UserEntity();

            data.setUsername(username);
            data.setPassword(bCryptPasswordEncoder.encode(password));
            data.setRole("ROLE_ADMIN");

            userRepository.save(data);
        }
    }
}