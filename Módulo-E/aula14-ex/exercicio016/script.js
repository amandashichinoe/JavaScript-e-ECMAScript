function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Faltam dados! Impossível contar.'
    }else{
        resultado.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let j = Number(fim.value)
        let k = Number(passo.value)

        if(k<=0){
            alert('Passo inválido! Considerando passo = 1')
            k = 1;
        }
        if(i < j){
            for(let c = i; c <= j; c += k){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else{
            for(let c = i; c >= j; c -= k){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }
}
