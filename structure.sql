CREATE TABLE `roles` (
    `id` varchar(50) NOT NULL,
    `name` varchar(50) NOT NULL,
    `description` varchar(255) NOT NULL,
    `activo` bit(1) NOT NULL DEFAULT b'1',
        PRIMARY KEY (`id`),
        CONSTRAINT `unique_roles_name` UNIQUE (`name`)
);

CREATE TABLE `permissions` (
    `permission` varchar(50) NOT NULL,
    `roles` varchar(50) NOT NULL,
        PRIMARY KEY (`permission`, `roles`),
        CONSTRAINT `permissions_roles` FOREIGN KEY (`roles`)
            REFERENCES `roles` (`id`)
);

CREATE TABLE `personas` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50) NOT NULL,
    `apellido` varchar(50) NOT NULL,
    `mail` varchar(50) NOT NULL,
    `clave` varchar(255) NOT NULL,
    `fecha_nacimiento` date NOT NULL,
    `direccion` varchar(100) DEFAULT NULL,
    `roles` varchar(50) NOT NULL,
    `activo` bit(1) NOT NULL DEFAULT b'1',
        PRIMARY KEY (`id`),
        CONSTRAINT `unique_personas_mail` UNIQUE (`mail`),
        CONSTRAINT `personas_roles` FOREIGN KEY (`roles`)
            REFERENCES `roles` (`id`)
);