##以下为创建数据库的SQL语句，另外本目录下的bookstore.sql文件可以直接导入##
###创建数据库 bookstore ###
create database bookstore
###创建产品表 ###
CREATE TABLE `b_product` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `b_name` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
 `b_publish` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
 `b_editor` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
 `b_isbn` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '000-0-00-000000-0',
 `b_price_new` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `b_price_old` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `b_price_show_new` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `b_price_show_old` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `b_stock_new` int(5) NOT NULL,
 `b_stock_old` int(5) NOT NULL,
 `b_hot` varchar(5) NOT NULL DEFAULT '0',
 `b_pic_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###创建专业类别表 ###
CREATE TABLE `b_category_major` (
 `id` int(3) NOT NULL AUTO_INCREMENT,
 `major` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '未填写',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###创建年级类别表 ###
CREATE TABLE `b_category_grade` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `grade` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###创建学院类别表 ###
CREATE TABLE `b_category_college` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `college` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`),
 KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###创建产品-专业关系表 ###
CREATE TABLE `b_rel_pro_maj` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `id_product` int(5) NOT NULL,
 `id_category_major` int(5) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###创建专业-学院关系表 ###
CREATE TABLE `b_rel_maj_col` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `id_category_major` int(5) NOT NULL,
 `id_category_college` int(5) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###创建学院-年级关系表 ###
CREATE TABLE `b_rel_col_grade` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `id_category_col` int(5) NOT NULL,
 `id_category_grade` int(5) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###热销表 ###
CREATE TABLE `b_hot_goods` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `id_product` int(5) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###订单表（买书） ###
CREATE TABLE `b_order` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `b_id` int(5) NOT NULL,
 `b_num` int(2) NOT NULL,
 `b_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
 `b_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
 `b_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
 `b_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
 `b_time` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `b_ready` int(5) NOT NULL DEFAULT '0',
 `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
 `b_pay_method` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###管理员表 ###
CREATE TABLE `b_admin` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
 `power` int(3) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
### 默认要建立超级管理员###
INSERT INTO b_admin VALUES('','admin','21232f297a57a5a743894a0e4a801fc3','0')
###反馈表 ###
CREATE TABLE `b_feedback` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `email` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
 `text` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###广告表 ###
CREATE TABLE `b_ad` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `text` varchar(140) COLLATE utf8_unicode_ci DEFAULT NULL,
 `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 `number` varchar(2) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###卖书订单表 ###
CREATE TABLE `b_sell` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `b_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
 `b_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
 `b_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
 `b_time` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
 `b_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
 `b_ready` int(5) NOT NULL,
 `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###浏览次数表 ###
CREATE TABLE `b_visited` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `year` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
 `mouth` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
 `day` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
 `ip` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
 `browser` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###我们的动态表 ###
CREATE TABLE `b_our` (
 `id` int(5) NOT NULL AUTO_INCREMENT,
 `text` varchar(140) COLLATE utf8_unicode_ci NOT NULL,
 `display` int(5) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
###邮件通知表###
CREATE TABLE `b_mail` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `mail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
 `send` int(2) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci