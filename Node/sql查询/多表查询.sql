# 获取笛卡尔乘积
SELECT * FROM `products`, `brand`;

# 对笛卡尔乘积进行筛选
SELECT * FROM `products`, `brand` WHERE `products`.`brand_id` = `brand`.`id`;

# 获取左连接
# 1、查询所有手机，以及对应的品牌
SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id;

# 2、查询没有对应的品牌的所有手机
SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id WHERE brand.id IS NULL;

# 获取右连接
# 1、查询所有品牌以及对应的手机信息
SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id;

# 2、查询没有对应的手机信息的品牌
SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id WHERE products.brand_id IS NULL;

# 获取内连接
# 效果和上方对笛卡尔乘积进行筛选是一样的
SELECT * FROM `products` JOIN `brand` ON products.brand_id = brand.id


# 全连接
# mysql不支持FULL OUTER JOIN，需要使用union拼接左右连接的产物
-- 全连接1,获取两张表的并集
(SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id)
UNION
(SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id);

-- 全连接2,获取两张表没有交集的部分
(SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id WHERE brand.id IS NULL)
UNION
(SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id WHERE products.brand_id IS NULL);

