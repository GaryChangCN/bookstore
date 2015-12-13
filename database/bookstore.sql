-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-12-12 10:05:14
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- 表的结构 `b_ad`
--

CREATE TABLE IF NOT EXISTS `b_ad` (
  `id` int(5) NOT NULL,
  `text` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `number` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_admin`
--

CREATE TABLE IF NOT EXISTS `b_admin` (
  `id` int(5) NOT NULL,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `power` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_category_college`
--

CREATE TABLE IF NOT EXISTS `b_category_college` (
  `id` int(5) NOT NULL,
  `college` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_category_grade`
--

CREATE TABLE IF NOT EXISTS `b_category_grade` (
  `id` int(5) NOT NULL,
  `grade` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_category_major`
--

CREATE TABLE IF NOT EXISTS `b_category_major` (
  `id` int(3) NOT NULL,
  `major` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '未填写'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_feedback`
--

CREATE TABLE IF NOT EXISTS `b_feedback` (
  `id` int(5) NOT NULL,
  `email` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text` varchar(60) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_hot_goods`
--

CREATE TABLE IF NOT EXISTS `b_hot_goods` (
  `id` int(5) NOT NULL,
  `id_product` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_order`
--

CREATE TABLE IF NOT EXISTS `b_order` (
  `id` int(5) NOT NULL,
  `b_id` int(5) NOT NULL,
  `b_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `b_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `d_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_time` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `b_ready` int(5) NOT NULL DEFAULT '0',
  `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `b_pay_method` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_our`
--

CREATE TABLE IF NOT EXISTS `b_our` (
  `id` int(5) NOT NULL,
  `text` varchar(140) COLLATE utf8_unicode_ci NOT NULL,
  `display` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_product`
--

CREATE TABLE IF NOT EXISTS `b_product` (
  `id` int(11) NOT NULL,
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
  `b_hot` int(5) NOT NULL DEFAULT '0',
  `b_pic_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_col_grade`
--

CREATE TABLE IF NOT EXISTS `b_rel_col_grade` (
  `id` int(5) NOT NULL,
  `id_category_col` int(5) NOT NULL,
  `id_category_grade` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_maj_col`
--

CREATE TABLE IF NOT EXISTS `b_rel_maj_col` (
  `id` int(5) NOT NULL,
  `id_category_major` int(5) NOT NULL,
  `id_category_college` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_rel_pro_maj`
--

CREATE TABLE IF NOT EXISTS `b_rel_pro_maj` (
  `id` int(5) NOT NULL,
  `id_product` int(5) NOT NULL,
  `id_category_major` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_sell`
--

CREATE TABLE IF NOT EXISTS `b_sell` (
  `id` int(5) NOT NULL,
  `b_address` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `b_phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_time` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `b_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `b_ready` int(5) NOT NULL,
  `b_admin_remark` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `b_visited`
--

CREATE TABLE IF NOT EXISTS `b_visited` (
  `id` int(5) NOT NULL,
  `year` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mouth` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `day` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `b_ad`
--
ALTER TABLE `b_ad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_admin`
--
ALTER TABLE `b_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_category_college`
--
ALTER TABLE `b_category_college`
  ADD PRIMARY KEY (`id`), ADD KEY `id` (`id`);

--
-- Indexes for table `b_category_grade`
--
ALTER TABLE `b_category_grade`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_category_major`
--
ALTER TABLE `b_category_major`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_feedback`
--
ALTER TABLE `b_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_hot_goods`
--
ALTER TABLE `b_hot_goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_order`
--
ALTER TABLE `b_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_our`
--
ALTER TABLE `b_our`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_product`
--
ALTER TABLE `b_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_rel_col_grade`
--
ALTER TABLE `b_rel_col_grade`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_rel_maj_col`
--
ALTER TABLE `b_rel_maj_col`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_rel_pro_maj`
--
ALTER TABLE `b_rel_pro_maj`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_sell`
--
ALTER TABLE `b_sell`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `b_visited`
--
ALTER TABLE `b_visited`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `b_ad`
--
ALTER TABLE `b_ad`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_admin`
--
ALTER TABLE `b_admin`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_category_college`
--
ALTER TABLE `b_category_college`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_category_grade`
--
ALTER TABLE `b_category_grade`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_category_major`
--
ALTER TABLE `b_category_major`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_feedback`
--
ALTER TABLE `b_feedback`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_hot_goods`
--
ALTER TABLE `b_hot_goods`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_order`
--
ALTER TABLE `b_order`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_our`
--
ALTER TABLE `b_our`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_product`
--
ALTER TABLE `b_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_rel_col_grade`
--
ALTER TABLE `b_rel_col_grade`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_rel_maj_col`
--
ALTER TABLE `b_rel_maj_col`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_rel_pro_maj`
--
ALTER TABLE `b_rel_pro_maj`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_sell`
--
ALTER TABLE `b_sell`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b_visited`
--
ALTER TABLE `b_visited`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
