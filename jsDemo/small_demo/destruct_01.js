"use strict";
const jsdom = require('jsdom');
let [xml, yie = 'yield'] = ['XMLHttpRequest', 'Yellow:'];
console.log('xml: ', xml, ', yie: ', yie);
console.log(jsdom);

var dom =  new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
function* fibs() {
	let a = 0;
	let b = 1; 
	while(true){
		yield a; 
		[a, b] = [b, a+b];
	}
}






















