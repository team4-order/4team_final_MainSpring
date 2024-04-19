package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CStorageDTO {
    private String storageCode;
    private String customerCode;
    private String contactName; // 거래처 이름

    // 생성자, Getter, Setter는 Lombok 어노테이션을 통해 자동 생성됩니다.
    // 필요에 따라 추가적인 필드나 메소드를 추가할 수 있습니다.

    // 예시: 거래처 이름을 포함한 생성자
    public CStorageDTO(String storageCode, String customerCode, String contactName) {
        this.storageCode = storageCode;
        this.customerCode = customerCode;
        this.contactName = contactName;
    }

    // toString(), equals(), hashCode() 메소드는 필요에 따라 오버라이드 할 수 있습니다.
}
