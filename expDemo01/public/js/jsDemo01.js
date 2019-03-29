'use strict';

function currLocation() {
	console.log(window.location);
}

function newLocation() {
	window.location = 'http://www.thmarket.com';
}

function showUrl() {
	prompt(window.location.href, window.location.port);
}



