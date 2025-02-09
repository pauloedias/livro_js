const prompt = require("prompt-sync")()                                                     //adiciona o pacote ao programa
const salario = prompt("Digite o seu salário: ")                                            //recebe os dados
const anos_de_trabalho = prompt("Digite a quanto tempo o funcionário trabalha na empresa:")
const numero_quadrienios = Math.floor(anos_de_trabalho/4)                                     //calcula o número de quadriênios trabalhados
const salario_atual = (1 +(numero_quadrienios * 0.01)) * salario                                 //calcula o salário atual baseado no número de quadriênios
console.log(`O número de quadriênios trabalhados é de: ${numero_quadrienios}`)              //mostra os resultados
console.log(`O salário atual é de R$: ${salario_atual.toFixed(2)}`)