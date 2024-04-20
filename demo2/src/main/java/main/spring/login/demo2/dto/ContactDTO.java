package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ContactDTO {

    private String contactCode;
    private String contactDelimiter;
    private String contactName;
    private String contactAddress;
    private String customerPassword;
    private String customerPhone;
    private String storageCode;
    private String businessId;
//    public String customer() {
//        return "customerCode"+contactCode+"customerPW"+customerPassword+"customerName"+contactName+"customerAd"+contactAddress+"customerPh"+customerPhone;
//    }

}
