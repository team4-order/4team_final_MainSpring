package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.InventoryTotalDto;
import main.spring.login.demo2.dto.OrderProductYDto;
import main.spring.login.demo2.entity.InventoryTotal;
import main.spring.login.demo2.repository.InventorySummary;
import main.spring.login.demo2.service.InventoryTotalService;
import main.spring.login.demo2.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/total")
public class InventoryTotalController {

    @Autowired
    private InventoryTotalService inventoryTotalService;
    @Autowired
    private OrderProductService orderProductService;


    @GetMapping("/{customerCode}")
    public List<InventoryTotal> getInventoryTotalByCustomerCode(@PathVariable("customerCode") String customerCode){
        return inventoryTotalService.getTotalByCustomerCode(customerCode);
    }

    @GetMapping("/summary/{customerCode}")
    public List<InventorySummary> getTotalSummaryByCustomerCode(@PathVariable("customerCode") String customerCode){
        return inventoryTotalService.getTotalSummaryByCustomerCode(customerCode);
    }

//    @GetMapping("/storage/{storageCode}")
//    public List<InventoryTotal> getTotalByStorageCode(@PathVariable("storageCode") String storageCode){
//        return inventoryTotalService.getTotalByStorageCode(storageCode);
//    }


    @GetMapping("/storage/{storageCode}")
    public List<InventoryTotalDto> getTotalByStorageCode(@PathVariable("storageCode") String storageCode) {
        List<OrderProductYDto> opDtos = orderProductService.getOrderQuanByStorageCode(storageCode);
        List<InventoryTotalDto> inventoryTotals = inventoryTotalService.getInventoryTotalByStorageCode(storageCode);

        for (InventoryTotalDto inventoryTotal : inventoryTotals) {
            for (OrderProductYDto opDto : opDtos) {
                if (inventoryTotal.getGoodsCode().equals(opDto.getGoodsCode()) &&
                        inventoryTotal.getGoodsGrade().equals(opDto.getGoodsGrade())) {
                    int updatedQuantity = inventoryTotal.getTotalQuantity() - opDto.getOrderQuantity();
                    inventoryTotal.setTotalQuantity(updatedQuantity);
                }
            }
        }
        return inventoryTotals;
    }
}

