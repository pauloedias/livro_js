const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após digite 'Fim' no nome para sair")
const alunos = []

do{
    const nome = prompt("Nome do Aluno: ")
    if(nome == "Fim" || nome == "fim"){
        break
    }
    const nota = Number(prompt("Nota do Aluno: "))
    alunos.push({nome, nota})
    console.log("Ok! Aluno(a) cadastrado(a)...")
} while(true)
