var mysql = require('mysql');

var pool = mysql.createPool({

	host: 'localhost',
	user: 'root',
	password:'shri',
	database: 'freeads',
	debug: false

});

module.exports = pool;