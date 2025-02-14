const frm = document.querySelector("form") //obtém dados do form
const resp = document.querySelector("h3")

  let cripto1 = ""
  let cripto2 = ""

frm.btCriptografar.addEventListener("click", () => {
  
  cripto1 = ""
  cripto2 = ""

  const mensagem = frm.inMensagem.value  //pega o valor do input
  mensagem.trim()
  const tamanho = mensagem.length       //obtém o tamanho da string

  for(let i = 0 ; i < tamanho; i++){ //verifica os indices impares e adiciona a mensagem
    if((i % 2) != 0){     
        cripto2 += mensagem[i]
    }
  }

  for(let i = 0 ; i < tamanho; i++){ //verifica os indices pares e adiciona a mensagem
    if((i % 2) == 0){     
        cripto1 += mensagem[i]
    }
  }
  resp.innerText = cripto2 + cripto1
  return cripto1, cripto2
})

frm.btDescriptografar.addEventListener("click", () => {
    let descripto = ""
    const mensagem1 = cripto1          //pega o texto criptografado
    const mensagem2 = cripto2
    const tamanho1 = mensagem1.length          //tamanho do texto
    const tamanho2 = mensagem2.length

    for(i = 0; i < tamanho2; i ++){
      descripto += mensagem1[i] + mensagem2[i]
      console.log(descripto)
      }
    resp.innerHTML = descripto
})