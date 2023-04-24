
const tarefa = [];
let linhas = '';

$(document).ready(function () {                                              // selecionando o documento
    $('header button').click(function () {                                    // adicionando um evento ao clicar no botão
        $('form').slideDown();                                                 // deslizar para baixo
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();                                                // deslizar para cima
    })
    $('form').on('submit', function (e) {                                     // prevenindo a pagina de recarregar quando enviamos o formulario
        e.preventDefault();

        $('#nova-tarefa').val('')                                              //limpa o campo de preenchimento com jQuery
    })
})

$(document).ready(function () {                                               // selecionando o documento
    $('#apply').click(function () {                                            // adicionando um evento ao clicar no botão
        let add = $('#nova-tarefa').val();                                    // adicionando o conteudo do que foi escrito
        if (add == "") {
            alert("preencha o campo da tarefa")
        }
        else {
            $('ul').append('<li> <a>' + add + ' </a> <i class="fa fa-check"> <i class="fa fa-trash-o">  </li>')      //inserir conteudo dentro da ul concatenando li + conteudo + botoes + +li
            $('#nova-tarefa').val();
        }
    })
    $('ul').on('click', '.fa-check', function () {
        $(this).parents('li').toggleClass('checked');
    })

    $('ul').on('click', '.fa-trash-o', function () {
        $(this).parents('li').toggleClass('deleted').fadeOut(1000);
    })
})

// recompensa de 1 BTC para quem conseguir colocar o text-decoration: line-through; somente no texto ja perdi 1 semana nisso!