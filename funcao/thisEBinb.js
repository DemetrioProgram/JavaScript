const pessoa = {
    saudacao : 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre poo e a parte funcional

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 