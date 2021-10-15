var idade = 18
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Voce nao tem idade para votar!')
}else if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('O voto e opcional!')
}else {
    console.log('O voto e obrigatorio!')
}