formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let fristNumber = parseInt(document.getElementById('firstNumber').value);
    let secondNumber = parseInt(document.getElementById('secondNumber').value);
    let message = document.querySelector('p#message')
    
    if (fristNumber < secondNumber) {
        message.innerHTML = `O formulario está <strong>correto</strong>!`

    }
    else {
        message.innerHTML = `<strong> Formulário inválido.</strong><br>O número B deve ser maior que o número A.`
    }
});