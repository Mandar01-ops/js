// Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);

const bigNumber=2874983748768468463847893487837949349n




//Reference Type(Non-Primitive)

// Array, Objects, Functions

const heros=["shaktiman", "batman", "doga"];
let myObj={
    name:"mandar",
    age:21,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);
console.log(typeof bigNumber);

