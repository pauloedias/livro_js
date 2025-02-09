document.getElementById("botao").addEventListener("click", function(){
    //declaração dos inputs como variáveis
    const nomeFilme = document.getElementById("nomeFilme").value;
    const duracaoFilme = document.getElementById("duracaoFilme").value;

    //Calculo da duração do filme em min e horas.
    let duracaoMin = (Number(duracaoFilme))%60;
    let duracaoHoras = (Number(duracaoFilme)-duracaoMin)/60;

    //Selecionando os elementos h2 e h3
    const newH2 = document.querySelector("h2");
    const newH3 = document.querySelector("h3");

    //Atribuindo entradas aos elementos h2 e h3  
    newH2.innerText = nomeFilme;
    newH3.innerText = `O filme dura ${duracaoHoras} horas e ${duracaoMin} minutos!`;
})