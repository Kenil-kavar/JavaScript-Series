let a=300
var c= 400
console.log(c)
if (true){
    let a=30
    var c=40
   console.log("INNER: ",a)
console.log(c) 
}


console.log(a)
console.log(c)
a=6
console.log(a)
c=9
console.log(c)




function one()
{
    
    const username="Kenil"
    
    function two()
    {
        
        const website="youtube"
        console.log(username)
        console.log(website)
    }
    //console.log(website)
    two()
    console.log(username)
}
one()

if(true){
    const username="Kenil"
    if(username==="Kenil"){
        const website="Youtube"
        console.log("hello: ",username + website)
    }
    //console.log(website)
}
//console.log(username)
//the lines which are commented gves you error because it is outsidee the block of curly braces

//++++++++++++++++++++++Intresting +++++++++++++++++++++++++++++++++++
console.log(addone(5))//Compare the step 52 and 57 carefully
function addone(num){// this is a function 
    return num+1
}

addtwo(6)// the reason that why we are not able to access it and how to access it that is in upcoming repositeries.
const addtwo= function(num){// thi is a also a one kind a function but sometimess it is also called a expression, these are the two ways to define a function
    return num+2
}