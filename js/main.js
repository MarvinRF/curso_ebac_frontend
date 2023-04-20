$(document).ready(function () {

    $('#telefone').mask('(99) 99999-9999');
    $('#cpf').mask('999.999.999-99');
    $('#cep').mask('99999-999');

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