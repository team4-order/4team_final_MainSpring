package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "order_product")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_number")
    private int orderNumber;

//    @Id
//    @Column(name = "goods_code")
//    private String goodsCode;
//
//    @Id
//    @Column(name = "goods_grade")
//    private String goodsGrade;

    @Column(name = "ordered_quantity", nullable = false)
    private int orderedQuantity;

    @Column(name = "ordered_price", nullable = false)
    private int orderedPrice;

    @OneToOne
    @JoinColumn(name = "goods_grade", referencedColumnName = "goods_grade")
    private Inventory inventoryG;

    @OneToOne
    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code")
    private Inventory inventoryC;

    @ManyToOne
    @JoinColumn(name = "order_number", referencedColumnName = "order_number", insertable = false, updatable = false)
    private OrderMaster orderMaster;

    // Getters and Setters
}
