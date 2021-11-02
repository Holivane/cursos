const cliente = {
    nome:'Holivane',
    idade:33,
    cpf:'12546825933',
    email: 'holivane@email.com',
}

const chaves = ['nome','idade','cpf','email']

for (let i = 0; i < chaves.length; i++) {
    console.log (cliente[chaves[i]])    
} 
