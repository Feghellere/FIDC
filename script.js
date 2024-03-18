function calcularDigitoControle(codigo) {
    const pesos = [2, 3, 4, 5, 6];
    let soma = 0;
    codigo.split('').reverse().forEach((digito, index) => {
        soma += parseInt(digito) * pesos[index % pesos.length];
    });
    const resto = soma % 11;
    let digitoControle = 11 - resto;
    if (digitoControle >= 10) {
        digitoControle = 0;
    }
    return digitoControle;
}

document.getElementById('botaoCalcular').addEventListener('click', function() {
    const codigo = document.getElementById('campoCodigo').value;
    if (!isNaN(codigo) && codigo !== '') {
        const digitoControle = calcularDigitoControle(codigo);
        document.getElementById('labelResultado').textContent = `CÓDIGO COMPLETO: ${codigo}-${digitoControle}`;
    } else {
        document.getElementById('labelResultado').textContent = 'INVÁLIDO';
    }
});

document.getElementById('botaoLogica').addEventListener('click', function() {
    alert("A lógica para calcular o dígito de controle é baseada no método 'Módulo 11'.\n"
        + "1. Multiplica-se cada dígito do número por pesos crescentes de 2 a 6, da direita para a esquerda.\n"
        + "2. Somam-se os resultados dessas multiplicações.\n"
        + "3. O total é então dividido por 11 e o resto da divisão é calculado.\n"
        + "4. O dígito de controle é determinado por 11 menos o resto da divisão.\n"
        + "5. Se o resultado for 10 ou 11, o dígito de controle se torna 0.");
});
