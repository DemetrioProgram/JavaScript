const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) { //for (atributo in pessoa) <= exemplo vai imprimir os atributos de pessoa 
    if (x == 5) {
        break //"quebra" e código e volta pro for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue //volta pro for e continua o código de onde parou
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo        
        }
        console.log(`Par = ${a},${b}`)  
    }
}