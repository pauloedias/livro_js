const frm = document.querySelector("form")          //obtem os elementos da página  
let resp1 = document.getElementById("outErros")
let resp2 = document.getElementById("outChances")
let resp3 = document.getElementById("outDica")

const numero_adivinhar = (Math.floor(Math.random() * 100)) + 1
let chances = 5
resp2.innerText = `Chances: ${chances}`

console.log(numero_adivinhar)

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita que o form seja enviado

    let numero = frm.inNumero.value          //obtém o número escolhido

    if (chances == 0) {
        resp3.innerHTML = `<i>Acabaram as chances</i>`
    } else if (numero < numero_adivinhar && chances > 0) {
        chances = chances -1
        resp2.innerText = `Chances: ${chances}`
        resp3.innerHTML = `<i>O número é maior que ${numero}</i>`
    } else if (numero > numero_adivinhar && chances > 0) {
        chances = chances -1
        resp2.innerText = `Chances: ${chances}`
        resp3.innerHTML = `<i>O número é menor que ${numero}</i>`
    } else if (numero == numero_adivinhar){
        resp2.innerText = `Chances: ${chances}`
        resp1.innerText = "Parabéns você acertou!"
    }
})
