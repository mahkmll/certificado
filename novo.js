function atualizartexto() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let curso = document.getElementById("curso").value;
    let duracao= document.getElementById("duracao").value;

    document.getElementById("espaco1").innerText= nome;
    document.getElementById("espaco2").innerText= cpf;
    document.getElementById("espaco3").innerText= curso;
    document.getElementById("espaco4").innerText= duracao;
}