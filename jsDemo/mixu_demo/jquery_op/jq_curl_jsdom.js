const curl = require('curl');
const jsdom = require('jsdom');
const url = "http://www.thmarket.com/index.html";

curl.get(url, null, (err, resp, body)=>{
	if(resp.statusCode == 200) {
		let bodyHtml = parseData(body);
		console.log(bodyHtml.html());
	}else{
		console.error('error while efetching url.');
	}
});


function parseData(html){
	const {JSDOM} = require('jsdom');
	const dom = new JSDOM(html);
	const $ = (require('jquery'))(dom.window);
	return $('html');
}