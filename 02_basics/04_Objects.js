const tinderUser= new Object(); // Here this is a singleton object.
const tinderUser1= {};         // here this is a non singleton object.
tinderUser1.id=="123abc";
tinderUser1.name="sammy";
tinderUser1.isLogedIn= false;


//console.log(tinderUser);
//console.log(tinderUser1);

const regularUser={
    email:"some@gail.com",
    fullname:{
        userfullname:{
            firstname:"Kenil",
            lastname:"Kavar",

        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

//const obj3={obj1,obj2};
//const obj3= Object.assign({},obj1,obj2);// Here the {} are working as an empty objects. 
//the value of object 1 and 2 targets the {} and then transfer it to the obj3.
//console.log(obj3);
//const obj3= {...obj1,...obj2};// Here ... Operator is working as an spread operator
//console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
users[1].email
console.log(tinderUser1)

console.log(Object.keys(tinderUser1))
console.log(Object.values(tinderUser1))
console.log(Object.entries(tinderUser1))

console.log(tinderUser1.hasOwnProperty("isLogedIn"));


const course={
    coursename:"JS in hindi",
    price:999,
    courseInstructor:"Hitesh"
}
const {courseInstructor:instructor}= course// here we have given instructor as a name to courseInstructor
//console.log(courseInstructor)
console.log(instructor)
console.log(course.price)
