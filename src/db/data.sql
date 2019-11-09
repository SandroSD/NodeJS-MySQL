INSERT INTO `tipo_usuario` (`id`, `nombre`) VALUES ('1', 'ADMINISTRADOR');
INSERT INTO `tipo_usuario` (`id`, `nombre`) VALUES ('2', 'USUARIO');

INSERT INTO `usuario` (`nombre`, `apellido`, `fecha_nacimiento`, `correo_electronico`, `password`, `tipo_usuario`) VALUES ('Sandro', 'Dezerio', '1991-03-21', 'sdezerio@gmail.com', '123bas', '1');
INSERT INTO `usuario` (`nombre`, `apellido`, `fecha_nacimiento`, `correo_electronico`, `password`, `tipo_usuario`) VALUES ('Pablo', 'Ratibel', '1994-10-15', 'pratibel@gmail.com', '123', '2');