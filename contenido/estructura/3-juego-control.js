const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 y 10"));

if (numeroJugador == numeroSecreto) {
    console.log("¡Adivinaste el Numero, Felicidades!")
} else if (numeroSecreto < numeroJugador) {
    console.log("El numero es mas bajo, vuelve a intentarlo")
} else {
    console.log("El numero es muy alto, vuelve a intentarlo")
}
