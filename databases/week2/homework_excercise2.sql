CREATE DATABASE `school`;

USE `school`;

-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE `class` (
`id` int(10) unsigned NOT NULL auto_increment PRIMARY KEY,
`name` CHAR(20) NOT NULL,
`begin` DATETIME NOT NULL,
`end` DATETIME NOT NULL);


-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE `students` (
`id` int(10) unsigned NOT NULL auto_increment PRIMARY KEY,
`name` varchar(20) NOT NULL,
`email` varchar(50) NOT NULL,
`phone` int(10) unsigned NOT NULL,
`class_id` int(10) unsigned NOT NULL);


-- Create an index on the name column of the student table.

CREATE INDEX idx_student
ON students (name);


-- Add a new column to the class table named status which can only have the following values: 
-- not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class 
ADD status 
ENUM("not-started", "ongoing", "finished") NOT NULL
;