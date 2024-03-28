create table business
(
    business_id       varchar(10)  not null
        primary key,
    business_name     varchar(30)  not null,
    business_password varchar(50)  not null,
    business_number   mediumtext   not null,
    business_link     varchar(150) null
);

create table contact
(
    contact_code      varchar(10)     not null comment '판매처 - 로그인 아이디'
        primary key,
    contact_delimiter char default '' not null comment 'C(판매처)/V(공급처)/S(창고)',
    contact_name      varchar(100)    not null,
    contact_address   varchar(150)    not null,
    customer_password varchar(30)     null comment '판매처 로그인 비밀번호',
    storage_code      varchar(10)     null comment '공급처 별 입고 창고',
    business_id       varchar(10)     not null,
    constraint FK_business_TO_contact_1
        foreign key (business_id) references business (business_id)
            on update cascade on delete cascade,
    constraint FK_contact_TO_contact_1
        foreign key (storage_code) references contact (contact_code)
            on update cascade on delete cascade
);

create table c_storage
(
    storage_code  varchar(10) not null comment '판매처별 노출 창고',
    customer_code varchar(10) not null,
    primary key (storage_code, customer_code),
    constraint FK_contact_TO_c_storage_1
        foreign key (customer_code) references contact (contact_code)
            on update cascade on delete cascade
);

create table goods_master
(
    goods_code    varchar(10) not null
        primary key,
    goods_name    varchar(50) not null,
    margin_rate   int         not null comment 'type변경될 수 있음',
    discount_rate int         not null comment 'type변경될 수 있음',
    business_id   varchar(10) not null,
    constraint FK_business_TO_goods_master_1
        foreign key (business_id) references business (business_id)
            on update cascade on delete cascade
);

create table grade_price
(
    goods_grade char        not null,
    goods_code  varchar(10) not null,
    input_stock int         not null,
    primary key (goods_grade, goods_code),
    constraint FK_goods_master_TO_grade_price_1
        foreign key (goods_code) references goods_master (goods_code)
            on update cascade on delete cascade
);

create table input
(
    input_id       int         not null
        primary key,
    goods_code     varchar(10) not null,
    goods_grade    char        not null,
    input_quantity mediumtext  not null,
    input_day      date        not null,
    supply_code    varchar(10) not null,
    constraint FK_contact_TO_input_1
        foreign key (supply_code) references contact (contact_code)
            on update cascade on delete cascade,
    constraint FK_goods_master_TO_input_1
        foreign key (goods_code) references goods_master (goods_code)
            on update cascade on delete cascade
);

create table inventory
(
    first_stock_date       date                                   not null,
    goods_code             varchar(10)                            not null,
    goods_grade            char                                   not null,
    inventory_quantity     mediumtext                             not null,
    sales_price            int                                    not null,
    grade_evaluation_dates date        default `first_stock_date` not null,
    storage_code           varchar(10) default ''                 not null,
    primary key (first_stock_date, goods_code, goods_grade),
    constraint FK_contact_TO_inventory_1
        foreign key (storage_code) references contact (contact_code)
            on update cascade on delete cascade,
    constraint FK_grade_price_TO_inventory_1
        foreign key (goods_code) references grade_price (goods_code)
            on update cascade on delete cascade,
    constraint FK_grade_price_TO_inventory_2
        foreign key (goods_grade) references grade_price (goods_grade)
            on update cascade on delete cascade
);

create table order_master
(
    order_number      int                           not null
        primary key,
    order_date        date        default curdate() not null,
    adjustment_status varchar(10) default '미정산'     not null,
    order_price       int                           not null comment '총 주문한 과일 금액',
    customer_code     varchar(10)                   not null,
    storage_code      varchar(10)                   not null comment '배송 출발지',
    constraint FK_contact_TO_order_1
        foreign key (customer_code) references contact (contact_code)
            on update cascade on delete cascade,
    constraint FK_contact_TO_order_2
        foreign key (storage_code) references contact (contact_code)
            on update cascade on delete cascade
);

create table delivery
(
    delivery_number  varchar(10) not null
        primary key,
    delivery_address varchar(30) not null,
    delivery_arrive  date        null,
    delivery_date    date        null,
    order_number     int         not null,
    constraint FK_order_TO_delivery_1
        foreign key (order_number) references `order` (order_number)
            on update cascade on delete cascade
);

create table order_product
(
    order_number    int         not null,
    orderd_quantity int         not null,
    orderd_price    int         not null,
    goods_grade     char        not null,
    goods_code      varchar(10) not null,
    primary key (order_number, goods_code, goods_grade),
    constraint FK_inventory_TO_order_product_1
        foreign key (goods_grade) references inventory (goods_grade)
            on update cascade on delete cascade,
    constraint FK_inventory_TO_order_product_2
        foreign key (goods_code) references inventory (goods_code)
            on update cascade on delete cascade,
    constraint FK_order_TO_order_product_1
        foreign key (order_number) references `order` (order_number)
            on update cascade on delete cascade
);


