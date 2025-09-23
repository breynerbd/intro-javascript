/**
 *      ESTRUCTURA SWITCH
 */

//Costos de una fruta en la tienda
let comprar = "Manzana"

switch (comprar) {
    case "Naranja":
        console.log("Las Naranjas cuestan Q16 la mano")
        break;
    case "Platano":
        console.log("Los platanos se venden a Q18 la bolsa")
        break;
    case "Manzana":
        console.log("El precio de las manzanas por unidad es de Q5")
        break;
    case "Mango":
        console.log("El precio de los mangos es de Q4")
        break;
    case "Papaya":
        console.log("El precio de las papayas es de Q12")
        break;
    default:
        console.log(`No se encontraron con inventario para ${comprar}`)// `` : Alt + 96
        break;
}