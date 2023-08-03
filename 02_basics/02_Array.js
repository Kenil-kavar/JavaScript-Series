const marvel_heros= ["Thor","Ironman","Blackwidow"];
const DC_heros= ["Superman","Flash","Batman"];

//marvel_heros.push(DC_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const all_heros= marvel_heros.concat(DC_heros);
console.log(all_heros)
//Here above and below both the methods do the same thing
const all_new_heros=[...marvel_heros,...DC_heros];
console.log(all_new_heros);

const another_array= [1,2,3,[4,5,6],7,[8,[4,7]]];
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("KenilKavar"));
console.log(Array.from("KenilKavar"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));