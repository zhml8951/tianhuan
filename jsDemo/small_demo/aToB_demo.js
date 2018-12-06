const { atob } = require("abab");
var test_01 = (data) => {
	data = `${data}`;
	let new_data = data.replace('aim', 'Aim');
	console.log(data);
	console.log(new_data);
	console.log(new_data.replace(/[ \t\n\f\r]/g, ""));
}

function test_atob(){
	var str01 = '123456';
	console.log(atob(str01));
}

let myStr = 'We can do whatever we want, We are venom, 11 and 12 or 13';

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	console.log(target.split(search));
	console.log(target.split(' '));
	console.log(target.split(',').join('&'));
	console.log(target.split(' ').join('&&').split(',').join(''));
	return target.split(search).join(replacement);
}

var regex = /we/gi;
regex = /(\w+)\s(\w+)/;

str = 'John Smith';
console.log('John Smith'.replace(regex, '$2, $1'));
console.log(str.replace(regex, '$2'));
myStr = myStr.replace(/\d+/g,(match) => {
	return +match + 1;
});

function styleHyphenFormat(propertyName) {
	function upperToHyphenLower(match, offset, string){
		return (offset > 0 ? '_' : '') + match.toLowerCase();
	}
	return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
   // var strT = new String('ab');
   // strT.indexOf(searchString, position?)
function styleHyfor(propName) {
	return propName.replace(/[A-Z]/g, (match, off, str) => {
		if( off !== 0) {
			return (off > 0 ? '_' : '') + match.toLowerCase();
		} else {
			return match;
		}
	});
}
console.log(styleHyphenFormat('PropPertyName'));
console.log(styleHyfor('ArnniNameSizeAbout'));

var metaData = {
	title: "Scratchpad", 
	translations: [
		{
			locale: "de",
			localization_tags: [],
			last_edit: "2018-04-04T08:44:33",
			url:"/zh/docs/tools/scratchpad",
			title:'JavaScript-Umgebung'
		}
	],
	url:"zh-cn/docs/tools/scratchpad"
};

var {title: englishTitle, translations: [ {title: localeTitle}] } = metaData;
debugger;
console.log(englishTitle);
console.log(localeTitle);