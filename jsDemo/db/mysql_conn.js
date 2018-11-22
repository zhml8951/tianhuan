const mysql = require('mysql');
const connection = mysql.createConnection({
	host: '172.16.1.112',
	user: 'shop01',
	password: '36902666',
	database: 'shop'
});

// connection.connect();
console.log('mysql 112 connection');
connection.query('select 1 + 1 as solution', (error, result, fields) =>{
	if(error) throw error;
	console.log('Ths solution is: ' , result[0].solution);
	// connection.end();
});
