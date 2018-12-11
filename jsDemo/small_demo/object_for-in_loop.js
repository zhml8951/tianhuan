/**
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * @param  {[Object]} o [target]
 * @param  {[Object]} p [source]
 * @return {[Object]} o [result. o]
 */
function extend(o, p) {
	for (prop in p) {
		o[prop] = p[prop];
	}
	return o;
}
/**
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is left alone.
 */
function merge(o, p) {
	for (prop in p) {
		if (o.hasOwnProperty[prop]) continue;
		o[prop] = p[prop];
	}
	return o;
}
/**
 * Remove properties from o if there is not a property with the same name in p
 */
function restrict(o, p) {
	for (prop in o) {
		if (!(prop in p)) delete o[prop];
	}
	return o;
}
/**
 * For each property of p, delete the property with the same name from o.
 */
function substract(o, p) {
	for (prop in p) {
		delete o[prop];
	}
	return o;
}
/**
 * Return a new object that holds the properties of both o and p
 * If o and p have properties by the same name, the values from o are used
 */
function union(o, p) {
	return extend(extend({}, o), p);
}
/**
 * Return a new object that holds only the properties of o that also appear in p
 * This is something like the intersection of o and p, but the values of the properties in p are discarded
 */
function intersection(o, p) {
	return restrict(extend({}, o), p);
}
/**
 * Return an array that holds the names of the enumerable own properties of o
 */
function key(o) {
	if (typeof o !== "object") throw TypeError();
	var result = [];
	for (var prop in o) {
		if (o.hasOwnProperty(prop))
			result.push(prop);
	}
	return result;
}

// this demo all display for...in with object.  
// for...in general for object.... for...in loops to manipulate object prop-erties in helpful ways. 