package main.spring.login.demo2.service;

import main.spring.login.demo2.dto.InventoryDTO;
import main.spring.login.demo2.dto.OrderProductSummaryDTO;
import main.spring.login.demo2.entity.GoodsMaster;
import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.repository.GoodsMasterRepository;
import main.spring.login.demo2.repository.InventoryRepository;
import main.spring.login.demo2.repository.OrderProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {

    private final InventoryRepository inventoryRepository;
    private final GoodsMasterRepository goodsMasterRepository;

    private final OrderProductRepository orderProductRepository;



    @Autowired
    public InventoryService(InventoryRepository inventoryRepository, GoodsMasterRepository goodsMasterRepository, OrderProductRepository orderProductRepository) {
        this.inventoryRepository = inventoryRepository;
        this.goodsMasterRepository = goodsMasterRepository;
        this.orderProductRepository = orderProductRepository;
    }


    public List<InventoryDTO> findAll() {
        List<Inventory> inventories = inventoryRepository.findAll();
        List<InventoryDTO> dtos = new ArrayList<>();
        for (Inventory inventory : inventories) {
            InventoryDTO dto = new InventoryDTO();
            // 필드 매핑
            dto.setFirstStockDate(inventory.getFirstStockDate());
            dto.setGoodsCode(inventory.getGoodsCode());
            dto.setGoodsGrade(inventory.getGoodsGrade());
            dto.setInventoryQuantity(inventory.getInventoryQuantity());
            dto.setSalesPrice(inventory.getSalesPrice());
            dto.setGradeEvaluationDates(inventory.getGradeEvaluationDates());
            dto.setStorageCode(inventory.getStorageCode());
            dto.setGoodsName(findGoodsNameByGoodsCode(inventory.getGoodsCode()));
            dtos.add(dto);
        }
        return dtos;
    }


    public List<InventoryDTO> findByStorageCode(String storageCode) {
        List<Inventory> inventories = inventoryRepository.findByStorageCode(storageCode);
        List<InventoryDTO> dtos = new ArrayList<>();
        for (Inventory inventory : inventories) {
            InventoryDTO dto = new InventoryDTO();
            dto.setFirstStockDate(inventory.getFirstStockDate());
            dto.setGoodsCode(inventory.getGoodsCode());
            dto.setGoodsGrade(inventory.getGoodsGrade());
            dto.setInventoryQuantity(inventory.getInventoryQuantity());
            dto.setSalesPrice(inventory.getSalesPrice());
            dto.setGradeEvaluationDates(inventory.getGradeEvaluationDates());
            dto.setStorageCode(inventory.getStorageCode());
            dto.setGoodsName(findGoodsNameByGoodsCode(inventory.getGoodsCode()));
            dtos.add(dto);
        }
        return dtos;
    }

    public String findGoodsNameByGoodsCode(String goodsCode) {
        return goodsMasterRepository.findById(goodsCode)
                .map(GoodsMaster::getGoodsName)
                .orElse("Unknown Product");
    }


//    public List<OrderProductSummaryDTO> findOrderedProductSummaries() {
//        return orderProductRepository.findOrderedProductSummaries();
//    }

    public List<OrderProductSummaryDTO> findOrderedProductSummariesForStatus(String orderStatus) {
        return orderProductRepository.findOrderedProductSummariesForStatus(orderStatus);
    }

}