-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2015-12-21 01:11:34
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- 转存表中的数据 `b_ad`
--

INSERT INTO `b_ad` (`id`, `text`, `type`, `number`) VALUES
(1, '测试图片1.gif', '', '1'),
(2, '测试图片2.gif', '', '2'),
(3, '', '', '3'),
(4, '', '', '4'),
(5, '', '', '5'),
(6, '', '', '6'),
(7, '标题', '', '7'),
(8, '', '', '8'),
(9, '', '', '9'),
(10, '', '', '10'),
(11, '', '', '11'),
(12, '', '', '12'),
(13, '1244324', '', '13'),
(14, '', '', '14'),
(15, '', '', '15'),
(16, '', '', '16'),
(17, '', '', '17'),
(18, '', '', '18'),
(19, '', '', '19'),
(20, '', '', '20'),
(21, '', '', '21'),
(22, ' ', '', '22'),
(23, ' ', '', '23'),
(24, ' ', '', '24'),
(25, ' ', '', '25');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `b_admin`
--

INSERT INTO `b_admin` (`id`, `name`, `password`, `power`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 0),
(2, '123', '202cb962ac59075b964b07152d234b70', 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_category_college`
--

CREATE TABLE IF NOT EXISTS `b_category_college` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `college` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `b_category_college`
--

INSERT INTO `b_category_college` (`id`, `college`) VALUES
(5, '信息学院'),
(6, '食品学院'),
(7, '经管学院'),
(8, '海洋生命学院');

-- --------------------------------------------------------

--
-- 表的结构 `b_category_grade`
--

CREATE TABLE IF NOT EXISTS `b_category_grade` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `grade` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `b_category_grade`
--

INSERT INTO `b_category_grade` (`id`, `grade`) VALUES
(9, '大一上'),
(10, '大一下'),
(11, '大二上'),
(12, '大三上');

-- --------------------------------------------------------

--
-- 表的结构 `b_category_major`
--

CREATE TABLE IF NOT EXISTS `b_category_major` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `major` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '未填写',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `b_category_major`
--

INSERT INTO `b_category_major` (`id`, `major`) VALUES
(4, '信息与计算科学'),
(5, '计算机科学'),
(6, '生物工程'),
(7, '会计学');

-- --------------------------------------------------------

--
-- 表的结构 `b_discount`
--

CREATE TABLE IF NOT EXISTS `b_discount` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `discount_old` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `discount_new` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `b_discount`
--

INSERT INTO `b_discount` (`id`, `discount_old`, `discount_new`) VALUES
(1, '0', '0.6');

-- --------------------------------------------------------

--
-- 表的结构 `b_feedback`
--

CREATE TABLE IF NOT EXISTS `b_feedback` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `email` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_hot_goods`
--

CREATE TABLE IF NOT EXISTS `b_hot_goods` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_product` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `b_hot_goods`
--

INSERT INTO `b_hot_goods` (`id`, `id_product`) VALUES
(7, 8);

-- --------------------------------------------------------

--
-- 表的结构 `b_order`
--

CREATE TABLE IF NOT EXISTS `b_order` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `b_id` int(5) NOT NULL,
  `b_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `b_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `b_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_time` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `b_ready` int(5) NOT NULL DEFAULT '0',
  `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `b_pay_method` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `b_order`
--

INSERT INTO `b_order` (`id`, `b_id`, `b_address`, `b_phone`, `b_remark`, `b_date`, `b_time`, `b_ready`, `b_admin_remark`, `b_pay_method`) VALUES
(1, 12, '12', '13262973189', '1223423143242314', '2015-12-19', '12', 1, '12423434324312', 1),
(2, 12, '12', '13262973189', '的冯绍峰多岁的', '2015-12-19', '12', 1, '12423434324312', 1),
(3, 12, '12', '13262973189', '4吧v办发噶撒打算冉求未对额', '2015-12-20', '12', 0, '12423434324312', 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_our`
--

CREATE TABLE IF NOT EXISTS `b_our` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `text` varchar(140) COLLATE utf8_unicode_ci NOT NULL,
  `display` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `b_our`
--

INSERT INTO `b_our` (`id`, `text`, `display`) VALUES
(2, '风王若飞而额外热瓦尔', 1),
(3, '的四大四大撒大声地爱上大大声地啊实打实大', 0),
(4, '发送到发送到发送到从松岛枫松岛枫热尔娃儿娃儿', 0),
(5, '我们的动态哈哈哈哈哈', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `b_product`
--

INSERT INTO `b_product` (`id`, `b_name`, `b_publish`, `b_editor`, `b_isbn`, `b_price_new`, `b_price_old`, `b_price_show_new`, `b_price_show_old`, `b_stock_new`, `b_stock_old`, `b_hot`, `b_pic_name`) VALUES
(7, '测试书本', '', '', '00-00-0000', '', '', '', '', 0, 0, '是', '测试图片1.gif'),
(8, '测试商品2', '测试出本啊和', '没有', '778667', '', '', '', '', 1, 0, '否', '测试图片2.gif');

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_col_grade`
--

CREATE TABLE IF NOT EXISTS `b_rel_col_grade` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_category_col` int(5) NOT NULL,
  `id_category_grade` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=47 ;

--
-- 转存表中的数据 `b_rel_col_grade`
--

INSERT INTO `b_rel_col_grade` (`id`, `id_category_col`, `id_category_grade`) VALUES
(38, 8, 11),
(39, 7, 10),
(40, 8, 9),
(41, 5, 9),
(42, 6, 12),
(44, 8, 12),
(45, 6, 9),
(46, 7, 9);

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_maj_col`
--

CREATE TABLE IF NOT EXISTS `b_rel_maj_col` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_category_major` int(5) NOT NULL,
  `id_category_college` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

--
-- 转存表中的数据 `b_rel_maj_col`
--

INSERT INTO `b_rel_maj_col` (`id`, `id_category_major`, `id_category_college`) VALUES
(11, 4, 5),
(12, 5, 5),
(13, 6, 6),
(14, 7, 7),
(15, 7, 8),
(16, 6, 8),
(17, 5, 6),
(18, 6, 6);

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_pro_maj`
--

CREATE TABLE IF NOT EXISTS `b_rel_pro_maj` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_product` int(5) NOT NULL,
  `id_category_major` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `b_rel_pro_maj`
--

INSERT INTO `b_rel_pro_maj` (`id`, `id_product`, `id_category_major`) VALUES
(7, 7, 6),
(8, 7, 7);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_visited`
--

CREATE TABLE IF NOT EXISTS `b_visited` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `year` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mouth` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `day` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
