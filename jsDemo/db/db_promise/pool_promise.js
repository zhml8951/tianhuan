const mysql_url = require('../config');
const mysql = require('mysql');
const util = require('util');

var pool = mysql.createPool(mysql_url);