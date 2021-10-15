function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Informe um numero!')
    }else {
        tab.innerHTML = ''
        for (var numero = 1; numero <= 10; numero++) {
            var n1 = Number(num.value)
            var item = document.createElement('option')
            item.text = `${n1} x ${numero} = ${n1 * numero}`
            item.value = `tab${numero}`
            //tab.appendChild(item)
        }   
    }
}