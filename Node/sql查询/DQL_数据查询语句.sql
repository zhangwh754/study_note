# DQL是数据查询语言

# 创建products的表
CREATE TABLE IF NOT EXISTS `products` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2,1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

# 查询数据
SELECT `title` as `标题`, `price` FROM `products`;

# 用where条件查询数据
SELECT `title` as `标题`, `price` FROM `products` WHERE `brand` LIKE '%科技';

SELECT * FROM `products` WHERE `price` < 800;

SELECT * FROM `products` WHERE `brand` in ('华为', '小米', '苹果');

# 结果按价格排序
SELECT * FROM `products` WHERE `price` < 800 ORDER BY `price`;

SELECT * FROM `products` WHERE `price` < 800 ORDER BY `price` DESC;

# 价格升序，相同时，评分降序
SELECT * FROM `products` ORDER BY `price` ASC, `score` DESC;

# 分页查询， limt是返回的条数，offset是相对于初始的偏移量
SELECT * FROM `products` LIMIT 10 OFFSET 0;

SELECT * FROM `products` LIMIT 10 OFFSET 10;

# 或者
SELECT * FROM `products` LIMIT 10, 10;