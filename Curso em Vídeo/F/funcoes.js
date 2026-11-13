function ParImpar(num) {
    if (num % 2 == 0) {
        return 'Par';
    }    
    else {
        return "Ímpar";
    }
}
const resultado = ParImpar(11)
console.log(resultado)

//---------------------------------------------
function Soma(n1 = 0, n2 = 0) { // Se não forem parâmetros passados, já estão definidos
    return n1 + n2;
}
//---------------------------------------------


//---------------------------------------------
(function() { // Uma função que não precisa de chamada?
  console.log("Executada imediatamente!");
})();
//---------------------------------------------

//Percebi que JS tem bastante funções diferentes, são 9 se não estou enganado, Porém as mais relevantes são:
// Arrow Functions, Funções Assíncronas, Declaração de Função, Funções de Ordem Superior

//---------------------------------------------
const dobrar = (numero) => numero * 2;
console.log(dobrar(5)); // Saída: 10
//---------------------------------------------

//---------------------------------------------
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//---------------------------------------------

//---------------------------------------------
async function executarTarefa() {
  console.log("Iniciando...");
  await esperar(2000); // Espera 2 segundos
  console.log("Concluído após 2 segundos!");
}
executarTarefa()
console.log(saudar("Carlos")); // Saída: Olá, Carlos!
//---------------------------------------------


//Padrão
function saudar(nome) {
  return `Olá, ${nome}!`;
}


