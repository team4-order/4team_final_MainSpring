package main.spring.login.demo2.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class InventoryTotalPK implements Serializable {
    private String goodsCode;
    private String goodsGrade;
    private String storageCode;

}