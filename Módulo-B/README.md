# Módulo B - Comandos básicos do JavaScript

Os exercícios contidos aqui foram realizados na Aula 06.

## Aprendizados :pencil:

    Conversão entre tipos
        Number.parseInt(n)
        Number.parseFloat(n)
        Number(n)
        String(n)
        n.ToString()
    
    Formatando strings
        s.Length
        s.toUpperCase()
        s.toLowerCase()
    
    Formatando números
        n1.toFixed(n)
        n1.toFixed(n).replace('.',',')
        n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})


### Propriedades dos operadores matemáticos, relacionais e lógicos no JavaScript:

Ordem de precedência

    ()
    **
    * / %
    + - 
    < > <= ...
    !
    &&
    ||



Identidade

    5 == 5    true
    5 == '5'  true
    5 === '5' false
    
    5 != 5    false
    5 != '5'  false
    5 !== '5' true
