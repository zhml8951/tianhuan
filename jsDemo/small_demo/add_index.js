var app = {log: console.log.bind(console)};
var add = require('./add_01')(app);
add(1,2);


console.log(require('./add_01')(app));
app.log('abc');
var app02 = {log_02: console.log.bind(console)};
app02.log_02('log02');