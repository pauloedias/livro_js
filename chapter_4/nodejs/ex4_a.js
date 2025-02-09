const prompt = require("prompt-sync") () //adiciona o pacote prompt-sync
const pessoas = prompt("Nº de Pessoas:")
const peixes = prompt("Nº de peixes: ")
const entrada = 20
let valorPagar  //declara variável pagar
if (peixes <= pessoas){                 //define a formula de cálculo
    valorPagar = entrada * pessoas
} else {
    valorPagar = (entrada * pessoas) + (12 * (peixes - pessoas))
}
console.log(`Pagar R$: ${valorPagar.toFixed(2)}`) //exibe o valor a ser pago
