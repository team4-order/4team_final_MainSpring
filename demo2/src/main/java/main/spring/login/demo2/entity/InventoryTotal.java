package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "inventory_total")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class InventoryTotal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goods_code")
    private String goodsCode;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goods_grade")
    private String goodsGrade;

    @Column(name = "total_quantity", nullable = false)
    private int totalQuantity;

    @ManyToOne
    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable = false, updatable = false)
    private Inventory inventoryC;

    @ManyToOne
    @JoinColumn(name = "goods_grade", referencedColumnName = "goods_grade", insertable = false, updatable = false)
    private Inventory inventoryG;
    // Constructors, getters, and setters
}