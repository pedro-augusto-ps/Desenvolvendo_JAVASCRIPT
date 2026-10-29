// arritiméticos
// atribuição
// lógicos
// relacionais
// ternário

// ARRITMÉTICOS e ATRIBUIÇÃO:
// +, -, *, /, %, **
// Igual ao python: (5 + 3) / 2 -> Precedência com parentêses

var numero1 = Number(10.5)
var numero2 = Number(10)
numero1 += 1 // Funciona igual o python
console.log("ARRITMÉTICOS E ATRIBUIÇÃO")
console.log(numero1)
console.log(numero1 + numero2)
console.log(numero1 + numero2 * numero2)

// RELACIONAIS e IDENTIDADE>
// >, < , >=, <=, ==, ===, !=
// 5 == "5" -> TRUE pois o JS não testa tipo, para isso usa-se ===
console.log("RELACIONAIS E IDENTIDADE")
console.log(5 == "5")
console.log(5 === "5")

// LÓGICOS e RELACIONAIS
// ! not, && and, || or

console.log("LÓGICOS")
console.log(true && true)
console.log(true || true)

// TERNÁRIO
// Semelhante ao if, else.
// se ? true : false

var media = 6.5
console.log("TERNÁRIO")
console.log(`Resultado: ${media >= 7.0 ? "APROVADO" : "REPROVADO"}`) //Se a média é maior ou igual a 7, Aprovado.
var resultado = media >= 6.0 ? "Resultado agora é aprovado" : "Resultado agora é reprovado" // Atribui o valor
console.log(resultado)