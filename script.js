function verificarSenha() {
    var senhaInserida = document.getElementById("senha").value;

    // Simula a autenticação enviando a senha para um servidor
    // Substitua isso pelo seu lógica de autenticação real
    // Para fins de demonstração, estou usando uma senha codificada para comparação
    var senhaCorreta = "123_mad_123";

    if (senhaInserida === senhaCorreta) {
        document.getElementById("senhaForm").style.display = "none";
        document.getElementById("botaoSecreto").style.display = "block";
    } else {
        alert("Senha incorreta!");
    }
}

function acaoBotao() {
    alert("Você descobriu o botão secreto!");
    // Adicione aqui a ação que deseja executar ao clicar no botão secreto
}
