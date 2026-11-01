//Switch
//Case
//Default
// É necessário adicionar o BREAK em todos

agora = new Date();
diaSemana = agora.getDay();
//getDay() Retorna em números

switch (diaSemana) {
    case 0:
        console.log("Hoja é DOMINGO!");
        break
    
    case 1:
        console.log("Hoje é SEGUNDA!");
        break
    
    case 2:
        console.log("Hoje é TERÇA!");
        break
    
    case 3:
        console.log("Hoje é QUARTA!");
        break
    
    case 4:
        console.log("Hoje é ! QUINTA!");
        break
    
    case 5:
        console.log("Hoje é ! SEXTA!");
        break
    
    case 6:
        console.log("Hoje é SÁBADO!");
        break
    
    default:
        console.log("Não obtive o dia da semana :(")
    
}