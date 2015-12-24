-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2015-12-24 20:52:11
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
(19, '这里是卖书须知！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！', '', '19'),
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `b_category_major`
--

INSERT INTO `b_category_major` (`id`, `major`) VALUES
(9, '会计'),
(10, '信计'),
(11, '渔业养殖'),
(12, '计算机科学'),
(13, '111111');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=34 ;

--
-- 转存表中的数据 `b_hot_goods`
--

INSERT INTO `b_hot_goods` (`id`, `id_product`) VALUES
(21, 8),
(22, 9),
(23, 10),
(24, 11),
(25, 12),
(26, 13),
(27, 14),
(28, 15),
(29, 16),
(30, 17),
(31, 18),
(32, 19),
(33, 20);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `b_order`
--

INSERT INTO `b_order` (`id`, `b_id`, `b_num`, `b_address`, `b_phone`, `b_remark`, `b_date`, `b_time`, `b_ready`, `b_admin_remark`, `b_pay_method`) VALUES
(11, 10, 2, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款'),
(12, 9, 1, '9小区+A077+434', '0107898678', '', '2015-12-23', '16:05:54', 0, '', '货到付款');

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
(2, '风王若飞而额外热瓦尔', 0),
(3, '的四大四大撒大声地爱上大大声地啊实打实大', 1),
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=33 ;

--
-- 转存表中的数据 `b_product`
--

INSERT INTO `b_product` (`id`, `b_name`, `b_publish`, `b_editor`, `b_isbn`, `b_price_new`, `b_price_old`, `b_price_show_new`, `b_price_show_old`, `b_stock_new`, `b_stock_old`, `b_hot`, `b_pic_name`) VALUES
(8, '测试商品2q', '测试出本啊和', '没有', 'q1', '12', '8', '10', '6', 1, 0, '是', '测试图片2.gif'),
(9, '测试商品2w', '测试出本啊和', '没有', 'q2', '16', '15', '17', '', 1, 0, '是', '测试图片2.gif'),
(10, '测试商品2e', '测试出本啊和', '没有', 'q3', '13', '12', '', '14', 1, 0, '是', '测试图片2.gif'),
(11, '测试商品2r', '测试出本啊和', '没有', '77866723', ' ', '12', '', '', 1, 0, '否', '测试图片2.gif'),
(12, '测试商品2t', '测试出本啊和', '没有', 'q4', '78', '22', '  ', '', 1, 0, '是', '测试图片2.gif'),
(13, '测试商品2y', '测试出本啊和', '没有', 'q5', '12', '12', '', '', 1, 0, '是', '测试图片2.gif'),
(14, '测试商品2u', '测试出本啊和', '没有', 'q6', '99', '12', '', '', 1, 0, '否', '测试图片2.gif'),
(15, '测试商品2i', '测试出本啊和', '没有', 'q7', '12', '122', '', '', 1, 0, '否', '测试图片2.gif'),
(16, '测试商品2o', '测试出本啊和', '没有', 'q8', '423', '23', '', '', 1, 0, '否', '测试图片2.gif'),
(17, '测试商品2p', '测试出本啊和', '没有', 'q9', '54', '534', '', '', 1, 0, '是', '测试图片2.gif'),
(18, '测试商品2a', '测试出本啊和', '没有', 'w1', '43', '34', '', '', 1, 0, '否', '测试图片2.gif'),
(19, '测试商品2s', '测试出本啊和', '没有', 'w2', '65', '72', '', '', 1, 0, '是', '测试图片2.gif'),
(20, '测试商品2d', '测试出本啊和', '没有', 'w3', '12', '54', '', '', 1, 0, '是', '测试图片2.gif'),
(21, '测试商品2f', '测试出本啊和', '没有', 'w4', '21', '11', '', '', 1, 0, '否', '测试图片2.gif'),
(22, '测试商品2g', '测试出本啊和', '没有', 'w5', '12', '43', '', '', 1, 0, '否', '测试图片2.gif'),
(23, '测试商品2', 'w6', '没有', 'a1', '34', '12', '', '', 1, 0, '否', '测试图片2.gif'),
(24, '测试商品2', 'w7', '没有', 'a2', '21', '12', '32', '21', 1, 0, '否', '测试图片2.gif'),
(25, '测试商品2h', '测试出本啊和', '没有', 'a3', '12', '32', '32', '321', 1, 0, '否', '测试图片2.gif'),
(26, '测试商品2j', '测试出本啊和', '没有', 'aa4', '32', '12', '', '', 1, 0, '否', '测试图片2.gif'),
(27, '测试商品2j', '测试出本啊和', '没有', 'a5', '54', '43', '', '', 1, 0, '否', '测试图片2.gif'),
(28, '测试商品2k', '测试出本啊和', '没有', 'a6', '12', '12', '', '', 1, 0, '否', '测试图片2.gif'),
(29, '测试商品2l', '测试出本啊和', '没有', 'a7', '12', '21', '', '', 1, 0, '否', '测试图片2.gif'),
(30, '测试商品2z', '测试出本啊和', '没有', 'a8', '12', '', '', '', 1, 0, '是', '测试图片2.gif'),
(31, '测试商品2x', '测试出本啊和', '没有', 'a9', '12', '12', '', '', 1, 0, '否', '测试图片2.gif'),
(32, '测试商品2c', '测试出本啊和', '没有', 'd1', '12', '12', '', '', 1, 0, '否', '测试图片2.gif');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=107 ;

--
-- 转存表中的数据 `b_rel_pro_maj`
--

INSERT INTO `b_rel_pro_maj` (`id`, `id_product`, `id_category_major`) VALUES
(8, 7, 7),
(71, 8, 9),
(72, 9, 9),
(73, 10, 9),
(74, 11, 9),
(75, 12, 9),
(76, 13, 9),
(77, 14, 9),
(78, 15, 9),
(79, 16, 9),
(80, 17, 9),
(81, 18, 9),
(82, 19, 9),
(83, 20, 9),
(84, 21, 9),
(85, 22, 9),
(86, 9, 10),
(87, 10, 10),
(88, 15, 10),
(89, 16, 10),
(90, 20, 10),
(91, 22, 10),
(92, 23, 10),
(93, 25, 10),
(94, 28, 10),
(95, 14, 12),
(96, 19, 12),
(97, 21, 12),
(98, 25, 12),
(99, 9, 11),
(100, 14, 11),
(101, 21, 11),
(102, 23, 11),
(103, 24, 11),
(104, 25, 11),
(105, 26, 11),
(106, 28, 11);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

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
(15, '一教+没有+没有', '12332112342', '2015-12-23', '21:03:19', '没有', 0, '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

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
(15, '2015', '12', '23', '::1', 'google');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
