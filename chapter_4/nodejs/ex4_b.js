const prompt = require("prompt-sync") () //adiciona o pacote prompt-sync
const valorCompra = prompt("Valor da Compra R$: ") //adiciona a entrada
let numeroParcelas = Math.floor(valorCompra/20)
let valorParcela =  valorCompra/numeroParcelas
if (valorParcela < 20 | numeroParcelas == 0){
    console.log("Não é possível parcelar a compra")
} else if ( numeroParcelas > 6) {
    numeroParcelas = 6
    valorParcela = valorCompra/numeroParcelas
    console.log(`Pode pagar em ${numeroParcelas}x de R$: ${valorParcela.toFixed(2)}`)
} else{
    valorParcela = valorCompra/numeroParcelas
    console.log(`Pode pagar em ${numeroParcelas}x de R$: ${valorParcela.toFixed(2)}`)
}