import Usuario from './model';
import db from '../../../db/db';
import moment from 'moment';

const getAll = new Promise(async (resolve, reject) => {
	db.getConnection((err, conn) => {
		if(err) reject(err);

		const query = "SELECT * FROM usuario";
		const usuarios = [];
	
		conn.query(query, (err, res) => {
			if(err) reject(err);
	
			res.forEach(row => {
				const usuario = {...row};
				usuario.fecha_nacimiento = moment(usuario.getFechaNacimiento).format('DD/MM/YYYY');
				usuarios.push(usuario);
			});
	
			resolve(usuarios);
		});
	});

});

const get = (id) => new Promise(async (resolve, reject) => {
	try{
		db.getConnection((err, conn) => {
			if(err) reject(err);
	
			const query = `SELECT * FROM usuario where id = ${id}`;
		
			conn.query(query, (err, res) => {
				if(err) reject(err);

				let usuario = null;
				if(res.length){
					usuario = {...res[0]};
					usuario.fecha_nacimiento = moment(usuario.getFechaNacimiento).format('DD/MM/YYYY');
				}
		
				resolve(usuario);
			});
		});
	}catch(e) {
		console.log("Exc:    ",e);
	}
});

module.exports = { getAll, get };