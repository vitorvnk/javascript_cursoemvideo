function contar(){
    let txtini = window.document.getElementById('txtini')
    let txtfim = window.document.getElementById('txtfim')
    let txtpass = window.document.getElementById('txtpass')
    let res = window.document.getElementById('res')

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpass.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //alert(`[ERRO] Faltam dados!`)
    }else{
        res.innerHTML = 'Contando: <br>'
        let ini = Number(txtini.value)
        let fim = Number(txtfim.value)
        let pass = Number(txtpass.value)

        if (pass <= 0){
            window.alert('Passo inválido! Será considerado o passo 1')
            pass = 1
        }
        if (ini < fim){ // crescente
            for(ini ; ini <= fim ; ini += pass){
                res.innerHTML += `${ini} > `
            }
        } else{ // regressiva 
            for (let c = ini ; c >= fim ; c -= pass){
                res.innerHTML += `${c} > ` 
            }
        }
        
        res.innerHTML += `\u{1F3C1}` //Emoj

    }
}
