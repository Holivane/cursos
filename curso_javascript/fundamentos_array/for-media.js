const notas = [10,6.5,8,7.5] 

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
   somaNotas += notas[i];
   console.log(somaNotas) // imprime a soma conforme ela acontece
}

let media = somaNotas/notas.length // média das notas

console.log(`A média das notas é ${media}.`) // resposta final

// usando a função forEach
let soma = 0

notas.forEach(notas => {
   soma += notas
   console.log(soma) // imprime a soma conforme ela acontece
});

let media2 = soma/notas.length // média das notas

console.log(`A outra média é ${media2}.`) // resposta final