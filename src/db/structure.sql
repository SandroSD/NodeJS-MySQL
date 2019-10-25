CREATE SCHEMA `homesservices` ;
USE `homesservices` ;

CREATE TABLE `tipo_usuario` (
  `id` BIGINT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `usuario` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `correo_electronico` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `tipo_usuario` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
	CONSTRAINT `fk_usuario_tipo_usuario` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipo_usuario` (`id`)
);
