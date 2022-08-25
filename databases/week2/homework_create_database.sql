CREATE DATABASE `hyf-library`;

USE `hyf-library`;

-- Create data table
CREATE TABLE `students` (
    `student_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `first_name` varchar(100) NOT NULL,
     `lastname` varchar(100) NOT NULL,
     `email` varchar(100) NOT NULL,
     `phone` int(10) NOT NULL
     );

CREATE TABLE `book` (
    `book_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `writer` varchar(255) NOT NULL,
    `date_published` int(10) NOT NULL,
    `quantity` int(10) NOT NULL
    );

CREATE TABLE `register` (
    `book_id` int(10) unsigned,
    `name` varchar(255) NOT NULL,
    `writer` varchar(255) NOT NULL,
    `date_published` int(10) NOT NULL,
    `quantity` int(10) NOT NULL
    );