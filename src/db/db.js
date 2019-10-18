import mysql from 'mysql';

export default class Bd {
	constructor(){
		conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 's4ndr0'
		});
	}

	conectarBd(){
		conn.connect();
	}

	desconectarBd(){
		conn.end();
	}
}