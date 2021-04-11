const mysql = require('mysql');

const { parseDate } = require('../helpers/date');

const Persona = require('../models/Persona');

const pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 's4ndr0',
    database: 'node_pruebas',
    typeCast: function castField( field, useDefaultTypeCasting ) {

		// We only want to cast bit fields that have a single-bit in them. If the field
		// has more than one bit, then we cannot assume it is supposed to be a Boolean.
		if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {

			var bytes = field.buffer();

			// A Buffer in Node represents a collection of 8-bit unsigned integers.
			// Therefore, our single "bit field" comes back as the bits '0000 0001',
			// which is equivalent to the number 1.
			return( bytes[ 0 ] === 1 );
		}

		return( useDefaultTypeCasting() );
	}
});

module.exports.getPersonas = (desde, limite) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT *
                FROM personas
                LIMIT ${desde}, ${limite}
        `;

        pool.getConnection((err, conn) => {
            if(err) throw err;

            conn.query(sql, async (err, rows, fields) => {
                if(err) throw err;

                let personas = [];
        
                rows.forEach(row => {
        
                    let { id, nombre, apellido, fecha_nacimiento, direccion, activo } = row;
        
                    fecha_nacimiento = parseDate(fecha_nacimiento);
        
                    const persona = new Persona(id, nombre, apellido, fecha_nacimiento, direccion, activo);
                    
                    personas.push(persona);
                });
                
                conn.release();

                resolve({
                    personas,
                    rows: rows.length
                });
            });
        });
    });
}

module.exports.getPersonaById = id => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT *
                FROM personas
                WHERE id = ${pool.escape(id)}
        `;

        pool.getConnection((err, conn) => {
            if(err) throw err;

            conn.query(sql, async (err, rows, fields) => {
                if(err) throw err;
    
                if(rows[0]) {
                    let { id, nombre, apellido, fecha_nacimiento, direccion, activo } = rows[0];
        
                    fecha_nacimiento = parseDate(fecha_nacimiento);
            
                    const persona = new Persona(id, nombre, apellido, fecha_nacimiento, direccion, activo);
        
                    resolve(persona);
                }
    
                conn.release();

                resolve(null);
            });
        });
    });
}

module.exports.createPersona = persona => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if(err) throw err;

            const sql = `
                INSERT
                    INTO personas (nombre, apellido, fecha_nacimiento, direccion)
                VALUES (
                    ${conn.escape(persona.nombre)},
                    ${conn.escape(persona.apellido)},
                    ${conn.escape(persona.fecha_nacimiento)},
                    ${conn.escape(persona.direccion)}
                );
            `;

            conn.query(sql, async (err, rows, fields) => {
                if(err) throw err;

                persona.id = rows.insertId;
                persona.fecha_nacimiento = parseDate(persona.fecha_nacimiento);

                resolve(persona);

                conn.release();
            });
        });
    });
}

module.exports.updatePersona = persona => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if(err) throw err;

            const sql = `
                UPDATE personas
                    SET nombre = ${conn.escape(persona.nombre)},
                        apellido = ${conn.escape(persona.apellido)},
                        fecha_nacimiento = ${conn.escape(persona.fecha_nacimiento)},
                        direccion = ${conn.escape(persona.direccion)}
                    WHERE (
                        id = ${conn.escape(persona.id)}
                    );
            `;

            conn.query(sql, async (err, rows, fields) => {
                if(err) throw err;

                resolve(null);

                conn.release();
            });
        });
    });
}

module.exports.deletePersona = persona => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if(err) throw err;

            const sql = `
                UPDATE personas
                    SET activo = ${conn.escape(persona.activo)}
                    WHERE (
                        id = ${conn.escape(persona.id)}
                    );
            `;

            conn.query(sql, async (err, rows, fields) => {
                if(err) throw err;

                resolve(null);

                conn.release();
            });
        });
    });
}