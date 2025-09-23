/**
 * Ejercicios Combinados y Desafíos
 * Ejercicio 23: Escribe una función que determine si una cadena de texto es un
    palíndromo (se lee igual al derecho y al revés).
 */

function palindromo() {
    const palabra = prompt("Ingrese una palabra: ");
    const texto = palabra.toLowerCase();
    let invertida = ""; 
    let original = ""; 

    for (let i = texto.length - 1; i >= 0; i--) {
        if (texto[i] !== " ") {
            invertida += texto[i];
        }
    }

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            original += texto[i];
        }
    }

    if (original === invertida) {
        console.log("es un palíndromo");
    } else {
        console.log("no es un palíndromo");
    }
}