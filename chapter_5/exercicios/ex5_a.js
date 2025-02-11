const frm = document.querySelector("form") //referência o form e o h3
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => { //"ouvinte" do submit
    e.preventDefault()                  //evita o envio do form

    const fruta = frm.inFruta.value     //obtém os inputs
    const numero = frm.inNumero.value

    let resultado = ""

    for (let i = 1; i <= numero; i++){
        if(i == numero){
            resultado += fruta
            break
        }
        resultado += fruta + " * "
    }

    resp.innerText = resultado
})