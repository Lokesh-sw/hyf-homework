CREATE DATABASE `mealSharing`;

USE `mealSharing`;

CREATE TABLE `Meal` (
     `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `title` varchar(255) NOT NULL,
     `description` text NULL DEFAULT NULL,
     `location` varchar(255) NOT NULL,
     `when` DATETIME NOT NULL,
     `max_reservation` int(10) NOT NULL,
     `price` DECIMAL(19, 2) NOT NULL,
     `created_date` DATE NULL DEFAULT NULL
 );

 CREATE TABLE `reservation` (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   `number_of_guests` INT(10) NOT NULL, 
   `meal_id` INT(10) UNSIGNED NOT NULL, 
   `created_date` DATE NOT NULL, 
   `contact_phonenumber` VARCHAR(255) NOT NULL, 
   `contact_name` VARCHAR(255) NOT NULL, 
   `contact_email` VARCHAR(255) NOT NULL, 
   CONSTRAINT `fk_meal` FOREIGN KEY (`Meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
 );

CREATE TABLE `Review` (
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
     `title` varchar(255) NOT NULL,
     `description` text NULL DEFAULT NULL,
     `meal_id` int(10) unsigned NOT NULL,
     `stars` int(10) NOT NULL,
     `created_date` DATE NULL DEFAULT NULL,
     CONSTRAINT `fk_review_meal` FOREIGN KEY (`Meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 );
