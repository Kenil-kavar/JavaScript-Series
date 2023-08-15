const user={
    username:"Kenil  Kavar",
    price:9999,
    
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
 user.username= "sam"
user.welcomeMessage()
console.log(this)

 function chai(){
     const username= "Kenil Kavar"
    console.log(this.username)// This refer the corrent context
}
chai()

 const chai=function(){
    const username= "Kenil Kavar"
     console.log(this.username)
 }
 chai()

const chai= () => {
    let username= "Kenil Kavar"
     console.log(this.username)
 }
 chai()

 const addTwo=(num1,num2) =>{
     return num1+ num2
 }
 console.log(addTwo(5,4))

const addTwo2=(num1,num2) => num1+ num2// if we apply {} then returnstatement  is mandentary otherwise not
console.log(addTwo2(7,4))
const addTwo3=(num1,num2) =>(num1+ num2)
console.log(addTwo3(7,4))
const addTwo1 =(num1,num2) =>({ username:"Kenil Kavar"})// to run an objct using ()
console.log(addTwo1(4,3))

const myArray=[1,2,3,4,5]
myArray.forEach( () => {})

