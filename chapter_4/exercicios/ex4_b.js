//referencia o form e o h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//adiciona o "ouvinte" ao botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtém os inputs
    const velocidadePermitida = frm.inVelocidadePermitida.value
    const velocidadeCondutor = frm.inVelocidadeCondutor.value

   if(velocidadeCondutor <= velocidadePermitida){
    resp.innerText = "Situação: Sem Multa!"
   } if (velocidadeCondutor > velocidadePermitida & velocidadeCondutor <= velocidadePermitida * 1.2){
    resp.innerText = "Situação: Multa Leve!"
   } if (velocidadeCondutor > velocidadePermitida * 1.2) {
    resp.innerText = "Situação: Multa Grave!"
   }
})