/* eslint-disable no-unused-vars */
const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(111);
        });
    });
};

const f2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(222);
        }, 3000);
    });
};

const testAsync = async () => {
    try {
        const t1 = await f1();
        console.log(t1);
        const t2 = await f2();
        console.log('t2: ', t2);
    } catch (err) {
        console.log(err);
    }
};

// testAsync();
async function basiceDemo() {
    let asyncTest = testAsync();
    let result = Math.random();
    console.log(asyncTest);
    console.log(result);
}
//basiceDemo();

function sleep(second) {
    return new Promise((resolve, reject) => {
        if (second > 2000) {
            setTimeout(() => {
                resolve(' enough sleep---');
            }, second);
        } else {
            setTimeout(() => {
                reject(' sleep not enough--');
            }, second);
        }
    });
}

function normalFunc() {
    console.log('normalFunc');
}

async function awaitDemo() {
    await normalFunc();
    console.log('SomeThing....');
    try {
        let result = await sleep(1000);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// awaitDemo();
function doSleep(second, param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (second > 2000) {
                resolve(param + ' --+++');
            } else {
                reject(param + ' -----');
            }
        }, second);
    });
}

async function doTest() {
    try {
        let result1 = await doSleep(4000, 'req01');
        let result2 = await doSleep(3000, 'req02' + result1);
        let result3 = await doSleep(3000, 'req03' + result2);
        console.log(`
            ${result1}
            ${result2}
            ${result3}
        `);
    } catch (err) {
        console.log(err);
    }
}

doTest();