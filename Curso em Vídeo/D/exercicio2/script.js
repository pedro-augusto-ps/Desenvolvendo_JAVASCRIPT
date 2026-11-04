function verificar_idade() {
    var data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth() + 1; // +1 Pois começa no mes 0
    var dia = data.getDate();
    // var hora = data.getHours();
    var input_data = document.getElementById("iddate").value; //Data que o usuário envio no js
    var div_resultado = document.getElementById("res"); //Div que será exibido o resultado

    if (input_data === "") { // Caso o usuário insira um valor vazio
        div_resultado.innerHTML = "Insira uma data";
        return;
    }

    var data_separada = input_data.split("-");
    var ano_calculado = ano - parseInt(data_separada[0]);
    var mes_calculado = mes - parseInt(data_separada[1]);
    var dia_calculado = dia - parseInt(data_separada[2]);


    if (dia_calculado < 0) { //
        mes_calculado -= 1;
        dia_calculado += new Date(ano, mes - 1, 0).getDate();
    }

    if (mes_calculado < 0) { // Verifica se estamos "atrasados", exemplo o usuário coloca mês 
    // 10 e hoje é 11, então ele tem um ano a menos.
        ano_calculado -= 1;
        mes_calculado += 12;
    }
    
    if (ano_calculado < 0) {
        div_resultado.innerHTML = "Data inválida";
        return;
    }


    div_resultado.innerHTML = `Você tem: ${ano_calculado} anos ${mes_calculado} meses e ${dia_calculado} dias`;

}