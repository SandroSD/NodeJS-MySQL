import Usuario from './model';
import db from '../../../db/db';
import moment from 'moment';

const getAll = async () => {
	db.connect( err => { if(err) throw err; });

	const query = "SELECT * FROM usuario";
	const usuarios = [];

	db.query(query, (err, res) => {
		return new Promise((resolve, reject) => {
			if(err) return reject(err);

			res.forEach(row => {
				const usuario = {...row};
				usuario.fecha_nacimiento = moment(usuario.getFechaNacimiento).format('DD/MM/YYYY');
				usuarios.push(usuario);
			});

			resolve(usuarios);
		});
	});

}

module.exports = { getAll };