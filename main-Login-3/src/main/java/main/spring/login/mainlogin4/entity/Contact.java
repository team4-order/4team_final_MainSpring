package main.spring.login.mainlogin4.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contact")
@NoArgsConstructor
public class Contact {
    @Id
    @Column(name = "contact_code")
    private String contactCode;

    @Column(name = "contact_delimiter")
    private String contactDelimiter;

    @Column(name = "contact_name")
    private String contactName;

    @Column(name = "contact_address")
    private String contactAddress;

    // getters and setters
    @Getter
    @Setter
    @Column(name = "customer_password")
    private String customerPassword;

    @Column(name = "storage_code")
    private String storageCode;

    @Column(name = "business_id")
    private String businessId;

    @Column(name = "customer_phone")
    private String customerPhone;

}