const moment = require('moment');

exports.inc = function(n, callback, timeout) {
	timeout = timeout || 200;
	setTimeout(function() {
		callback(null, n + 1);
	}, timeout)
};

exports.fire = function(obj, callback, timeout) {
	timeout = timeout || 200;
	setTimeout(function() {
		callback(null, obj + '----');
		logLocal('fire---in--function');
	}, timeout);
};

exports.fireTwo = function(obj, timeout, cb) {
	timeout = timeout;
	setTimeout(function() {
		cb(null, obj);
	}, timeout);
};

exports.err = function(errMsg, callback, timeout) {
	timeout = timeout;
	setTimeout(function() {
		callback(errMsg);
	}, timeout);
}

exports.log = function(msg, obj) {
	process.stdout.write(moment().format('ss.SSS') + '> ');
	if (obj !== undefined) {
		process.stdout.write(msg);
		console.log(obj);
	} else {
		console.log(msg);
	}
};

exports.wait = function(mils) {
	var now = new Date();
	while (new Date - now <= mils);
};

function logLocal(msg, obj) {
	process.stdout.write(moment().format('ss.SSS') + '> ');
	console.log('Begin: ');
}