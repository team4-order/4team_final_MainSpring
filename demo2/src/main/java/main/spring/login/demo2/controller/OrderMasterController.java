package main.spring.login.demo2.controller;

import main.spring.login.demo2.dto.OrderMasterDTO;
import main.spring.login.demo2.dto.OrderMasterYDto;
import main.spring.login.demo2.entity.Contact;
import main.spring.login.demo2.entity.OrderMaster;
import main.spring.login.demo2.entity.OrderProduct;
import main.spring.login.demo2.repository.OrderMasterRepository;
import main.spring.login.demo2.service.OrderMasterService;
import main.spring.login.demo2.service.OrderProductService;
import org.hibernate.query.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderMasterController {

    @Autowired
    private OrderMasterService orderMasterService;

    @Autowired
    private OrderMasterRepository orderMasterRepository;

    @Autowired // 이 부분이 누락되어 있습니다.
    private OrderProductService orderProductService; // 이제 OrderProductService를 주입받아 사용할 수 있습니다.

    @GetMapping("/customer")
    public List<OrderMaster> getOrders() {
        return orderMasterService.findAllOrderMaster();
    }

    @GetMapping("/customer/{customerCode}")
    public List<OrderMaster> getOrdersByCustomerCode(@PathVariable("customerCode") String customerCode) {
        return orderMasterService.getOrderMastersByCustomerCode(customerCode);
    }

    //business id 에 따른 주문 목록
    @GetMapping("/id/{businessId}")
    public List<OrderMaster> getOrdersByBusinessId(@PathVariable("businessId") String businessId) {
        return orderMasterService.findByBusinessId(businessId);
    }

    @GetMapping("/customer/{customerCode}/products")
    public ResponseEntity<List<OrderProduct>> getOrderProductsByCustomerCode(@PathVariable("customerCode") String customerCode) {
        List<OrderMaster> orderMasters = orderMasterService.getOrderMastersByCustomerCode(customerCode);
        List<OrderProduct> orderProducts = new ArrayList<>();

        for(OrderMaster orderMaster : orderMasters) {
            orderProducts.addAll(orderProductService.getOrderProductsByOrderNumber(orderMaster.getOrderNumber()));
        }

        return ResponseEntity.ok(orderProducts);
    }

    @GetMapping("/adjustment")
    public ResponseEntity<List<OrderMaster>> getAllOrderMasters() {
        List<OrderMaster> orderMasters = orderMasterService.findAllOrderMaster();
        return ResponseEntity.ok(orderMasters);
    }

    @PutMapping("/adjustment/{orderNumber}") //정산 상태 바뀐 것 받아오는 controller
    public ResponseEntity<OrderMaster> updateOrderStatus(@PathVariable("orderNumber") Integer orderNumber, @RequestBody OrderMasterDTO orderMasterDTO) {
        OrderMaster updatedOrder = orderMasterService.updateOrderStatus(orderNumber, orderMasterDTO.getAdjustmentStatus());
        return ResponseEntity.ok(updatedOrder);
    }

    @PostMapping("/post")
    public OrderMaster createOrder(@RequestBody OrderMaster orderMaster) {
        return orderMasterRepository.save(orderMaster);
    }

    @PutMapping("/{orderNumber}/cancel")
    public ResponseEntity<?> cancelOrder(@PathVariable int orderNumber) {
        orderMasterService.cancelOrder(orderNumber);
        return ResponseEntity.ok().body("Order has been canceled successfully");
    }
     
    @GetMapping("/{orderNumber}")
    public Optional<OrderMaster> getOrdersByCustomerCode(@PathVariable("orderNumber") int orderNumber) {
        return orderMasterService.findByOrderNumber(orderNumber);
    }

    @GetMapping("/busId/{businessId}")
    public List<OrderMasterYDto> getOrderDtoByBusinessId(@PathVariable("businessId") String businessId) {
        return orderMasterService.findOrderMasterDtoByBusinessId(businessId);
    }

    @GetMapping("/sc/{storageCode}")
    public List<OrderMaster> getOrderByStorageCode(@PathVariable("storageCode") String storageCode) {
        return orderMasterService.findByStorageCode(storageCode);
    }


}