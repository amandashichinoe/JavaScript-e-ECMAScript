let num = document.getElementById('txtNumero')
let lista = document.querySelector('select#numAdc')
let resultado = document.querySelector('div#resultado')
let numeros = []

function adicionar(){
    numero = Number(num.value)
    if(isNumero(numero) && !isInLista(numero, numeros)){
        numeros.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    else{
        alert('Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isNumero(num){
    if(num >=1 && num <=100){
        return true
    }else{
        return false
    }
}

function isInLista(num, lista){
    if(lista.indexOf(num) != -1){
        return true
    }else{
        return false
    }
}

function finalizar(){
    if(numeros.length != 0){
        let total = numeros.length
        let soma = 0
        let media = 0

        numeros.sort()
        maior = numeros[total-1]
        menor = numeros[0]
        for (let pos in numeros){
            soma += numeros[pos]
        }

        /* solução alternativa (curso) para encontrar o menor e o maior valor, e a soma dos valores
        let maior = numeros[0]
        let menor = numeros[0]
        for(let pos in numeros){
            soma += numeros[pos]
            if(numeros[pos] > maior)
                maior = numeros[pos]

            if(numeros[pos] < menor)
                menor = numeros[pos]
        }*/ 

        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
    else{
        alert('Por favor, insira valores antes de finalizar.')
    }
}

