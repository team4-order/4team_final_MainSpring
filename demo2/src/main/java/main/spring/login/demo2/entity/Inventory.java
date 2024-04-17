package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Table(name = "inventory")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@IdClass(InventoryId.class) // 복합 키 클래스 지정
public class Inventory {
    @Id
    @Column(name = "first_stock_date", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime firstStockDate;

    @Id
    @Column(name = "goods_code", nullable = false)
    private String goodsCode;

    @Id
    @Column(name = "goods_grade", nullable = false, length = 2)
    private String goodsGrade;

    @Column(name = "current_grade", nullable = false, length = 2)
    private String currentGrade;

    @Column(name = "inventory_quantity", nullable = false, columnDefinition = "MEDIUMTEXT")
    private String inventoryQuantity;

    @Column(name = "grade_evaluation_dates", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime gradeEvaluationDates;

    @Column(name = "storage_code", nullable = false, columnDefinition = "VARCHAR(10) default ''")
    private String storageCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storage_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact contact;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable = false, updatable = false)
//    private GradePrice gradePriceC;
//
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "goods_grade", referencedColumnName = "goods_grade", insertable = false, updatable = false)
//    private GradePrice gradePriceG;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable = false, updatable = false),
            @JoinColumn(name = "goods_grade", referencedColumnName = "goods_grade", insertable = false, updatable = false)
    })
    private GradePrice gradePrice;
    // Getters and Setters
    // test


    public static class InventoryId implements Serializable {
        private String firstStockDate;
        private String goodsCode;
        private String goodsGrade;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable = false, updatable = false)
    private GoodsMaster goodsMaster;



}
