package main.spring.login.demo2.entity;

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
//@JsonIgoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "order_master")
public class OrderMaster {

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
    private int orderPrice;

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



//    /// 추가
//    @OneToMany(mappedBy = "orderMaster", fetch = FetchType.LAZY)
//    private List<OrderProduct> orderProducts; // OrderMaster와 OrderProduct 간의 1:N 관계 설정
}