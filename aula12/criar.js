function muda() {
    
    var num = document.getElementsByName('num')[0]
    var numero = Number(num.value)
    var soma = document.getElementById('soma')
    numero = numero + 5
    soma.innerHTML = (`Resultado da soma: ${numero}`)
    document.getElementsByTagName('p')[1].innerHTML = `${Number(num.value)} mais 5`
    document.body.style.background = 'black'
    document.getElementsByTagName('h1')[0].style.background = 'rgba(156, 146, 146, 0.863)'

    var menos = Number(num.value) - 5
    document.getElementsByTagName('p')[4].innerHTML = `${Number(num.value)} menos 5`
    document.getElementById('subtrai').innerHTML = `Resultado da subtração: ${menos}`
    
    var vezes = Number(num.value) * 5
    document.getElementsByTagName('p')[7].innerHTML = `${Number(num.value)} vezes 5`
    document.getElementById('multi').innerHTML = `Resultado da multiplicação: ${vezes}`
    
    var dividir = Number(num.value) / 5
    document.getElementsByTagName('p')[10].innerHTML = `${Number(num.value)} dividido por 5`
    document.getElementById('divide').innerHTML = `Resultado da divisão: ${dividir}`
    
    document.getElementsByTagName('div')[0].style.background = 'black'
    document.getElementsByTagName('div')[1].style.background = 'black'
    document.getElementsByTagName('div')[2].style.background = 'black'
    document.getElementsByTagName('div')[3].style.background = 'black'
    document.getElementsByTagName('footer')[0].innerHTML = `Para novas operações, atualize a pagina.`
}
