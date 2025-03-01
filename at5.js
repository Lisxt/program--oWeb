const numero = parseInt(prompt("Digite quantos termos:"), 10);

function soma(numero) {
    
    let termosStr = "";
    let termo = 0;
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        termo = termo * 10 + 1;
        soma += termo;
        termosStr += termo + (i < numero ? " + " : "");
    }
    
    console.log(termosStr);
    console.log("A soma é: " + soma);
}

soma(numero);
