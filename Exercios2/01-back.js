function conteudo(){
    var body = window.document.querySelector('body#cor')
    var cont = window.document.querySelector('div#conteudo')
    var ine = window.document.getElementsByName('radtrap')
    var img = document.createElement('img')
    var txt = ``
    img.setAttribute('id', 'foto')
    
    if (ine[0].checked){
        txt = `Boa escolha, Olha o só esse Astolfo!` 
        img.setAttribute('src', 'img/trap1.jpeg')
        body.style.background = '#712f32'
    }else if (ine[1].checked){
        txt = `Sempre shippei o Nagisa com ele!` 
        img.setAttribute('src', 'img/trap2.jpg')
        body.style.background = '#3333ff'
    }else{
        txt = `Um maluco, mas deixaria o Juuzou roubar meu coração.` 
        img.setAttribute('src', 'img/trap3.jpeg')
        body.style.background = '#ff859a'
    }

    cont.innerHTML = `Um maluco, mas deixaria o Juuzou roubar meu coração.`
    cont.appendChild(img)
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var n1 = window.document.querySelector('input#txtano')
    var idade = Number(n1.value)

    if (ano-idade < 18){
        alert('APENAS MAIORES DE 18 TEM ACESSO AO CONTEÚDO.')
        window.location.reload()

    } else{
        conteudo()
    }
}
