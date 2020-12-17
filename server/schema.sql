DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE `chat`;

USE `chat`;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER AUTO_INCREMENT,
  `username` INTEGER NULL DEFAULT NULL,
  `body` TEXT NULL DEFAULT NULL,
  `roomname` INTEGER NULL DEFAULT NULL,
  `createdAt` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER AUTO_INCREMENT,
  `roomname` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users(id);
ALTER TABLE messages ADD FOREIGN KEY (roomname) REFERENCES rooms(id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

