Object.assign(Array.prototype, {
	unique(){
		let newArr = [this[0]];
		for(let i of Object.keys(this)){
			let value = this[i];
			if(newArr.indexOf(value) === -1) {
				newArr.push(value);
			}
		}
		return newArr;
	}
});

class Square {
	constructor(width){
		this.width = width;
	}
	area() {
		return this.width ** 2;
	}
};

module.exports = Square;
exports = Object;
console.log(Object.toString());
console.log(__dirname);
console.log(__filename);
console.log(exports);
console.log(module.exports);
console.log(new Square(2).area());
console.log(global);