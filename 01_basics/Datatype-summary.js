//Primitive

//7 type: string, null, undefined, symbol, number, Boolean, Big int

const score=100
const scoreValue= 100.3
const isLoggedin=false
const outsidetemp=  null;
let userEmail;

const Id= Symbol('123');
const symbolId= Symbol('123');
console.log(Id===symbolId);

const bigInt= 34634654321365312531n

// Reference(Non primitive)

// Array, Object, Function
const heros=["shaktiman","naagraj","doga"]

let myObj={
    name: "kenil",
    age:19,
}

const myFunction= function(){
    console.log("hello World");
}

console.log(typeof myFunction)

// Go to MDN reference and refer type of results table that is important for interview point of view.
// in interview it is asked what is  the type of results etc

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName= "Kenilkavardotcom"

let anotherName= myYoutubeName;
anotherName="chaiaurcode"

console.log(anotherName)
console.log(myYoutubeName)

let userOne= {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email="kenil@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

