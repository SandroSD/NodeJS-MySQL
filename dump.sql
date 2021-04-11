DROP TABLE IF EXISTS `personas`;

CREATE TABLE `personas` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50) NOT NULL,
    `apellido` varchar(50) NOT NULL,
    `fecha_nacimiento` date NOT NULL,
    `direccion` varchar(100) DEFAULT NULL,
    `activo` bit(1) NOT NULL DEFAULT b'1',
    PRIMARY KEY (`id`)
);

LOCK TABLES `personas` WRITE;

INSERT INTO `personas`
    VALUES  (1,'Roberto','Lorenzo','1991-03-21',NULL, '1'),
            (2,'Fulano','De Tal','1990-12-03','Calle 123', '0');

UNLOCK TABLES;