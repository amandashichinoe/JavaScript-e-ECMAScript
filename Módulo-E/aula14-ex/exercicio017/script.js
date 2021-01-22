function gerarTabuada(){
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('seltabuada')

    
    if(numero.value.length != 0){
        let num = Number(numero.value)
        let c = 1; 
        tabuada.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    } 
    else{
        alert('Por favor, digite um número!')
    }

} 