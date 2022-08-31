/*# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>*/

// 1 - Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:


/*Estas são as comidas favoritas de nomeDoUsuario
- Comida1
- Comida2
- Comida3*/

const nomeUsuario = prompt("Qual seu nome?")
let comidas1 = prompt("Quais sao suas 3 comidas favoritas? Primeira?")
let comidas2 = prompt("Segunda?")
let comidas3 = prompt("Terceira")

console.log(`Estas são as comidas favoritas de ${nomeUsuario}: \n${comidas1} \n${comidas2} \n${comidas3} `)
