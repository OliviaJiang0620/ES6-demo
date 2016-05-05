'use strict'

for (let codePoint of 'foo'){
	console.log(codePoint)
}

var text = String.fromCodePoint(0x20BB7);
for (let i of text){
	console.log(i);
}

console.log('abc'.charAt(0));
//console.log('𠮷'.charAt(0));

var s = 'Hello world!';

console.log(s.startsWith('Hello'));
console.log(s.endsWith('!'));
console.log(s.includes('o'));

console.log(s.startsWith('world', 6));
console.log(s.endsWith('Hello', 5));
console.log(s.endsWith('Hell', 4));
//endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束
console.log(s.includes('Hello', 6));

console.log('x'.repeat(3));
console.log('hello'.repeat(2));
console.log('na'.repeat(0));
console.log('na'.repeat(2.9));
//console.log('na'.repeat(Infinity)); error
//console.log('na'.repeat(-1)); error

//但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。
console.log('na'.repeat(-0.9));

//参数NaN等同于0。
console.log('na'.repeat(NaN));

/*'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
//padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
*/

/*'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
//如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
*/

/*'abc'.padStart(10, '0123456789')
// '0123456abc'
//如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。*/

/*'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
//如果省略第二个参数，则会用空格补全长度。*/

/*'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
//padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。*/

/*'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
//提示字符串格式*/

$("#result").append(`
	There are <b> ${basket.count} </b> items in your basket, <em> ${basket.onSale}</em>are on sale!
	`);

`In JavaScript '\n' is a line-feed.`
`In JavaScript this is 
not legal`

console.log(`string text line 1
	string text line 2`);

var name= 'Bob', time = "today";
`Hello ${name}, how are you ${time}?`

var greeting= `\`Yo\`World!`;

$("#warning").html(`
	<h1>Watch out!</h1>
	<p>Unauthorized hockeying can result in penalties 
	of up to ${maxPenalty} minutes</p>
	`);

function authorize(user, action){
	if(!user.hasPrivilege(action)){
		throw new Error(`User ${user.name} is not authorized to do ${action}.`);
	}
}

var x = 1;
var y = 2;
`${x} +${y} =${x + y}` //"1+2=3"
`${x}+${y*2} = ${x+y*2}` //"1+4 = 5"

var obj = {x: 1, y: 2};
`${obj.x + obj.y}` //3

function fn(){
	return "Hello World";
}
`foo ${fn()} bar`//foo Hello World bar

`Hello ${'world'}` //Hello World

let str = 'return' + '`Hello ${name}!`';
let func= new Function('name', str);
func('Jack'); //"Hello Jack!"

let str = '(name) => `Hello ${name}!`';
let func= eval.call(null, str);
func('Jack') //"Hello Jack!"


 