package main.spring.login.demo2.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Chart2Dto {
    private Integer year;
    private Integer month;
    private long count;

    public Chart2Dto(Integer year, Integer month, long count){
        this.year = year;
        this.month = month;
        this.count = count;
    }
}
