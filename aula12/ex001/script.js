function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora <= 24 && hora >= 19) {
        //boa noite
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }else if (hora > 11) {
        //boa tarde
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else if (hora > 5) {
        //bom dia
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else {
        //madrugada
        msg.innerHTML = `Agora são ${hora} horas. É madrugada, vai dormir!`
        img.src = 'madrugada.png'
        document.body.style.background = '#312929'
    }
    /*
    if (hora >= 0 && hora < 6){
        //madrugada
        msg.innerHTML = `Agora são ${hora} horas. É madrugada, vai dormir!`
        img.src = 'madrugada.png'
        document.body.style.background = '#312929'
    }else if (hora < 12) {
        //bom dia
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora < 19) {
        //boa tarde
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else if (hora <=24) {
        //boa noite
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
    */
}
