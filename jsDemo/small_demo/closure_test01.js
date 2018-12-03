const { JSDOM } = require('jsdom');
var window = new JSDOM();
var document = window.toString();
(function (document) {
	var viewPort; 
	var obj = {
		init: function(id) {
			viewPort = document.querySelector('#' + id);
		}, 
		addChild: function(child) {
			viewPort.appendChild(child);
		},
		removeChild: function (child) {
			viewPort.removeChild(child);
		}
	};
	window.jView = obj;
})(document);

