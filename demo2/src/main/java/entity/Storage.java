package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "contact")
public class Storage {
    @Id
    private String contactCode;
    private String contactDelimiter;
    private String contactName;
    private String contactAddress;
    private String customerPassword;
    private String storageCode;
    private String businessId;

    // 기본 생성자, getter 및 setter 생략
}
