const escola = 'Cod3r'

console.log(escola.charAt(4))//imprimir a 4º letra da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Pegar o codigo do caracter
console.log(escola.indexOf('3'))//imprimir o 3° indice da string

console.log(escola.substring(1))//imprimir a partir da 1º letra da string  
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))//strings concatenadas
console.log(escola.replace(/\d/g, 'e'))//substituir 

console.log('Ana,Maria.Pedro'.split(','))
