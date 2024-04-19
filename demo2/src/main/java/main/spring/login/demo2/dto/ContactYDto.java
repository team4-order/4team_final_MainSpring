package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class ContactYDto {
    private String contactName;
    private String contactCode;

    public ContactYDto(String contactName, String contactCode){
        this.contactName = contactName;
        this.contactCode = contactCode;
    }
}
