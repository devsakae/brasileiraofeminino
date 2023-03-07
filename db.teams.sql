CREATE DATABASE  IF NOT EXISTS `BRASILEIRAO_FEMININO` ;
USE `BRASILEIRAO_FEMININO`;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;

CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Insert values for table `teams`
--

INSERT INTO `teams` VALUES
  (1,'Avaí/Kindermann'),
  (2,'Athletico-PR'),
  (3,'Atlético-MG'),
  (4,'Bahia'),
  (5,'Ceará'),
  (6,'Corinthians'),
  (7,'Cruzeiro'),
  (8,'Ferroviária'),
  (9,'Flamengo'),
  (10,'Grêmio'),
  (11,'Internacional'),
  (12,'Palmeiras'),
  (13,'Real Ariquemes'),
  (14,'Real Brasília'),
  (15,'Santos'),
  (16,'São Paulo');

DROP TABLE IF EXISTS `matches`;

CREATE TABLE `matches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `home_team_id` int NOT NULL,
  `home_team_goals` int NOT NULL,
  `away_team_id` int NOT NULL,
  `away_team_goals` int NOT NULL,
  `in_progress` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `home_team_id` (`home_team_id`),
  KEY `away_team_id` (`away_team_id`),
  CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`home_team_id`) REFERENCES `teams` (`id`),
  CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`away_team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `matches` VALUES
  (1,15,3,9,0,0),(2,6,14,5,0,0),(3,11,2,2,1,0),(4,16,1,4,1,0),(5,7,1,10,1,0),(6,12,9,13,0,0),(7,1,2,14,5,0),(8,3,2,8,4,0)
  (9,5,0,16,2,0),(10,2,1,15,1,0),(11,4,2,7,3,0),(12,8,2,11,1,0),(13,13,0,6,6,0),(14,14,0,12,3,0),(15,9,3,1,0,0),(16,10,2,3,1,0);

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Insert values for table `users`
--

LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES 
  (1,'Admin','admin','admin@admin.com','$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'),
  (2,'User','user','user@user.com','$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO');
