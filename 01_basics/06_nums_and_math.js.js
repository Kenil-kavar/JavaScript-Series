const score= 400
console.log(score)
const balance = new Number(100);
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumbers = 6623.8966;
console.log(otherNumbers.toPrecision(5))

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"))

//+++++++++++Math+++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.max(4,3,8,9));
console.log(Math.min(4,3,8,9));
console.log(Math.random());
console.log(Math.random()*10 +1);

const min=10;
const max=20;

Math.random()

console.log(Math.floor(Math.random()* (max-min +1)+ min));