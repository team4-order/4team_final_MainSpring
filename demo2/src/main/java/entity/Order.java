package entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_number", nullable = false)
    private int orderNumber;

    @CreationTimestamp
    @Column(name = "order_date", nullable = false)
    private Date orderDate;

    @ColumnDefault("미정산")
    @Column(name = "adjustment_status", nullable = false)
    private String adjustmentStatus;

    @Column(name = "order_price", nullable = false)
    private int orderPrices;

    @Column(name = "customer_code")
    private String customerCode;

    @Column(name = "storage_code")
    private String storageCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact customerContact;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storage_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact storageContact;

}