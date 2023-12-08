/*Scopes and closers */

/*function foo()
{
    console.log("function foo called");
}

var bar = function()
{
    console.log("function bar called");
};

foo();

bar();*/

//creating the scopes javaSCRIPT DOES THE FUNCTION SCOPING NOT THE BLOCK SCOPING

// creating scope using block scoping
/*var name="Rahul";

if(name === "Rahul")
{
    var department = "Engineering";
}

console.log(name);
console.log(department);

//creating the scope using function call

var name ="Rahul"

function allocateDepartment()
{
    if(name === "Rahul")
    {
        var department = "Engineering";
    }
}

allocateDepartment();
console.log(department);//this leads to error because of the scope

var top =10;
var inner =50;

function foo()
{
    var inner =20;
    console.log(inner);
}

foo();

console.log(inner);

function myFun(){
    var a=10;
var b=10;
console.log(a+b);
}

myFun();

var name ="Rahul";

function printGreeting(name) {
    console.log("Hello "+name);
}

printGreeting("Aruther Dent");


function myFun(){
    var a=10;
var b=10;
console.log(a+b);
}

myFun();

//the above structure is same as the above functions 

//Immediatly invoked function expression(IIFE)

(function ()// we can anonymous
{
var a = 10;
var b = 20;
console.log(a+b);
})();*/

/*
// read and write operations 
var a = 10;
var b;
b=a;

function greet(name)
{
    console.log(name);
}

greet("Rahuls");


//global object 

var abc =100;
var def ="hello window object";

function myFunc(){
    console.log("hello");
}*/

 /*

 // understanding of the compilation and interpretation step
 var a =10;

 function myFn(){
    var b=20;
    var c =10;
    console.log(a+b);
 }

 myFn();

var a = 10;;
function outer(){
    var b = a;
    console.log(b);
    function inner()
    {
        var b = 20;
        var c = b;
        console.log(c);
    }
    inner();
}

outer();

function fnA()
{
    fnB();
}

function fnB(){
    fnA();
}*/

/*
//Closure example

var a =10;

function outer(){
    var b =20;

    var inner = function()
    {
        a++;
        b++;
        console.log(a);
        console.log(b);
    }
    return inner;
}
var innerFn = outer();

innerFn();

var innerFn2 = outer();

innerFn2();*/

/*var person = {
    "firstName" : "Rahul",
    "lastName" : "Shenoy",
    "getFirstName": function() {
        return this.firstName;
    },
    "getLastName" : function() {
        return this.Name 
    }
}

function createPerson() {
    var returnObj = {
    "firstName" : "Rahul",
    "lastName" : "Shenoy",
    "getFirstName": function() {
        return this.firstName;
    },
    "getLastName" : function() {
        return this.Name
    }
};
    return returnObj;
}

var person = createPerson();

var i;

var print = function() {
    console.log(i);
}

for(i=0;i<10;i++){
    //setTimeout(print,1000);
    print();
}

var i;

for(i=0;i<10;i++){
    (function() {
        var currentValueOfI =i;
        setTimeout(function() {
            console.log(currentValueOfI);
        }, 1000);
    })();
}
    
var i;

for(i=0;i<10;i++){
    (function(currentValueOfI) {
        
        setTimeout(function() {
            console.log(currentValueOfI);
        }, 1000);
    })(i);
}*/

 
 
  
