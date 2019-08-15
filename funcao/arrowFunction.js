let dobro = function (a) {
    return 2 * a
}
//função arrow "mais reduzida" sempre anonima e deve ser armazenada em uma variavel
dobro = (a) => {
    return 2 * a
}
//função implicita return é chamado
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())