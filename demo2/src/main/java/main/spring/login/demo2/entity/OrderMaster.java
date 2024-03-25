package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Table(name = "order_master")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class OrderMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_number")
    private int orderNumber;

    @Column(name = "order_date", nullable = false, columnDefinition = "DATE DEFAULT CURRENT_DATE")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime orderDate;

    @Column(name = "adjustment_status", nullable = false, columnDefinition = "varchar(255) default '미정산' not null")
    @ColumnDefault("'미정산'")
    private String adjustmentStatus;

    @Column(name = "order_price", nullable = false)
    private int orderPrice;

    @Column(name = "customer_code", nullable = false)
    private String customerCode;

    @Column(name = "storage_code", nullable = false)
    private String storageCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storage_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact storage;

    // Getters and Setters
}

