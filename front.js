function exibirAlerta(titulo ,mensagem, cor) {
    Swal.fire({
        icon: cor,
        title: titulo,
        text: mensagem,
        confirmButtonClass: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
      });   
  }
  


function calcularIdade(){

    var option1 = $('#op1').val()
    var option2 = $('#op2').val()
    var option3 = $('#op3').val()
    var option4 = $('#op4').val()
    var option5 = $('#op5').val()

    if (option1 == null){
        exibirAlerta("Campo vazio!" ,"O campo 'Formação do mamilo' não pode ficar vazio!", "error")
        return
    }

    if (option2 == null){
        exibirAlerta("Campo vazio!" ,"O campo 'Textura da pele' não pode ficar vazio!", "error")
        return
    }

    if (option3 == null){
        exibirAlerta("Campo vazio!" ,"O campo 'Formação da orelha' não pode ficar vazio!", "error")
        return
    }

    if (option4 == null){
        exibirAlerta("Campo vazio!" ,"O campo 'Glândulas mamárias' não pode ficar vazio!", "error")
        return
    }

    if (option5 == null){
        exibirAlerta("Campo vazio!" ,"O campo 'Pregas plantares' não pode ficar vazio!", "error")
        return
    }

    var resultado = (parseInt(option1) + parseInt(option2) + parseInt(option3) + parseInt(option4) + parseInt(option5)) + 204

    console.log(resultado)

    exibirAlerta("Idade gestacional", Math.floor(resultado / 7) + ' semanas e ' + resultado%7 + ' dia(s)!', "success" )
}
