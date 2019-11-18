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
	
			const query = "SELECT * FROM usuario WHERE id = ? ";
		
			conn.query(query, [id], (err, res) => {
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
		console.log("Exc: ",e);
	}
});

const getByCorreoElectronico = (correo) => new Promise(async (resolve, reject) => {
	try {
		db.getConnection((err, conn) => {
			if(err) reject(err);

			const query = "SELECT * FROM usuario WHERE correo_electronico = ? ";

			conn.query(query, [correo], (err, res) => {
				if(err) reject(err);

				let Usuario = new Usuario();
				if(res.length){
					Usuario = {...res[0]};
					Usuario.fecha_nacimiento = moment(Usuario.fecha_nacimiento).format('DD/MM/YYYY');
				}

				resolve(Usuario);
			});
		});
	}catch(e){
		console.log("Exc: ", e);
	}
});

const post = (usuario) => new Promise(async (resolve, reject) => {
	try{
		db.getConnection((err, conn) => {
			if(err) reject(err);
			const query = "INSERT INTO usuario (`nombre`, `apellido`, `fecha_nacimiento`, `correo_electronico`, `password`, `tipo_usuario`) VALUES ( ? ) ";

			conn.query(query, [Object.values(usuario)], (err, res) => {
				if(err) reject(err);
				
				usuario.id = res.insertId;
				resolve(usuario);
			})
		});
	}catch(e){
		console.log("Err: ",e);
	}
});

const put = (usuario, id)  => new Promise(async (resolve, reject) => {
	try{
		db.getConnection((err, conn) => {
			if(err) reject(err);
			usuario.id = parseInt(id);
			const query = "UPDATE usuario SET nombre = ?, apellido = ?, fecha_nacimiento = ?, correo_electronico = ?, password = ?, tipo_usuario = ? WHERE id = ? ";

			conn.query(query, Object.values(usuario), (err, res) => {
				if(err) reject(err);

				resolve({mensaje: "Usuario modificado correctamente."});
			})
		});
	}catch(e){
		console.log("Err: ", e);
	}
});

module.exports = {
	getAll,
	get,
	getByCorreoElectronico,
	post,
	put
};