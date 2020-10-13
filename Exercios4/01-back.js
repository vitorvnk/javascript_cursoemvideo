function contar(){
    var txtini = window.document.getElementById('txtini')
    var txtfim = window.document.getElementById('txtfim')
    var txtpass = window.document.getElementById('txtpass')
    var cont = window.document.getElementById('conteudo')

    var ini = Number(txtini.value)
    var fim = Number(txtfim.value)
    var pass = Number(txtpass.value)
    var frase = ''

    for(ini ; ini <= fim ; ini += pass){
        frase += ini + ' > '
    }
    frase += 'Fim'
    cont.innerHTML = `${frase}`
}
