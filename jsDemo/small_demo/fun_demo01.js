var a = 0; 
function bb(x){
	console.log(x);
}

function timer(time){
	setTimeout(function(){
		a = 6;
	}, time);
}

console.log(a);
timer(3000);
bb(a);

