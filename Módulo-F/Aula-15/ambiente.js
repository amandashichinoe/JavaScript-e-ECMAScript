let num = [5,8,2,9,3]

num[5] = 4
num.push(7)

console.log(`Os elementos do nosso vetor são: ${num}`)
console.log(`Nosso vetor tem ${num.length} posições. O primeiro valor do vetor é ${num[0]}.`) //lenth eh um atributo, nao um metodo 
console.log(`Ordenando os valores em ordem crescente ${num.sort()}`)

let pos = num.indexOf(6)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor procurado está na posição ${pos}`)
}
