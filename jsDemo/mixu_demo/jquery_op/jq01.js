const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var $ = null; 
// const window = new JSDOM()
// var $ = require('jquery')(window);

var dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);
$ = require('jquery')(dom.window);
console.log('jquery: '+ $("p").text());
console.log('html: ' + $('p').html());
