var agora = new Date();
var hora_atual = agora.getHours();

if (hora_atual < 12 ) {
    console.log("Bom dia!");
}
else if (hora_atual <= 18) {
    console.log("Boa tarde");
}
else if (hora_atual > 18 && hora_atual <= 23) {
    console.log("Boa noite");
} 
else {
    console.log("Boa madrugada!")
}