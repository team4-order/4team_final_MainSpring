package main.spring.login.demo2.controller;

import main.spring.login.demo2.entity.Input;
import main.spring.login.demo2.service.InputService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InputController {

    @Autowired
    private InputService inputService;

    @GetMapping("/api/inputs/vendor/{contactCode}")
    public List<Input> getInputsByVendor(@PathVariable String contactCode) {
        return inputService.findInputsByVendor(contactCode);
    }
}
