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

// Modal logic
var modal = document.getElementById("modalLogica");
var btn = document.getElementById("botaoLogica");
var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
