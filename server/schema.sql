CREATE DATABASE IF NOT EXISTS `chat`;

USE `chat`;

CREATE TABLE IF NOT EXISTS `messages` (
  `id` INTEGER AUTO_INCREMENT,
  `username` INTEGER NULL DEFAULT NULL,
  `text` TEXT NULL DEFAULT NULL,
  `roomname` VARCHAR(100) NULL DEFAULT NULL,
  `createdAt` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users(id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

