function inverterString() {

    let str = document.getElementById("inputString").value;
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    document.getElementById("outputString").innerText = resultado;
}
