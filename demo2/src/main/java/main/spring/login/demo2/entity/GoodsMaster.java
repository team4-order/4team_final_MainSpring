package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "goods_master")
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class GoodsMaster {
    @Id
    @Column(name = "goods_code")
    private String goodsCode;

    @Column(name = "goods_name", nullable = false)
    private String goodsName;

//    @Column(name = "margin_rate", nullable = false)
//    private int marginRate;
//
//    @Column(name = "discount_rate", nullable = false)
//    private int discountRate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_id", nullable = false)
    private Business business;

    // Getters and Setters
}
