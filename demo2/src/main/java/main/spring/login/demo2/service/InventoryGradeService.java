//package main.spring.login.demo2.service;
//
//import main.spring.login.demo2.entity.Inventory;
//import main.spring.login.demo2.repository.InventoryRepository;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class InventoryGradeService {
//
//    private static final Logger logger = LoggerFactory.getLogger(InventoryGradeService.class);
//
//    @Autowired
//    private InventoryRepository inventoryRepository;
//
//    // 10초마다 실행되는 스케줄링 메서드
//    @Scheduled(fixedRate = 10000)
//    @Transactional
//    public void degradeInventoryGrades() {
//        logger.info("Running scheduled job to update inventory grades.");
//        List<Inventory> inventories = inventoryRepository.findAll();
//        inventories.forEach(this::updateGradeAndSave);
//    }
//
//    private void updateGradeAndSave(Inventory inventory) {
//        String currentGrade = inventory.getGoodsGrade();
//        String newGrade = getNextGrade(currentGrade);
//        if (!currentGrade.equals(newGrade)) {
//            inventory.setGoodsGrade(newGrade);
//            inventory.setGradeEvaluationDates(LocalDateTime.now());
//            inventoryRepository.save(inventory);
//            logger.info("Grade updated for goods code {}: {} -> {}", inventory.getGoodsCode(), currentGrade, newGrade);
//        }
//    }
//
//    // 다음 등급을 반환하는 헬퍼 메서드
//    private String getNextGrade(String currentGrade) {
//        switch (currentGrade) {
//            case "A":
//                return "B";
//            case "B":
//                return "C";
//            case "C":
//                return "폐기";
//            case "폐기":
//                return "폐기";  // 이미 폐기 상태인 경우 변화 없음
//            default:
//                return "폐기";  // 정의되지 않은 등급 처리
//        }
//    }
//}
