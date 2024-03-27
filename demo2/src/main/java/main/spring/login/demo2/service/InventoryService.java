package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.GoodsMaster;
import main.spring.login.demo2.entity.Inventory;
import main.spring.login.demo2.repository.GoodsMasterRepository;
import main.spring.login.demo2.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    private final InventoryRepository inventoryRepository;
    private final GoodsMasterRepository goodsMasterRepository;

    @Autowired
    public InventoryService(InventoryRepository inventoryRepository ,GoodsMasterRepository goodsMasterRepository) {
        this.inventoryRepository = inventoryRepository;
        this.goodsMasterRepository = goodsMasterRepository;
    }

    public List<Inventory> findAll() {
        return inventoryRepository.findAll();
    }

    public List<Inventory> findByStorageCode(String storageCode) {
        List<Inventory> inventories = inventoryRepository.findByStorageCode(storageCode);
        // 여기서는 단순히 재고 목록을 반환하며, 실제 상품 이름을 포함하는 로직은 컨트롤러에서 처리
        return inventories;
    }

    public String findGoodsNameByGoodsCode(String goodsCode) {
        return goodsMasterRepository.findById(goodsCode)
                .map(GoodsMaster::getGoodsName)
                .orElse("Unknown Product");
    }

}
