/*
package main.spring.login.service;

import main.spring.login.entity.UserEntity;
import main.spring.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GService  {

    private UserRepository userRepository;

    @Autowired
    public GService (UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void saveData(String code, String NickName){
        UserEntity userEntity = new UserEntity(code,NickName);
        userRepository.save(userEntity);
    }

}
*/
