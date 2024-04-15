package main.spring.login.demo2.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class CStoragePK implements Serializable {
    private String storageCode;
    private String customerCode;
}