const notas = [10, 6.5, 8 ,7.5]
let media1 = 0

for (let i = 0; i < notas.length; i++) {
  media1 += notas[i]/notas.length;
  console.log(media1)
}

console.log(media1)

const nota1 = [10 , 6.5, 8 ,7.5]
const nota2 = [9  , 6  , 6]
const nota3 = [8.5, 9.5]

const notasGerais = [nota1,nota2,nota3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }

console.log(`A média é ${media}`)  

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais2 = [notas1,notas2,notas3]

let media2 = 0

for (let i = 0; i < notasGerais2.length; i++) {
  for (let j = 0; j < notasGerais2[i].length; j++) {
    media2 += notasGerais2[i][j]/notasGerais2[i].length;
  }
}

media2 = media2/notasGerais2.length

console.log(`A segunda média é ${media2}`)

