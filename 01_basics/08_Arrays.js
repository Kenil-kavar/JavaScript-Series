// Arrays
const myArray = [1,2,3,4,5,6];
console.log(myArray[2]);

const mycartoons= new Array("Super robot Monkey Team Hyperforce Go","Kiterastu");
console.log(mycartoons[0]);
mycartoons.push(myArray);
console.log(mycartoons);
mycartoons.pop();
console.log(mycartoons);
mycartoons.unshift(9);
console.log(mycartoons);

mycartoons.shift();
console.log(mycartoons);
console.log(mycartoons.includes("Kiterastu"));
console.log(mycartoons.includes(7));

const newcartons= mycartoons.join()
console.log(newcartons);
console.log(typeof newcartons);

console.log("A", myArray);
const myn1 = myArray.slice(1,3);

console.log(myn1);

console.log("B",myArray);
const myn2= myArray.splice(1,3);
// Here in C a part of array is slice of
console.log("C",myArray);
console.log(myn1);
console.log(myn2);