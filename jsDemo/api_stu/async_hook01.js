const async_hooks = require('async_hooks');
const fs = require('fs');
var eid = async_hooks.executionAsyncId();
var tid = async_hooks.triggerAsyncId();
var indent = 0;
var hooks01 = async_hooks.createHook({
	init(asyncId, type, triggerAsyncId){
		var eid = async_hooks.executionAsyncId();
		var indentStr = ' '.repeat(indent);
		fs.writeSync(1, `${indentStr}${type}(${asyncId}):` +
			` trigger: ${triggerAsyncId} execution: ${eid}\n`);	
	},
	before(asyncId){
		let indentStr = ' '.repeat(indent);
		fs.writeSync(1, `${indentStr}before: ${asyncId}\n`);
		indent +=2;
	},
	after(asyncId){
		indent -=2;
		let indentStr = ' '.repeat(indent);
		fs.writeSync(1, `${indentStr}after: ${asyncId}\n`);
	},
	destroy(asyncId){
		let indentStr = ' '.repeat(indent);
		fs.writeSync(1, `${indentStr}destroy: ${asyncId}\n`);
	},
});

console.log(hooks01);

require('net').createServer( () => {}).listen(8080, () =>{
	setTimeout( () => {
		console.log('>>>', async_hooks.executionAsyncId());
	}, 10);
});