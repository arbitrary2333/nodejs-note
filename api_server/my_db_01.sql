-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2022-07-13 11:52:59
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `my_db_01`
--

-- --------------------------------------------------------

--
-- 表的结构 `ev_articles`
--

CREATE TABLE `ev_articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `cover_img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pub_date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT '0',
  `cate_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `ev_articles`
--

INSERT INTO `ev_articles` (`id`, `title`, `content`, `cover_img`, `pub_date`, `state`, `is_delete`, `cate_id`, `author_id`) VALUES
(1, '科技是第一生产力', '重视科技。。。', '\\uploads\\b080c8c30a2cb8fc8d0260f95729a559', '2022-07-12 15:48:03.126', '草稿', 0, 1, 5);

-- --------------------------------------------------------

--
-- 表的结构 `ev_article_cate`
--

CREATE TABLE `ev_article_cate` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '数据是否被标记删除：0没有被删除，1被删除'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `ev_article_cate`
--

INSERT INTO `ev_article_cate` (`id`, `name`, `alias`, `is_delete`) VALUES
(1, '科技', 'KeJi', 0),
(2, '历史', 'LiShi', 0),
(3, '体育', 'TiYu', 1);

-- --------------------------------------------------------

--
-- 表的结构 `ev_users`
--

CREATE TABLE `ev_users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nickname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_pic` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `ev_users`
--

INSERT INTO `ev_users` (`id`, `username`, `password`, `nickname`, `email`, `user_pic`) VALUES
(5, 'liulonghui', '$2a$10$pzsG5Fi1Mkneq8SU/G.lc.65qzPcRAPvrFr9KaYzNP0YNNXPQQEzW', '柳龙辉', '1652877664@qq.com', 'data:image/png;base64,VE9PTUFOWVNFQ1JFVFM='),
(6, 'piaoyansong', '$2a$10$fISTYTuzzNFHsudT7NSCG.GaWU.NoVdrlUKygLHHrS90b6wuCyJiW', NULL, NULL, NULL),
(8, 'Jack', '$2a$10$AvxD5oy9Mp9dBQHoTuO7q.hY4fpV1ngeXeInkxVRjNKPpAkDhwMLe', NULL, NULL, NULL),
(10, 'zhangsan', '$2a$10$yR2.nufH3p2aCrnzQWJ/eeLm3cuRJqDZKofE4SX7MQWxXiWY9laNe', NULL, NULL, NULL);

--
-- 转储表的索引
--

--
-- 表的索引 `ev_articles`
--
ALTER TABLE `ev_articles`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `ev_article_cate`
--
ALTER TABLE `ev_article_cate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`),
  ADD UNIQUE KEY `name` (`name`);

--
-- 表的索引 `ev_users`
--
ALTER TABLE `ev_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ev_articles`
--
ALTER TABLE `ev_articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `ev_article_cate`
--
ALTER TABLE `ev_article_cate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `ev_users`
--
ALTER TABLE `ev_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
