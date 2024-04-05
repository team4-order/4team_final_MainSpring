package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.OrderMasterDTO;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.entity.OrderProduct;
import main.spring.login.demo2.service.OrderMasterService;
import main.spring.login.demo2.service.OrderProductService;
import org.hibernate.query.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderMasterController {

    @Autowired
    private OrderMasterService orderMasterService;
    //private OrderProductService orderProductService;

    @Autowired // 이 부분이 누락되어 있습니다.
    private OrderProductService orderProductService; // 이제 OrderProductService를 주입받아 사용할 수 있습니다.

    @GetMapping("/customer/{customerCode}")
    public List<OrderMaster> getOrdersByCustomerCode(@PathVariable("customerCode") String customerCode) {
        return orderMasterService.getOrderMastersByCustomerCode(customerCode);
    }

//    @GetMapping("/customer/{customerCode}/products")
//    public ResponseEntity<List<OrderProduct>> getOrderProductsByCustomerCode(@PathVariable("customerCode") String customerCode) {
//        List<OrderMaster> orderMasters = orderMasterService.getOrderMastersByCustomerCode(customerCode);
//        List<OrderProduct> orderProducts = new ArrayList<>();
//
//        for(OrderMaster orderMaster : orderMasters) {
//            orderProducts.addAll(orderProductService.getOrderProductsByOrderNumber(orderMaster.getOrderNumber()));
//        }
//
//        return ResponseEntity.ok(orderProducts);
//    }

    @GetMapping("/adjustment")
    public ResponseEntity<List<OrderMaster>> getAllOrderMasters() {
        List<OrderMaster> orderMasters = orderMasterService.findAllOrderMaster();
        return ResponseEntity.ok(orderMasters);
    }

    //business id 에 따른 주문 목록
    @GetMapping("/id/{businessId}")
    public List<OrderMaster> getOrdersByBusinessId(@PathVariable("businessId") String businessId) {
        return orderMasterService.findByBusinessId(businessId);
    }

    @PutMapping("/adjustment/{orderNumber}") //정산 상태 바뀐 것 받아오는 controller
    public ResponseEntity<OrderMaster> updateOrderStatus(@PathVariable("orderNumber") Integer orderNumber, @RequestBody OrderMasterDTO orderMasterDTO) {
        OrderMaster updatedOrder = orderMasterService.updateOrderStatus(orderNumber, orderMasterDTO.getAdjustmentStatus());
        return ResponseEntity.ok(updatedOrder);
    }

    @GetMapping("/pendingsettlement/{customerCode}")
    public ResponseEntity<Boolean> isPendingSettlement(@PathVariable("customerCode") String customerCode) {
        boolean pendingSettlement = orderMasterService.isPendingSettlement(customerCode);
        return ResponseEntity.ok(pendingSettlement);
    }



}