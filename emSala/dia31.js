document.addEventListener("DOMContentLoaded", function () {
    const inputItem = document.getElementById("ItemAdd");
    const botaoAdicionar = document.getElementById("adicionar");
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    // Função para adicionar um item na tabela e no menu de seleção
    function adicionarItem() {
        let valor = inputItem.value.trim(); // Remove espaços extras

        // Adiciona item à tabela
        let novaLinha = tabela.insertRow();
        let celula = novaLinha.insertCell(0);
        celula.textContent = valor;
        celula.setAttribute("data-item", valor); // Armazena o nome do item para facilitar a busca

        // Adiciona item ao menu de seleção
        let novaOpcao = document.createElement("option");
        novaOpcao.value = valor;
        novaOpcao.textContent = valor;
        itemSelect.appendChild(novaOpcao);
    }
    const itemSelect = document.getElementById("itemSelect");
    // Função para encontrar a linha da tabela baseada no item selecionado
    function encontrarLinhaSelecionada() {
        let item = itemSelect.value;

        let linhas = tabela.getElementsByTagName("tr");
        for (let linha of linhas) {
            if (linha.cells[0].textContent === item) {
                return linha;
            }
        }
        return null;
    }

    botaoAdicionar.addEventListener("click", adicionarItem);

    const botaoMarcar = document.getElementById("marcar");
    // Função para marcar um item
    function marcarItem() {
        let linha = encontrarLinhaSelecionada();
        if (linha) {
            linha.classList.add("marcado");
        }
    }

    botaoMarcar.addEventListener("click", marcarItem);

    const botaoDesmarcar = document.getElementById("desmarcar");
    // Função para desmarcar um item
    function desmarcarItem() {
        let linha = encontrarLinhaSelecionada();
        if (linha) {
            if (linha.classList.contains("marcado")) {
                linha.classList.remove("marcado");
            }
        }
    }

    botaoDesmarcar.addEventListener("click", desmarcarItem);

    const botaoRemover = document.getElementById("remover");
    // Função para remover um item
    function removerItem() {
        let linha = encontrarLinhaSelecionada();
        if (linha) {
            linha.remove(); // Remove da tabela

            // Remove do menu de seleção
            for (let i = 0; i < itemSelect.options.length; i++) {
                if (itemSelect.options[i].value === linha.cells[0].textContent) {
                    itemSelect.remove(i);
                    break;
                }
            }
        }
    }

    botaoRemover.addEventListener("click", removerItem);
});
