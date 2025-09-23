/**
 * Ejercicios Combinados y Desafíos
 * Ejercicio 21: Escribe una función que reciba un arreglo de números y retorne un
    nuevo arreglo con solo los números pares.
 */

function soloPares() {
  function pares(numeros) {
    let pares = ""

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        if (pares !== "") {
          pares += " " 
        }
        pares += numeros[i];
      }
    }

    console.log("Números: " + numeros)
    console.log("Solo pares: " + pares)
  }

  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8]
  pares(arreglo)
}