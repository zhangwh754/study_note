CREATE TABLE IF NOT EXISTS `brand` (
	id INT KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
);

INSERT INTO `brand` (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 2);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 10);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('小米', 'www.xiaomi.com', 5);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('oppp', 'www.oppo.com', 12);

INSERT INTO `brand` (name, website, phoneRank) VALUES ('京东', 'www.jd.com', 8);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('Google', 'www.Google.com',9);

# 添加一个brand_id字段
ALTER TABLE `products` ADD `brand_id` INT;
 
 # 外键限制
ALTER TABLE `products` ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

# 设置正确的brand_id的值
# 只能修改为brand表存在的id值
UPDATE `products` SET `brand_id` = 1 WHERE brand = '华为';
UPDATE `products` SET `brand_id` = 2 WHERE brand = '苹果';
UPDATE `products` SET `brand_id` = 3 WHERE brand = '小米';
UPDATE `products` SET `brand_id` = 4 WHERE brand = 'oppo';
 
# 需要修改brand_id关联的外键
# 1：获取到当前外键的名称
SHOW CREATE TABLE `products`;

# 2：根据名称删除外键
ALTER TABLE `products` DROP FOREIGN KEY `products_ibfk_1`;

# 重新添加外键限制
ALTER TABLE `products` ADD FOREIGN KEY(brand_id) REFERENCES brand(id)
																								 ON UPDATE CASCADE;
-- 																							 ON DELETE RESTRICT; 删除使用了默认值

# 现在可以修改brand表的id，会自动更新products表的brand_id
UPDATE `brand` SET `id` = 200 WHERE name = '华为';
