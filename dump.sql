DROP TABLE IF EXISTS `personas`;

CREATE TABLE `personas` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50) NOT NULL,
    `apellido` varchar(50) NOT NULL,
    `mail` varchar(50) NOT NULL,
    `clave` varchar(255) NOT NULL,
    `fecha_nacimiento` date NOT NULL,
    `direccion` varchar(100) DEFAULT NULL,
    `activo` bit(1) NOT NULL DEFAULT b'1',
        PRIMARY KEY (`id`),
        CONSTRAINT `unique_personas_mail` UNIQUE (`mail`)
);

LOCK TABLES `personas` WRITE;

INSERT INTO `personas`
    VALUES  (1, 'Roberto', 'Lorenzo', 'rlorenzo@mail.com', '$2b$10$Phid/SQ1seFysD5NyE0ppOdAPTXNj.T23sUknq4/np5XpIq5w2gsu', '1991-03-21', NULL, 1),
            (2, 'Fulano', 'De Tal', 'fdetal@mail.com', '$2b$10$Phid/SQ1seFysD5NyE0ppOdAPTXNj.T23sUknq4/np5XpIq5w2gsu', '1990-12-03', 'Calle 123', 0);

UNLOCK TABLES;