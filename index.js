const cpfInput = document.getElementById('cpf');
const resultado = document.getElementById('resultado');

function validador() {
    let cpf = obterCpfValido();
    if (!cpf) return;
    let cpfArray = cpf.split('').map(Number);

    let pDigito = calcularPrimeiroDigito(cpfArray);
    let sDigito = calcularSegundoDigito(cpfArray);

    exibirResultado(cpfArray, pDigito, sDigito);
}

function obterCpfValido() {
    let cpf = cpfInput.value.trim();

    if (cpf.length !== 11 || isNaN(cpf)) {
        resultado.innerText = "O CPF precisa ter apenas números e exatamente 11 dígitos.";
        resultado.className = "aviso"; 
        return null;
    }
    return cpf;
}

function calcularPrimeiroDigito(cpfArray) {
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
    return pDigito;
}

function calcularSegundoDigito(cpfArray) {
    let cont = 11;
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpfArray[i] * cont;
        cont--;
    }
    
    let sDigito = (soma * 10) % 11;
    if (sDigito > 9) {
        sDigito = 0;
    }
    return sDigito;
}

function exibirResultado(cpfArray, pDigito, sDigito) {
    if (cpfArray[9] === pDigito && cpfArray[10] === sDigito) {
        resultado.innerText = "CPF VÁLIDO";
        resultado.className = "valido"; 
    } else {
        resultado.innerText = "CPF INVÁLIDO";
        resultado.className = "invalido"; 
    }
}