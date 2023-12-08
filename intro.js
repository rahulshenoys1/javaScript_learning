/*var a;
console.log(typeof a);
a =10;
console.log(typeof a);
a= "hello"
console.log(typeof a);
a= true;
console.log(typeof a);
a=null;
console.log(typeof a);

var a=10;

//var b=10;
var b="10";
//if(a==b)
if(a===b)
{
    console.log("values are equal");
}

//var a =10;

var a=undefined;

if(a)
{
    console.log("values are equal");
}
else 
{
    console.log("a is false");
}*/

 /*var myString ="hello";

 var myObj = {};

 console.log(myObj);

 myObj.prop ="hello";

 console.log(myObj);

 myObj.prop2 =123;

 console.log(myObj);

 console.log("the number property is "+myObj.prop2);

 var myString = "hello";
 
 var myObj = {
    "prop":"Hello", 
    "prop1": 123,
    "prop2":true
 };

 console.log(myObj);

 console.log("The number property "+myObj.prop1);

 console.log("Accessing property that doesn't exist gives "+myObj.prop3);

 var myString = "hello";
 
 var myObj = {
    "prop":"Hello", 
    "prop1": 123,
    "prop2":true
    //"1":"one"
 };

 console.log(myObj);

 console.log("The number property "+myObj.prop1);

 console.log("accessing using square bracket notation "+myObj["prop1"]);

 console.log(myObj["1"]);

 var myObj = {
   "prop":"Hello", 
   "prop1": 123,
   "prop2":true
   //"1":"one"
};

var propertyName ="prop1";

console.log(myObj[propertyName]);*/
 /*var myObj = {
    "prop" : "hello",
    "prop1": 123,
    "prop3":true,
    "objProp":{
        "innerProp":"Inner property"
    }
};

console.log(myObj.objProp);

myObj.objProp.newInner = "new inner value";

//console.log(myObj);

console.log(myObj.objProp["newInner"]);

var myObj = {
    "myProp":"Hello"
};

var myObj2;
myObj2 = myObj;

console.log(myObj2.myProp);

if(myObj === myObj2) {
    console.log("variable are equal");
}*/

  /*var person = {
    'firstName':'Rahul',
    'middleName':null,
    'lastName':'Shenoy',
    'age':25
  };

  //remove the object

  delete person.age;

var myArray =["Hello","world","Js"];


console.log(myArray[0]);

var myArray = ["Hello", "world","js"];

console.log(myArray.length);

function sayHello(name,timeofDay)
{
    console.log('hello ' +name + " Time of day is "+ timeofDay);
}

sayHello("Rahul","afternoon");*/

/*function sayHello(name,timeofDay)
{
    console.log('hello ' +name + " Time of day is "+ timeofDay);
}

var returnValue = sayHello("Rahul","afternoon");
console.log(returnValue);

var a="Hello";

var f = function foo()
{
    console.log("hello");
}

f();


var f = function (name)
{
    console.log("hello "+name);
}

var executor = function (fn,name)
{
    fn(name);
}

executor(f,"Rahul");

var myObj = {
    "testProp" : true
};

myObj.myMethod = function ()
{
    console.log("function in object");
};

myObj.myMethod();

var person ={
    'firstname': 'Rahul',
    'lastname': 'Shenoy',
    'getFullName': function() {
        return person.firstname+ " "+ person.lastname;
    }
};

var fullName = person.getFullName();

console.log(fullName);

var person2=person;

person = {};

person2.getFullName();*/

/*var person ={
    'firstname': 'Rahul',
    'lastname': 'Shenoy',
    'getFullName': function() {
        return this.person.firstname+ " "+ this.person.lastname;
    },
    "address" : {
        "street": "123 JS Street",
        "City": "JS",
        "state": "CA"
    },
    "isFromState":function(state){
        return(this.address.state ===state)
       
    }

};

console.log(person.isFromState("ca"));*/

/*var add = function(a,b) {
    console.log(arguments);
    return a+b;
};

console.log(add(10,30,3,2,4,5));

var add = function() {
   var i,sum=0;
   for(i=0;i<arguments.length;i++)
   {
    sum +=arguments[i];
   }
   return sum;
};

console.log(add(10,30,3,2,4,5));

var myArray = [10,20,"Hello", {}];

myArray.push(10);

console.log(myArray.length);
console.log(myArray);

myArray.pop();

console.log(myArray.length);
console.log(myArray);

myArray.shift();

console.log(myArray.length);
console.log(myArray);

myArray.unshift("yeah");

console.log(myArray.length);
console.log(myArray);

var myArray = [10,20,"Hello", {}];

myArray.forEach(function(item)
{
    console.log("for an element: "+item);
});*/

