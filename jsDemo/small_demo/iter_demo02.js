var str_iterate = () => {
	const str01 = 'for...of vs for...of Loops in Javascript';
	for (let c of str01) {
		if(c !== ' '){
		console.log(c);
		}
	}
	for (let c in str01) {
		console.log(c);
	}
}
// str_iterate();

function forOfTest() {
	let animals = ['🐔', '🐷', '🐑', '🐇'];
	let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];
	for (let animal of animals) {
		let nameIdx = Math.floor(Math.random() * names.length);
		console.log(`${names[nameIdx]} the ${animal}`);
	}
}

// forOfTest();

function setDemo() {
	let animals = new Set();
	animals.add('🐷');
	animals.add('🐼');
	animals.add('🐢');
	animals.add('🐿').add('O,MyGod!');
	// animals.forEach(callbackfn, thisArg?)
	console.log(animals.size);
	console.log(animals);
	animals.add('🐿');
	console.log(animals.size);
	console.log(animals.has('🐢'));
	animals.delete('🐢');
	console.log(animals.has('🐢'));

	animals.forEach(a => {
		console.log(`Hey, ${a}!!`);
	});
	animals.clear();
	console.log(animals.size);

	return animals;
}

// setDemo();
console.log('-----------------------------------------------');
function setDemo2(){
	let myAnimals = new Set(['🐷', '🐢', '🐷', '🐷','🐑']);
	myAnimals.add(['🐨','🐑']);
	myAnimals.add({ name: 'Arnni', type: '🐑'});
	// console.log(myAnimals)
	myAnimals.forEach(animal => {
		console.log(animal);
	});

	console.log('Only unique characters will be in this set.'.length);
	let setString = new Set('Only unique characters will be in this set.');
	console.log(setString.size);
	console.log(setString);
	setString.forEach(function(elem) {
		console.log(elem);
	});
}
// setDemo2();//
(
function setDemo3() {
	let items;
	let moreAnimals = new Set(['🐺', '🐴', '🐕', '🐇']);
	for (let animal of moreAnimals) {
			console.log(`Howdy ${ animal }`);
	}
	console.log(moreAnimals.entries());
	console.log(moreAnimals.keys());
	console.log(items = moreAnimals.values());
	console.log(typeof items);
	console.log(items);
	console.log(items.next());
})();
