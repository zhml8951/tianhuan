var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);

module.exports = function readJson(filename) {
	return readFile(filename, 'utf8').then(JSON.parse);
};