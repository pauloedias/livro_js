const prompt = require("prompt-sync")() //adiciona o pacote ao programa
const pesoRacao = prompt("Peso da Ração (kg): ") //lê os dados de entrada
const gatoConsumo = prompt("Consumo Diário (g): ")
const pesoRacaoGramas = pesoRacao * 1000 //converte o peso da ração em gramas
const diasRacao = pesoRacaoGramas / gatoConsumo  
const sobraRacao = pesoRacaoGramas - (Math.floor(diasRacao) * Number(gatoConsumo))
console.log(`Duração: ${Math.floor(diasRacao)} dias`)
console.log(`Sobra: ${sobraRacao}g`)