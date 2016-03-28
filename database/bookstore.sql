-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2016-03-15 12:27:49
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `bookstore`
--
CREATE DATABASE IF NOT EXISTS `bookstore` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bookstore`;

-- --------------------------------------------------------

--
-- 表的结构 `b_ad`
--

CREATE TABLE IF NOT EXISTS `b_ad` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `text` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=29 ;

--
-- 转存表中的数据 `b_ad`
--

INSERT INTO `b_ad` (`id`, `text`, `type`, `number`) VALUES
(1, 'logo.png', '', '1'),
(2, '1.png', '', '2'),
(3, '2.png', '', '3'),
(4, '3.png', '', '4'),
(5, '4.png', '', '5'),
(6, '543.gif', '', '6'),
(7, '标题1', '', '7'),
(8, '我们把每个专业的所需的教材分门别类，我们甚至把您的教材做了调查，推荐给您最需要的教材！', '', '8'),
(9, '8567一.gif', '', '9'),
(10, '标题2', '', '10'),
(11, '不论是收书还是提供二手书，我们为您提供强大的优惠力度，让您在教材的购买上节省下一笔不小的开销！', '', '11'),
(12, '43432.gif', '', '12'),
(13, '标题3', '', '13'),
(14, '我们把教材的真实封面展现给您，确保您买到的教材符合您的课程，不仅如此我们\r\n										还会实时更新课程和图书资料，确保您的教材万无一失！', '', '14'),
(15, '1 - 副本 (2).png', '', '15'),
(16, '', '', '16'),
(17, '', '', '17'),
(18, '', '', '18'),
(19, '我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染', '', '19'),
(20, '买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知买书须知', '', '20'),
(21, '001462609.jpg', '', '21'),
(22, '1 - 副本.png', '', '22'),
(23, '2 - 副本 (2).png', '', '23'),
(24, '3 - 副本 (2).png', '', '24'),
(25, '4 - 副本 (2).png', '', '25'),
(26, '435443.gif', '', '26'),
(27, '标题4', '', '27'),
(28, '哈哈哈哈哈哈哈哈', '', '28');

-- --------------------------------------------------------

--
-- 表的结构 `b_admin`
--

CREATE TABLE IF NOT EXISTS `b_admin` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `power` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `b_admin`
--

INSERT INTO `b_admin` (`id`, `name`, `password`, `power`) VALUES
(1, 'admin', '7fef6171469e80d32c0559f88b377245', 0),
(2, '123', '202cb962ac59075b964b07152d234b70', 1),
(5, '111', 'c37bf859faf392800d739a41fe5af151', 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_category_college`
--

CREATE TABLE IF NOT EXISTS `b_category_college` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `college` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- 转存表中的数据 `b_category_college`
--

INSERT INTO `b_category_college` (`id`, `college`) VALUES
(10, '经管学院'),
(11, '信息学院'),
(12, '海洋学院'),
(13, '没有学院'),
(14, '11111');

-- --------------------------------------------------------

--
-- 表的结构 `b_category_grade`
--

CREATE TABLE IF NOT EXISTS `b_category_grade` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `grade` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `b_category_grade`
--

INSERT INTO `b_category_grade` (`id`, `grade`) VALUES
(16, '大一上'),
(17, '大一下'),
(18, '大二上'),
(19, '大二下'),
(20, '大三上'),
(21, '111');

-- --------------------------------------------------------

--
-- 表的结构 `b_category_major`
--

CREATE TABLE IF NOT EXISTS `b_category_major` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `major` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '未填写',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_feedback`
--

CREATE TABLE IF NOT EXISTS `b_feedback` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `email` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `b_feedback`
--

INSERT INTO `b_feedback` (`id`, `email`, `text`) VALUES
(1, '12321', '2312312312');

-- --------------------------------------------------------

--
-- 表的结构 `b_hot_goods`
--

CREATE TABLE IF NOT EXISTS `b_hot_goods` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_product` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=68 ;

--
-- 转存表中的数据 `b_hot_goods`
--

INSERT INTO `b_hot_goods` (`id`, `id_product`) VALUES
(54, 41),
(56, 42),
(57, 43),
(58, 44),
(59, 45),
(60, 46),
(61, 47),
(62, 48),
(63, 49),
(64, 50),
(65, 51),
(66, 52),
(67, 53);

-- --------------------------------------------------------

--
-- 表的结构 `b_mail`
--

CREATE TABLE IF NOT EXISTS `b_mail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `send` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `b_mail`
--

INSERT INTO `b_mail` (`id`, `mail`, `send`) VALUES
(3, 'tinytin@qq.com', 0),
(4, 'tinytin1@qq.com', 0);

-- --------------------------------------------------------

--
-- 表的结构 `b_order`
--

CREATE TABLE IF NOT EXISTS `b_order` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=32 ;

--
-- 转存表中的数据 `b_order`
--

INSERT INTO `b_order` (`id`, `b_id`, `b_num`, `b_address`, `b_phone`, `b_remark`, `b_date`, `b_time`, `b_ready`, `b_admin_remark`, `b_pay_method`) VALUES
(11, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '暂时没有备注', '货到付款'),
(12, 9, 1, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 1, '', '货到付款'),
(13, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(14, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(15, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(16, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(17, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 1, '备注', '货到付款'),
(18, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(19, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(20, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(21, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(22, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(23, 42, 1, '++', '', '', '2016-02-24', '11:41:33', 0, '', '货到付款'),
(24, 41, 2, '++', '', '', '2016-02-24', '11:41:33', 0, '', '货到付款'),
(25, 42, 1, '9+a89+222', '13262973189', '', '2016-02-24', '11:56:31', 0, '', '货到付款'),
(26, 41, 1, '9+a89+222', '13262973189', '', '2016-02-24', '11:56:31', 0, '', '货到付款'),
(27, 42, 4, '1+1+1', '13212344321', '', '2016-02-24', '12:00:29', 0, '', '货到付款'),
(28, 41, 1, '1+1+1', '13212344321', '', '2016-02-24', '12:00:29', 0, '', '货到付款'),
(29, 44, 1, '7+7+7', '13277779999', '', '2016-02-24', '12:54:47', 0, '', '货到付款'),
(30, 48, 1, '6+1+1', '13262973189', '', '2016-02-24', '13:24:20', 0, '', '货到付款'),
(31, 48, 1, '1+1+1', '13244446565', '', '2016-02-24', '13:25:16', 0, '', '货到付款');

-- --------------------------------------------------------

--
-- 表的结构 `b_our`
--

CREATE TABLE IF NOT EXISTS `b_our` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `text` varchar(140) COLLATE utf8_unicode_ci NOT NULL,
  `display` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `b_our`
--

INSERT INTO `b_our` (`id`, `text`, `display`) VALUES
(2, '风王若飞而额外热瓦尔', 0),
(3, '的四大四大撒大声地爱上大大声地啊实打实大', 0),
(4, '发送到发送到发送到从松岛枫松岛枫热尔娃儿娃儿', 0),
(5, '我们的动态哈哈哈哈哈', 0),
(7, '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', 0),
(8, '我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染我去额外确认废气污染', 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_product`
--

CREATE TABLE IF NOT EXISTS `b_product` (
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
  `b_hot` varchar(2) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `b_pic_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=57 ;

--
-- 转存表中的数据 `b_product`
--

INSERT INTO `b_product` (`id`, `b_name`, `b_publish`, `b_editor`, `b_isbn`, `b_price_new`, `b_price_old`, `b_price_show_new`, `b_price_show_old`, `b_stock_new`, `b_stock_old`, `b_hot`, `b_pic_name`) VALUES
(41, 'JavaScript高级程序设计（第3版）', '人民邮电出版社', '[美] Nicholas C. Zaka', '9787115275790', '99', '49', '3', '3.6', 999, 999, '否', '9787115275790.jpg'),
(42, '关于山本耀司的一切', '广西师范大学出版社', '（日）田口淑子', '9787549575336', '79', '39', '0', '0', 999, 999, '否', '9787549575336.jpg'),
(43, '秦汉名物丛考', '东方出版社', '王子今', '9787506084345', '68', '33', '0', '0', 999, 0, '否', '测试图片1.gif'),
(44, '让你的名字住进我的表白里', '北京联合出版有限公司', '肖爻悄悄', '9787550267275', '36', '17', '0', '0', 999, 999, '否', '9787550267275.jpg'),
(45, '余秋雨散文', '长江文艺出版社', '余秋雨', '9787535485724', '36', '17', '0', '0', 999, 999, '否', '9787535485724.jpg'),
(46, '独立日：用电影延长三倍生命', '生活•读书•新知三联书店 生活书店出版有限公司', '木卫二', '9787807681274', '48', '23', '0', '0', 999, 999, '否', '9787807681274.jpg'),
(47, '产品的视角：从热闹到门道', '机械工业出版社', '后显慧', '9787111525820', '69', '34', '0', '0', 999, 999, '否', '9787111525820.jpg'),
(48, '收山', '译林出版社', '常小琥', '9787544759427', '32', '15', '0', '0', 999, 999, '否', '9787544759427.jpg'),
(49, '有如走路的速度', '南海出版公司', '[日] 是枝裕和', '9787544281768', '39', '19', '0', '0', 999, 999, '否', '9787544281768.jpg'),
(50, '谋杀电视机', '四川文艺出版社', '大头马', '9787541142369', '36', '17', '0', '0', 999, 999, '否', '9787541142369.jpg'),
(51, '爱情和其他魔鬼', '南海出版公司', '[哥伦比亚] 加西亚·马尔克斯', '9787544278638', '35', '17', '0', '0', 999, 999, '否', '9787544278638.jpg'),
(52, '生命中最简单又最困难的事', '北京时代华文书局·阳光博客', '[美] 大卫·福斯特·华莱士,焉沁 绘', '9787569902921', '32', '15', '0', '0', 999, 999, '否', '9787569902921.jpg'),
(53, '再度觉醒', '三辉图书/外语教学与研究出版社', '[意] 普里莫·莱维(Primo Lev', '9787513567459', '39', '19', '0', '0', 999, 999, '否', '9787513567459.jpg'),
(55, '樱桃之远', '春风文艺出版社', '张悦然', '9787531327165', '23', '11', '0', '0', 999, 999, '否', '9787531327165.jpg'),
(56, '解忧杂货店', '南海出版公司', '(日)东野圭吾', '9787544270878', '39', '19', '0', '0', 999, 999, '否', '9787544270878.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_col_grade`
--

CREATE TABLE IF NOT EXISTS `b_rel_col_grade` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_category_col` int(5) NOT NULL,
  `id_category_grade` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=65 ;

--
-- 转存表中的数据 `b_rel_col_grade`
--

INSERT INTO `b_rel_col_grade` (`id`, `id_category_col`, `id_category_grade`) VALUES
(40, 8, 9),
(41, 5, 9),
(45, 6, 9),
(46, 7, 9),
(47, 10, 16),
(48, 11, 16),
(49, 12, 16),
(50, 10, 17),
(51, 11, 17),
(52, 12, 17),
(53, 10, 18),
(54, 11, 18),
(55, 12, 18),
(56, 10, 19),
(57, 11, 19),
(58, 12, 19),
(60, 10, 16),
(61, 11, 21),
(62, 12, 21),
(63, 13, 21),
(64, 14, 21);

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_maj_col`
--

CREATE TABLE IF NOT EXISTS `b_rel_maj_col` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_category_major` int(5) NOT NULL,
  `id_category_college` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=25 ;

--
-- 转存表中的数据 `b_rel_maj_col`
--

INSERT INTO `b_rel_maj_col` (`id`, `id_category_major`, `id_category_college`) VALUES
(19, 9, 10),
(20, 10, 11),
(21, 11, 12),
(22, 12, 10),
(23, 10, 11),
(24, 12, 11);

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_pro_maj`
--

CREATE TABLE IF NOT EXISTS `b_rel_pro_maj` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_product` int(5) NOT NULL,
  `id_category_major` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_sell`
--

CREATE TABLE IF NOT EXISTS `b_sell` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `b_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `b_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_time` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `b_ready` int(5) NOT NULL,
  `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=30 ;

--
-- 转存表中的数据 `b_sell`
--

INSERT INTO `b_sell` (`id`, `b_address`, `b_phone`, `b_date`, `b_time`, `b_remark`, `b_ready`, `b_admin_remark`) VALUES
(5, '8+i097+434', '13262976666', '2015-12-22', '18:43:11', '', 1, ''),
(6, '8+i097+434', '13262976666', '2015-12-21', '18:47:03', '', 0, ''),
(7, '1+1+1', '13267890098', '2015-12-22', '18:47:10', '', 1, ''),
(8, '1+1089+102', '13267890098', '2015-12-22', '18:47:49', '', 0, ''),
(9, '9小区+A077+434', '13262973189', '2015-12-22', '18:47:59', ' ', 0, ''),
(10, '7小区+A087+601', '13262973189', '2015-12-22', '18:50:20', '该用户没有填写备注', 1, ''),
(11, '7小区+A087+601', '13262973189', '2015-12-22', '18:51:12', '该用户没有填写备注', 0, ''),
(12, '7小区+A087+601', '13262973189', '2015-12-22', '18:51:25', '该用户没有填写备注', 0, ''),
(13, '7小区+A087+601', '13262973189', '2015-12-22', '18:51:34', '该用户没有填写备注', 0, ''),
(14, '7小区+A087+601', '13262973189', '2015-12-22', '18:52:59', '该用户没有填写备注', 0, ''),
(15, '一教+没有+没有', '12332112342', '2015-12-23', '21:03:19', '没有', 0, ''),
(16, '一教+没有+没有', '12332112342', '2015-12-23', '21:03:19', '没有', 0, ''),
(17, '7小区+A087+601', '13262973189', '2015-12-22', '18:52:59', '该用户没有填写备注', 0, ''),
(18, '8+i097+434', '13262976666', '2015-12-22', '18:43:11', '', 1, ''),
(19, '1+1+1', '13267890098', '2015-12-22', '18:47:10', '', 1, ''),
(20, '1+1+1', '13267890098', '2015-12-22', '18:47:10', '', 1, ''),
(21, '9小区+A077+434', '13262973189', '2015-12-22', '18:47:59', ' ', 0, ''),
(22, '8+i097+434', '13262976666', '2015-12-22', '18:43:11', '', 1, ''),
(23, '8+i097+434', '13262976666', '2015-12-22', '18:43:11', '', 1, ''),
(24, '8+i097+434', '13262976666', '2015-12-22', '18:43:11', '', 1, ''),
(25, '8+i097+434', '13262976666', '2015-12-22', '18:43:11', '', 1, ''),
(26, '9小区+A077+434', '13262973189', '2015-12-22', '18:47:59', ' 65465654645756756775685787876', 0, ''),
(27, '++', '', '2016-02-24', '11:23:46', '该用户没有填写备注', 0, ''),
(28, '++', '12332456545', '2016-02-24', '11:27:23', '该用户没有填写备注', 0, ''),
(29, '++', '12332112332', '2016-02-24', '11:28:16', '该用户没有填写备注', 0, '');

-- --------------------------------------------------------

--
-- 表的结构 `b_visited`
--

CREATE TABLE IF NOT EXISTS `b_visited` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `year` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mouth` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `day` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ip` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `browser` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=55 ;

--
-- 转存表中的数据 `b_visited`
--

INSERT INTO `b_visited` (`id`, `year`, `mouth`, `day`, `ip`, `browser`) VALUES
(4, '2016', '12', '23', '192.168.1.114', 'google'),
(5, '2015', '12', '23', '::1', 'google'),
(6, '2015', '12', '23', '::1', 'google'),
(7, '2015', '11', '23', '::1', 'google'),
(8, '2015', '12', '23', '::1', 'google'),
(9, '2015', '12', '23', '::1', 'google'),
(10, '2015', '12', '23', '::1', 'google'),
(11, '2015', '12', '23', '::1', 'google'),
(12, '2015', '12', '23', '::1', 'google'),
(13, '2015', '12', '23', '::1', 'google'),
(14, '2015', '12', '23', '::1', 'google'),
(15, '2015', '12', '23', '::1', 'google'),
(16, '2016', '01', '12', '127.0.0.1', 'google'),
(17, '2016', '01', '12', '127.0.0.1', 'google'),
(18, '2016', '02', '06', '127.0.0.1', 'google'),
(19, '2016', '02', '06', '127.0.0.1', 'google'),
(20, '2016', '02', '06', '127.0.0.1', 'google'),
(21, '2016', '02', '06', '127.0.0.1', 'google'),
(22, '2016', '02', '06', '127.0.0.1', 'google'),
(23, '2016', '02', '06', '127.0.0.1', 'google'),
(24, '2016', '02', '06', '127.0.0.1', 'google'),
(25, '2016', '02', '06', '127.0.0.1', 'google'),
(26, '2016', '02', '11', '127.0.0.1', 'google'),
(27, '2016', '02', '12', '127.0.0.1', 'Firefox'),
(28, '2016', '02', '12', '127.0.0.1', '其他'),
(29, '2016', '02', '13', '::1', 'google'),
(30, '2016', '02', '13', '::1', 'google'),
(31, '2016', '02', '14', '127.0.0.1', 'google'),
(32, '2016', '02', '14', '127.0.0.1', 'Firefox'),
(33, '2016', '02', '14', '127.0.0.1', 'Firefox'),
(34, '2016', '02', '14', '127.0.0.1', 'Firefox'),
(35, '2016', '02', '14', '127.0.0.1', 'Firefox'),
(36, '2016', '02', '14', '127.0.0.1', 'google'),
(37, '2016', '02', '14', '127.0.0.1', 'google'),
(38, '2016', '02', '14', '127.0.0.1', 'google'),
(39, '2016', '02', '14', '127.0.0.1', 'Firefox'),
(40, '2016', '02', '15', '192.168.1.105', 'google'),
(41, '2016', '02', '16', '192.168.1.105', 'google'),
(42, '2016', '02', '17', '192.168.1.105', 'google'),
(43, '2016', '02', '18', '192.168.1.105', 'google'),
(44, '2016', '02', '19', '::1', 'google'),
(45, '2016', '02', '20', '127.0.0.1', 'google'),
(46, '2016', '02', '20', '127.0.0.1', 'google'),
(47, '2016', '02', '20', '127.0.0.1', 'google'),
(48, '2016', '02', '23', '127.0.0.1', 'google'),
(49, '2016', '02', '23', '192.168.1.106', 'Firefox'),
(50, '2016', '02', '23', '192.168.1.106', 'Firefox'),
(51, '2016', '02', '23', '192.168.1.106', 'google'),
(52, '2016', '02', '24', '127.0.0.1', 'google'),
(53, '2016', '02', '24', '127.0.0.1', 'google'),
(54, '2016', '02', '24', '127.0.0.1', 'google');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
