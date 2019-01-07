var Delay_Time = (ms)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
};

Delay_Time_Second = (ms)=>{
    setTimeout(()=>{
        console.log('wait at second.');
    }, ms);
};


var Delay_Print = async (ms) =>{
    Delay_Time_Second(2000);
    console.log('After Delay_Time_Second');
    await Delay_Time(ms);
    console.log('After Delay_Time');
    return new Promise((resolve, reject)=>{
        resolve('end');
    });
};


// Delay_Print(2000).then( (resolve)=>{
// 	console.log(resolve);
// });

// Delay_Time(1000).then((ret) =>{
// 	console.log(ret);
// });

var res = Delay_Time(1000);
console.log(res);
