function parimp(n){
    if (n % 2 == 0){
        return 'par'
    }
    return 'imp'
}

let v = function(n1, n2=0){
    return n1+n2
}

function fact(n){
    let fat = 1
    for(let c = n; c > 1 ; c--){
        fat *= c
    }
    return fat
}

//Função Recursiva
function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n*fatorial(n-1)
    }
}


console.log(parimp(2))
console.log(parimp(3))

console.log(v(20+7))

console.log(fact(5))

console.log(fatorial(5))

