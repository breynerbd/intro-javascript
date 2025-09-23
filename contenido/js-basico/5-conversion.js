const string = '54'
const integer = parseInt(string)
//console .log(string)
//console.log(integer)

const flotante = parseFloat("3.14159")
//console.log(typeof flotante)

const binario = 1010
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = "CAFE"
const decimalh = parseInt(hexa, 16)
//console.log(decimalh)

//Implicit Type Casting
const resultado = "5" + 3
//console.log(resultado)
//console.log(typeof resultado)

const sumaBooleana = "3" + true
//console.log(typeof sumaBooleana)

const sumaConEntero = true + 2
//console.log(typeof sumaConEntero)

const valorString = '29'
const valorNumber = 11
const valorBoolean = true
console.log(valorString + valorString)//concatenar
console.log(valorString + valorNumber)//concatenar
console.log(valorString + valorBoolean)//concatenar

console.log(valorNumber + valorNumber)//sumar
console.log(valorNumber + valorString)//concatenar
console.log(valorNumber + valorBoolean)//sumar

console.log(valorBoolean + valorBoolean)//sumar
console.log(valorBoolean + valorNumber)//sumar
console.log(valorBoolean + valorString)//concatenar