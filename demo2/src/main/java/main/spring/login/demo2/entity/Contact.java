package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Random;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Contact {

    @Id
    @Column(name = "contact_code", nullable = false)
    private String contactCode;

    @Column(name = "contact_delimiter", nullable = false)
    private String contactDelimiter;

    @Column(name = "contact_name", nullable = false)
    private String contactName;

    @Column(name = "contact_address", nullable = false)
    private String contactAddress;

    @Column(name = "customer_password", nullable = true)
    private String customerPassword;

    @Column(name = "customer_phone", nullable = true)
    private String customerPhone;

    @Column(name = "storage_code")
    private String storageCode;

    @Column(name = "business_id")
    private String businessId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storage_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact storageContact;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_id", referencedColumnName = "business_id", insertable = false, updatable = false)
    private Business business;


}
