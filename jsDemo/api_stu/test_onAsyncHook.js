const onAsyncHook = require('./onAsyncHook');
var objA = {};

onAsyncHook(objA, (data) => {
	console.log(data); 
});
