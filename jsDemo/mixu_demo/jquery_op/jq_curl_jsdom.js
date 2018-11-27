const curl = require('curl');
const { JSDOM } = require('jsdom');
const jquery = require('jquery');

const url = "http://www.thmarket.com/index.html";

curl.get(url, null, (err, resp, body)=>{
	if(resp.statusCode == 200) {
		parseData(body);
	}else{
		console.error('error while efetching url.');
	}
});


function parseData(html){
	const dom = new JSDOM(html);
	let $ = jquery(dom.window);
	let divs = $($('html').find('div')).html();
	console.log($('div#footer').html());
	// for(let i in divs) {
		// console.log(i, divs[i]);
	// }
}