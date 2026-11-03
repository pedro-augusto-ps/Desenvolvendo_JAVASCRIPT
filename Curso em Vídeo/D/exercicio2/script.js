function verificar_idade() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var dia = data.getDay()
    // var hora = data.getHours()
    var input_data = document.getElementById("iddate").value //Data que o usuário envio no js
    var div_resultado = document.getElementById("res") //Div que será exibido o resultado

    var data_separada = input_data.split("-")
    var ano_calculado = ano - parseInt(data_separada[0]) 

    div_resultado.innerHTML = `Você tem: ${ano_calculado}`

}