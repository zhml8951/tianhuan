/* eslint-disable no-unused-vars */
// var _ = function (array) {
// 	this._value = Array.prototype.slice.apply(array);
// }

var _ = function (array) {
    for (let i in _) {
        _.prototype[i] = (function (i) {
            return function () {
                var args = Array.prototype.slice.apply(arguments);
                args.unshift(this._value);
                if (i === 'map') {
                    this._value = _[i].apply(this, args);
                } else {
                    _[i].apply(this, args);
                }
                return this;
            };
        })(i);
    }
};


_.forEach = function (array, fn) {
    array.forEach(function (v, i, array) {
        fn.apply(v, [v, i, array]);
    });
};

_.map = function (array, fn) {
    return array.map(function (v, i, array) {
        return fn.apply(v, [v, i, array]);
    });
};

_.chain = function (array) {
    return new _(array);
};

_.prototype.value = function () {
    return this._value + ' --';
};

var a = [1, 2, 3, 4];
_.forEach(a, v => {
    console.log(v);
});
_.map(a, v => {
    console.log(++v);
});
console.log(_.chain(a).value());
a.forEach(v => {
    console.log(v + ' 00 ');
});

var ab = a.map((v, i, a_b) => {
    console.log('key: ' + i, 'value: ' + v);
    console.log(a_b);
    return a_b;
});

console.log(ab);
