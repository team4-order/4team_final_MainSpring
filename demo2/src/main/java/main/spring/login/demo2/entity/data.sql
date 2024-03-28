-- business 테이블에 더미 데이터 삽입
INSERT INTO `business` (`business_id`, `business_name`, `business_password`, `business_number`, `business_link`)
VALUES
    ('BUS001', 'Business1', 'password1', 123456789, 'http://www.business1.com'),
    ('BUS002', 'Business2', 'password2', 987654321, 'http://www.business2.com');

-- contact 테이블에 더미 데이터 삽입 /(공급처V, 판매처C, 창고S)
INSERT INTO `contact` (`contact_code`, `contact_delimiter`, `contact_name`, `contact_address`, `customer_password`, `storage_code`, `business_id`)
VALUES
    ('CON002', 'C', 'Customer2', '321 Street, City2', 'custpass2', NULL, 'BUS002');
    ('CON001', 'C', 'Customer1', '123 Street, City1', 'custpass1', NULL, 'BUS002'),
    ('STR001', 'S', 'Storage1', '789 Street, City3', null, null, 'BUS002'),
    ('STR002', 'S', 'Storage2', '987 Street, City4', null, null, 'BUS002'),
    ('SUP001', 'V', 'Supplier1', '456 Street, City2', null, 'STR001', 'BUS002');
-- c_storage 테이블에 더미 데이터 삽입 /판매처별 노출 창고
INSERT INTO `c_storage` (`storage_code`, `customer_code`)
VALUES
    ('STRO01', 'CON001'),
    ('STR002', 'CON001');

-- goods_master 테이블에 더미 데이터 삽입
INSERT INTO `goods_master` (`goods_code`, `goods_name`, `margin_rate`, `discount_rate`, `business_id`)
VALUES
    ('GHI789', '', 20, 8, 'BUS002'),
    ('ABC123', '사과', 10, 5, 'BUS001'),
    ('DEF456', '오렌지', 15, 7, 'BUS002');



-- input 테이블에 더미 데이터 삽입 /입고 상품 (내역)
INSERT INTO `input` (`input_id`, `goods_code`, `goods_grade`, `input_quantity`, `input_day`, `supply_code`)
VALUES
    (1, 'ABC123', 'A', 100, '2024-03-21', 'SUP001'),
    (2, 'DEF456', 'B', 150, '2024-03-22', 'SUP001'),
    (3, 'GHI789', 'C', 200, '2024-03-23', 'SUP001');

-- grade_price 테이블에 더미 데이터 삽입 /등급별 단가
INSERT INTO `grade_price` (`goods_grade`, `goods_code`, `input_stock`)
VALUES
    ('A', 'ABC123', 500),
    ('B', 'DEF456', 350),
    ('C', 'GHI789', 250);

-- inventory 테이블에 더미 데이터 삽입 /재고
INSERT INTO `inventory` (`first_stock_date`, `goods_code`, `goods_grade`, `inventory_quantity`, `sales_price`, `grade_evaluation_dates`, `storage_code`)
VALUES
    ('2024-03-24', 'ABC123', 'A', 130, 2500, '2024-03-24', 'STR002'),
    ('2024-03-25', 'DEF456', 'B', 80, 2200, '2024-03-25', 'STR002');
    ('2024-03-25', 'GHI789', 'C', 100, 2000, '2024-03-26', 'STR002');
    ('2024-03-21', 'ABC123', 'A', 50, 1000, '2024-03-21', 'STR001'),
    ('2024-03-22', 'DEF456', 'B', 75, 1500, '2024-03-22', 'STR001'),
    ('2024-03-23', 'GHI789', 'C', 100, 2000, '2024-03-23', 'STR001');



-- delivery 테이블에 더미 데이터 삽입 /배송
INSERT INTO `delivery` (`delivery_number`, `delivery_address`, `delivery_arrive`, `delivery_date`, `order_number`)
VALUES
    ('DEL001', '789 Street, City3', '2024-03-25', '2024-03-24', 1),
    ('DEL002', '456 Street, City4', '2024-03-26', '2024-03-25', 2);

-- order 테이블에 더미 데이터 삽입 /주문header
INSERT INTO `order_master` (`order_number`, `order_date`, `adjustment_status`, `order_price`, `customer_code`, `storage_code`)
VALUES
    (1, '2024-03-20', '미정산', 5000, 'CON001', 'STR001'),
    (2, '2024-03-21', '미정산', 7500, 'CON001', 'STR002');

-- order_product 테이블에 더미 데이터 삽입 /주문 detail
INSERT INTO `order_product` (`order_number`, `order_quantity`, `order_price`, `goods_grade`, `goods_code`)
VALUES
    (1, 10, 1000, 'A', 'ABC123'),
    (1, 15, 1500, 'B', 'DEF456'),
    (2, 20, 2000, 'C', 'GHI789');