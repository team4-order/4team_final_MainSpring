package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.InventoryYDto;
import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.repository.InventoryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryGradeService {

    private static final Logger logger = LoggerFactory.getLogger(InventoryGradeService.class);

    @Autowired
    private InventoryRepository inventoryRepository;


    @Scheduled(cron = "0 0 0 * * ?")
    //@Scheduled(fixedRate = 1000)  // 1초마다 실행
    @Transactional
    public void degradeInventoryGrades() {
        logger.info("Running scheduled job to update inventory grades.");
        List<Object[]> rawDataList = inventoryRepository.findExpiredInventory();
        List<InventoryYDto> inventories = rawDataList.stream()
                .map(this::convertToInventoryYDto)
                .collect(Collectors.toList());
        inventories.forEach(this::updateGradeAndSave);
    }

    private InventoryYDto convertToInventoryYDto(Object[] rawData) {
        return new InventoryYDto(
                ((java.sql.Timestamp) rawData[0]).toLocalDateTime(),
                (String) rawData[1],
                (String) rawData[2],
                (String) rawData[3],
                ((java.sql.Timestamp) rawData[4]).toLocalDateTime(),
                (String) rawData[5],
                (Integer) rawData[6],
                (String) rawData[7]
        );
    }

//    public void degradeInventoryGrades() {
//        logger.info("Running scheduled job to update inventory grades.");
//        List<InventoryYDto> inventories = inventoryRepository.findExpiredInventory();
//        inventories.forEach(this::updateGradeAndSave);
//    }

    private void updateGradeAndSave(InventoryYDto inventoryYDto) {
        String currentGrade = inventoryYDto.getCurrentGrade();
        String newGrade = getNextGrade(currentGrade);
        if (!currentGrade.equals(newGrade)) {
            inventoryYDto.setCurrentGrade(newGrade);
            inventoryYDto.setGradeEvaluationDates(LocalDateTime.now());

            // DTO를 엔티티로 변환
            Inventory inventory = inventoryYDto.toEntity();

            // 엔티티를 저장
            inventoryRepository.save(inventory);

            logger.info("Grade updated for goods code {}: {} -> {}", inventory.getGoodsCode(), currentGrade, newGrade);
        }
    }

    // 다음 등급을 반환하는 헬퍼 메서드
    private String getNextGrade(String currentGrade) {
        switch (currentGrade) {
            case "A":
                return "B";
            case "B":
                return "C";
            case "C":
                return "폐기";
            case "폐기":
                return "폐기";  // 이미 폐기 상태인 경우 변화 없음
            default:
                return "폐기";  // 정의되지 않은 등급 처리
        }
    }
}
