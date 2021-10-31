const alunos = ['João','Juliana','Ana','Caio','Lara','Marjore','Guilherme','Aline','Fabiana','André','Carlos','Paulo','Bia','Vivian','Isabela','Vinicios','Renan','Renata','Daisy']
const medias = [6,5,7,8,4,9,8,6,8,4,8,9,9,8,6,7,8,9,5]

let listaAlunosENotas = [alunos,medias]

const exibeNomeNota = (nomeAluno) => {
    if (listaAlunosENotas[0].includes(nomeAluno)) {
        let indice = listaAlunosENotas[0].indexOf(nomeAluno)
        return listaAlunosENotas[0][indice] + ', sua média é ' + listaAlunosENotas[1][indice] + '.'
    } else {
        return "Aluno sem média cadastrada!"
    }
}

console.log(exibeNomeNota("Ale"))