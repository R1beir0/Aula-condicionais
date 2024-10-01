/////////////Exercícios de interpretação de código
/*1*/
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

/*A) O código verifica se o número que o usuário inseriu é divisivel por 2.
B) Ele imprime "passou no teste" para números divisiveis por 2
c) Para númreros não divisiveis por 2*/


/*2*/
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5;
   // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/


/*A) Serve para as pessoas saberem os valores das frutas.
B) O preço da fruta Maçã é R$ 2,25
C) Seá impresso no console o preço da pêra com o valor do default*/



/*3*/
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
 console.log(mensagem)*/

/*A) Pedindo ao usuário para inserir um número.
B) Se o número digitado for 10, será impresso "Esse número passou no teste", mas se o número digitado for -10 dara erro. 
C) Sim, pois não pode ser acessado fora do escopo local*/ 



/////////////Exercícios de escrita de código
/*1*/
/*let idade = Number(prompt("Qual é a sua idade?"))
if (idade>=18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}*/


/*2*/

/*const turno = prompt("Digite M, V ou N, de acordo com o turno em que você estuda")
 if (turno === "M") {
console.log("Bom dia!")
 } else if (turno === "V") {
console.log("Boa tarde!")
 } else if (turno === "N") {
    console.log("Boa noite!")   
 }*/


 /*3*/
/*let turno = prompt("Digite M, V ou N, de acordo com o turno em que você estuda")
switch (turno){
    case 'M':
    console.log("Bom dia!")
     break
     case 'V':
        console.log("Boa tarde!")
        break
        case 'N':
            console.log("Boa noite!")
            break 
            default: 
            console.log("Tu nem estuda, mentiroso")    
}*/


/*4*/
let pergunta = prompt("Qual genêro de filme você quer assistir?")
let pergunta2 = prompt ("Quanto você pode pagar?")

if (pergunta === "fantasia" && pergunta2 <= 15 ) {
    console.log("Bom filme!")
} else {
console.log("Escolha outro filme, pobre!!")
} 