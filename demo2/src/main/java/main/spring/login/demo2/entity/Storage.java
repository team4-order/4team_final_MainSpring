package main.spring.login.demo2.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "contact")
public class Storage {
    @Id
    @Column(name = "contact_code")
    private String contactCode;

    @Column(name = "contact_delimiter")
    private String contactDelimiter;

    @Column(name = "contact_name")
    private String contactName;

    @Column(name = "contact_address")
    private String contactAddress;

    @Column(name = "customer_password")
    private String customerPassword;

    @Column(name = "storage_code")
    private String storageCode;

    @Column(name = "business_id")
    private String businessId;
}
