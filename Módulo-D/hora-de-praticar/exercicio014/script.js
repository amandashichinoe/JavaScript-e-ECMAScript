function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora <12){
        //Bom dia
        img.src = 'img/dia.jpg'
        document.body.style.background = 'rgb(251, 161, 46)'
    }
    else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(111, 118, 34)'
    }
    else{
        //Boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(10, 12, 35)'
    }

}