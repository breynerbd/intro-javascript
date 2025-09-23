/**
 * Ejercicios de Condicionales (if/else)
 * Ejercicio 4: Escribe una función que tome una cadena de texto y verifique si su
    longitud es mayor a 5 caracteres.
 */

function cadenaLongitu() {
  const texto = prompt("Ingrese el texto a calcular: ");
  if (texto.length > 5) {
    console.log("-------------------------------------------")
    console.log("La cadena tiene mas de 5 caracteres")
    console.log("-------------------------------------------")
  } else {
    console.log("-------------------------------------------")
    console.log("La cadena tiene 5 o menos caracteres")
    console.log("-------------------------------------------")
  }
}
