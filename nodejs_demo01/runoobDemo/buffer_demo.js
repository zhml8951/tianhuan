const buf = Buffer.from('runoob','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

const buf01 = Buffer.alloc(10);
const buf02 = Buffer.alloc(10,1);
const buf03 = Buffer.allocUnsafe(10);
const buf04 = Buffer.from([1,2,3]);
const buf05 = Buffer.from('test','latin1');
const buf06 = Buffer.alloc(256);
let len = buf06.write("www.thmarket.com/shop");
console.log('write buffer bit: ' + len);
console.log(buf06.toString('ascii'));
console.log(buf06.toString('utf8',0,5));

const buf07 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf07);
console.log(json);
const copy = JSON.parse(json,(key,value) => {
    return value && value.type === 'Buffer' ? 
      Buffer.from(value.data) : 
      value;
});

console.log(copy);