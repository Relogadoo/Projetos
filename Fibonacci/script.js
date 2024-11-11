function mostrarSequencia() {
    // Obter o valor do número informado
    const numero = parseInt(document.getElementById("numero").value);
    
    // Validar se o número é um inteiro positivo
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número válido.");
        return;
    }
    
    // Gerar a sequência de Fibonacci até o número informado
    let fibonacci = [0, 1];
    
    while (fibonacci[fibonacci.length - 1] < numero) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximoNumero);
    }

    // Exibir a sequência de Fibonacci
    document.getElementById("sequencia").innerHTML = `Sequência de Fibonacci até ${numero}: <br>${fibonacci.join(", ")}`;

    // Verificar se o número está na sequência
    if (fibonacci.includes(numero)) {
        document.getElementById("resultado").innerHTML = `${numero} pertence à sequência de Fibonacci.`;
    } else {
        document.getElementById("resultado").innerHTML = `${numero} não pertence à sequência de Fibonacci.`;
    }
}
