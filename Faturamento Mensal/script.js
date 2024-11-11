const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais() {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    const tabelaResultados = document.getElementById("tabelaResultados");
    tabelaResultados.innerHTML = '';

    for (const estado in faturamento) {
        const valorEstado = faturamento[estado];
        const percentual = ((valorEstado / totalFaturamento) * 100).toFixed(2);

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${estado}</td>
            <td>R$ ${valorEstado.toFixed(2)}</td>
            <td>${percentual}%</td>
        `;

        tabelaResultados.appendChild(tr);
    }
}

function limparResultados() {
    const tabelaResultados = document.getElementById("tabelaResultados");
    tabelaResultados.innerHTML = '';
}
