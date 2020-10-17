let num = [4,6,2,2,5]
console.log(`Nosso vetor é o ${num}`)
console.log('-----------------------------')

//Acrecentar elemento
num[5] = 6
console.log(`Vetor Acrescentar1: ${num}`)

// Ou

num.push(12)
console.log(`Vetor Acrescentar2: ${num}`)
console.log('-----------------------------')

//Compremento do Vetor
num.length
console.log(`Vetor tem ${num.length} posições`)
console.log('-----------------------------')

//Organiza Vetor
//Crescente
num.sort((a,b) => a - b)
console.log(`Vetor organizado Crescente: ${num}`)


//Decrescente
num.sort()
console.log(`Vetor organizado Decrescente: ${num}`)
console.log('-----------------------------')

// Repetição para Print de elementos
for(let c = 0; c < num.length ; c++){
    console.log(`Posição ${c} = ${num[c]}`)
}
console.log('-----------------------------')

//Nova forma de repetição
for(let pos in num){
    console.log(num[pos])
}
console.log('-----------------------------')

//Buscar Valores num Vetor
num.indexOf(0) // -> Irá retornar -1 caso não seja encontrado
console.log(`Índice do valor: ${num.indexOf(5)}`)