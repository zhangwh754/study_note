# DML是数据操作
# 插入数据
INSERT INTO `users` ( `name`, `age`, `phoneNum` )
						 VALUES ( 'lijie', 22, '13501838455' );
						 
# 修改users表的updateTime为自动生成，可以不用再手动添加创建和更新时间
ALTER TABLE `users` ADD `updateTime` TIMESTAMP;
ALTER TABLE `users` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `users` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

# 删除所有的数据
DELETE FROM `users`

# 删除某一条数据
DELETE FROM `users` WHERE `name` = 'lijie'

# 更新某一条数据
UPDATE `users` SET `age` = 18 WHERE id = 1112