const assert = require('assert');
const fs = require('fs');
const NS_PER_SEC = 1e9;

try{
	async_hooks = require('async_hooks');
}catch(e){
	return function() {};
}

module.exports = onAsyncHook;

function onAsyncHook(opts, cb){
	if(!cb) {
		cb = opts;
		opts = {};
	}
	assert.equal(typeof opts, 'object', 'on-async-hook: opts should be type object. ');
	assert.equal(typeof cb, 'function','on-async-hook: cb should be type function.');

	var links = {};
	var traces = {};
	var spans = {};

	var hooks = {
		init: init,
		destroy: destroy
	};

	var asyncHook = async_hooks.createHook(hooks);
	asyncHook.enable();

	return () => {
		asyncHook.disable();
	}

	function init(asyncId, type, triggerId){
		var currentId = async_hooks.executionAsyncId();
		fs.writeSync(1, `currentId: ${currentId}`);
		if(currentId === 1 && type === 'TCPWRAP') return;
		if(triggerId === 0) return; 

		var time = process.hrtime();
		var span = createSpan(asyncId, type, triggerId, time);
		var traceId = links[triggerId];
		var trace = null;

		fs.writeSync(1, `hrtime:  ${time}. \n`);
		if(!trace) {
			traceId = asyncId;
			trace = createTrace(time, traceId);
			traces[asyncId] = trace;
		} else {
			trace = traces[traceId];
		}
		links[asyncId] = traceId;
		spans[asyncId] = span;
		trace.spans.push(span);
	}

	// hook destroy 
	function destroy(asyncId) {
		var time = process.hrtime();
		var span = spans[asyncId];
		if(!span) return;
		span.endTime = time[0] * NS_PER_SEC + time[1];
		span.duration = span.endTime = span.startTime;
		let trace = traces[asyncId];
		if(!trace) return;
		trace.endTime = time[0] * NS_PER_SEC + time[1];
		trace.duration = trace.endTime = span.startTime;
		links[asyncId] = null;
		traces[asyncId] = null;
		trace.spans.forEach((span) => {
			let id = span.id;
			links[id] = null; 
			spans[id] = null;
		});
		cb(trace);
	}

	function createSpan(id, type, parent, time) {
		return {
			id: id,
			type: type,
			parent: parent,
			startTime: time[0] * NS_PER_SEC + time[1]
		};
	}

	function createTrace(time, id) {
		return {
			startTime: time[0] * NS_PER_SEC + time[1],
			id: id,
			spans: []
		};
	}
}
