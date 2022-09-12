//Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. 

let pergunta = prompt("Você deseja comer mais coxinhas? \nResponda: \nS para Sim ou \N para Não")

//Crie também uma `let conta` para guardar o valor total.
let valor = 2.5
let conta = 2.5

//Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

while(pergunta === "S"){
    conta = conta + valor
    console.log(conta)
}
console.log("Obrigada pela sua compra")