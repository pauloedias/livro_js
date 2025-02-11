const frm = document.querySelector("form")  //referência os elementos form e h3
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {    //adiciona o "ouvinte" ao submit do form
    e.preventDefault()                     //evita o envio do form

    const numero = Number(frm.inNumero.value)   //obtém os valores
    const ano = Number(frm.inAnos.value)

    let chinchilas = numero
    let reposta = ""

    for(let i = 1; i <= ano; i++){
        if(i == 1){
            reposta += (`Ano ${i} : ${chinchilas} chinchilas! \n`)
        } else{
            chinchilas = chinchilas * 3
            reposta += (`Ano ${i} : ${chinchilas} chinchilas! \n`)
        }
    }
    resp.innerText = reposta
})