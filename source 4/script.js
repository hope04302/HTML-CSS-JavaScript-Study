var x = "Hello World!";
var message = "in global";
console.log("gloval: message = " + message);

/*

선언: var & function

NULL, Boolean, Object, Number(only float), string, ...

** undefined도 있으나, 주의해서 사용

대표적 함수: console.log();

NaN 존재(ex. undefined / 5, 함수에 인자 안 넘김)

"4" == 4임. -> === 사용하기도

(특히 return문에서는) K&R style 쓰기

*/

var a = function (t) {
    if(x == undefined) {
        console.log(t + " is undefined")
    }
    else
    {
        console.log(t + " is not undefined")
    }
}

a(x)

console.log("1. " + ("hello" || ""))
console.log("2. " + ("" || "hello"))
console.log("3. " + (1 || 2))

/* 

객체(object) : var a = new Object();

이름 정할 때 만약 띄어쓰기가 있다면 -> a.b 대신 a["b"]로

함수(function): .toString(), .version 등과도 쓰임
특수 확장 가능

*/

var company = new Object();
company.name = "Facebook";
company.name = new Object();
company.name.a = "ki";
console.log(company);
console.log(company["name"]);

var newCompany = {
    name: "Instargram",
    favColor: "yellow",
    creator: {
        number: 100,
        name: "hello"
    }
};

console.log(newCompany);


function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x
    }

    return myFunc;
}

var a = makeMultiplier(3);
console.log(a);

function doOperationOn(x, operation) {
    return operation(x);
}

var b = doOperationOn(2, a);
console.log(b);

/*

call by value vs. call by reference

var a = 3;
var b = a;  // call by value

var a = {x: 5};
var b = a;  // call by reference

*/

var a = 3;
var b = a;
var a = 5;
console.log("a b:", a, b);

var a = {call: 5};
var b = a;
a["call"] = 3;
console.log("a b:", a, b);

console.log("---------------------");

function test() {
    this.yahoo = "a";
}

test();
console.log(window.yahoo);

/*

prototype:
(쉽게 말하자면) 어딘가에 같이 쓸 것들 모아두고,
함께 사용 가능

*/
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

Circle.prototype.newGetArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
var myOtherCircle = new Circle(15);
console.log(myCircle);
console.log(myCircle.getArea());
console.log(myOtherCircle.getArea());
console.log(myCircle.newGetArea());


var litteralCircle = {
    radius: 10,
    getArea: function () {
        var increaseRadius = function () {
            this.radius = 20;   /* [주의] 전역변수가 수정됨. */
        }
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

var litteralCircle2 = {
    radius: 10,
    getArea: function () {
        var self = this;    /* 해결하는 방법(꼼수?) */
        var increaseRadius = function () {
            self.radius = 20;
        }
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(litteralCircle.getArea());
console.log(litteralCircle2.getArea());


console.log("-------------------------")

/*

배열(array) : var name = new Array();
(array).length 기능 있음.

cf) 파이썬 느낌?의 in 사용하는 for loop 쓸 수 있음
(단, var i in array에서 i는 소속 객체가 아닌 숫자임.
    range(len(array))와 비슷한 듯, 물론 다른 점도 있음)

*/

var array = new Array();
array[0] = "abc";
array[1] = 1;
array[2] = function (name) {
    return name;
};
array[3] = {course: ",,,"};

console.log(array);

var array2 = ["aaa", "bbb", "ccc"];
console.log(array2.length);

for (var prop in array2) {
    console.log("name:", array2[prop]);
}

/* 이것도 됨 */
array2.gretting = "Hi"
for (var prop in array2) {
    console.log("name:", [prop]);
}

console.log("-------------------------")

/*

클로저(closures)
함수 생성기?

*/

function calc (multi) {

    function b () {
        console.log("multi is: " + multi);
    }
    b();

    return (
        function (x) {
            return multi * x;
        }
    );
}

var abc = calc(3);
console.log(abc(10));

/*

네임스페이스(namespace) 흉내내기
객체에 소속된 인스턴스로 표현

*/
var scriptjs = {};
scriptjs.name = "John";
scriptjs.hello = "Hi";

var scriptjs2 = {};
scriptjs2.name = "Kevin";
scriptjs2.hello = "Hello";

console.log(scriptjs.name);
console.log(scriptjs2.name);

/* 함수 선언법 */
(function () {
    console.log("hello! hi!")
}) ();

/* 이렇게도 */
(function () {  /* window를 매개변수로 넣기도 */
    var greeter = {};   // 외부에 노출하고픈 것들
    greeter.name = "yaakov";
    var greeting = "hello ";    // 그러지 않는 것들
    greeter.sayHello = function () {
        console.log(greeting + greeter.name);
    }

    window.greeter = greeter;
})();   /* window를 매개변수로 넣기도 */
greeter.sayHello();

console.log("-------------------------");