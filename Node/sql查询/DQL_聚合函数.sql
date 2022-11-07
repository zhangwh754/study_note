# 聚合函数的使用

# 求价格的总和
SELECT SUM(price) as `totalPrice` from `products`

# 求价格的均值
SELECT AVG(price) as `average` from `products`

# 求最大值
SELECT MAX(price) from `products`

# 求个数
SELECT COUNT(*) from `products` WHERE `brand` = '华为'

# 求有price的项个数，去除重复的（即返回不重复的price的个数）
SELECT COUNT(DISTINCT price) from `products`

# 以品牌分组，返回各自的平均值和品牌名称
SELECT `brand`, AVG(price) FROM `products` GROUP BY `brand`

# 以品牌分组，返回均值在2000以上的分组的平均值和品牌名称
SELECT `brand`, AVG(price) as avgPrice FROM `products` GROUP BY `brand` HAVING `avgPrice` > 100

# 求每个品牌评分高于7.5的手机的均值
SELECT `brand`, AVG(price) from `products` WHERE `score` > 7.5 GROUP BY `brand`