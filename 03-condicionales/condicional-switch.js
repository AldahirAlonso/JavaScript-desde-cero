let expr = "Papayas"

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo")
        break;
    case "Platanos":
        console.log("El platano cuesta $30 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 pesos")
        break;
    default:
        console.log(`No tenemos ese producto: ${expr}`)   
}