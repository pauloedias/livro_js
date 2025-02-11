const prompt = require("prompt-sync") ()

const valorConta = Number(prompt("Valor da Conta R$: "))
const numeroParcelas = Number(prompt("Parcelar em quantas vezes? "))

let valorParcela = valorConta/numeroParcelas
let centavos = 0

for(let i = 1; i <= numeroParcelas; i++){
    if(i == numeroParcelas){
        console.log(`${i}ª Parcela: ${(valorParcela + centavos).toFixed(2)}`)
        break
    }
    centavos += (valorParcela - Math.floor(valorParcela))
    console.log(`${i}ª Parcela: ${Math.floor(valorParcela).toFixed(0)}`)
}