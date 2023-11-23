var quantidadeDeIngressoDaPista = 100;
var quantidadeDeIngressoDaSuperior = 200;
var quantidadeDeIngressoDaInferior = 400;

function comprar() {
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDeIngresso = document.getElementById("qtd").value;

    if (quantidadeDeIngresso <= 0) {
        alert("Quantidade inválida!!");
    } else {
        switch(tipoDoIngresso) {
            case "inferior":
                if (quantidadeDeIngresso <= quantidadeDeIngressoDaInferior) {
                    quantidadeDeIngressoDaInferior -= quantidadeDeIngresso;
                } else {
                    alert("Quantidade indisponível!!");
                }
            break;
    
            case "superior":
                if (quantidadeDeIngresso <= quantidadeDeIngressoDaSuperior) {
                    quantidadeDeIngressoDaSuperior -= quantidadeDeIngresso;
                } else {
                    alert("Quantidade indisponível!!");
                }
            break;
    
            case "pista":
                if (quantidadeDeIngresso <= quantidadeDeIngressoDaPista) {
                    quantidadeDeIngressoDaPista -= quantidadeDeIngresso;
                } else {
                    alert("Quantidade indisponível!!");
                }
            break;
        }
    
        document.getElementById("qtd-inferior").innerHTML = quantidadeDeIngressoDaInferior;
        document.getElementById("qtd-superior").innerHTML = quantidadeDeIngressoDaSuperior;
        document.getElementById("qtd-pista").innerHTML = quantidadeDeIngressoDaPista;
    }
}