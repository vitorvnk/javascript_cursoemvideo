var intervald = window.setInterval(() => {carregar()}, 0)

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var back = window.document.getElementById('cor')

    var data = new Date()
    var hora  = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var milisegundo = data.getMilliseconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}:${milisegundo}`

    if (hora >= 0 && hora < 12){
        img.src = 'img/trap1.jpeg'
        back.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'img/trap2.jpg'
        back.style.background = '#b9846f'
    } else{
        img.src = 'img/trap3.jpeg'
        back.style.background = '#515154'
    }
}