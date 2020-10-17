function tabuada(){
    var num = window.document.getElementById('txtnum')
    var tab1 = window.document.getElementById('seltab1')
    var tab2 = window.document.getElementById('seltab2')

    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número.')
    } else{
        let n = Number(num.value)
        let c = 1

        tab1.innerHTML = ''
        tab2.innerHTML = ''
        while (c <= 10){
            let item1 = document.createElement('option')
            item1.text = `${n} x ${c} = ${n*c}` 
            item1.value = `tab${c}`
            tab1.appendChild(item1)

            let item2 = document.createElement('option')
            item2.text = `${n} x ${-c} = ${n*-c}` 
            item2.value = `tab${c}`
            tab2.appendChild(item2)
            c++
        }
    }

}
