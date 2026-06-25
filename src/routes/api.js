const express = require('express');
const app = express();

const BarController = require('./src/controllers/BarController');
const PromocaoController = require('./src/controllers/PromocaoController');

// 1. Configurações Iniciais Obligatórias (Ficam sempre no topo)
app.use(express.json()); // Permite o Express ler dados enviados em JSON
app.use(express.static('public')); // Libera a pasta public para acessar index.html e admin.html

// 2. --- ROTAS DO GERENTE (ABA ADM) ---
app.post('/api/bares', BarController.cadastrar);
app.post('/api/promocoes', PromocaoController.criar);

// 3. --- ROTAS DO CLIENTE (APLICATIVO) ---
app.get('/api/bares', BarController.listar);
app.get('/api/promocoes', PromocaoController.listarAtivas);
app.get('/api/promocoes/categoria/:categoria', PromocaoController.filtrarPorCategoria);

module.exports = app;