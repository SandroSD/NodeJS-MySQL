export default class Usuario {
	nombre;
	apellido;
	mail;

	getNombre() {
		return this.nombre;
	}
	setNombre(nombre) {
		this.nombre = nombre;
	}

	getApellido() {
		return this.apellido;
	}
	setApellido(apellido) {
		this.apellido = apellido;
	}

	getMail() {
		return this.mail;
	}
	setMail(mail) {
		this.mail = mail;
	}
}