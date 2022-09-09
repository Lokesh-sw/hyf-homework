CREATE DATABASE `hyf-library`;

USE `hyf-library`;

-- Create data table
CREATE TABLE `students` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `first_name` varchar(100) NOT NULL ,
     `lastname` varchar(100) NOT NULL,
     `email` varchar(100) NOT NULL UNIQUE,
     `phone` int(10) NOT NULL
     );

CREATE TABLE `book` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `writer` varchar(255) NOT NULL,
    `date_published` datetime NOT NULL,
    `quantity` int(10) NOT NULL
    );

CREATE TABLE `register` (
    `book_id` int(10) unsigned NOT NULL,
    `student_id` int(10) unsigned NOT NULL,
    `name` varchar(255) NOT NULL,
    `writer` varchar(255) NOT NULL,
    `date_published` int(10) NOT NULL,
    `quantity` int(10) NOT NULL
    );
    
    INSERT INTO book (name, writer, date_published, quantity)
VALUES("creates ", "javascript", "2022-8-22 17:19:16", 3 
);