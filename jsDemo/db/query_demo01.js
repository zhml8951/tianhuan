const pool = require('./db_pool');
pool.query('select * from th_users where user_id = "1213"', (err, result, fields) => {
	if(err) throw new Error(err);
	console.log(result);
})