-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2015-12-12 15:31:26
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
  `text` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `number` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_admin`
--

CREATE TABLE IF NOT EXISTS `b_admin` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `power` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_category_college`
--

CREATE TABLE IF NOT EXISTS `b_category_college` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `college` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_category_grade`
--

CREATE TABLE IF NOT EXISTS `b_category_grade` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `garde` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_hot_goods`
--

CREATE TABLE IF NOT EXISTS `b_hot_goods` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_product` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
  `d_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_time` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `b_ready` int(5) NOT NULL DEFAULT '0',
  `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `b_pay_method` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_our`
--

CREATE TABLE IF NOT EXISTS `b_our` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `text` varchar(140) COLLATE utf8_unicode_ci NOT NULL,
  `display` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
  `b_price_show` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `b_price_discount` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '10',
  `b_stock_new` int(5) NOT NULL,
  `b_stock_old` int(5) NOT NULL,
  `b_hot` int(5) NOT NULL DEFAULT '0',
  `b_pic_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_col_grade`
--

CREATE TABLE IF NOT EXISTS `b_rel_col_grade` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_category_col` int(5) NOT NULL,
  `id_category_grade` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_maj_col`
--

CREATE TABLE IF NOT EXISTS `b_rel_maj_col` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `id_category_major` int(5) NOT NULL,
  `id_category_college` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

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
