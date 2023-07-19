const name = "Kenil"
const repoCount = 50

//console.log(name + repoCount + "value")

console.log(`Hello my name is ${name}  and my repo count is ${repoCount} `);

const  gameName= new String("Kenil kavar hello")
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('n'))

const newString= gameName.substring(0,4)
console.log(newString)
const newStrings= gameName.substring(-4,1);
console.log(newStrings)

const newStringOne = "    kenil    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://kenil.com/kenil%20kavar"
console.log(url.replace("%20","-"));

console.log(url.includes("kenil"));
console.log(url.includes("kenilkavar"));

console.log(gameName.split(" "))
console.log(gameName.split("-"))