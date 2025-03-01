function jogar() {
    const numero = Math.floor(Math.random() * 20) + 1;
    let tentativa;

    while (tentativa !== numero) {
        tentativa = parseInt(prompt('Adivinhe o número entre 1 e 20:'));

        if (tentativa < numero) {
            console.log('O número é maior. Tente novamente.');
        } else if (tentativa > numero) {
            console.log('O número é menor. Tente novamente.');
        }
    }

    console.log('Você acertou, Parabéns!');
}

jogar();
