function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else{
        var fSexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // equivale a <img id = "foto">
        if (fSexo[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/crianca-m.jpg')
            }
            else if(idade < 21 ){
                //Jovem
                img.setAttribute('src', 'img/jovem-m.jpg')
            }
            else if(idade < 50 ){
                //Adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            }
            else if(idade >= 50){
                //Idoso
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        }
        else if (fSexo[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/crianca-f.jpg')
            }
            else if(idade < 21 ){
                //Jovem
                img.setAttribute('src', 'img/jovem-f.jpg')
            }
            else if(idade < 50 ){
                //Adulto
                img.setAttribute('src', 'img/adulto-f.jpg')
            }
            else if(idade >= 50){
                //Idoso
                img.setAttribute('src', 'img/idoso-f.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
        resultado.appendChild(img)
    }

}