'use strict'
let [foo, [[bar], baz]] = [1, [[2],3]];
console.log(foo,bar,baz);
let[,,third] = ["foo", "bar", "baz"];
let[x, ,y]=[1,2,3];
var [a,b,c]= [1,2,3];
let[head,...tail]=[1,2,3,4];
let[x,y, ...z]=["a"];
let [x,y] =[1, 2, 3];
let [a, [b], d] = [1, [2,3], 4];
var [v1,v2,...,vN]=array;
let [v1,v2,...,vN]=array;
const [v1,v2,...,vN]=array;
let [x,y,z]= new Set(["a","b","c"]);
var [foo = true] = [false]; //foo=false
[x, y = 'b'] = ['a'];
[x, y = 'b'] = ['a', undefined];
var [x = 1] = [undefined]; //x=1
var [x = 1] = [null]; //x=null
let [x = 1, y = x] = [] // x=1, y=1
let [x = 1, y = x] = [2] // x=2, y=2
let [x = 1, y = x] = [1, 2]; // x=1, y=2
var { foo, bar } = { foo: "aaa", bar: "bbb" };
var { bar, foo } = { foo: "aaa", bar: "bbb" };
var { baz } = { foo: "aaa", bar: "bbb"};
var { foo: baz } = { foo: "aaa"};

let obj = {first: "hello", last: "world"};
let {first: f, last: l} = obj; // f: hello l: world





