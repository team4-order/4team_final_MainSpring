package main.spring.login.demo2.entity;

import java.io.Serializable;

public class CStorageId implements Serializable {
    private String storageCode;
    private String customerCode;

    // 기본 생성자
    public CStorageId() {
    }

    // 모든 필드를 포함하는 생성자
    public CStorageId(String storageCode, String customerCode) {
        this.storageCode = storageCode;
        this.customerCode = customerCode;
    }

}
