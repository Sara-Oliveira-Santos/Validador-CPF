const cpfInput = document.getElementById('cpf');

function validador() {
    let cpf = cpfInput.value.trim();

    while (cpf.length !== 11 || isNaN(cpf)) {
        alert("O CPF precisa ter apenas números e exatamente 11 dígitos.");
        cpf = prompt("CPF (Apenas números):").trim();
    }

    let cpfArray = cpf.split('').map(Number);

    let cont = 10;
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpfArray[i] * cont;
        cont--;
    }
    
    let pDigito = (soma * 10) % 11;
    if (pDigito > 9) {
        pDigito = 0;
    }

    cont = 11;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpfArray[i] * cont;
        cont--;
    }
    
    let sDigito = (soma * 10) % 11;
    if (sDigito > 9) {
        sDigito = 0;
    }

    if (cpfArray[9] === pDigito && cpfArray[10] === sDigito) {
        alert("CPF VÁLIDO");
    } else {
        alert("CPF INVÁLIDO");
    }
}