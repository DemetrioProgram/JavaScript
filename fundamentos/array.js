const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4]=10
console.log(valores)
console.log(valores.length)
//push: para acresentar valores no array
valores.push({id:3},false,null,'teste')
console.log(valores)
//pop: para tirar o ultimo valor do array
console.log(valores.pop())
delete valores [0]
console.log(valores)
//typeof: tipo do array que é object
console.log(typeof valores)
