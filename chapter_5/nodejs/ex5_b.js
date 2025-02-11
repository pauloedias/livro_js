const prompt = require("prompt-sync") ()

const produto = prompt("Produto: ")
const numeroEtiquetas = prompt("Nº de Etiquetas: ")

for (let i = 1; i <= numeroEtiquetas / 2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (numeroEtiquetas % 2 == 1){
    console.log(produto)
}