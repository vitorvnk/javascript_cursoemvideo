var valores = []

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

function adicionar(){
    var num = document.querySelector('input#fnum')
    var res = document.querySelector('p#res')
    var ele = document.querySelector('p#ele')

    if(isNumero(num.value) && !inLista(num.value, valores)){
        n = Number(num.value)
        valores.push(Number(n))

        ele.innerHTML = ''
        res.innerHTML = `${perc(valores)}`
    } else {
        ele.style.color = 'red'
        ele.innerHTML = 'Valor inválido ou já encontrado na lista.'
    }
}