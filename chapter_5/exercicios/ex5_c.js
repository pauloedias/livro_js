const frm = document.querySelector("form")       //referencia o form e os h3
const resp1 = document.getElementById("outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value) //obtém os dados

    let divisores = ``                         //declara as variáveis onde serão incluidas as respostas
    let soma = 0

    for(let i = 0; i <= numero; i++){           //Seleciona os divisores do número e faz a soma dos mesmos
        if (i == numero){
            divisores += `Soma: ${soma}`
        }else if (numero % i == 0){
            divisores += `${i}, `
            soma = soma + i
        }
    }

    resp1.innerText = `Divisores do ${numero} : ${divisores}`               
    if (numero == soma){                                                        // verifica se o número é perfeito
        resp2.innerText = `O número ${numero} é um número perfeito!`
    } else {
        resp2.innerText = `O número ${numero} não é um número perfeito!`
    }
    console.log(divisores)
    console.log(soma)
})