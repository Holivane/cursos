class cliente{
    constructor (nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const holivane = new cliente ('Holivane', 'holivane@rmail.com','52456514522',200)

console.log(holivane)