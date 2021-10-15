/*
var verificar = document.getElementById('verificar')
verificar.addEventListener('click', verif())
*/
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // informacao recebida do formulario 'Ano de Nascimento'.
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Por favor, informe um ano valido.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var fase = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade <= 12) {
                //crianca
                img.setAttribute('src', 'criancah.png')
                fase = 'Um menino'
            }else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovemh.png')
                fase = 'Um jovem'
            }else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'adultoh.png')
                fase = 'Um homem adulto'
            }else {
                //idoso
                img.setAttribute('src', 'idosoh.png')
                fase = 'Um homem idoso'
            }
        }else if (fsex[1].checked) {
            if (idade >= 0 && idade <= 12) {
                //crianca
                img.setAttribute('src', 'criancam.png')
                fase = 'Uma menina'
            }else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
                fase = 'Uma jovem'
            }else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'adultom.png')
                fase = 'Uma mulher adulta'
            }else {
                //idoso
                img.setAttribute('src', 'idosom.png')
                fase = 'Uma mulher idosa'
            }
        }
    }
    
    res.innerHTML = `${fase} com ${idade} anos.`
    res.appendChild(img).style.paddingTop = '20px'
    
    
    /*
    var sexo = document.getElementsByTagName('radsex')
    if (idade >= 0 && idade <= 12) {
        var mensagem = document.getElementById('mensagem')
        mensagem.innerHTML = `menino de ${idade} anos.`
    }
    */

}