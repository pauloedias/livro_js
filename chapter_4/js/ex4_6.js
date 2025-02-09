//referência o form e o h3 onde será exibido as respostas
const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

//adiciona o "ouvinte" que vai ser acionado ao clicar o botão de submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    const saque = Number(frm.inSaque.value) //obtém o valor

    if (saque % 10 != 0) {                                      //Verifica se é possível realizar o saque com as cédulas disponíveis
        resp1.innerText = `Não conseguirá realizar o saque no valor de ${saque}`
    } if (saque % 10 == 0){

        let resto = Math.floor(saque / 100)                    //Cálcula a quantidade de notas necessária para o saque
        let resto2 = Math.floor((saque - (resto * 100))/50)
        let resto3 = Math.floor((saque - (resto * 100) - (resto2 * 50))/10)

        if (saque >= 100){
            resp1.innerText = `Notas de R$ 100: ${resto}`
        } if (saque >= 50) {
            resp2.innerText = `Notas de R$ 50: ${resto2}`
        } if (saque >= 10 && saque != 50 && saque != 100) {
            resp3.innerText = `Notas de R$ 10: ${resto3}`   
        }
    }
})

