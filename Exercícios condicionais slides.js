/*let a = Number(prompt("Digite um número !"))
let b = Number(prompt("Digite outro número!"))

function comparar(num1, num2) {
if (num1 === num2) {
	console.log("São iguais!")
} else if (num1 > num2) {
	console.log("Primeiro número é maior do que o segundo número!")
} else{
	console.log("Primeiro número é menor do que o segundo número")
}
}
comparar(a , b)*/





/*let pokemon = prompt("Escolha um pokemon")

switch (pokemon){
	case 'Bulbasauro':
		console.log('Planta e veneno')
		break 
		case 'Charmander':
			console.log('Fogo')
			break
			case 'Squirlate':
				console.log('Água')
				break 
				default:
					console.log("O pokemon selecionado não existe, tente novamente")
}*/



let ensinoM = prompt ("Você ja concluiu o ensino médio?")
let idade = Number(prompt(" Qual é a sua idade?"))
let faculdade = prompt ("Você ja esta cursando outra faculdade?")

function simOUnao(ensinoM, idade, faculdade) {
	if (ensinoM === "sim" && idade>=18 && faculdade === "não") {
console.log("Você pode estudar nesta faculdade!")
	} else {
		console.log("Você não pode estudar nesta faculdade!")
	}
 } 
simOUnao(ensinoM, idade, faculdade)
