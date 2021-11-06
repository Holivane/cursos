const idades = [30, 35, 28]
const nomes = ["Ana", "Juliana", "Leonardo"]
const faculdade = [false, true, true]

const funcionarios = [nomes,idades,faculdade]

for (let x = 0; x < funcionarios.length; x++) {
    console.log(`A funcionária ${funcionarios[0][x]} tem ${funcionarios[1][x]} anos.
    Férias vencidas? Resposta: ${funcionarios[2][x]}
    
    `)
}




