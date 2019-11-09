import mysql from 'mysql';

const conn = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 's4ndr0',
	database: 'homesservices'
});

module.exports = conn;