function Archiver() {
	var temperature = null;
	var archive = [];

	Object.defineProperty(this, 'temperature', {
		get: function() {
			console.log('get!');
			return temperature;
		},
		set: function(value) {
			temperature = value;
			archive.push({val: temperature});
		}
	});

	this.getArchive = function(){ return archive; };
}

var arc = new Archiver();
arc.temperature = '8888';
arc.temperature = 99;
console.log(arc.temperature);
console.log(arc.getArchive());