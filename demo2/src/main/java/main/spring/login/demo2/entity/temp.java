package main.spring.login.demo2.entity;

public class temp {
    /*
    select storage_code from c_storage where customer_code='CON001';
select * from inventory where
                            (select * from c_storage where customer_code='CON001');

SELECT inventory.goods_code, inventory.goods_grade, inventory.inventory_quantity, c.storage_code
FROM inventory INNER JOIN (select * from c_storage where customer_code='CON001') c
ON inventory.storage_code = c.storage_code;

-- 창고 별 재고 (1창고에 a상품 a등급 n개 있음)
SELECT
    inventory.goods_code,
    inventory.goods_grade,
    SUM(inventory.inventory_quantity) AS total_inventory_quantity,
    c.storage_code
FROM inventory
         INNER JOIN (
    SELECT *
    FROM c_storage
    WHERE customer_code = 'CON001'
) c ON inventory.storage_code = c.storage_code
GROUP BY inventory.goods_code, inventory.goods_grade, c.storage_code
ORDER BY inventory.goods_code, inventory.goods_grade, total_inventory_quantity DESC;

INSERT INTO inventory_total (goods_code, goods_grade, total_quantity)
SELECT
    goods_code,
    goods_grade,
    SUM(CAST(inventory_quantity AS UNSIGNED)) AS total_quantity
FROM inventory
GROUP BY goods_code, goods_grade
ON DUPLICATE KEY UPDATE total_quantity = VALUES(total_quantity);

SELECT
    inventory.goods_code,
    inventory.goods_grade,
    SUM(CAST(inventory.inventory_quantity AS UNSIGNED)) AS total_inventory_quantity
FROM inventory
         INNER JOIN (
    SELECT *
    FROM c_storage
    WHERE customer_code = 'CON001'
) c ON inventory.storage_code = c.storage_code
GROUP BY inventory.goods_code, inventory.goods_grade
ORDER BY inventory.goods_code, inventory.goods_grade, total_inventory_quantity DESC;
     */
}
