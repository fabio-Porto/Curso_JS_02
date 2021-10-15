function contando() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contagem = document.getElementById('contagem')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Estão faltando dados, por favor informe!')
    }else {
        contagem.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0) {
            window.alert('Numero invalido! Passo valera 1.')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                contagem.innerHTML += ` ${c} `
            }
            
        }else {
            for(var c = i; c >= f; c -= p) {
                contagem.innerHTML += ` ${c} `
            }
            
        }
        contagem.innerHTML += '!'
    }
    
    /*
    else if (final == '') {
        window.alert('[ERRO] Informe algum numero no campo Fim!')
    }else if (passar == 0 || passar == '') {
            passar = iniciar
            window.alert('[Erro] O campo passo vai considerar o campo inicio.')
    } else {
        do {
            contagem.innerText = `(${iniciar}), `
            iniciar = iniciar + passar
            console.log(iniciar)
            }while (iniciar <= final)
    }
    */
}   
