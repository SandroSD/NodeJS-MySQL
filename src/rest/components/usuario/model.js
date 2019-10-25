export default class Usuario {
	nombre;
	apellido;
	fechaNacimiento;
	correoElectronico;
	password;

	getNombre() { return this.nombre; }
	getApellido() { return this.apellido; }
	getFechaNacimiento() { return this.fechaNacimiento; }
	getCorreoElectronico() { return this.correoElectronico; }
	getPassword() { return this.password; }
	
	setNombre(nombre) { this.nombre = nombre; }
	setApellido(apellido) { this.apellido = apellido; }
	setFechaNacimiento(fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }
	setCorreoElectronico(correoElectronico) { this.correoElectronico = correoElectronico; }
	setPassword(password) {this.password = password; }
}