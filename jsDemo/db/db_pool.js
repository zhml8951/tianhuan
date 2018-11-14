const mysql_url = require('./config').mysql_112;
const mysql = require('mysql');
const pool = mysql.createPool(mysql_url);

pool.getConnection((err, connection) => {
	if(err){
		if( err.code === 'PROTOCOL_CONNECTION_LOST'){
			console.error('MySQL connection was closed.');
		}else if(err.code === 'ER_CON_COUNT_ERROR'){
			console.error('MySQL has too many connection. ');
		} else
			console.log(err.code);
	}
	if(connection) connection.release();
	return;
});

module.exports = pool;
