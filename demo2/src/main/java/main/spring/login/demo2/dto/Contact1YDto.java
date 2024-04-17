package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Contact1YDto {
    private String contactName;
    private String contactCode;
    private long price;

    public Contact1YDto(String contactName, String contactCode, long price){
        this.contactName = contactName;
        this.contactCode = contactCode;
        this.price = price;
    }
}
