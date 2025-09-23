/**
 *      OPERADORES DE COMPARACIÓN
 */

//==  : igualdad
//=== : para comparar igualdad en valor y en tipo de dato
//!=  : es diferente a, true o false
//!== : es diferente en valor y en tipo de dato

// <  : menor que
// >  : mayor que
// <= : menor e igual que

const a = 10;
const b = 20;
const c = "10"

console.log(a == b) //false
console.log(a === c) //false
console.log(a == c) //true
console.log(a != c) //false -> si se interpreta como iguales
console.log(a !== c) //true -> 