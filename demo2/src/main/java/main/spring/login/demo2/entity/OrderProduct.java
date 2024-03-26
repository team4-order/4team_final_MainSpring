package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "order_product")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_number")
    private int orderNumber;

    @Column(name = "order_quantity", nullable = false)
    private int orderQuantity;

    @Column(name = "order_price", nullable = false)
    private int orderPrice;

    @Column(name = "goods_grade", nullable = false)
    private String goodsGrade;

    @Column(name = "goods_code", nullable = false)
    private String goodsCode;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "goods_grade", referencedColumnName = "goods_grade", insertable = false, updatable = false)
    private InventoryTotal inventoryTotalG;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable=false, updatable=false)
    private InventoryTotal inventoryTotalC;

    @ManyToOne
    @JoinColumn(name = "order_number", referencedColumnName = "order_number", insertable = false, updatable = false)
    private OrderMaster orderMaster;

    // Getters and Setters
}
