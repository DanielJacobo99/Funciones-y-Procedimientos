const readline = require('readline-sync')

function palabraMasLarga(cadena) {
    let palabras = cadena.split(" ")
    let palabraLarga = ""

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra
        }
    }

    return palabraLarga
}
let cadena = readline.question("Introduce una cadena de texto: ")
console.log("La palabra más larga es: " + palabraMasLarga(cadena))
