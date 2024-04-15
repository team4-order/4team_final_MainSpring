package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "c_storage")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@IdClass(CStorageId.class) // 복합 키 클래스를 지정
public class CStorage {
    @Id
    @Column(name = "storage_code")
    private String storageCode;

    @Id
    @Column(name = "customer_code")
    private String customerCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact contact;

    // Getters and Setters
}
