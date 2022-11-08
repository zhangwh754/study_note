# 创建学生表、课程表、输入数据
CREATE TABLE IF NOT EXISTS students (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

CREATE TABLE IF NOT EXISTS courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE
);()

(
INSERT INTO `students` (name, age) VALUES('why', 18);
INSERT INTO `students` (name, age) VALUES('tom', 22);
INSERT INTO `students` (name, age) VALUES('lilei', 25);
INSERT INTO `students` (name, age) VALUES('lucy', 16);
INSERT INTO `students` (name, age) VALUES('lily', 20);
INSERT INTO `courses` (name, price) VALUES ('英语', 100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 888);
INSERT INTO `courses` (name, price) VALUES ('化学', 888);
)

# 创建学生选课关系表
CREATE TABLE IF NOT EXISTS students_select_courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	courses_id INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
	FOREIGN KEY (courses_id) REFERENCES courses(id) ON UPDATE CASCADE
);

# 学生选课信息模拟
(
# why 选择了英语数学历史
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (1, 1);
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (1, 3);
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (1, 4);
# lilei 选择了语文历史
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (3, 2);
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (3, 4);
# lily 选择了语文数学历史
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (5, 2);
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (5, 3);
INSERT INTO `students_select_courses` (student_id, courses_id) VALUES (5, 4);
)

# 查询
# 1、查询所有有选课的学生，都选择了什么课程
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id cId, cs.name cName, cs.price cPrice
FROM `students` as stu
JOIN `students_select_courses` as ssc
ON stu.id = ssc.student_id
JOIN `courses` as cs
ON ssc.courses_id = cs.id;

# 2、查询所有学生的选择情况
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id cId, cs.name cName, cs.price cPrice
FROM `students` as stu
LEFT JOIN `students_select_courses` as ssc
ON stu.id = ssc.student_id
LEFT JOIN `courses` as cs
ON ssc.courses_id = cs.id;

# 3、查询没有选课的学生
SELECT stu.id id, stu.name stuName, stu.age stuAge
FROM `students` as stu
LEFT JOIN `students_select_courses` as ssc
ON stu.id = ssc.student_id
LEFT JOIN `courses` as cs
ON ssc.courses_id = cs.id
WHERE cs.id IS NULL;

# 4、查询没有被任何人选择的课
SELECT cs.id cId, cs.name cName, cs.price cPrice
FROM `students` as stu
RIGHT JOIN `students_select_courses` as ssc
ON stu.id = ssc.student_id
RIGHT JOIN `courses` as cs
ON ssc.courses_id = cs.id
WHERE stu.id IS NULL;

# 5、查看某个学生选择了哪些课程
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id cId, cs.name cName, cs.price cPrice
FROM `students` as stu
LEFT JOIN `students_select_courses` as ssc
ON stu.id = ssc.student_id
LEFT JOIN `courses` as cs
ON ssc.courses_id = cs.id
WHERE stu.id = 1;

