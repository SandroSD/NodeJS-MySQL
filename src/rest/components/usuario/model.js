export default class Usuario {
	nombre;
	apellido;
	fecha_nacimiento;
	correo_electronico;
	password;

	getNombre() { return this.nombre; }
	getApellido() { return this.apellido; }
	getFechaNacimiento() { return this.fecha_nacimiento; }
	getCorreoElectronico() { return this.correo_electronico; }
	getPassword() { return this.password; }
	
	setNombre(nombre) { this.nombre = nombre; }
	setApellido(apellido) { this.apellido = apellido; }
	setFechaNacimiento(fecha_nacimiento) { this.fecha_nacimiento = fecha_nacimiento; }
	setCorreoElectronico(correo_electronico) { this.correo_electronico = correo_electronico; }
	setPassword(password) {this.password = password; }
}