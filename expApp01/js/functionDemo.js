function n() {
    var num=function () {
        return 5;
    };
    return num();
}
console.log(n());

function n1() {
    var num = (function () {
        return 5;
    })();
    console.log(num);
}
n1();


function* curr() {
    let item = [], value;
    do {
        value = yield item.slice();
        if (value !== -1) {
            item.push(value);
        }
    } while (value !== -1);

    let sum = 0;
    item.forEach(item => sum = sum + item);
    yield sum;
    console.log(sum);

}

let curring = curr();
curring.next();
curring.next(1);
curring.next(2);