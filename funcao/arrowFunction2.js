let comparaComThis = function (param) {
    console.log(this === param)
}
// vendo se o this é global nesse caso
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)// vendo se o this pode ser o obj
comparaComThis(global)
comparaComThis(obj)
// this em uma função arrow está associado ao contexto da msm
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)