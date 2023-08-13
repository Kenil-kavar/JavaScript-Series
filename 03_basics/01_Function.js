function addTwoNum(num1,num2){
//let result= num1 + num2 
//return result
return num1+num2   
}
const result=addTwoNum(5,3)
console.log("Result :",result)

function UserLogedIn(username){
    //if(username===undefined)
    if(!undefined){
        console.log("Please enter your user name")
        return
    }
    return `${username} just logged in`
}
console.log(UserLogedIn("Kenil Kavar"))



// Here ... is a Rest it meansthese open data as a input pack in a bundle and transfer it to the  function
function CalculateCartPrice(...num3){
return num3
}
//console.log(CalculateCartPrice(100,2300,9999))

const user={
    username:"Kenil",
    price:999
}
function handleObject(anyOject){
    console.log(`Username is ${anyOject.username} and price is ${anyOject.price}`)
}

handleObject({
    username:"sam",
    price:399
})

const mynewArray=[100,2000,325,15694]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(mynewArray))