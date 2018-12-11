function createIterator(items) {
	var i = 0;
	return {
		next: function() {
			var done = i >= items.length;
			var value = !done ? items[i++] : undefined;
			return {
				done: done,
				value: value
			};
		},
		return: function() {
			console.log("perform return mothed");
			return {
				value: 12222,
				done: true
			};
		}
	};
}

var colors = ["red", "green", "blue"];
var iterator = createIterator([1, 2]);
colors[Symbol.iterator] = function() {
	return iterator;
}

for (let color of colors) {
	if (color == 1) break;
	console.log(color);
}

// https://github.com/mqyqingfeng/Blog/issues/2
// https://segmentfault.com/a/1190000015585585
// https://alligator.io/js/sets-introduction/