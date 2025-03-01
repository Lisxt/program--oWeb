const asterisco = parseInt(prompt("Digite o número de linhas:"), 10);
piramide(asterisco);

function piramide(asterisco) {
    for (let i = 1; i <= asterisco; i++) {
        console.log('*'.repeat(i));
    }
}
