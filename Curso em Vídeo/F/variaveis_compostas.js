let vetor = [1, 0, 2, 7];
console.log(vetor);

vetor.push(11); //Adiciona ao final, append do python
console.log(vetor);

for (let i = 0; i < vetor.length; i++) { //Algoritmo de ordenação em JS
    for (let j = 0; j < vetor.length; j++) {
        if (vetor[i] < vetor[j]) {
            let aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
    }
}

console.log(`Vetor ordenado: ${vetor}`);

for (let i = 0; i < vetor.length; i++) {
    console.log(`Posição: ${i} Valor: ${vetor[i]}`);
}

for (let i in vetor) { 
    console.log(vetor[i]);
}