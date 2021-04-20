class Role {

    constructor(id, name, description, permissions, activo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.permissions = permissions;
        this.activo = activo;
    }

}

module.exports = Role;