package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "grade_price")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class GradePrice {
    @Id
    @Column(name = "goods_grade")
    private String goodsGrade;

    @Id
    @Column(name = "goods_code")
    private String goodsCode;

    @Column(name = "input_stock", nullable = false)
    private int inputStock;

    @ManyToOne
    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable = false, updatable = false)
    private GoodsMaster goodsMaster;

    // Getters and Setters
}
