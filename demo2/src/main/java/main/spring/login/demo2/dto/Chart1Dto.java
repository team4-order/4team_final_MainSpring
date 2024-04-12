package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.relational.core.sql.In;

import java.math.BigDecimal;

@Getter
@Setter
public class Chart1Dto {
    private Integer year;
    private Integer month;
    private float price;

    public Chart1Dto(Integer year, Integer month, float price){
        this.year = year;
        this.month = month;
        this.price = price / 10000;
    }
}
