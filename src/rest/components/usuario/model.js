class Usuario {

	get nombre() {
		return this._nombre;
	}
	set nombre(nombre) { 
		this._nombre = nombre;
	}

	get apellido() {
		return this._apellido;
	}
	set apellido(apellido) {
		this._apellido = apellido;
	}

	set fecha_nacimiento(fecha_nacimiento) {
		this._fecha_nacimiento = fecha_nacimiento;
	}
	get fecha_nacimiento() {
		return this._fecha_nacimiento;
	}

	get correo_electronico() {
		return this._correo_electronico;
	}
	set correo_electronico(correo_electronico) {
		this._correo_electronico = correo_electronico;
	}
	
	get password() {
		return this._password;
	}
	set password(password) {
		this._password = password;
	}
}

export default Usuario;