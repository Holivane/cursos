const cliente = {
    nome: 'Holivane',
    idade: 33,
    cpf: '25465832525',
    email: 'holivane@email.com',
    fones: ['11954585747', '11925654525'],
    dependentes: [
        {
            nome: 'Liah',
            parentesco: 'filha',
            dataNasc: '11/07/2021'
        },
        {
            nome: 'Alexandre',
            parentesco: 'marido',
            dataNasc: '03/09/1985'
        }]
}

let relatorio=""

for (let info in cliente){
    if (typeof cliente[info]==='object'||typeof cliente[info]==='function'){
        continue
    } else {
        relatorio += `
        ${info} -> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)