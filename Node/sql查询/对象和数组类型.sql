# 将联合查询的数据转成对象（一对多）
SELECT 
 pro.id id, pro.title title, pro.price price, 
 JSON_OBJECT('id', brand.id, 'name', brand.name, 'website', brand.website) brand
FROM `products` pro
LEFT JOIN `brand`
ON pro.brand_id = brand.id;

# 查到的多个数据，转成对象，放到一个数组里
SELECT stu.id id, stu.name name, stu.age age,
			 JSON_ARRAYAGG(JSON_OBJECT('id', cs.id, 'name', cs.name, 'price', cs.price)) courses
FROM `students` as stu
LEFT JOIN `students_select_courses` as ssc
ON stu.id = ssc.student_id
LEFT JOIN `courses` as cs
ON ssc.courses_id = cs.id
GROUP BY stu.id;