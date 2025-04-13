const readline = require('readline-sync')
function NumeroalAlzar(NumeroMinimo, NumeroMaximo) {
    return Math.floor(Math.random() * (NumeroMaximo - NumeroMinimo + 1)) + NumeroMinimo
}
let NumeroMinimo = Number (readline.question("establezca un numero de inicio: "))
let NumeroMaximo = Number (readline.question("establezca un numero de final: "))
console.log(`Su número generado fue: ${NumeroalAlzar(NumeroMinimo, NumeroMaximo)}`)
