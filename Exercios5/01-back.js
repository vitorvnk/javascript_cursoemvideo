var valores = []
function sts(){
    return document.querySelector('p#status')
}

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    return false
}

function inLista(n, l){
    if (l.indexOf(Number(n)) > -1){
        return true
    }
    return false
}

function perc(list){
    let x = []
    for(let pos in list){
        x += `${list[pos]} `
    }
    return x
}

function somamed(array, op){
    let z = array.length
    let y = 0
    for (var l = 0 ; l < z ; l++){
        y += array[l]
    }
    if (op == 1){
        return y
    } else {
        let q = y/l
        return q
    }
}

function adicionar(){
    var stats = sts()
    var num = document.querySelector('input#fnum')
    var vet = document.querySelector('p#vet')
    
    if(isNumero(num.value) && !inLista(num.value, valores)){
        n = Number(num.value)
        valores.push(Number(n))

        res.innerHTML = ''
        stats.innerHTML = ''
        vet.innerHTML = `${perc(valores)}`
    } else {
        stats.style.color = 'red'
        stats.innerHTML = 'Valor inválido ou já encontrado na lista.'
    }
    num.value = ''
    num.focus()
}
function analizar(){
    var stats = sts()
    var res = document.querySelector('p#res')

    if (valores.length == 0){
        stats.style.color = 'red'
        stats.innerHTML = `Insira números no vetor.`
    } else{
        stats.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${valores.length} cadastrados;<br>`
        res.innerHTML += `O maior número cadastrados é: ${Math.max.apply(null, valores)};<br>`
        res.innerHTML += `Somando todos os valores, temos: ${somamed(valores,1)};<br>`
        res.innerHTML += `A média dos valores é: ${somamed(valores,2)}.`
    }
}
function limpar(){
    var stats = sts()
    if (valores.length == 0){
        stats.style.color = 'red'
        stats.innerHTML = `Área de trabalho já limpa.`
    } else {
        res.innerHTML = ''
        stats.innerHTML = ''
        res.innerHTML = ''
        vet.innerHTML = ''
        valores = []
    }
}