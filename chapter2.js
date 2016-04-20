'use strict'
let [foo, [
	[bar], baz
]] = [1, [
	[2], 3
]];
console.log(foo, bar, baz);
let [, , third] = ["foo", "bar", "baz"];
let [x, , y] = [1, 2, 3];
var [a, b, c] = [1, 2, 3];
let [head, ...tail] = [1, 2, 3, 4];
let [x, y, ...z] = ["a"];
let [x, y] = [1, 2, 3];
let [a, [b], d] = [1, [2, 3], 4];
var [v1, v2, ..., vN] = array;
let [v1, v2, ..., vN] = array;
const [v1, v2, ..., vN] = array;
let [x, y, z] = new Set(["a", "b", "c"]);
var [foo = true] = [false]; //foo=false
[x, y = 'b'] = ['a'];
[x, y = 'b'] = ['a', undefined];
var [x = 1] = [undefined]; //x=1
var [x = 1] = [null]; //x=null
let [x = 1, y = x] = [] // x=1, y=1
let [x = 1, y = x] = [2] // x=2, y=2
let [x = 1, y = x] = [1, 2]; // x=1, y=2
var {
	foo, bar
} = {
	foo: "aaa",
	bar: "bbb"
};
var {
	bar, foo
} = {
	foo: "aaa",
	bar: "bbb"
};
var {
	baz
} = {
	foo: "aaa",
	bar: "bbb"
};
var {
	foo: baz
} = {
	foo: "aaa"
};

let obj = {
	first: "hello",
	last: "world"
};
let {
	first: f,
	last: l
} = obj; // f: hello l: world

var obj = {
	p: [
		"hello", {
			y: "world"
		}
	]
};
var {
	p: [x, {
		y
	}]
} = obj;
x //"Hello"
y //"World"
//p是模式, 不是变量

var node = {
	loc: {
		start: {
			line: 1,
			culunm: 5
		}
	}
};
var {
	loc: {
		start: {
			line
		}
	}
} = node;
//line 1
//loc: error loc is undefined
//start: error: start is undefined

let obj = {};
let arr = [];
({
	foo: obj.prop,
	bar: arr[0]
} = {
	foo: 123,
	bar: true
});
//obj: prop:123
//arr [true]

var {
	x = 3
} = {}; //x 3
var {
	x, y = 5
} = {
	x: 1
}; //x 1 y 5
var {
	message: msg = "Something went wrong"
} = {}; //msg "Something went wrong"
var {
	x = 3
} = {
	x: undefined
}; //x=3
var {
	x = 3
} = {
	x: null
} //x null
let {
	log, sin, cos
} = Math;

const [a, b, c, d, e] = "hello";
let {
	length: len
} = 'hello';

let {
	toString: s
} = 123;
s === Number.prototype.toString //true

let {
	toString: s
} = true;
s === Boolean.prototype.toString //true

function add([x, y]) {
	return x + y;
}
add([1, 2])

[
	[1, 2],
	[3, 4]
].map(([a, b]) => a + b) //[3, 7]

[
	[1, 2],
	[3, 4]
].map(function(v) {
	var a = v[0],
		b = v[1];
	return a + b;
});

var arr = [
		[1, 2],
		[3, 4]
	],
	len = arr.length,
	i = 0,
	rst = [];
for (i = 0; i < len; i++) {
	var a = arr[i][0],
		b = arr[i][1]
	rst.push(a + b);
}

function move({
	x = 0, y = 0
} = {}) {
	return [x, y];
}
move({
	x: 3,
	y: 8
}); //[3,8]
move({
	x: 3
}); //[3,0]
move({}); //[0,0]
move(); //[0,0]

function move1({
	x, y
} = {
	x: 0,
	y: 0
}) {
	return [x, y];
}

move({
	x: 3,
	y: 8
}); //[3,8]
move({
	x: 3
}); //[3, undefined]
move({}); //[undefined, undefined]
move(); //[0,0]

[1, undefined, 3].map((x = 'yes') => x) // [1, 'yes', 3]

[1, undefined, 3].map(function(x) {
	x = x || 'yes';
	return x;

})

[1, null, 3].map((x = 'yes') => x) // [1, null, 3]

[x, y] = [y, x];

function example(){
	return [1,2,3];
}
var [a, b. c]= example();

function example(){
	return {
		foo: 1,
		bar: 2
	}
}
var { foo, bar } = example();

var jsonData = {
	id: 42,
	status: 'OK',
	data: [867, 5309]
}

let {id, status, data: number} = jsonData;
console.log(id, status, number)

var jsonData = {
	id: 42,
	status: 'OK',
	data: [867, 5309]
}

let {id, status, data} = jsonData;
console.log(id, status, data)

jQuery.ajax = function(url, {
	async = true,
	beforeSend = function(){},
	cache = true,
	complete = function(){},
	crossDomian = false,
	global = true,
	//more config
}){
	//do stuff
};

var map = new Map();
map.set('first','hello');
map.set('second', 'world');
for (let [key, value] of map){
	console.log(key + "is" + value);
}
for (let [key] of map){
	//...
}
for (let [, value] of map){
	//...
}

const { SourceMapConsumer, SourceNode } = require("source-map");
console.log(SourceMapConsumer);
console.log(SourceNode);

