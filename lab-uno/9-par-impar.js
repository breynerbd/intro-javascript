/**
 * Ejercicios de Condicionales (if/else)
 * Ejercicio 9: Crea un programa que determine si un número es par o impar.
 */

function verificarParImpar() {
    const numero = parseInt(prompt("Ingrese el número a verificar: "));
    if (numero % 2 === 0) {
        console.log("-------------");
        console.log("El número es par");
        console.log("-------------");
    } else {
        console.log("------------------");
        console.log("El número es impar");
        console.log("------------------");
    }
}

verificarParImpar();