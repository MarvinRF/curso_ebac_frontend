

const mensagemSucesso = `a`

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let fristNumber = parseInt(document.getElementById('firstNumber').value);
    let secondNumber = parseInt(document.getElementById('secondNumber').value);
    let message = document.querySelector('p#message')
    
    if (fristNumber < secondNumber) {
        message.innerHTML = `O formulario está correto`

    }
    else {
        message.innerHTML = `Formulário inválido. O número B deve ser maior que o número A.`
    }
});