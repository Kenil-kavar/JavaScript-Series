// singleton
// Object.create

// Object literals
const mysym= Symbol("key1");
 const jsUser={
    name:"KenilKavar",
    "full_name":"Keni Kavar G",
    [mysym]:"mykey1",
    age: 20,
    location:"Ahmedabad",
    email:"kenil@google.com",
    isLogedIn: false,
    lastLogedIn:["Sunday","Friday"]
 };
 console.log(jsUser.email);
 //console.log(jsUser["email"]);
 //console.log(jsUser."full_name");
 //console.log(jsUser[mysym]);

 jsUser.email="Kenil@chatgpt.com"
//Object.freeze(jsUser);
jsUseremail="hello@gmail.com";
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingtwo = function(){
    console.log("Hello js user, ${this.name}");
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
