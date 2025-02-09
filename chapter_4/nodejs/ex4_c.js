const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync
const numero = Number(prompt("Número (centena): ")) //recebe um número de entrada

if (numero < 100 | numero > 999){
    console.log("O número não é uma centena!")
}

const num1 = Math.floor(numero/100) //obtém o 1º número
const sobra = numero%100 //o que sobra é a dezena
const num2 = Math.floor(sobra/10) //obtém o 2º número
const num3 = sobra%10             //obtém o 3º número
console.log(`Invertido: ${num3}${num2}${num1}`) //exibe o número invertido