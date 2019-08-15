function tratarErroELancar(erro) {
    throw new Erro ('...') //Irá "pegar" o erro e mostrar oq eu definir aqui
}

function imprimirNomeGritado(obj) {
    try {//Caso de um erro no try ele irá para catch
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {//No catch posso definir oq fazer com o erro
        tratarErroELancar(e)
    } finally {//Será executado sempre msm com erro ou não
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)
