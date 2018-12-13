function obj_accessors() {
	var obj = {
		foo: 1,
		get bar() {
			return 2;
		}
	};

	console.log(Object.keys(obj).reduce(descriptor, key));
	console.log(Object.getOwnPropertyDescriptors(obj));
	console.log('-----------');
	var obj_copy = Object.assign({}, obj);
	console.log(obj_copy);
	console.log(Object.getOwnPropertyDescriptors(obj_copy));
	console.log('--------------');

	function completeAssign(target, ...sources) {
		sources.forEach(source => {
			let descriptors = Object.keys(source).reduce((descriptors, key) => {
				descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
				return descriptors;
			}, {});
			Object.getOwnPropertySymbols(source).forEach(sym => {
				let descriptor = Object.getOwnPropertyDescriptor(source, sym);
				if (descriptor.enumerable) {
					descriptors[sym] - descriptor;
				}
			});
			Object.defineProperties(target, descriptors);
		});
		return target;
	};
	var copy = completeAssign({}, obj, obj_copy);
	console.log(copy);
	console.log(Object.getOwnPropertyDescriptors(copy));
}

obj_accessors();
