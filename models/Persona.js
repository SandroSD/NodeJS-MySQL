class Persona {

    constructor(id = '', nombre, apellido, fecha_nacimiento, direccion, activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.activo = activo;
    }

}

module.exports = Persona;