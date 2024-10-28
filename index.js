
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors'); // Importe o middleware CORS

app.use(cors());
app.use(express.json());

const livros = [
    {
        titulo: 'Código Limpo',
        preco: 50,
        qtdPagina:300,
        status: true
    },

    {
        titulo: 'Use a Cabeça!',
        preco:80,
        qtdPagina: 500,
        status: true
    },

    {
        titulo: 'Domain Drive Design',
        preco: 60,
        qtdPagina: 200,
        status: false
    }
]


app.get('/livros', (req, res) => {
    res.json(livros);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});