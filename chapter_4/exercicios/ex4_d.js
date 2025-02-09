//referencia o forms e os h3 onde vão ser exibidas as respostas
const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

//ouvinte
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    //obtém os valores dos inputs
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    //condições para formar um triângulo
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
        resp1.innerText = "Lados podem formar um triângulo!"
        //condições para tipo do triângulo
        if (ladoA === ladoB && ladoB === ladoC) {
            resp2.innerText = "Tipo: Equilátero"
        } else if (ladoA != ladoB && ladoB != ladoC){
            resp2.innerText = "Tipo: Escaleno"
        } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
            resp2.innerText = "Tipo: Isósceles"
        }
    } else {
        resp1.innerText = "Lados não podem formar um triângulo!"
    }
})