var cont = 1;

while (true) { //Estrutua de repetição com teste no início
    console.log("alooo");
    console.log(cont)
    if (cont == 10) {
        break;
    }    
    cont += 1;    
}

do { //Estrututa de repetição com teste no final
    console.log(cont)
    cont += 1
} while (cont < 20)

