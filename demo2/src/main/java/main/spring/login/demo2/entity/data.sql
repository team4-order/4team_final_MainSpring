-- business 테이블에 더미 데이터 삽입
INSERT INTO `business` (`business_id`, `business_name`, `business_password`, `business_number`, `business_link`)
VALUES
    ('BUS01', '한화유통', 'password1', 123456789, 'http://www.business1.com'),
    ('BUS02', 'Business2', 'password2', 987654321, 'http://www.business2.com');

-- contact 테이블에 더미 데이터 삽입 /(공급처V, 판매처C, 창고S)
INSERT INTO `contact` (`contact_code`, `contact_delimiter`, `contact_name`, `contact_address`, `customer_password`, `storage_code`, `business_id`)
VALUES
#     ('CON002', 'C', '과일아삭', '제주 제주시 도두5길 13', '1234!', NULL, 'BUS01'),
#     ('CON001', 'C', 'CJ제일제당 ', '123 Street, City1', '1276', NULL, 'BUS01'),
#     ('CON003', 'C', '농업회사법인(주)하나', '충남 천안시 서북구 성환읍 연암로 198', '8472', NULL, 'BUS01');
    ('CON004', 'C', '자인청과(주)', '경기 화성시 봉담읍 경남로 40', '9318', NULL, 'BUS01'),
    ('CON005', 'C', '(주)백운', '서울 서초구 강남대로 201', '5247', NULL, 'BUS01'),
    ('CON006', 'C', '다산농산(주)', '경기 하남시 미사강변대로 12', '3921', NULL, 'BUS01'),
    ('CON007', 'C', '(주)거양수산', '인천 연수구 경원대로 20', '6834', NULL, 'BUS01'),
    ('CON008', 'C', '홍성유기농영농조합법인', '충북 제천시 연수구 삼천리 19', '4765', NULL, 'BUS01'),
    ('CON009', 'C', '하늘곳간영농조합법인', '경북 안동시 축현면 하늘곳간로 32', '3159', NULL, 'BUS01'),
    ('CON010', 'C', '(주)와이마트신가풍영점', '대전 유성구 대학로 291', '7285', NULL, 'BUS01'),
    ('CON011', 'C', '홍삼씨스텍(주)', '전남 순천시 중앙로 30', '8294', NULL, 'BUS01'),
    ('CON012', 'C', '한국농산(주)', '부산 부산진구 엄궁로 31', '6178', NULL, 'BUS01');
#     ('CON013', 'C', '태양농산(주)', '강원 춘천시 퇴계로 32', '7543', NULL, 'BUS01'),
#     ('CON014', 'C', '(주)해피마트', '경남 창원시 성산구 원이대로 123', '3829', NULL, 'BUS01'),
#     ('CON015', 'C', '산들산들농산', '서울 강남구 도산대로 124', '9512', NULL, 'BUS01'),
#     ('CON016', 'C', '경남농산(주)', '경기 수원시 영통구 매봉로 45', '6298', NULL, 'BUS01'),
#     ('CON017', 'C', '행복가득농산(주)', '충북 청주시 상당구 청남로 87', '5731', NULL, 'BUS01'),
#     ('CON018', 'C', '사과나무농산', '전북 전주시 완산구 백제대로 167', '8194', NULL, 'BUS01'),
#     ('CON019', 'C', '감나무영농조합법인', '경북 포항시 남구 용흥로 89', '2647', NULL, 'BUS01'),
#     ('CON020', 'C', '(주)딸기단', '서울 서대문구 거북골로 56', '4173', NULL, 'BUS01'),
#     ('CON021', 'C', '복숭아마을농산', '경남 진주시 진양호로 76', '9382', NULL, 'BUS01'),
#     ('CON022', 'C', '배나무농산', '충남 아산시 배방읍 아산호로 32', '7256', NULL, 'BUS01');


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