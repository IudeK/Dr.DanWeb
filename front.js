
function calcularIdade(){

    var option1 = $('#op1').val()
    var option2 = $('#op2').val()
    var option3 = $('#op3').val()
    var option4 = $('#op4').val()
    var option5 = $('#op5').val()

    if (option1 == null){
        alert("O campo 'Formação do mamilo' não pode ficar vazio!")
        return
    }

    if (option2 == null){
        alert("O campo 'Textura da pele' não pode ficar vazio!")
        return
    }

    if (option3 == null){
        alert("O campo 'Formação da orelha' não pode ficar vazio!")
        return
    }

    if (option4 == null){
        alert("O campo 'Glândulas mamárias' não pode ficar vazio!")
        return
    }

    if (option5 == null){
        alert("O campo 'Pregas plantares' não pode ficar vazio!")
        return
    }

    var resultado = (parseInt(option1) + parseInt(option2) + parseInt(option3) + parseInt(option4) + parseInt(option5)) + 204

    console.log(resultado)

    alert('Idade Gestacional de: ' + Math.floor(resultado / 7) + ' semanas e ' + resultado%7 + ' dia(s)!' )
}
