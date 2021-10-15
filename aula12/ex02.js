var hora = 24
if (hora <= 24 && hora > 18) {
    console.log(`Agora sao ${hora} hs. Boa noite!`)
}else if (hora > 12) {
    console.log(`Agora sao ${hora} hs. Boa tarde!`)
}else if (hora > 5) {
    console.log(`Ja sao ${hora} hs. Bom dia!`)
}else if (hora < 2) {
        console.log(`Ja e ${hora} hora da madrugada. Vai dormir!!!`)
    }else {
        console.log(`Ja sao ${hora} hs da madrugada. Vai dormir!!!`)
    }
/*
    var agora = new Date()
    var hora = agora.getHours()
    if (hora > 5 && hora <= 12) {
        console.log(`Agora sao ${hora} hs. Bom dia!`)
    }else if (hora > 12 && hora < 19) {
        console.log(`Agora sao ${hora} hs. Boa tarde!`)
    }else if (hora > 18 && hora <= 24) {
        console.log(`Ja sao ${hora} hs. Boa noite!`)
    }else if (hora < 2) {
            console.log(`Ja e ${hora} hora da madrugada. Vai dormir!!!`)
        }else {
            console.log(`Ja sao ${hora} hs da madrugada. Vai dormir!!!`)
        }
*/

