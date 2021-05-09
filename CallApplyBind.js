//1 CALL
var obj = {num : 10};

var objectSum = function(a, b, c) {
    return this.num + a + b + c;
}

console.log(objectSum.call(obj, 20 , 30, 40 )); // functionName.call(object, functionArgument)

//2 APPLY
var arr = [20,30,40];
console.log(objectSum.apply(obj, arr));

//3 BIND
var bound = objectSum.bind(obj);
console.log(bound(20,30,40));

// 4
var student = {age: 20};
var readAge = function(){
    return this.age;
}

var bound = readAge.bind(student);
console.log(`Age is ${bound()}`);


// CURRYING BY BIND
let multiply = function(x, y){
    console.log(x * y);
}

let multipyByTwo = multiply.bind(this, 2);
multipyByTwo(5);

let multipyByThree = multiply.bind(this, 3);
multipyByThree(5);

// CURRYING BY CLOSURES
let multiply = function(x){
    return function(y){
        console.log(x * y);
    }
}

let multipyByTwo = multiply(2) ;
multipyByTwo(5);

let multipyByThree = multiply(3) ;
multipyByThree(5);
