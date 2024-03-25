package main.spring.login.demo2.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "inventory")
@IdClass(Inventory.InventoryId.class)
public class Inventory_K {

    @Id
    @Column(name = "first_stock_date")
    private Date firstStockDate;

    @Id
    @Column(name = "goods_code")
    private String goodsCode;

    @Id
    @Column(name = "goods_grade", length = 1) // 길이는 1로 유지합니다.
    private String goodsGrade; // 이 필드는 이미 CHAR(1)로 정의되어 있으므로, 코드에서 변경하지 않습니다.

    @Column(name = "inventory_quantity")
    private Long inventoryQuantity;

    @Column(name = "sales_price")
    private Integer salesPrice;

    @Column(name = "grade_evaluation_dates")
    private Date gradeEvaluationDates;

    @ManyToOne
    @JoinColumn(name = "storage_code", referencedColumnName = "contact_code") // storage_code 필드를 contact_code 참조로 정의합니다.
    private Storage storage; // Storage 엔티티와의 관계를 정의합니다.

    public static class InventoryId implements Serializable {
        private Date firstStockDate;
        private String goodsCode;
        private String goodsGrade;
    }
}
