const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

//Array em memória para armazenar os feedbacks
let feedbacks = [];

//Página inicial com formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Rota post
app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;

    if (nome && comentario) {
        feedbacks.push({ id: Date.now(), nome, comentario });
    }
    res.redirect('/feedbacks/lista');
});

//Página de listagem
app.get('/feedbacks/lista', (req, res) => {
    let html = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Lista de Feedbacks</title>
        </head>
        <body>
            <h1>Lista de Feedbacks</h1>
            <ul>
    `;

    feedbacks.forEach(feedback => {
        html += `
            <li>
                <strong>${feedback.nome}</strong>: ${feedback.comentario}
                <form action="/feedbacks/remover" method="POST" style="display:inline;">
                    <input type="hidden" name="id" value="${feedback.id}">
                    <button type="submit">Remover</button>
                </form>
            </li>
        `;
    });

    html += `
            </ul>
            <a href="/">Voltar</a>
        </body>
        </html>
    `;

    res.send(html);
});

//Rota post
app.post('/feedbacks/remover', (req, res) => {
    const { id } = req.body;
    feedbacks = feedbacks.filter(f => f.id != id);
    res.redirect('/feedbacks/lista');
});

//iniciar porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta 3000`);
});
