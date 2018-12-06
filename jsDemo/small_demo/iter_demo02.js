var str_iterate = () => {
	const str01 = 'for...of vs for...of Loops in Javascript';
	for (let c of str01) {
		if(c !== ' '){
		// console.log(c);
		}
	}
	for (let c in str01) {
		// console.log(c);
	}
}
str_iterate();

function forOfTest() {
	let animals = ['🐔', '🐷', '🐑', '🐇'];
	let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];
	for (let animal of animals) {
		let nameIdx = Math.floor(Math.random() * names.length);
		console.log(`${names[nameIdx]} the ${animal}`);
	}
}

forOfTest();


https://alligator.io/js/
