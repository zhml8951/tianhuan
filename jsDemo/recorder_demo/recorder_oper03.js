const reader = require('./recorder_oper01');

var onFinderDone = (records) =>{
	reader.processor(records, onProcessorDone);
}

var onProcessorDone = (records) => {
	console.log(records);
}

reader.finder([13,14], onFinderDone);
