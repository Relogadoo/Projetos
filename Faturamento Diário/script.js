const faturamento = {
    "1": 1500, "2": 2000, "3": null, "4": 1800, "5": 2200,
    "6": null, "7": 1600, "8": 1900, "9": 2100, "10": null,
    "11": 1750, "12": 1950, "13": 0, "14": 1850, "15": 2300,
    "16": null, "17": 2500, "18": 2400, "19": null, "20": 2600,
    "21": 2500, "22": 1900, "23": null, "24": 1800, "25": 2000,
    "26": 2300, "27": null, "28": 2100, "29": 2200, "30": 2500
  };
  
  const valoresValidos = Object.values(faturamento).filter(v => v != null && v > 0);
  
  const calcularFaturamento = () => {
    const menor = Math.min(...valoresValidos);
    const maior = Math.max(...valoresValidos);
    const media = valoresValidos.reduce((acc, v) => acc + v, 0) / valoresValidos.length;
    const diasAcima = valoresValidos.filter(v => v > media).length;
  
    document.getElementById("menorFaturamento").textContent = `R$ ${menor}`;
    document.getElementById("maiorFaturamento").textContent = `R$ ${maior}`;
    document.getElementById("mediaFaturamento").textContent = `R$ ${media.toFixed(2)}`;
    document.getElementById("diasAcima").textContent = `${diasAcima} dias`;
  };
  
  const limparResultados = () => {
    document.getElementById("menorFaturamento").textContent = 'Aguardando cálculo...';
    document.getElementById("maiorFaturamento").textContent = 'Aguardando cálculo...';
    document.getElementById("mediaFaturamento").textContent = 'Aguardando cálculo...';
    document.getElementById("diasAcima").textContent = 'Aguardando cálculo...';
  };
  