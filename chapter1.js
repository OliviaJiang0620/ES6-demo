'use strict'
var arr=[0,1,2,3,4];
for (let i=0; i<arr.length; i++){
	console.log(i)
}

var a = [];
for (var i=0; i<10; i++){
	a[i] = function () {
		console.log(i);
	};
}
a[6]();

var b=[];
for (let i=0; i<10; i++){
	b[i]=function(){
		console.log(i);
	};
}
b[6]();

var tmp=123;
if(true){
	let tmp;
	tmp='abc';
	console.log(tmp)
}
console.log(tmp)

var tmp = new Date();
function f(){
	console.log(tmp);
	if(true){
		var tmp= "hello world"
	}
}
f()

var s = 'hello';
for(var i=0; i<s.length; i++){
	console.log(s[i]);
}
console.log(i);

function f1(){
	let n=5;
	if(true){
		let n=10;
		console.log(n);
	}
	console.log(n);
}
f1();

function f1(){
	var n=5;
	if(true){
		var n=10;
	}
	console.log(n);
}
f1();

{{{{
  {let insane = 'Hello World'
  		console.log(insane);
	}
}}}};

{{{{
  let insane0 = 'Hello World';
  console.log(insane0);
  {let insane0 = 'Hello World';
		console.log(insane0);
	}
}}}};

function f(){
	console.log('I am outside!')
}
(function(){
	if(false){
		function f(){
			console.log('I am inside!');
		}
	}
	f();
}());

{
	let a='secret';
	function f0(){
		return a
	}
	console.log(f0());
}

let f2;
{
	let a = 'secret';
	f2 = function(){
		return a;
	}
}
console.log(f2());

const foo={};
foo.prop=123;
console.log(foo);

const a0=[];
a0.push("hello");
a0.length=0;
console.log(a0);
console.log(a0.length);

var a1=[];
a1.push('haha');
console.log(a1);
a1.length=0;
console.log(a1.length);
console.log(a1);

/*var constantize = (obj) => {
	Object.freeze(obj);
	Object.keys(obj).forEach((key, value) => {
		if(typeof obj[key] === 'object'){
			constantize(obj[key]);
		}
	});
}*/
