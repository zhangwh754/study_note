CREATE TABLE IF NOT EXISTS `brand` (
	id INT KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
);

INSERT INTO `brand` (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 2)
INSERT INTO `brand` (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 10)
INSERT INTO `brand` (name, website, phoneRank) VALUES ('小米', 'www.xiaomi.com', 5)
INSERT INTO `brand` (name, website, phoneRank) VALUES ('oppp', 'www.oppo.com', 12)

INSERT INTO `brand` (name, website, phoneRank) VALUES ('京东', 'www.jd.com', 8)
INSERT INTO `brand` (name, website, phoneRank) VALUES ('Google', 'www.Google.com',9)