function Person() {
    this.think = function (callback) {
        setTimeout(function () {
            console.log('Thinking.....');
            callback();
        }, 5000);
    }

    this.answer = function () {
       console.log('I am answering other question'); 
    }
}

var person = new Person();
person.think(function () {
    console.log('Think 5 second, get the right answer!');
});
person.answer();


