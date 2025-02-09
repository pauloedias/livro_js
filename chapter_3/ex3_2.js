const prompt = require("prompt-sync")()    //adiciona o pacote ao programa
const veiculo = prompt("Veículo: ")       //lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.5               //Calcula o valor de entrada
const parcela = (preco * 0.5) / 12        //Calcula o valor das parcelas
console.log(`Promoção: ${veiculo}`)       //Exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$: ${parcela.toFixed(2)}`)