package main.spring.login.demo2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Table(name = "input")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Input {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "input_id")
    private int inputId;

    @Column(name = "goods_code", nullable = false)
    private String goodsCode;

    @Column(name = "goods_grade", nullable = false)
    private String goodsGrade;

    @Column(name = "input_quantity", nullable = false, columnDefinition = "MEDIUMTEXT")
    private String inputQuantity;

    @Column(name = "input_day", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime inputDay;

    @Column(name = "supply_code", nullable = false)
    private String supplyCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supply_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact contact;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "goods_code", referencedColumnName = "goods_code", insertable = false, updatable = false)
    private GoodsMaster goodsMaster;

    // Getters and Setters
}
