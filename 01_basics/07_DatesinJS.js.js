//Dates
let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

//let myCreatedDate= new Date(2023,0,23,5,9);
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate= new Date("2023-01-17");
console.log(myCreatedDate.toLocaleString());
let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate.getMonth());
newDate.toLocaleDateString('default',{
weekday: "long"
})