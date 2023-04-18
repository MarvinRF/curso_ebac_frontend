$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cidade: {
                required: true
            },
            estado: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Campo obrigatorio',
            telefone: 'Campo obrigatorio',
            email: 'Campo obrigatorio',
            cpf: 'Campo obrigatorio',
            cidade: 'Campo obrigatorio',
            estado: 'Campo obrigatorio',
            cep: 'Campo obrigatorio'
        }
    })
})