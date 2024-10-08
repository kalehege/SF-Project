-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2024 at 03:45 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sf_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'SF Campus', '2024-10-08 08:12:17', '2024-10-08 08:12:17');

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `answer` varchar(255) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `answer`, `is_correct`, `created_at`, `updated_at`) VALUES
(1, 1, 'Sample Answer 1 for Question 1', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(2, 1, 'Sample Answer 2 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(3, 1, 'Sample Answer 3 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(4, 1, 'Sample Answer 4 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(5, 2, 'Sample Answer 1 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(6, 2, 'Sample Answer 2 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(7, 2, 'Sample Answer 3 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(8, 2, 'Sample Answer 4 for Question 2', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(9, 3, 'Sample Answer 1 for Question 3', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(10, 3, 'Sample Answer 2 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(11, 3, 'Sample Answer 3 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(12, 3, 'Sample Answer 4 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(13, 4, 'Sample Answer 1 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(14, 4, 'Sample Answer 2 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(15, 4, 'Sample Answer 3 for Question 4', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(16, 4, 'Sample Answer 4 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(17, 5, 'Sample Answer 1 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(18, 5, 'Sample Answer 2 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(19, 5, 'Sample Answer 3 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(20, 5, 'Sample Answer 4 for Question 5', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(21, 6, 'Sample Answer 1 for Question 6', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(22, 6, 'Sample Answer 2 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(23, 6, 'Sample Answer 3 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(24, 6, 'Sample Answer 4 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(25, 7, 'Sample Answer 1 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(26, 7, 'Sample Answer 2 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(27, 7, 'Sample Answer 3 for Question 7', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(28, 7, 'Sample Answer 4 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(29, 8, 'Sample Answer 1 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(30, 8, 'Sample Answer 2 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(31, 8, 'Sample Answer 3 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(32, 8, 'Sample Answer 4 for Question 8', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(33, 9, 'Sample Answer 1 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(34, 9, 'Sample Answer 2 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(35, 9, 'Sample Answer 3 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(36, 9, 'Sample Answer 4 for Question 9', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(37, 10, 'Sample Answer 1 for Question 10', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(38, 10, 'Sample Answer 2 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(39, 10, 'Sample Answer 3 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(40, 10, 'Sample Answer 4 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(41, 11, 'Sample Answer 1 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(42, 11, 'Sample Answer 2 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(43, 11, 'Sample Answer 3 for Question 11', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(44, 11, 'Sample Answer 4 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(45, 12, 'Sample Answer 1 for Question 12', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(46, 12, 'Sample Answer 2 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(47, 12, 'Sample Answer 3 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(48, 12, 'Sample Answer 4 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(49, 13, 'Sample Answer 1 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(50, 13, 'Sample Answer 2 for Question 13', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(51, 13, 'Sample Answer 3 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(52, 13, 'Sample Answer 4 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(53, 14, 'Sample Answer 1 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(54, 14, 'Sample Answer 2 for Question 14', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(55, 14, 'Sample Answer 3 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(56, 14, 'Sample Answer 4 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(57, 15, 'Sample Answer 1 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(58, 15, 'Sample Answer 2 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(59, 15, 'Sample Answer 3 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(60, 15, 'Sample Answer 4 for Question 15', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(61, 16, 'Sample Answer 1 for Question 16', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(62, 16, 'Sample Answer 2 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(63, 16, 'Sample Answer 3 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(64, 16, 'Sample Answer 4 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(65, 17, 'Sample Answer 1 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(66, 17, 'Sample Answer 2 for Question 17', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(67, 17, 'Sample Answer 3 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(68, 17, 'Sample Answer 4 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(69, 18, 'Sample Answer 1 for Question 18', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(70, 18, 'Sample Answer 2 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(71, 18, 'Sample Answer 3 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(72, 18, 'Sample Answer 4 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(73, 19, 'Sample Answer 1 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(74, 19, 'Sample Answer 2 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(75, 19, 'Sample Answer 3 for Question 19', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(76, 19, 'Sample Answer 4 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(77, 20, 'Sample Answer 1 for Question 20', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(78, 20, 'Sample Answer 2 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(79, 20, 'Sample Answer 3 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(80, 20, 'Sample Answer 4 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(81, 21, 'Sample Answer 1 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(82, 21, 'Sample Answer 2 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(83, 21, 'Sample Answer 3 for Question 1', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(84, 21, 'Sample Answer 4 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(85, 22, 'Sample Answer 1 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(86, 22, 'Sample Answer 2 for Question 2', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(87, 22, 'Sample Answer 3 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(88, 22, 'Sample Answer 4 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(89, 23, 'Sample Answer 1 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(90, 23, 'Sample Answer 2 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(91, 23, 'Sample Answer 3 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(92, 23, 'Sample Answer 4 for Question 3', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(93, 24, 'Sample Answer 1 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(94, 24, 'Sample Answer 2 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(95, 24, 'Sample Answer 3 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(96, 24, 'Sample Answer 4 for Question 4', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(97, 25, 'Sample Answer 1 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(98, 25, 'Sample Answer 2 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(99, 25, 'Sample Answer 3 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(100, 25, 'Sample Answer 4 for Question 5', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(101, 26, 'Sample Answer 1 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(102, 26, 'Sample Answer 2 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(103, 26, 'Sample Answer 3 for Question 6', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(104, 26, 'Sample Answer 4 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(105, 27, 'Sample Answer 1 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(106, 27, 'Sample Answer 2 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(107, 27, 'Sample Answer 3 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(108, 27, 'Sample Answer 4 for Question 7', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(109, 28, 'Sample Answer 1 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(110, 28, 'Sample Answer 2 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(111, 28, 'Sample Answer 3 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(112, 28, 'Sample Answer 4 for Question 8', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(113, 29, 'Sample Answer 1 for Question 9', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(114, 29, 'Sample Answer 2 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(115, 29, 'Sample Answer 3 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(116, 29, 'Sample Answer 4 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(117, 30, 'Sample Answer 1 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(118, 30, 'Sample Answer 2 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(119, 30, 'Sample Answer 3 for Question 10', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(120, 30, 'Sample Answer 4 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(121, 31, 'Sample Answer 1 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(122, 31, 'Sample Answer 2 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(123, 31, 'Sample Answer 3 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(124, 31, 'Sample Answer 4 for Question 11', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(125, 32, 'Sample Answer 1 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(126, 32, 'Sample Answer 2 for Question 12', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(127, 32, 'Sample Answer 3 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(128, 32, 'Sample Answer 4 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(129, 33, 'Sample Answer 1 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(130, 33, 'Sample Answer 2 for Question 13', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(131, 33, 'Sample Answer 3 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(132, 33, 'Sample Answer 4 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(133, 34, 'Sample Answer 1 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(134, 34, 'Sample Answer 2 for Question 14', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(135, 34, 'Sample Answer 3 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(136, 34, 'Sample Answer 4 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(137, 35, 'Sample Answer 1 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(138, 35, 'Sample Answer 2 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(139, 35, 'Sample Answer 3 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(140, 35, 'Sample Answer 4 for Question 15', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(141, 36, 'Sample Answer 1 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(142, 36, 'Sample Answer 2 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(143, 36, 'Sample Answer 3 for Question 16', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(144, 36, 'Sample Answer 4 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(145, 37, 'Sample Answer 1 for Question 17', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(146, 37, 'Sample Answer 2 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(147, 37, 'Sample Answer 3 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(148, 37, 'Sample Answer 4 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(149, 38, 'Sample Answer 1 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(150, 38, 'Sample Answer 2 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(151, 38, 'Sample Answer 3 for Question 18', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(152, 38, 'Sample Answer 4 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(153, 39, 'Sample Answer 1 for Question 19', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(154, 39, 'Sample Answer 2 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(155, 39, 'Sample Answer 3 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(156, 39, 'Sample Answer 4 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(157, 40, 'Sample Answer 1 for Question 20', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(158, 40, 'Sample Answer 2 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(159, 40, 'Sample Answer 3 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(160, 40, 'Sample Answer 4 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(161, 41, 'Sample Answer 1 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(162, 41, 'Sample Answer 2 for Question 1', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(163, 41, 'Sample Answer 3 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(164, 41, 'Sample Answer 4 for Question 1', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(165, 42, 'Sample Answer 1 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(166, 42, 'Sample Answer 2 for Question 2', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(167, 42, 'Sample Answer 3 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(168, 42, 'Sample Answer 4 for Question 2', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(169, 43, 'Sample Answer 1 for Question 3', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(170, 43, 'Sample Answer 2 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(171, 43, 'Sample Answer 3 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(172, 43, 'Sample Answer 4 for Question 3', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(173, 44, 'Sample Answer 1 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(174, 44, 'Sample Answer 2 for Question 4', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(175, 44, 'Sample Answer 3 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(176, 44, 'Sample Answer 4 for Question 4', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(177, 45, 'Sample Answer 1 for Question 5', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(178, 45, 'Sample Answer 2 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(179, 45, 'Sample Answer 3 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(180, 45, 'Sample Answer 4 for Question 5', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(181, 46, 'Sample Answer 1 for Question 6', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(182, 46, 'Sample Answer 2 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(183, 46, 'Sample Answer 3 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(184, 46, 'Sample Answer 4 for Question 6', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(185, 47, 'Sample Answer 1 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(186, 47, 'Sample Answer 2 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(187, 47, 'Sample Answer 3 for Question 7', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(188, 47, 'Sample Answer 4 for Question 7', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(189, 48, 'Sample Answer 1 for Question 8', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(190, 48, 'Sample Answer 2 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(191, 48, 'Sample Answer 3 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(192, 48, 'Sample Answer 4 for Question 8', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(193, 49, 'Sample Answer 1 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(194, 49, 'Sample Answer 2 for Question 9', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(195, 49, 'Sample Answer 3 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(196, 49, 'Sample Answer 4 for Question 9', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(197, 50, 'Sample Answer 1 for Question 10', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(198, 50, 'Sample Answer 2 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(199, 50, 'Sample Answer 3 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(200, 50, 'Sample Answer 4 for Question 10', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(201, 51, 'Sample Answer 1 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(202, 51, 'Sample Answer 2 for Question 11', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(203, 51, 'Sample Answer 3 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(204, 51, 'Sample Answer 4 for Question 11', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(205, 52, 'Sample Answer 1 for Question 12', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(206, 52, 'Sample Answer 2 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(207, 52, 'Sample Answer 3 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(208, 52, 'Sample Answer 4 for Question 12', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(209, 53, 'Sample Answer 1 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(210, 53, 'Sample Answer 2 for Question 13', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(211, 53, 'Sample Answer 3 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(212, 53, 'Sample Answer 4 for Question 13', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(213, 54, 'Sample Answer 1 for Question 14', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(214, 54, 'Sample Answer 2 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(215, 54, 'Sample Answer 3 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(216, 54, 'Sample Answer 4 for Question 14', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(217, 55, 'Sample Answer 1 for Question 15', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(218, 55, 'Sample Answer 2 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(219, 55, 'Sample Answer 3 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(220, 55, 'Sample Answer 4 for Question 15', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(221, 56, 'Sample Answer 1 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(222, 56, 'Sample Answer 2 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(223, 56, 'Sample Answer 3 for Question 16', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(224, 56, 'Sample Answer 4 for Question 16', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(225, 57, 'Sample Answer 1 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(226, 57, 'Sample Answer 2 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(227, 57, 'Sample Answer 3 for Question 17', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(228, 57, 'Sample Answer 4 for Question 17', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(229, 58, 'Sample Answer 1 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(230, 58, 'Sample Answer 2 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(231, 58, 'Sample Answer 3 for Question 18', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(232, 58, 'Sample Answer 4 for Question 18', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(233, 59, 'Sample Answer 1 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(234, 59, 'Sample Answer 2 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(235, 59, 'Sample Answer 3 for Question 19', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(236, 59, 'Sample Answer 4 for Question 19', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(237, 60, 'Sample Answer 1 for Question 20', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(238, 60, 'Sample Answer 2 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(239, 60, 'Sample Answer 3 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(240, 60, 'Sample Answer 4 for Question 20', 0, '2024-10-08 08:12:18', '2024-10-08 08:12:18');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `assign_user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `description`, `assign_user_id`, `created_at`, `updated_at`) VALUES
(1, 'Computer Science', 'Computer Science Course', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(2, 'Mathematics', 'Mathematics Course', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(3, 'Physics', 'Physics Course', 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18');

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `attempt_count` varchar(255) NOT NULL,
  `assign_user_id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `name`, `description`, `start_date`, `end_date`, `attempt_count`, `assign_user_id`, `course_id`, `created_at`, `updated_at`) VALUES
(1, 'Mid Term Exam', 'This is the midterm exam.', '2024-10-13 13:42:18', '2024-10-15 13:42:18', '3', 2, 1, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(2, 'Final Exam', 'This is the final exam.', '2024-10-23 13:42:18', '2024-10-25 13:42:18', '2', 2, 2, '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(3, 'Quiz 1', 'This is the first quiz.', '2024-10-10 13:42:18', '2024-10-11 13:42:18', '1', 2, 3, '2024-10-08 08:12:18', '2024-10-08 08:12:18');

-- --------------------------------------------------------

--
-- Table structure for table `exam_attempts`
--

CREATE TABLE `exam_attempts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `attempt_count` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_results`
--

CREATE TABLE `exam_results` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `score` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2020_01_01_000001_create_password_resets_table', 1),
(3, '2020_01_01_000002_create_failed_jobs_table', 1),
(4, '2020_01_01_000003_create_accounts_table', 1),
(5, '2020_01_01_000004_create_users_table', 1),
(6, '2024_04_02_000000_add_expires_at_to_personal_access_tokens_table', 1),
(7, '2024_04_02_000000_rename_password_resets_table', 1),
(8, '2024_10_05_130212_create_courses_table', 1),
(9, '2024_10_05_135813_create_exams_table', 1),
(10, '2024_10_05_210416_create_questions_table', 1),
(11, '2024_10_05_225851_create_answers_table', 1),
(12, '2024_10_05_232230_create_student_courses_table', 1),
(13, '2024_10_06_012329_create_student_answers_table', 1),
(14, '2024_10_06_021555_create_exam_attempts_table', 1),
(15, '2024_10_06_024809_create_exam_results_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `exam_id`, `question`, `created_at`, `updated_at`) VALUES
(1, 1, 'Sample Question 1 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(2, 1, 'Sample Question 2 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(3, 1, 'Sample Question 3 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(4, 1, 'Sample Question 4 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(5, 1, 'Sample Question 5 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(6, 1, 'Sample Question 6 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(7, 1, 'Sample Question 7 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(8, 1, 'Sample Question 8 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(9, 1, 'Sample Question 9 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(10, 1, 'Sample Question 10 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(11, 1, 'Sample Question 11 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(12, 1, 'Sample Question 12 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(13, 1, 'Sample Question 13 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(14, 1, 'Sample Question 14 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(15, 1, 'Sample Question 15 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(16, 1, 'Sample Question 16 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(17, 1, 'Sample Question 17 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(18, 1, 'Sample Question 18 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(19, 1, 'Sample Question 19 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(20, 1, 'Sample Question 20 for Mid Term Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(21, 2, 'Sample Question 1 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(22, 2, 'Sample Question 2 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(23, 2, 'Sample Question 3 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(24, 2, 'Sample Question 4 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(25, 2, 'Sample Question 5 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(26, 2, 'Sample Question 6 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(27, 2, 'Sample Question 7 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(28, 2, 'Sample Question 8 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(29, 2, 'Sample Question 9 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(30, 2, 'Sample Question 10 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(31, 2, 'Sample Question 11 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(32, 2, 'Sample Question 12 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(33, 2, 'Sample Question 13 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(34, 2, 'Sample Question 14 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(35, 2, 'Sample Question 15 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(36, 2, 'Sample Question 16 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(37, 2, 'Sample Question 17 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(38, 2, 'Sample Question 18 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(39, 2, 'Sample Question 19 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(40, 2, 'Sample Question 20 for Final Exam', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(41, 3, 'Sample Question 1 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(42, 3, 'Sample Question 2 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(43, 3, 'Sample Question 3 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(44, 3, 'Sample Question 4 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(45, 3, 'Sample Question 5 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(46, 3, 'Sample Question 6 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(47, 3, 'Sample Question 7 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(48, 3, 'Sample Question 8 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(49, 3, 'Sample Question 9 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(50, 3, 'Sample Question 10 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(51, 3, 'Sample Question 11 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(52, 3, 'Sample Question 12 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(53, 3, 'Sample Question 13 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(54, 3, 'Sample Question 14 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(55, 3, 'Sample Question 15 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(56, 3, 'Sample Question 16 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(57, 3, 'Sample Question 17 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(58, 3, 'Sample Question 18 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(59, 3, 'Sample Question 19 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18'),
(60, 3, 'Sample Question 20 for Quiz 1', '2024-10-08 08:12:18', '2024-10-08 08:12:18');

-- --------------------------------------------------------

--
-- Table structure for table `student_answers`
--

CREATE TABLE `student_answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `answer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_courses`
--

CREATE TABLE `student_courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` int(11) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `owner` varchar(255) NOT NULL DEFAULT '3',
  `type` varchar(255) NOT NULL DEFAULT '3',
  `photo` varchar(100) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `account_id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `owner`, `type`, `photo`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Super', 'Admin', 'admin@example.com', '2024-10-08 08:12:17', '$2y$12$KhAmDrGT65FgoQ0xx7bYoeJb0p4QOOhuLqN2wC4Py8BmtvgWUSSMm', '1', 'admin', NULL, 'J3RozAa1sb', '2024-10-08 08:12:17', '2024-10-08 08:12:17', NULL),
(2, 1, 'Ms', 'Lecture', 'lecture@example.com', '2024-10-08 08:12:17', '$2y$12$jqNCKxynjNFQHnWnAJ61qOhwvuuf8UmkBpSqYMef62HyGkGqisd6G', '2', 'lecture', NULL, 'V8fhAdGjsG', '2024-10-08 08:12:17', '2024-10-08 08:12:17', NULL),
(3, 1, 'Mr', 'Student', 'student@example.com', '2024-10-08 08:12:17', '$2y$12$8nI.a4r7Ce/99XwIZGYxy.qOB9GpoMK/dChdV.xKDN9J6/.QoiWlm', '3', 'student', NULL, 'TEvfhW2pz3', '2024-10-08 08:12:18', '2024-10-08 08:12:18', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answers_question_id_index` (`question_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_assign_user_id_index` (`assign_user_id`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exams_assign_user_id_index` (`assign_user_id`),
  ADD KEY `exams_course_id_index` (`course_id`);

--
-- Indexes for table `exam_attempts`
--
ALTER TABLE `exam_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exam_attempts_student_id_foreign` (`student_id`),
  ADD KEY `exam_attempts_exam_id_foreign` (`exam_id`);

--
-- Indexes for table `exam_results`
--
ALTER TABLE `exam_results`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exam_results_student_id_foreign` (`student_id`),
  ADD KEY `exam_results_exam_id_foreign` (`exam_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_exam_id_index` (`exam_id`);

--
-- Indexes for table `student_answers`
--
ALTER TABLE `student_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_answers_student_id_index` (`student_id`),
  ADD KEY `student_answers_exam_id_index` (`exam_id`),
  ADD KEY `student_answers_question_id_index` (`question_id`),
  ADD KEY `student_answers_answer_id_index` (`answer_id`);

--
-- Indexes for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_courses_student_id_index` (`student_id`),
  ADD KEY `student_courses_course_id_index` (`course_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_account_id_index` (`account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `exam_attempts`
--
ALTER TABLE `exam_attempts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam_results`
--
ALTER TABLE `exam_results`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `student_answers`
--
ALTER TABLE `student_answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_courses`
--
ALTER TABLE `student_courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_assign_user_id_foreign` FOREIGN KEY (`assign_user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `exams`
--
ALTER TABLE `exams`
  ADD CONSTRAINT `exams_assign_user_id_foreign` FOREIGN KEY (`assign_user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `exams_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `exam_attempts`
--
ALTER TABLE `exam_attempts`
  ADD CONSTRAINT `exam_attempts_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `exam_attempts_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `exam_results`
--
ALTER TABLE `exam_results`
  ADD CONSTRAINT `exam_results_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `exam_results_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`);

--
-- Constraints for table `student_answers`
--
ALTER TABLE `student_answers`
  ADD CONSTRAINT `student_answers_answer_id_foreign` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`),
  ADD CONSTRAINT `student_answers_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`),
  ADD CONSTRAINT `student_answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  ADD CONSTRAINT `student_answers_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD CONSTRAINT `student_courses_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `student_courses_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
