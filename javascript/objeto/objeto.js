const listaCPFs = ['12365242625', '9242624265']
// const cliente = ['nome', 'André','idade','36']

const cliente = {
    nome:'Holivane',
    idade:33,
    cpf:'12546825933',
    email: 'holivane@email.com',
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`Meu CPF é: ${cliente.cpf.substring(0,3)}.***.***-**`)