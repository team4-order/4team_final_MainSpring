package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "inventory_total")
@IdClass(InventoryTotalPK.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class InventoryTotal {
    @Id
    @Column(name = "storage_code")
    private String storageCode;

    @Id
    @Column(name = "goods_grade", nullable = false)
    private String goodsGrade;

    @Id
    @Column(name = "goods_code", nullable = false)
    private String goodsCode;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "goods_grade", referencedColumnName = "goods_grade", insertable = false, updatable = false)
//    private InventoryTotal inventoryG;
//
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable=false, updatable=false)
//    private InventoryTotal inventoryC;

    @Column(name = "total_quantity", nullable = false)
    private int totalQuantity;

    // Remove the individual @Id annotations and fields
    // If needed, provide accessors to the composite key fields through the embedded ID



    // Constructors, getters, and setters
}