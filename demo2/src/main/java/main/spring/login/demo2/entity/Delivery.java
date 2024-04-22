package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Table(name = "delivery")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Delivery {
    @Id
    @Column(name = "delivery_number")
    private String deliveryNumber;

    @Column(name = "delivery_address", nullable = false)
    private String deliveryAddress;


    @Column(name = "delivery_arrive", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime deliveryArrive;

    @Column(name = "delivery_apply")
    private LocalDateTime deliveryApply;

//    @Column(name = "delivery_date")
//    @Temporal(TemporalType.TIMESTAMP)
//    private LocalDateTime deliveryDate;

    @Column(name = "order_number", nullable = false)
    private int orderNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_number", referencedColumnName = "order_number", insertable = false, updatable = false)
    private OrderMaster orderMaster;

    // Getters and Setters
}
