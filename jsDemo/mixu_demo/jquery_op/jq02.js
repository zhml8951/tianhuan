const { JSDOM } = require('jsdom');
var testHtml = `
<!DOCTYPE html>
<html>
	<head>
	<title>jsdom test</title>
	</head>
	<body>
		<input type='text' id='fiptest'/>
	</body>
</html>
`;
var jsdom = new JSDOM(testHtml);
var { window } = jsdom;
var { document } = window;


const $ = jQuery = require('jquery')(window);
console.log(`jQuery ${jQuery.fn.jquery} is working.`);
var inputElement = $('#fiptest');

console.log(`${inputElement}`);
console.log(inputElement.length);
console.log(inputElement.getjson());
